
import React from 'react';
import { Shield, Users, Calendar, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { label: "Verified Professionals", value: "15,000+", icon: Shield },
    { label: "Happy Clients", value: "50,000+", icon: Users },
    { label: "Successful Connections", value: "1M+", icon: Calendar },
    { label: "Years of Excellence", value: "10+", icon: Award }
  ];

  return (
    <section className="py-12 px-4 bg-primary/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary rounded-2xl mb-3 md:mb-4">
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
