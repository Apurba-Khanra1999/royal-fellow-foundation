
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      content: "RoyalFellowFoundation helped me find the perfect college and connected me with amazing social workers who guided me through my academic journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b386?w=80&h=80&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Parent",
      content: "The social workers I found through this platform were professional, caring, and exactly what my family needed during a difficult time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Professional",
      content: "As a social worker, this platform has helped me connect with clients who truly need my services. It's made my practice more meaningful.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
    }
  ];

  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Users Say</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who have found success through our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
