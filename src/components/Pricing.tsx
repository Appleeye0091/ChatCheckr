
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const plans = [
  {
    name: "Basic Audit",
    price: "₹199",
    description: "Perfect for small businesses just starting out with WhatsApp communication",
    features: [
      "Analysis of 10-20 chat conversations",
      "Response time assessment",
      "Communication clarity score",
      "Basic improvement recommendations",
      "3-page detailed report"
    ],
    buttonText: "Get Started",
    popular: false,
    borderColor: "border-gray-200"
  },
  {
    name: "Premium Audit",
    price: "₹499",
    description: "Comprehensive analysis for businesses serious about customer communication",
    features: [
      "Analysis of up to 50 chat conversations",
      "In-depth response quality evaluation",
      "Customer satisfaction assessment",
      "Brand voice consistency check",
      "Personalized improvement strategy",
      "10-page detailed report with examples",
      "30-minute consultation call"
    ],
    buttonText: "Get Premium",
    popular: true,
    borderColor: "border-chatAuditr-purple"
  }
];

const Pricing = () => {
  const navigate = useNavigate();
  const [showPremiumDialog, setShowPremiumDialog] = useState(false);

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the audit package that fits your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {plans.map((plan, index) => (
            <div key={index} className="flex">
              <Card className={`w-full relative ${plan.popular ? `border-2 ${plan.borderColor}` : ''} h-full flex flex-col`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-chatAuditr-purple text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-4 flex items-center flex-wrap">
                    <span className="text-4xl font-bold whitespace-nowrap">{plan.price}</span>
                    <span className="text-gray-500 ml-2">one-time</span>
                  </div>
                  <CardDescription className="mt-4">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  {plan.name === "Premium Audit" ? (
                    <Button
                      className="w-full bg-chatAuditr-purple hover:bg-chatAuditr-secondaryPurple text-white"
                      onClick={() => setShowPremiumDialog(true)}
                    >
                      {plan.buttonText}
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-chatAuditr-purple hover:bg-chatAuditr-secondaryPurple text-white"
                      onClick={() => navigate("/business-form")}
                    >
                      {plan.buttonText}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto p-6 rounded-md bg-gray-50 border border-gray-300 shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Learn More About ChatAuditr</h3>
          <p className="mb-3 text-gray-700 leading-relaxed">
            At ChatAuditr, we are dedicated to improving your business communication through expert WhatsApp chat audits. Our mission is to empower small and medium businesses to understand and enhance their customer interactions, helping build trust and boost conversions.
          </p>
          <p className="mb-3 text-gray-700 leading-relaxed">
            By analyzing your chat conversations, ChatAuditr identifies gaps and opportunities in response time, clarity, and brand voice consistency. Our actionable insights enable you to strengthen customer satisfaction and loyalty.
          </p>
          <p className="mb-3 text-gray-700 leading-relaxed font-semibold text-chatAuditr-purple">
            Currently, we are offering the Basic Audit service exclusively, providing accessible and effective improvements for your business communication.
          </p>
        </div>

        {/* Premium Unavailable Dialog */}
        <Dialog open={showPremiumDialog} onOpenChange={setShowPremiumDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Premium Audit Currently Unavailable
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-2">
              <p>
                Thank you for your interest! At the moment, we are only serving <b>Basic Audit</b> requests. The Premium Audit package is temporarily unavailable as we are optimizing our services for you.
              </p>
              <p>
                Please start with the Basic Audit, and we’ll notify you when Premium options are live!
              </p>
              <Button
                className="mt-2 w-full bg-chatAuditr-purple hover:bg-chatAuditr-secondaryPurple text-white"
                onClick={() => {
                  setShowPremiumDialog(false);
                  navigate("/business-form");
                }}
              >
                Go to Basic Audit
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Pricing;

