
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Heart, Shield, MessageCircle, Star, MapPin, Clock } from "lucide-react";

const SocialWorkerSection = () => {
  const professionals = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Family Therapy",
      rating: 4.9,
      experience: "8 years",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      description: "Specialized in family counseling and relationship therapy with a focus on communication."
    },
    {
      id: 2,
      name: "Michael Chen",
      specialty: "Crisis Intervention",
      rating: 4.8,
      experience: "12 years",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      description: "Expert in emergency response and crisis management for individuals and families."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Child Psychology",
      rating: 5.0,
      experience: "10 years",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=400&h=400&fit=crop",
      description: "Dedicated to helping children and adolescents overcome emotional challenges."
    },
    {
      id: 4,
      name: "David Thompson",
      specialty: "Community Outreach",
      rating: 4.7,
      experience: "6 years",
      location: "Houston, TX",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      description: "Focused on connecting individuals with community resources and support systems."
    }
  ];

  const services = [
    {
      title: "Individual Counseling",
      description: "One-on-one sessions with certified social workers for personal support and guidance.",
      icon: Users
    },
    {
      title: "Family Therapy",
      description: "Professional family counseling to strengthen relationships and resolve conflicts.",
      icon: Heart
    },
    {
      title: "Crisis Intervention",
      description: "24/7 emergency support for individuals and families in crisis situations.",
      icon: Shield
    },
    {
      title: "Community Resources",
      description: "Connect with local resources and support networks in your community.",
      icon: MessageCircle
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Social Worker Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with qualified social workers who provide professional counseling, therapy, and support services to help you navigate life's challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Featured Professionals</h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {professionals.map((professional) => (
                <CarouselItem key={professional.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={professional.image}
                          alt={professional.name}
                          className="w-20 h-20 rounded-full object-cover mb-4"
                        />
                        <h4 className="text-lg font-bold text-foreground mb-2">{professional.name}</h4>
                        <p className="text-primary font-medium mb-2">{professional.specialty}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-muted-foreground">{professional.rating}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{professional.experience}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{professional.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{professional.description}</p>
                        <Button size="sm" className="w-full">View Profile</Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center">
          <Link to="/professionals">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              Find Social Workers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialWorkerSection;
