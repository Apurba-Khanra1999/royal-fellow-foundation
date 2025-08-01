
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroBanner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const slides = [
    {
      title: "Find Trusted Social Workers",
      description: "Connect with verified social workers who can provide professional guidance and support for your needs.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=400&fit=crop",
      cta: "Find Social Workers"
    },
    {
      title: "Quality Education Resources",
      description: "Discover top colleges and institutions with comprehensive information about courses, admissions, and facilities.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop",
      cta: "Explore Education"
    },
    {
      title: "Professional Support Network",
      description: "Join a community of professionals and clients building meaningful connections and positive outcomes.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
      cta: "Join Network"
    }
  ];

  return (
    <section className="relative py-8 px-4 bg-primary/5">
      <div className="container mx-auto">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64 md:h-80 lg:h-96">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center">
                        <div className="container mx-auto px-4">
                          <div className="max-w-2xl text-white pl-16 pr-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                              {slide.title}
                            </h2>
                            <p className="text-lg md:text-xl mb-6 opacity-90">
                              {slide.description}
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                              {slide.cta}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroBanner;
