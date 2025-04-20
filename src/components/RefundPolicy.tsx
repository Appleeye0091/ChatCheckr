
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
            This is our refund policy.
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
