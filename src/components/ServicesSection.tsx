
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, BookOpen, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Social Worker Services",
      description: "Connect with qualified social workers for professional guidance, counseling, and support services.",
      icon: Users,
      link: "/professionals",
      features: ["Individual Counseling", "Family Therapy", "Crisis Intervention", "Community Resources"]
    },
    {
      title: "Educational Guidance",
      description: "Find the right educational institution and get guidance on courses, admissions, and career paths.",
      icon: GraduationCap,
      link: "/education",
      features: ["College Search", "Admission Guidance", "Course Information", "Career Counseling"]
    },
    {
      title: "Knowledge Hub",
      description: "Access articles, resources, and expert insights on various topics related to social work and education.",
      icon: BookOpen,
      link: "/articles",
      features: ["Expert Articles", "Research Papers", "Best Practices", "Case Studies"]
    },
    {
      title: "Support Network",
      description: "Join a community of professionals and individuals seeking support and professional guidance.",
      icon: MessageCircle,
      link: "/contact",
      features: ["Community Forum", "Peer Support", "Professional Network", "24/7 Support"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support and guidance for your personal and professional development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
