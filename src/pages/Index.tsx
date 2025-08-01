
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import StatsSection from "@/components/StatsSection";
import SocialWorkerSection from "@/components/SocialWorkerSection";
import EducationalGuidanceSection from "@/components/EducationalGuidanceSection";
import KnowledgeHubSection from "@/components/KnowledgeHubSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Clock, Users, CheckCircle } from "lucide-react";

const Index = () => {
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All our social workers and educational counselors are thoroughly vetted and certified."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance and support whenever you need professional guidance."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a supportive community of professionals and individuals seeking growth."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Thousands of successful connections and positive outcomes speak for themselves."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner with Slider */}
      <HeroBanner />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Social Worker Services Section */}
      <SocialWorkerSection />
      
      {/* Educational Guidance Section */}
      <EducationalGuidanceSection />
      
      {/* Knowledge Hub Section */}
      <KnowledgeHubSection />
      
      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose RoyalFellowFoundation?</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted platform for professional social work services and educational guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have found the professional support they need through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/professionals">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
                Find Social Workers
              </Button>
            </Link>
            <Link to="/education">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white text-black hover:bg-white hover:text-primary">
                Explore Education
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
