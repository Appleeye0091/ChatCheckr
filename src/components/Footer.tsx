
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chatCheckr-darkPurple text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ChatCheckr</h3>
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
                <a href="#sample-report" className="text-gray-300 hover:text-chatCheckr-purple transition-colors">Sample Report</a>
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
              <li>Email: info@chatcheckr.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Business Park, Bengaluru, India</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for tips on improving customer communication.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ChatCheckr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
