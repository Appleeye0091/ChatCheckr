
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import SampleReport from "@/components/SampleReport";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the audit process work?",
      answer: "After you purchase an audit, you'll receive instructions to share your WhatsApp chat samples. Our experts will analyze them and prepare a comprehensive report within 48 hours that highlights strengths, areas for improvement, and specific recommendations."
    },
    {
      question: "What kind of chats should I submit for analysis?",
      answer: "We recommend submitting a mix of different customer interactions – inquiries, complaints, sales conversations, etc. This gives us a comprehensive view of your communication style across different scenarios."
    },
    {
      question: "How many chat samples do you need?",
      answer: "For the Basic Audit, we analyze 10-20 conversations. For the Premium Audit, we can analyze up to 50 conversations for a more in-depth assessment."
    },
    {
      question: "Is my chat data kept confidential?",
      answer: "Absolutely. We take data privacy seriously. Your chat data is processed confidentially and deleted after your report is delivered. We can also sign an NDA if required."
    },
    {
      question: "Can I upgrade from Basic to Premium later?",
      answer: "Yes, you can upgrade to the Premium Audit at any time. If you've already purchased the Basic Audit, we'll deduct that amount from the Premium price."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-gradient-to-br from-white via-chatCheckr-softBlue/30 to-chatCheckr-softBlue">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                How Good Is Your <br />
                <span className="text-chatCheckr-purple">Customer Chat?</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                Get a professional audit of your WhatsApp business conversations and discover how to improve your customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple text-lg">
                  Get Your Audit – ₹199
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Learn More
                </Button>
              </div>
              <div className="mt-12 hidden md:block">
                <a href="#how-it-works" className="inline-flex items-center text-chatCheckr-darkPurple hover:text-chatCheckr-purple transition-colors">
                  <span className="mr-2">Scroll to learn more</span>
                  <ArrowDown size={20} />
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-green-100 rounded-full p-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Improve Response Time</h3>
                      <p className="text-gray-600">Learn how to optimize your response time for better customer satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Enhance Communication</h3>
                      <p className="text-gray-600">Get tailored advice on improving clarity and effectiveness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Build Trust</h3>
                      <p className="text-gray-600">Create stronger customer relationships with professional communication</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-chatCheckr-purple text-white p-4 rounded-full shadow-lg hidden md:block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <HowItWorks />
      <SampleReport />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
