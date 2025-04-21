
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RefundRequestForm from "./RefundRequestForm";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundPolicy from "./RefundPolicy";
import TermsAndConditions from "./TermsAndConditions";
import { Facebook, Instagram, Twitter, Linkedin, Shield, RotateCcw, FileText, ChevronUp } from "lucide-react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [refundFormOpen, setRefundFormOpen] = useState(false);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [refundPolicyOpen, setRefundPolicyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    });
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-chatCheckr-darkPurple text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">ChatAuditr</h3>
            <p className="text-gray-300 mb-4">
              Helping businesses improve their customer chat experience through professional audits and actionable insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-chatCheckr-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-chatCheckr-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-chatCheckr-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-chatCheckr-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-chatCheckr-purple transition-colors">Home</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-chatCheckr-purple transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-chatCheckr-purple transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-chatCheckr-purple transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: chatcheckr.help@gmail.com</li>
              <li>WhatsApp: +91 9641070347</li>
              <li>Address: Near Jangipur college, Murshidabad, West Bengal, India</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setPrivacyPolicyOpen(true)}
                  className="text-gray-300 hover:text-chatCheckr-purple transition-colors flex items-center"
                >
                  <Shield size={16} className="mr-2" /> Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRefundPolicyOpen(true)}
                  className="text-gray-300 hover:text-chatCheckr-purple transition-colors flex items-center"
                >
                  <RotateCcw size={16} className="mr-2" /> Refund Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setTermsOpen(true)}
                  className="text-gray-300 hover:text-chatCheckr-purple transition-colors flex items-center"
                >
                  <FileText size={16} className="mr-2" /> Terms & Conditions
                </button>
              </li>
              <li className="pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setRefundFormOpen(true)}
                  className="text-white border-white hover:bg-chatCheckr-purple hover:text-white hover:border-transparent transition-colors w-full opacity-100"
                >
                  Request for Refund
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ChatAuditr. All rights reserved.</p>
        </div>
      </div>

      <RefundRequestForm open={refundFormOpen} onOpenChange={setRefundFormOpen} />
      <PrivacyPolicy open={privacyPolicyOpen} onOpenChange={setPrivacyPolicyOpen} />
      <RefundPolicy open={refundPolicyOpen} onOpenChange={setRefundPolicyOpen} />
      <TermsAndConditions open={termsOpen} onOpenChange={setTermsOpen} />

      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-chatCheckr-purple p-3 rounded-full shadow-lg hover:bg-chatCheckr-secondaryPurple transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp size={24} className="text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
