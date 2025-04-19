
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

type BusinessFormData = {
  businessName: string;
  whatsappNumber: string;
  businessModel: string;
};

const BusinessForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<BusinessFormData>();

  const onSubmit = async (data: BusinessFormData) => {
    try {
      setIsLoading(true);
      
      const { error: businessError } = await supabase
        .from("businesses")
        .insert({
          business_name: data.businessName,
          whatsapp_number: data.whatsappNumber,
          business_model: data.businessModel,
        });

      if (businessError) throw businessError;

      toast({
        title: "Success!",
        description: "Business details saved successfully.",
      });

      navigate("/payment");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save business details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Tell us about your business</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your business name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsappNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your WhatsApp number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessModel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Model</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Briefly describe your business model"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Saving..." : "Continue to Payment"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BusinessForm;
