
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

const Confirmation = () => {
  const [chatcheckrId, setChatcheckrId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Get the chatcheckrId from location state or generate a fallback
    if (location.state && location.state.chatcheckrId) {
      setChatcheckrId(location.state.chatcheckrId);
    } else {
      setChatcheckrId(generateChatcheckrId());
    }
  }, [location]);

  // Generate random 8 character ID with uppercase letters and numbers
  const generateChatcheckrId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check size={40} className="text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your audit request has been successfully placed.
          We'll start analyzing your WhatsApp business conversations soon.
        </p>
        
        <div className="bg-chatCheckr-softBlue/30 p-4 rounded-lg mb-8">
          <p className="text-gray-600 mb-2">Your ChatCheckr ID</p>
          <p className="text-2xl font-bold text-chatCheckr-purple tracking-wider">{chatcheckrId}</p>
          <p className="text-sm text-gray-500 mt-2">
            Please save this ID. It's required for checking your order status and requesting refunds.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <Button 
            onClick={() => navigate("/my-order")} 
            className="bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple"
          >
            Check Order Status
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => navigate("/")} 
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
