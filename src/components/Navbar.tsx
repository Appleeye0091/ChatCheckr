
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, List } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-chatCheckr-darkPurple mr-6">
            Chat<span className="text-chatCheckr-purple">Auditr</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-chatCheckr-purple transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          
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
    </nav>
  );
};

export default Navbar;
