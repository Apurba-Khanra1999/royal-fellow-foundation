
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Star, 
  Shield, 
  Calendar, 
  MessageCircle,
  Scale,
  Stethoscope,
  Calculator,
  Wrench,
  Home,
  Briefcase,
  Users
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ProfessionalCard from "@/components/ProfessionalCard";
import Header from "@/components/Header";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const navigate = useNavigate();

  const categories = [
    { name: "Lawyers", icon: Scale, color: "bg-blue-100 text-blue-700", count: "2,847" },
    { name: "Doctors", icon: Stethoscope, color: "bg-green-100 text-green-700", count: "3,421" },
    { name: "CAs", icon: Calculator, color: "bg-purple-100 text-purple-700", count: "1,892" },
    { name: "Engineers", icon: Wrench, color: "bg-orange-100 text-orange-700", count: "4,123" },
    { name: "Architects", icon: Home, color: "bg-teal-100 text-teal-700", count: "1,567" },
    { name: "Consultants", icon: Briefcase, color: "bg-indigo-100 text-indigo-700", count: "2,934" }
  ];

  const featuredProfessionals = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      profession: "Cardiologist",
      location: "New York, NY",
      rating: 4.9,
      reviews: 127,
      experience: 12,
      fee: 200,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      verified: true,
      nextAvailable: "Today"
    },
    {
      id: 2,
      name: "John Miller",
      profession: "Corporate Lawyer",
      location: "San Francisco, CA",
      rating: 4.8,
      reviews: 89,
      experience: 8,
      fee: 350,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      verified: true,
      nextAvailable: "Tomorrow"
    },
    {
      id: 3,
      name: "Emily Chen",
      profession: "Chartered Accountant",
      location: "Chicago, IL",
      rating: 4.7,
      reviews: 156,
      experience: 6,
      fee: 150,
      image: "https://images.unsplash.com/photo-1659353219673-9ea4cc2bbffb?w=400&h=400&fit=crop",
      verified: true,
      nextAvailable: "Today"
    }
  ];

  const stats = [
    { label: "Verified Experts", value: "15,000+", icon: Shield },
    { label: "Happy Clients", value: "50,000+", icon: Users },
    { label: "Appointments Booked", value: "1M+", icon: Calendar }
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedLocation) params.set('location', selectedLocation);
    navigate(`/professionals?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find & Book
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Trusted</span>
            <br />Professionals
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with verified experts across various fields. Book appointments instantly and get professional guidance when you need it.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search professionals, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 h-12 border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 h-12 border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="h-12 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-xl"
              >
                Search Experts
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link to="/professionals">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                Find Experts
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
                Join as Professional
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find the right professional for your needs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={`/professionals?category=${category.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${category.color}`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {category.count} experts
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Professionals</h2>
            <p className="text-xl text-gray-600">Highly rated experts ready to help you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProfessionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/professionals">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold">
                View All Professionals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ProConnect?</h2>
            <p className="text-xl text-gray-600">Your trusted platform for professional services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Experts</h3>
              <p className="text-gray-600">All professionals are thoroughly vetted with verified credentials and licenses</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl mb-6">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Booking</h3>
              <p className="text-gray-600">Book appointments instantly with real-time availability and confirmation</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl mb-6">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Contact</h3>
              <p className="text-gray-600">Protected communication channels with built-in privacy controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Royal Fellow Foundation</h3>
          <p className="text-gray-400 mb-8">Connecting you with trusted professionals</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            © 2025 Royal Fellow Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
