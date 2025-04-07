
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

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
    borderColor: "border-chatCheckr-purple"
  }
];

const Pricing = () => {
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
                  <div className="absolute top-0 right-0 bg-chatCheckr-purple text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
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
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple" 
                        : ""
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
