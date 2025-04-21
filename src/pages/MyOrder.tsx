
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Info } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const MyOrder = () => {
  const [chatcheckrId, setChatcheckrId] = useState("");
  const [orderData, setOrderData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const checkOrderStatus = async () => {
    if (!chatcheckrId.trim()) {
      toast({
        title: "Error",
        description: "Please enter your ChatAuditr ID",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setNotFound(false);
    
    try {
      const { data, error } = await supabase
        .from("business_audits")
        .select("*")
        .eq("chatcheckr_id", chatcheckrId.trim())
        .single();

      if (error) {
        console.error("Database error:", error);
        setNotFound(true);
        setOrderData(null);
        return;
      }
      
      if (!data) {
        setNotFound(true);
        setOrderData(null);
        return;
      }
      
      setOrderData(data);
      setNotFound(false);
      
    } catch (error) {
      console.error("Error fetching order:", error);
      toast({
        title: "Error",
        description: "An error occurred while retrieving order information",
        variant: "destructive",
      });
      setNotFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getProgressStatus = () => {
    if (!orderData) return 0;
    
    switch (orderData.audit_status) {
      case 'completed': return 100;
      case 'in_progress': return 75;
      case 'started': return 50;
      case 'received': return 25;
      default: return 0;
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">My Order Status</h1>
        
        {!orderData ? (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Enter your ChatAuditr ID</h2>
            <p className="text-gray-600 mb-6">
              Please enter the ChatAuditr ID you received after placing your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                value={chatcheckrId}
                onChange={(e) => setChatcheckrId(e.target.value)}
                placeholder="e.g. ABCD1234"
                className="flex-1"
              />
              <Button 
                onClick={checkOrderStatus} 
                disabled={isLoading}
                className="bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple"
              >
                {isLoading ? <LoaderCircle className="animate-spin mr-2" size={16} /> : null}
                Check Status
              </Button>
            </div>
            
            {notFound && !isLoading && (
              <Alert variant="destructive" className="mt-4">
                <AlertTitle>Order Not Found</AlertTitle>
                <AlertDescription>
                  We couldn't find an order with this ID. Please check the ID and try again, or contact our support at +91 9641070347 for assistance.
                </AlertDescription>
              </Alert>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Order Status</h2>
              <span className="text-sm text-gray-500">ID: {orderData.chatcheckr_id}</span>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Audit Progress</span>
                <span className="text-sm font-medium">{getProgressStatus()}%</span>
              </div>
              <Progress value={getProgressStatus()} className="h-2" />
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Business Name</span>
                <span className="font-medium">{orderData.business_name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">WhatsApp Number</span>
                <span className="font-medium">{orderData.whatsapp_number}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Payment Status</span>
                <span className="font-medium text-green-600">Completed</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Amount Paid</span>
                <span className="font-medium">₹{orderData.payment_amount}</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-700 flex items-start gap-3">
              <Info size={18} className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">What happens next?</p>
                <p>Our experts are analyzing your WhatsApp business conversations. 
                   You'll receive your comprehensive audit report within 48 hours via WhatsApp.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
