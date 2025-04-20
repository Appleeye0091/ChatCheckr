
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

type PaymentFormData = {
  amount: string;
};

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<PaymentFormData>({
    defaultValues: {
      amount: "199",
    },
  });

  const onSubmit = async (data: PaymentFormData) => {
    try {
      setIsLoading(true);
      
      const { error: paymentError } = await supabase
        .from("business_audits")
        .update({ 
          payment_amount: parseFloat(data.amount),
          payment_status: "completed" 
        })
        .eq("payment_status", "pending")
        .order("created_at", { ascending: false })
        .limit(1);

      if (paymentError) throw paymentError;

      toast({
        title: "Payment Successful!",
        description: "Thank you for your payment. We'll start your audit soon.",
      });

      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Complete Your Payment</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (₹)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} readOnly />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Processing..." : "Pay Now"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Payment;
