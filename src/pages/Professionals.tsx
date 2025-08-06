import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Filter, 
  SlidersHorizontal,
  Star,
  Grid3X3,
  List
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import ProfessionalCard from "@/components/ProfessionalCard";
import Header from "@/components/Header";
import { useSearchParams } from "react-router-dom";

const Professionals = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || "");
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || "");
  const [selectedRating, setSelectedRating] = useState("");
  const [feeRange, setFeeRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("rating");

  // Mock data - in real app this would come from API
  const allProfessionals = [
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
      nextAvailable: "Today",
      category: "doctors"
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
      nextAvailable: "Tomorrow",
      category: "lawyers"
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
      image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=400&h=400&fit=crop",
      verified: true,
      nextAvailable: "Today",
      category: "cas"
    },
    {
      id: 4,
      name: "Dr. Michael Brown",
      profession: "Orthopedic Surgeon",
      location: "Los Angeles, CA",
      rating: 4.9,
      reviews: 203,
      experience: 15,
      fee: 300,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      verified: true,
      nextAvailable: "Next Week",
      category: "doctors"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      profession: "Architect",
      location: "Seattle, WA",
      rating: 4.6,
      reviews: 94,
      experience: 10,
      fee: 180,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      verified: true,
      nextAvailable: "Tomorrow",
      category: "architects"
    },
    {
      id: 6,
      name: "Robert Wilson",
      profession: "Civil Engineer",
      location: "Austin, TX",
      rating: 4.5,
      reviews: 67,
      experience: 9,
      fee: 220,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      verified: true,
      nextAvailable: "Today",
      category: "engineers"
    }
  ];

  const categories = [
    "All Categories",
    "Lawyers",
    "Doctors", 
    "CAs",
    "Engineers",
    "Architects",
    "Consultants"
  ];

  const locations = [
    "All Locations",
    "New York, NY",
    "San Francisco, CA",
    "Chicago, IL",
    "Los Angeles, CA",
    "Seattle, WA",
    "Austin, TX"
  ];

  // Filter professionals based on all criteria
  const filteredProfessionals = allProfessionals.filter(professional => {
    const matchesSearch = !searchQuery || 
      professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.profession.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = !selectedLocation || selectedLocation === "all locations" ||
      professional.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    const matchesCategory = !selectedCategory || selectedCategory === "all categories" ||
      professional.category === selectedCategory.toLowerCase();
    
    const matchesRating = !selectedRating || selectedRating === "any" ||
      professional.rating >= parseFloat(selectedRating);
    
    const matchesFee = professional.fee >= feeRange[0] && professional.fee <= feeRange[1];

    return matchesSearch && matchesLocation && matchesCategory && matchesRating && matchesFee;
  });


  // Sort professionals
  const sortedProfessionals = [...filteredProfessionals].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      case "experience":
        return b.experience - a.experience;
      case "fee-low":
        return a.fee - b.fee;
      case "fee-high":
        return b.fee - a.fee;
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLocation("");
    setSelectedCategory("");
    setSelectedRating("");
    setFeeRange([0, 1000]);
    setSortBy("rating");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">

        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover colleges, universities, and institutions that match your educational goals and aspirations.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-80 space-y-6">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6 text-gray-900">Filter Professionals</h3>
                
                {/* Search */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="Search professionals..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg z-50">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg z-50">
                        {locations.map((location) => (
                          <SelectItem key={location} value={location.toLowerCase()}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                    <Select value={selectedRating} onValueChange={setSelectedRating}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Rating" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg z-50">
                        <SelectItem value="any">Any Rating</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        <SelectItem value="4.0">4.0+ Stars</SelectItem>
                        <SelectItem value="3.5">3.5+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Fee Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fee Range: ${feeRange[0]} - ${feeRange[1]}
                    </label>
                    <Slider
                      value={feeRange}
                      onValueChange={setFeeRange}
                      max={1000}
                      min={0}
                      step={50}
                      className="mt-2"
                    />
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg z-50">
                        <SelectItem value="rating">Highest Rating</SelectItem>
                        <SelectItem value="reviews">Most Reviews</SelectItem>
                        <SelectItem value="experience">Most Experience</SelectItem>
                        <SelectItem value="fee-low">Lowest Fee</SelectItem>
                        <SelectItem value="fee-high">Highest Fee</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Clear Filters */}
                  <Button onClick={clearFilters} variant="outline" className="w-full">
                    Clear All Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Results */}
          <div className="flex-1 space-y-6">
            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Professional Experts</h1>
                <p className="text-gray-600 mt-1">
                  {sortedProfessionals.length} professionals found
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  style={{ backgroundColor: viewMode === 'grid' ? '#895129' : 'transparent' }}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  style={{ backgroundColor: viewMode === 'list' ? '#895129' : 'transparent' }}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Results Grid */}
            {sortedProfessionals.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No professionals found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }>
                {sortedProfessionals.map((professional) => (
                  <ProfessionalCard key={professional.id} professional={professional} />
                ))}
              </div>
            )}

            {/* Load More */}
            {sortedProfessionals.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="px-8">
                  Load More Professionals
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;
