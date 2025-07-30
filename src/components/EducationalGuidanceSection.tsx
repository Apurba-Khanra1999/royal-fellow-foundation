
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, MapPin, TrendingUp } from "lucide-react";

const EducationalGuidanceSection = () => {
  const services = [
    {
      title: "College Search",
      description: "Find the perfect college or university that matches your academic goals and interests.",
      icon: GraduationCap
    },
    {
      title: "Course Information",
      description: "Detailed information about courses, curriculum, and academic programs available.",
      icon: BookOpen
    },
    {
      title: "Campus Facilities",
      description: "Explore campus amenities, infrastructure, and facilities offered by institutions.",
      icon: MapPin
    },
    {
      title: "Career Counseling",
      description: "Professional guidance to help you make informed decisions about your career path.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Educational Guidance</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the best educational institutions and get comprehensive guidance on courses, admissions, and career opportunities to shape your future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/education">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              Explore Education
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationalGuidanceSection;
