import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  Award,
  BookOpen,
  Users,
  ThumbsUp,
  MessageSquare,
  ChevronLeft,
  ExternalLink,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BookingModal from "@/components/BookingModal";

const ProfessionalProfile = () => {
  const { id } = useParams();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");

  // Mock data - in real app this would be fetched based on ID
  const professional = {
    id: 1,
    name: "Dr. Sarah Johnson",
    profession: "Cardiologist",
    specialization: "Interventional Cardiology",
    location: "New York, NY",
    address: "123 Medical Center Dr, Suite 456, New York, NY 10001",
    rating: 4.9,
    reviews: 127,
    experience: 12,
    consultationFee: 200,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    verified: true,
    phone: "+1 (555) 123-4567",
    email: "dr.johnson@example.com",
    about: "Dr. Sarah Johnson is a board-certified cardiologist with over 12 years of experience in interventional cardiology. She specializes in complex coronary interventions and structural heart disease. Dr. Johnson is committed to providing comprehensive, compassionate care to her patients.",
    education: [
      "MD - Harvard Medical School (2008)",
      "Residency - Johns Hopkins Hospital (2012)",
      "Fellowship - Mayo Clinic (2014)"
    ],
    certifications: [
      "Board Certified - Internal Medicine",
      "Board Certified - Cardiovascular Disease",
      "Fellow - American College of Cardiology"
    ],
    services: [
      { name: "Cardiac Consultation", price: 200, duration: "60 min" },
      { name: "Echocardiogram", price: 300, duration: "45 min" },
      { name: "Stress Test", price: 250, duration: "90 min" },
      { name: "Follow-up Visit", price: 150, duration: "30 min" }
    ],
    availability: {
      "Monday": ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
      "Tuesday": ["9:00 AM", "11:00 AM", "1:00 PM"],
      "Wednesday": ["10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
      "Thursday": ["9:00 AM", "10:00 AM", "11:00 AM"],
      "Friday": ["9:00 AM", "2:00 PM", "3:00 PM"]
    },
    reviewsList: [
      {
        id: 1,
        name: "John Smith",
        rating: 5,
        date: "2 weeks ago",
        comment: "Excellent doctor! Very thorough and caring. Highly recommend."
      },
      {
        id: 2,
        name: "Mary Davis",
        rating: 5,
        date: "1 month ago",
        comment: "Dr. Johnson is amazing. She explained everything clearly and I felt very comfortable."
      }
    ]
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "availability", label: "Availability" },
    { id: "reviews", label: "Reviews" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/professionals" className="inline-flex items-center hover:text-gray-700 mb-6" style={{ color: '#895129' }}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Professionals
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-32 h-32 rounded-2xl object-cover"
                    />
                    {professional.verified && (
                      <div className="absolute -top-2 -right-2">
                        <Badge className="bg-green-500 hover:bg-green-500 text-white">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {professional.name}
                    </h1>
                    <p className="text-xl font-semibold mb-1" style={{ color: '#895129' }}>
                      {professional.profession}
                    </p>
                    <p className="text-gray-600 mb-4">{professional.specialization}</p>
                    
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span className="font-semibold text-lg">{professional.rating}</span>
                        <span className="text-gray-500 ml-1">({professional.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{professional.experience} years experience</span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-6">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{professional.location}</span>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        onClick={() => setShowBookingModal(true)}
                        className="text-white"
                        style={{ backgroundColor: '#895129' }}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </Button>
                      <Button variant="outline" className="border-gray-300">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-lg border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      selectedTab === tab.id
                        ? "text-[#895129] border-[#895129]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                {selectedTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">About</h3>
                      <p className="text-gray-600 leading-relaxed">{professional.about}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
                      <ul className="space-y-2">
                        {professional.education.map((edu, index) => (
                          <li key={index} className="flex items-start">
                            <BookOpen className="h-4 w-4 mr-3 mt-1" style={{ color: '#895129' }} />
                            <span className="text-gray-600">{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Certifications</h3>
                      <ul className="space-y-2">
                        {professional.certifications.map((cert, index) => (
                          <li key={index} className="flex items-start">
                            <Award className="h-4 w-4 mr-3 mt-1 text-green-600" />
                            <span className="text-gray-600">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {selectedTab === "services" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Services Offered</h3>
                    <div className="grid gap-4">
                      {professional.services.map((service, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">{service.name}</h4>
                            <p className="text-sm text-gray-600">{service.duration}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">${service.price}</div>
                            <Button 
                              size="sm" 
                              className="mt-2 text-white" 
                              style={{ backgroundColor: '#895129' }}
                            >
                              Book Now
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === "availability" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Available Time Slots</h3>
                    <div className="grid gap-4">
                      {Object.entries(professional.availability).map(([day, slots]) => (
                        <div key={day} className="p-4 border border-gray-200 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-3">{day}</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {slots.map((slot, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                className="text-sm"
                              >
                                {slot}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === "reviews" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Patient Reviews</h3>
                    <div className="space-y-6">
                      {professional.reviewsList.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">{review.name}</h4>
                              <div className="flex items-center mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3" style={{ color: '#895129' }} />
                    <span className="text-gray-600">{professional.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3" style={{ color: '#895129' }} />
                    <span className="text-gray-600">{professional.email}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-3 mt-1" style={{ color: '#895129' }} />
                    <span className="text-gray-600">{professional.address}</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Card */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Consultation Fee</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ${professional.consultationFee}
                  </div>
                  <div className="text-gray-600 mb-4">per session</div>
                  <Button 
                    onClick={() => setShowBookingModal(true)}
                    className="w-full text-white"
                    style={{ backgroundColor: '#895129' }}
                  >
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" style={{ color: '#895129' }} />
                      <span className="text-gray-600">Patients Treated</span>
                    </div>
                    <span className="font-semibold">2,500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-gray-600">Success Rate</span>
                    </div>
                    <span className="font-semibold">96%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-purple-600" />
                      <span className="text-gray-600">Response Time</span>
                    </div>
                    <span className="font-semibold">&lt; 1 hour</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal
          professional={professional}
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </div>
  );
};

export default ProfessionalProfile;
