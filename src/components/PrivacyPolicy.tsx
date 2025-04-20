
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface PrivacyPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicy = ({ open, onOpenChange }: PrivacyPolicyProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Privacy Policy</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 text-sm">
          <p>
            At ChatCheckr, we respect your privacy and are committed to protecting any information you share with us. 
            This policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
          </p>
          
          <p>
            When you request an audit through our form, we may collect basic business information such as your name, 
            WhatsApp number, business model, email, and product details. This information helps us understand your 
            business better and deliver personalized insights.
          </p>
          
          <p>
            We do not share your information with any third parties. Your data stays confidential and is used only 
            for the purpose of generating your WhatsApp business audit report. Any personal identifiers such as your 
            email or WhatsApp number are securely stored and only accessible to our core audit team.
          </p>
          
          <p>
            For analytics and performance improvements, we may use cookies to collect non-identifiable browsing data. 
            You can choose to disable cookies in your browser settings.
          </p>
          
          <p>
            We respect your trust. If you have any privacy-related questions, feel free to contact us at 
            chatcheckr.help@gmail.com
          </p>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
