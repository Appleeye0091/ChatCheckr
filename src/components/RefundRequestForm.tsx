
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  whatsappNumber: z.string().min(1, "WhatsApp number is required"),
  chatcheckrId: z.string().min(1, "ChatCheckr ID is required"),
  transactionId: z.string().min(1, "Transaction ID is required"),
  reason: z.string().min(10, "Please provide a brief reason for your refund request"),
});

type RefundFormData = z.infer<typeof formSchema>;

interface RefundRequestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RefundRequestForm = ({ open, onOpenChange }: RefundRequestFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<RefundFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      whatsappNumber: "",
      chatcheckrId: "",
      transactionId: "",
      reason: "",
    },
  });

  const onSubmit = async (data: RefundFormData) => {
    try {
      setIsSubmitting(true);
      
      // Check if the order exists
      const { data: orderData, error: orderError } = await supabase
        .from("business_audits")
        .select("*")
        .eq("chatcheckr_id", data.chatcheckrId)
        .eq("whatsapp_number", data.whatsappNumber)
        .single();

      if (orderError || !orderData) {
        toast({
          title: "Order not found",
          description: "We couldn't verify your order details. Please check the information and try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Insert the refund request
      const { error: refundError } = await supabase
        .from("refund_requests")
        .insert({
          whatsapp_number: data.whatsappNumber,
          chatcheckr_id: data.chatcheckrId,
          transaction_id: data.transactionId,
          reason: data.reason,
        });

      if (refundError) throw refundError;

      toast({
        title: "Refund request submitted",
        description: "We've received your refund request and will process it within 2-3 business days.",
      });
      
      // Reset form and close dialog
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your refund request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Request a Refund</DialogTitle>
          <DialogDescription>
            Please fill out this form to request a refund for your audit service.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="whatsappNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business WhatsApp Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your WhatsApp number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="chatcheckrId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ChatCheckr ID</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. ABCD1234" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="transactionId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your transaction ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for Refund</FormLabel>
                  <FormControl>
                    <Input placeholder="Briefly explain why you're requesting a refund" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple flex items-center gap-2"
            >
              {isSubmitting ? "Submitting..." : "Submit Refund Request"}
              {!isSubmitting && <Mail size={16} />}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RefundRequestForm;
