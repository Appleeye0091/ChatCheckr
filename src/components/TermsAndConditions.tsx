
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TermsAndConditionsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsAndConditions = ({ open, onOpenChange }: TermsAndConditionsProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Terms & Conditions</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 text-sm">
          <p>
            Welcome to ChatAuditr. By accessing our website or using our services, you agree to the following terms:
          </p>
          
          <p>
            Our service is designed to provide automated yet personalized audits of your WhatsApp Business chats. By submitting a form request, you grant us temporary access to analyze your customer interaction strategies. All reviews and audits are created with utmost care and based on expert conversational analysis frameworks.
          </p>
          
          <p>
            The audit is meant to guide and improve your customer handling. However, ChatAuditr is not responsible for any business decisions or outcomes you may take based on the audit results.
          </p>
          
          <p>
            You agree that the provided WhatsApp number and business information are accurate and owned by you or your organization. We reserve the right to reject any audit request that appears misleading or abusive.
          </p>
          
          <p>
            Our mysterious customer workflow means that one of our team members may act as a potential lead through WhatsApp. This is done discreetly, and we will never disclose that you were audited or that we were the customer. We uphold full confidentiality.
          </p>
          
          <p>
            ChatAuditr retains the right to modify these terms without prior notice. Continued use of our platform implies acceptance of the latest terms.
          </p>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditions;
