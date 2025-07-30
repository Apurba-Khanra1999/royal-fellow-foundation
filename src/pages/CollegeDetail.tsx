
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Users, 
  GraduationCap, 
  Star, 
  Clock, 
  DollarSign, 
  BookOpen,
  Building,
  Award,
  Calendar
} from 'lucide-react';

const CollegeDetail = () => {
  const { id } = useParams();

  // Mock data - in real app this would be fetched based on ID
  const college = {
    id: 1,
    name: 'Harvard University',
    type: 'University',
    location: 'Cambridge, MA',
    rating: 4.9,
    students: 23000,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop',
    specialties: ['Business', 'Medicine', 'Law', 'Engineering', 'Liberal Arts', 'Computer Science'],
    established: 1636,
    tuitionFee: '$50,000',
    description: 'Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, Harvard is the oldest institution of higher education in the United States and among the most prestigious in the world.',
    admissionRate: '5%',
    facultyStudentRatio: '1:7',
    campus: {
      size: '5,076 acres',
      libraries: 17,
      researchCenters: 100,
      dormitories: 12
    },
    programs: [
      {
        name: 'Bachelor of Arts',
        duration: '4 years',
        description: 'Comprehensive undergraduate program with liberal arts focus'
      },
      {
        name: 'Master of Business Administration',
        duration: '2 years',
        description: 'Top-ranked MBA program at Harvard Business School'
      },
      {
        name: 'Doctor of Medicine',
        duration: '4 years',
        description: 'Medical degree program at Harvard Medical School'
      },
      {
        name: 'Juris Doctor',
        duration: '3 years',
        description: 'Law degree program at Harvard Law School'
      }
    ],
    admissionProcess: [
      'Submit Common Application or Coalition Application',
      'Provide official high school transcripts',
      'Submit SAT or ACT scores (optional for 2024)',
      'Write required essays and personal statements',
      'Provide letters of recommendation',
      'Participate in alumni interview (if available)',
      'Submit application fee or fee waiver'
    ],
    facilities: [
      'Widener Library - Main research library',
      'Harvard Stadium - Historic athletic venue',
      'Science Center - STEM research facilities',
      'Harvard Art Museums',
      'Multiple dining halls and cafeterias',
      'Recreational sports facilities',
      'Student health services',
      'Career counseling center'
    ]
  };

  const quickStats = [
    { icon: Users, label: 'Total Students', value: college.students.toLocaleString() },
    { icon: Calendar, label: 'Established', value: college.established.toString() },
    { icon: DollarSign, label: 'Annual Tuition', value: college.tuitionFee },
    { icon: Award, label: 'Admission Rate', value: college.admissionRate },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-8">
          <div className="aspect-[2/1] md:aspect-[3/1] overflow-hidden rounded-2xl">
            <img 
              src={college.image} 
              alt={college.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-end">
            <div className="p-8 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {college.type}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{college.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">{college.name}</h1>
              <div className="flex items-center text-lg">
                <MapPin className="h-5 w-5 mr-2" />
                {college.location}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">About {college.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{college.description}</p>
              </CardContent>
            </Card>

            {/* Programs Offered */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Programs Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {college.programs.map((program, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{program.name}</h3>
                        <Badge variant="outline">{program.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">{program.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Campus Facilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Campus Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {college.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Admission Process */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Admission Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {college.admissionProcess.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Quick Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Faculty-Student Ratio</span>
                  <span className="font-semibold text-foreground">{college.facultyStudentRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Campus Size</span>
                  <span className="font-semibold text-foreground">{college.campus.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Libraries</span>
                  <span className="font-semibold text-foreground">{college.campus.libraries}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Research Centers</span>
                  <span className="font-semibold text-foreground">{college.campus.researchCenters}</span>
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Academic Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {college.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  Visit Official Website
                </Button>
                <Button variant="outline" className="w-full">
                  Request Information
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Campus Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CollegeDetail;
