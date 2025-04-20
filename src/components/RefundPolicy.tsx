
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface RefundPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RefundPolicy = ({ open, onOpenChange }: RefundPolicyProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Refund Policy</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 text-sm">
          <p>
            We want you to feel confident and satisfied with our service.
          </p>
          
          <p>
            If, for any reason, you decide to cancel your audit request, we offer a full refund if requested via both website and WhatsApp( +91 9641070347) within 12 hours of placing the order. To request a refund, simply click on the "Request for Refund" at the bottom of the page and message us at our official WhatsApp number mentioned on the website.
          </p>
          
          <p>
            Refunds will be processed within 1-2 business days and credited to the original payment method. Please note, refund requests made after 12 hours may not be eligible, as the audit process begins shortly after your request is placed.
          </p>
          
          <p>
            If you face any issue during payment or need assistance, we're always available at chatcheckr.help@gmail.com
          </p>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RefundPolicy;
