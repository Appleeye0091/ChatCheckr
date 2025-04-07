
import { MessageSquare, FileCheck, LineChart } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="h-10 w-10 text-chatCheckr-purple" />,
    title: "Share Your Chat",
    description:
      "Provide us with a sample of your customer chat conversations from WhatsApp (minimum 10 interactions)."
  },
  {
    icon: <FileCheck className="h-10 w-10 text-chatCheckr-purple" />,
    title: "Expert Review",
    description:
      "Our team of communication experts will analyze your chats for response time, tone, clarity, and customer satisfaction."
  },
  {
    icon: <LineChart className="h-10 w-10 text-chatCheckr-purple" />,
    title: "Get Detailed Report",
    description:
      "Receive a comprehensive audit report with actionable insights and specific improvement recommendations."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-chatCheckr-softBlue/30">
      <div className="container mx-auto">
        <h2 className="section-title">How ChatCheckr Works</h2>
        <p className="section-subtitle">
          Our simple 3-step process to help you improve your customer chat experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform hover:translate-y-[-5px]"
            >
              <div className="bg-chatCheckr-softBlue/50 p-4 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className={`hidden md:flex mt-6 ${index === steps.length - 1 ? 'invisible' : ''}`}>
                <div className="w-12 h-1 bg-chatCheckr-purple rounded-full"></div>
                <div className="w-10 h-1 bg-chatCheckr-purple/30 rounded-full ml-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
