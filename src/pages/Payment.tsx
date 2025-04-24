import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

type PaymentFormData = {
  utr_number: string;
};

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<PaymentFormData>({
    defaultValues: {
      utr_number: "",
    },
  });

  const generateChatcheckrId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const onSubmit = async (data: PaymentFormData) => {
    try {
      setIsLoading(true);
      const chatcheckrId = generateChatcheckrId();

      // Get the latest pending record first
      const { data: latestRow, error: fetchError } = await supabase
        .from("business_audits")
        .select("id")
        .eq("payment_status", "pending")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (fetchError || !latestRow) throw fetchError;

      const { error: updateError } = await supabase
        .from("business_audits")
        .update({
          utr_number: data.utr_number,
          payment_status: "verification_pending",
          chatcheckr_id: chatcheckrId,
        })
        .eq("id", latestRow.id);

      if (updateError) throw updateError;

      toast({
        title: "Payment details submitted!",
        description: "We'll verify your payment and start your audit soon.",
      });

      navigate("/confirmation", { state: { chatcheckrId } });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process payment details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Complete Your Payment</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src="/qr-code.jpg"
              alt="UPI QR Code"
              className="max-w-[300px] rounded-lg shadow-md mb-4"
            />
            <p className="text-lg font-semibold">Scan QR code to pay ₹199</p>
          </div>

          <Alert className="mb-6 bg-blue-50 border-blue-200">
            <InfoIcon className="h-5 w-5 text-blue-500" />
            <AlertDescription className="text-blue-700">
              <p className="font-semibold mb-2">Why do we need the UTR number?</p>
              <p>
                The UTR (Unique Transaction Reference) number helps us match
                your payment with your order. It's completely safe to share as
                it doesn't contain any sensitive information. You can find it
                in your payment confirmation message or bank statement.
              </p>
            </AlertDescription>
          </Alert>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="utr_number"
                rules={{ required: "UTR number is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>UTR Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your UTR number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing..." : "Submit Payment Details"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
