
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BookOpen, FileText, Users, Lightbulb, Calendar, User } from "lucide-react";

const KnowledgeHubSection = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Mental Health in Children",
      excerpt: "A comprehensive guide to recognizing and addressing mental health issues in children and adolescents.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      category: "Child Psychology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Crisis Intervention Techniques",
      excerpt: "Essential strategies for effective crisis intervention and emergency response in social work practice.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "Crisis Management",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Building Stronger Communities",
      excerpt: "How social workers can foster community engagement and create lasting positive change.",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-10",
      category: "Community Work",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Family Therapy Best Practices",
      excerpt: "Evidence-based approaches to family therapy and relationship counseling.",
      author: "David Thompson",
      date: "2024-01-08",
      category: "Family Therapy",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad44f24ca7?w=400&h=300&fit=crop"
    }
  ];

  const resources = [
    {
      title: "Expert Articles",
      description: "In-depth articles written by professionals covering various topics in social work and education.",
      icon: BookOpen
    },
    {
      title: "Research Papers",
      description: "Access to latest research and academic papers in social work and educational fields.",
      icon: FileText
    },
    {
      title: "Community Forum",
      description: "Connect with peers, share experiences, and learn from the professional community.",
      icon: Users
    },
    {
      title: "Best Practices",
      description: "Learn from proven methodologies and best practices in social work and education.",
      icon: Lightbulb
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Knowledge Hub</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Access a comprehensive collection of resources, articles, and expert insights to enhance your knowledge in social work and educational fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                  <resource.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{resource.title}</h3>
                <p className="text-muted-foreground text-sm">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Latest Articles</h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {articles.map((article) => (
                <CarouselItem key={article.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{article.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <Button size="sm" className="w-full">Read More</Button>
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
          <Link to="/articles">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              Explore Knowledge Hub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHubSection;
