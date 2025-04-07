
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ChatCheckr helped us identify critical issues in our customer support that we were completely unaware of. Our response quality improved by 40% after implementing their suggestions.",
    author: "Priya Sharma",
    role: "Customer Support Manager",
    company: "TechSprint Solutions"
  },
  {
    quote: "The detailed audit report provided actionable insights that were easy to implement. Our customer satisfaction scores have increased significantly since we started using ChatCheckr.",
    author: "Raj Malhotra",
    role: "Business Owner",
    company: "Malhotra Electronics"
  },
  {
    quote: "As a small business owner, I wasn't sure if I was handling WhatsApp inquiries correctly. ChatCheckr's affordable audit gave me the confidence and skills to communicate professionally.",
    author: "Ananya Desai",
    role: "Founder",
    company: "Crafty Creations"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-chatCheckr-darkPurple text-white">
      <div className="container mx-auto">
        <h2 className="section-title text-white">What Our Clients Say</h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="py-12 px-6">
            <div className="relative">
              <Quote className="text-chatCheckr-purple/30 absolute top-0 left-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2" />
              
              <div className="min-h-[200px] flex flex-col justify-center">
                <p className="text-lg md:text-xl text-center mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="text-center">
                  <p className="font-semibold text-chatCheckr-purple">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-chatCheckr-purple" : "bg-white/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white"
                onClick={prevTestimonial}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white"
                onClick={nextTestimonial}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
