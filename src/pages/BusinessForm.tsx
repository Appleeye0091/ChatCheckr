
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const businessModels = [
  "Online service provider",
  "Product seller",
  "Coaching business",
  "Online consultancy",
  "Ecommerce business",
  "Real estate agent",
  "Education business",
  "Event management",
  "Restaurant or food service",
  "Local store",
  "Fitness or wellness",
  "Digital marketing agency",
  "Others"
];

const productTypes = [
  "Clothing",
  "Electronics",
  "Digital services",
  "Subscription services",
  "Courses",
  "Books",
  "Art or Craft",
  "Beauty or Cosmetics",
  "Food or Beverages",
  "Furniture",
  "Tools or Equipment",
  "Stationery",
  "Others"
];

const formSchema = z.object({
  fullName: z.string().optional(),
  businessName: z.string().min(1, "Business name is required"),
  whatsappNumber: z.string().min(1, "WhatsApp number is required"),
  businessModel: z.string().min(1, "Business model is required"),
  businessModelOther: z.string().optional(),
  productType: z.string().optional(),
  productTypeOther: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
});

type BusinessFormData = z.infer<typeof formSchema>;

const BusinessForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<BusinessFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: BusinessFormData) => {
    try {
      setIsLoading(true);
      
      const { error: auditError } = await supabase
        .from("business_audits")
        .insert({
          full_name: data.fullName,
          business_name: data.businessName,
          whatsapp_number: data.whatsappNumber,
          business_model: data.businessModel,
          business_model_other: data.businessModel === "Others" ? data.businessModelOther : null,
          product_type: data.productType,
          product_type_other: data.productType === "Others" ? data.productTypeOther : null,
          email: data.email || null,
        });

      if (auditError) throw auditError;

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
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name (Required)</FormLabel>
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
                  <FormLabel>Business WhatsApp Number (Required)</FormLabel>
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
                  <FormLabel>Business Model (Required)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business model" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {businessModels.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch("businessModel") === "Others" && (
              <FormField
                control={form.control}
                name="businessModelOther"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please specify your business model</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your business model" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="productType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What Product Do You Sell? (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your product type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {productTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch("productType") === "Others" && (
              <FormField
                control={form.control}
                name="productTypeOther"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please specify your product type</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your product type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (Optional)</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
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
