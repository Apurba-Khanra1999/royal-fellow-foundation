
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Target, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Social Workers',
      description: 'Connect with certified and experienced social workers who are dedicated to helping individuals and communities.'
    },
    {
      icon: GraduationCap,
      title: 'Educational Resources',
      description: 'Access comprehensive information about colleges, universities, and educational institutions.'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Get personalized solutions tailored to your specific needs and circumstances.'
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Join a supportive community dedicated to social welfare and educational advancement.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ProfConnect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between professional social work services and educational opportunities 
            to create stronger, more informed communities.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              At ProfConnect, we believe that access to quality social work services and educational 
              information should be available to everyone. Our platform connects individuals with 
              certified social workers and provides comprehensive educational resources to empower 
              communities and foster personal growth.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest ethical standards in all our interactions and services.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  We strive to make professional services and educational resources accessible to all.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We are committed to providing exceptional service and continuously improving our platform.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Story Section */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                ProfConnect was founded with a simple yet powerful vision: to create a platform that 
                democratizes access to professional social work services and educational information. 
                Recognizing the barriers that often prevent individuals from accessing the help they need, 
                we set out to build a solution that would connect people with qualified professionals 
                and comprehensive resources.
              </p>
              <p className="mb-4">
                Our team consists of social work professionals, educators, and technology experts who 
                share a common commitment to social justice and community empowerment. Together, we've 
                created a platform that not only facilitates connections but also provides valuable 
                educational content and resources.
              </p>
              <p>
                Today, ProfConnect serves thousands of users, helping them find the professional 
                support they need and the educational opportunities that can transform their lives. 
                We continue to grow and evolve, always with our core mission at heart: making 
                professional services and education accessible to all.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
