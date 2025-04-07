
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  MessageCircle, 
  ThumbsUp, 
  Award, 
  CheckCircle
} from "lucide-react";

const metrics = [
  { 
    icon: <Clock className="h-5 w-5" />, 
    title: "Response Time", 
    score: "8/10", 
    detail: "Avg. 2.5 mins" 
  },
  { 
    icon: <MessageCircle className="h-5 w-5" />, 
    title: "Communication Clarity", 
    score: "7/10", 
    detail: "Good, can improve" 
  },
  { 
    icon: <ThumbsUp className="h-5 w-5" />, 
    title: "Customer Satisfaction", 
    score: "9/10", 
    detail: "Very positive" 
  }
];

const SampleReport = () => {
  return (
    <section id="sample-report" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Sample Audit Report</h2>
        <p className="section-subtitle">
          See what insights you'll gain from our detailed chat analysis
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Report Header */}
            <div className="bg-chatCheckr-darkPurple p-6 flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl font-semibold">Chat Performance Report</h3>
                <p className="text-gray-300 text-sm">Sample Business • April 2025</p>
              </div>
              <Badge className="bg-chatCheckr-purple text-white px-4 py-1 flex items-center gap-1">
                <Award className="h-4 w-4 mr-1" /> 
                Overall Score: 8/10
              </Badge>
            </div>
            
            {/* Report Content */}
            <div className="p-6">
              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-chatCheckr-softBlue/20 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <div className="bg-white p-2 rounded-full mr-3">
                          {metric.icon}
                        </div>
                        <span className="font-medium">{metric.title}</span>
                      </div>
                      <span className="font-bold text-chatCheckr-darkPurple">{metric.score}</span>
                    </div>
                    <p className="text-sm text-gray-600">{metric.detail}</p>
                  </div>
                ))}
              </div>
              
              {/* Key Findings */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Key Findings</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Strong opening greetings and personalization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Consistent brand voice throughout conversations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-chatCheckr-purple mr-2 mt-0.5" />
                    <span>Opportunity to improve technical explanation clarity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-chatCheckr-purple mr-2 mt-0.5" />
                    <span>Consider adding more proactive follow-up questions</span>
                  </li>
                </ul>
              </div>
              
              {/* Preview Footer */}
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 mb-4">This is just a preview. Your report will include detailed analysis and specific recommendations.</p>
                <Button className="bg-chatCheckr-purple hover:bg-chatCheckr-secondaryPurple">
                  Get Your Full Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReport;
