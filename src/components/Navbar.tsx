import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, List, GavelIcon, ShieldCheck, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RefundPolicy from "@/components/RefundPolicy";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TermsAndConditions from "@/components/TermsAndConditions";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showRefundPolicy, setShowRefundPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGetStarted = () => {
    navigate("/business-form");
  };

  const handleMyOrder = () => {
    navigate("/my-order");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-4">
            <svg
              className="w-8 h-8 text-chatCheckr-purple"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.5 21L6.39139 20.3385C6.77579 20.2356 7.18304 20.2947 7.54009 20.4722C8.88097 21.1391 10.3929 21.5146 12 21.5146"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H8.01M12 12H12.01M16 12H16.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-2xl font-bold text-chatCheckr-darkPurple">
              Chat<span className="text-chatCheckr-purple">Auditr</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-chatCheckr-purple transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <GavelIcon size={16} />
                  Policies
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => setShowPrivacyPolicy(true)}>
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    <span>Privacy Policy</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setShowRefundPolicy(true)}>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Refund Policy</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setShowTerms(true)}>
                    <GavelIcon className="mr-2 h-4 w-4" />
                    <span>Terms & Conditions</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="outline"
              onClick={handleMyOrder}
              className="flex items-center gap-2"
            >
              <List size={16} />
              My Order
            </Button>
            
            <Button 
              className="bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-chatCheckr-purple py-2 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="py-2 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    setShowPrivacyPolicy(true);
                    setIsOpen(false);
                  }}
                >
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Privacy Policy
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    setShowRefundPolicy(true);
                    setIsOpen(false);
                  }}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Refund Policy
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    setShowTerms(true);
                    setIsOpen(false);
                  }}
                >
                  <GavelIcon className="mr-2 h-4 w-4" />
                  Terms & Conditions
                </Button>
              </div>
              
              <Button 
                variant="outline"
                onClick={() => {
                  handleMyOrder();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full justify-center"
              >
                <List size={16} />
                My Order
              </Button>
              
              <Button 
                className="bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple w-full"
                onClick={() => {
                  handleGetStarted();
                  setIsOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}

        {/* Policy Modals */}
        <RefundPolicy
          open={showRefundPolicy}
          onOpenChange={setShowRefundPolicy}
        />
        <PrivacyPolicy
          open={showPrivacyPolicy}
          onOpenChange={setShowPrivacyPolicy}
        />
        <TermsAndConditions
          open={showTerms}
          onOpenChange={setShowTerms}
        />
      </div>
    </nav>
  );
};

export default Navbar;
