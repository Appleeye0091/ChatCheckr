
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactCTA = () => {
  return (
    <section id="contact" className="section-padding bg-chatCheckr-softBlue/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to improve your customer communication?</h2>
            <p className="text-gray-600 mb-8">
              Get started with ChatCheckr today and discover how you can enhance your customer experience through better chat interactions.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Have questions?</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Input type="text" placeholder="Your Name" className="w-full" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email Address" className="w-full" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Question" className="w-full" rows={4} />
                  </div>
                </div>
                <Button className="w-full bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6">Why choose ChatCheckr?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-chatCheckr-softBlue/50 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-chatCheckr-darkPurple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Expert analysis from customer communication specialists</span>
              </li>
              <li className="flex items-start">
                <div className="bg-chatCheckr-softBlue/50 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-chatCheckr-darkPurple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Actionable insights you can implement immediately</span>
              </li>
              <li className="flex items-start">
                <div className="bg-chatCheckr-softBlue/50 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-chatCheckr-darkPurple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Affordable pricing for businesses of all sizes</span>
              </li>
              <li className="flex items-start">
                <div className="bg-chatCheckr-softBlue/50 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-chatCheckr-darkPurple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Quick turnaround time (reports delivered within 48 hours)</span>
              </li>
            </ul>
            <div className="mt-8">
              <Button className="w-full bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple">
                Get Your Audit Now - ₹199
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4">
                No hidden fees. Upgrade to Premium anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
