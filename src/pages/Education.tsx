import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Users, GraduationCap, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Education = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [showMore, setShowMore] = useState(false);

  // Mock data for colleges and institutions
  const colleges = [
    {
      id: 1,
      name: 'Harvard University',
      type: 'University',
      location: 'Cambridge, MA',
      rating: 4.9,
      students: 23000,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
      specialties: ['Business', 'Medicine', 'Law', 'Engineering'],
      established: 1636,
      tuitionFee: '$50,000',
      description: 'One of the most prestigious universities in the world, known for excellence in education and research.'
    },
    {
      id: 2,
      name: 'Stanford University',
      type: 'University',
      location: 'Stanford, CA',
      rating: 4.8,
      students: 17000,
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop',
      specialties: ['Computer Science', 'Engineering', 'Business', 'Medicine'],
      established: 1885,
      tuitionFee: '$52,000',
      description: 'Leading research university in Silicon Valley, known for innovation and entrepreneurship.'
    },
    {
      id: 3,
      name: 'MIT',
      type: 'Institute',
      location: 'Cambridge, MA',
      rating: 4.9,
      students: 11000,
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop',
      specialties: ['Engineering', 'Computer Science', 'Physics', 'Mathematics'],
      established: 1861,
      tuitionFee: '$53,000',
      description: 'World-renowned institute for science, technology, engineering, and mathematics.'
    },
    {
      id: 4,
      name: 'Community College of Denver',
      type: 'Community College',
      location: 'Denver, CO',
      rating: 4.2,
      students: 15000,
      image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=300&fit=crop',
      specialties: ['Liberal Arts', 'Business', 'Healthcare', 'Trade Skills'],
      established: 1967,
      tuitionFee: '$4,500',
      description: 'Affordable education with excellent transfer programs to four-year universities.'
    },
    {
      id: 5,
      name: 'California Institute of Technology',
      type: 'Institute',
      location: 'Pasadena, CA',
      rating: 4.7,
      students: 2200,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      specialties: ['Physics', 'Engineering', 'Chemistry', 'Astronomy'],
      established: 1891,
      tuitionFee: '$54,000',
      description: 'Small, elite institution focusing on science and engineering research.'
    },
    {
      id: 6,
      name: 'University of California, Berkeley',
      type: 'University',
      location: 'Berkeley, CA',
      rating: 4.6,
      students: 45000,
      image: 'https://images.unsplash.com/photo-1575503073111-f6d46bc85866?w=400&h=300&fit=crop',
      specialties: ['Engineering', 'Business', 'Computer Science', 'Social Sciences'],
      established: 1868,
      tuitionFee: '$14,000',
      description: 'Top public research university known for academic excellence and social activism.'
    }
  ];

  const institutionTypes = ['All Types', 'University', 'Institute', 'Community College'];
  const locations = ['All Locations', 'Cambridge, MA', 'Stanford, CA', 'Denver, CO', 'Pasadena, CA', 'Berkeley, CA'];

  // Filter colleges based on criteria
  const filteredColleges = colleges.filter(college => {
    const matchesSearch = !searchQuery || 
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = !selectedType || selectedType === 'all types' || 
      college.type.toLowerCase() === selectedType.toLowerCase();
    
    const matchesLocation = !selectedLocation || selectedLocation === 'all locations' ||
      college.location === selectedLocation;
    
    const matchesRating = !selectedRating || selectedRating === 'any' ||
      college.rating >= parseFloat(selectedRating);

    return matchesSearch && matchesType && matchesLocation && matchesRating;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('');
    setSelectedLocation('');
    setSelectedRating('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Educational Institutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover colleges, universities, and institutions that match your educational goals and aspirations.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-justify max-w-6xl mx-auto">
            In today’s fast-evolving global economy, professionals must stay informed, skilled, and connected. The <b>Royal Fellow Foundation (RFF)</b> plays a transformative role in this space by offering accessible, affordable, and high-quality educational programs, conferences, and a robust global community network.
            RFF empowers professionals to earn advanced degrees and certifications—both online and offline—while fostering collaboration through its vibrant community of learners and leaders. This article explores RFF’s educational mission and global impact.
          </p>
          <div className="text-center mt-6">
            <Button
              onClick={() => setShowMore(true)}
              variant="outline"
              className="px-6"
              style={{ display: showMore ? 'none' : 'inline-flex' }}
            >
              Read More
            </Button>
          </div>
          {showMore && (
            <div className="flex gap-8 mt-6">
              {/* Table of Contents */}
              <div className="w-1/4">
                <Card className="sticky top-20 shadow-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <a href="#mission" className="text-primary hover:underline">
                          RFF's Mission
                        </a>
                      </li>
                      <li>
                        <a href="#programs" className="text-primary hover:underline">
                          Educational Programs
                        </a>
                      </li>
                      <li>
                        <a href="#community" className="text-primary hover:underline">
                          Global Community
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              {/* Expanded Content */}
              <div className="w-3/4">
                <div className="text-lg max-w-4xl mx-auto space-y-6">
                  <div id="mission" className="scroll-mt-20">
                    <h2 className="text-2xl font-bold">RFF's Mission</h2>
                    <p>
                      The Royal Fellow Foundation is dedicated to empowering professionals by providing accessible education and fostering a global network of collaboration. Its mission is to bridge the gap between traditional education and the demands of the modern workforce.
                    </p>
                  </div>
                  <div id="programs" className="scroll-mt-20">
                    <h2 className="text-2xl font-bold">Educational Programs</h2>
                    <p>
                      RFF offers a wide range of programs, including online and offline degrees, certifications, and professional development courses. These programs are designed to be flexible and affordable, catering to professionals at all career stages.
                    </p>
                  </div>
                  <div id="community" className="scroll-mt-20">
                    <h2 className="text-2xl font-bold">Global Community</h2>
                    <p>
                      RFF’s global community connects learners, educators, and industry leaders. Through conferences, workshops, and online platforms, RFF fosters collaboration and knowledge-sharing across borders.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button
                      onClick={() => setShowMore(false)}
                      variant="outline"
                      className="px-6"
                    >
                      Read Less
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-80 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6 text-foreground">Filter Institutions</h3>
                
                <div className="space-y-4">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Search institutions or programs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  {/* Institution Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Institution Type</label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border shadow-lg z-50">
                        {institutionTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border shadow-lg z-50">
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
                    <label className="block text-sm font-medium text-foreground mb-2">Minimum Rating</label>
                    <Select value={selectedRating} onValueChange={setSelectedRating}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Rating" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border shadow-lg z-50">
                        <SelectItem value="any">Any Rating</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        <SelectItem value="4.0">4.0+ Stars</SelectItem>
                        <SelectItem value="3.5">3.5+ Stars</SelectItem>
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
          <div className="flex-1">
            {/* Results Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Educational Institutions
              </h2>
              <p className="text-muted-foreground">
                {filteredColleges.length} institutions found
              </p>
            </div>

            {/* Colleges Grid */}
            {filteredColleges.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-foreground mb-2">No institutions found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search criteria</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredColleges.map((college) => (
                  <Card key={college.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={college.image} 
                        alt={college.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-foreground line-clamp-2">
                          {college.name}
                        </CardTitle>
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-muted-foreground">{college.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {college.location}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {college.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {college.specialties.slice(0, 3).map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {college.specialties.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{college.specialties.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {college.students.toLocaleString()} students
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          Est. {college.established}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-foreground">
                          {college.tuitionFee}/year
                        </span>
                        <Link to={`/education/${college.id}`}>
                          <Button 
                            size="sm"
                            className="text-white"
                            style={{ backgroundColor: '#895129' }}
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Education;
