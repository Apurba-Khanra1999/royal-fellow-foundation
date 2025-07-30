import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  User, 
  Calendar, 
  DollarSign, 
  Star, 
  Settings,
  Users,
  FileText,
  Clock,
  Edit,
  Save,
  Plus,
  Trash2,
  Eye,
  MessageSquare,
  Award,
  TrendingUp,
  Search,
  CheckCircle,
  XCircle,
  Filter
} from "lucide-react";
import Header from "@/components/Header";
import ArticleManager from "@/components/ArticleManager";

const ProfessionalDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  const [profileData, setProfileData] = useState({
    name: "Dr. Sarah Johnson",
    profession: "Cardiologist",
    specialization: "Interventional Cardiology",
    experience: "12",
    email: "dr.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    about: "Dr. Sarah Johnson is a board-certified cardiologist with over 12 years of experience in interventional cardiology. She specializes in complex cardiac procedures and has published numerous research papers in peer-reviewed journals.",
    consultationFee: "200",
    license: "MD123456",
    languages: "English, Spanish",
    education: "Harvard Medical School"
  });

  const [services, setServices] = useState([
    { id: 1, name: "Cardiac Consultation", price: 200, duration: "60 min", description: "Comprehensive cardiac evaluation and consultation" },
    { id: 2, name: "Echocardiogram", price: 300, duration: "45 min", description: "Heart ultrasound examination" },
    { id: 3, name: "Stress Test", price: 250, duration: "90 min", description: "Exercise stress testing for cardiac evaluation" }
  ]);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Smith",
      patientEmail: "john.smith@email.com",
      date: "2024-01-20",
      time: "10:00 AM",
      service: "Cardiac Consultation",
      status: "confirmed",
      fee: 200,
      notes: "Initial consultation for chest pain"
    },
    {
      id: 2,
      patientName: "Mary Davis",
      patientEmail: "mary.davis@email.com",
      date: "2024-01-22",
      time: "2:00 PM",
      service: "Echocardiogram",
      status: "pending",
      fee: 300,
      notes: "Follow-up echocardiogram"
    },
    {
      id: 3,
      patientName: "Robert Johnson",
      patientEmail: "robert.j@email.com",
      date: "2024-01-18",
      time: "3:30 PM",
      service: "Stress Test",
      status: "completed",
      fee: 250,
      notes: "Routine stress test - normal results"
    }
  ]);

  const [availability, setAvailability] = useState([
    { day: "Monday", startTime: "9:00 AM", endTime: "5:00 PM", available: true },
    { day: "Tuesday", startTime: "9:00 AM", endTime: "5:00 PM", available: true },
    { day: "Wednesday", startTime: "9:00 AM", endTime: "5:00 PM", available: true },
    { day: "Thursday", startTime: "9:00 AM", endTime: "5:00 PM", available: true },
    { day: "Friday", startTime: "9:00 AM", endTime: "3:00 PM", available: true },
    { day: "Saturday", startTime: "10:00 AM", endTime: "2:00 PM", available: false },
    { day: "Sunday", startTime: "Closed", endTime: "Closed", available: false }
  ]);

  const [stats] = useState({
    totalAppointments: 145,
    monthlyEarnings: 12500,
    avgRating: 4.9,
    totalPatients: 98,
    completedAppointments: 132,
    pendingAppointments: 8,
    cancelledAppointments: 5,
    totalReviews: 87
  });

  const handleSaveProfile = () => {
    console.log("Saving profile:", profileData);
    setIsEditing(false);
  };

  const handleAddService = () => {
    const newService = {
      id: services.length + 1,
      name: "New Service",
      price: 0,
      duration: "30 min",
      description: ""
    };
    setServices([...services, newService]);
  };

  const handleDeleteService = (id: number) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  const handleUpdateAppointmentStatus = (appointmentId: number, status: string) => {
    setAppointments(prev => 
      prev.map(appointment => 
        appointment.id === appointmentId 
          ? { ...appointment, status } 
          : appointment
      )
    );
    console.log(`Updated appointment ${appointmentId} status to ${status}`);
  };

  const handleUpdateAvailability = (day: string, field: string, value: any) => {
    setAvailability(prev =>
      prev.map(slot =>
        slot.day === day ? { ...slot, [field]: value } : slot
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Filter appointments
  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Dashboard</h1>
          <p className="text-gray-600">Manage your profile, services, and appointments</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-[#895129]/10 to-[#895129]/5 border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Total Appointments</CardTitle>
              <Calendar className="h-5 w-5 text-[#895129]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.totalAppointments}</div>
              <p className="text-xs text-gray-600 mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Monthly Earnings</CardTitle>
              <DollarSign className="h-5 w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">${stats.monthlyEarnings}</div>
              <p className="text-xs text-gray-600 mt-1">+18% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Average Rating</CardTitle>
              <Star className="h-5 w-5 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.avgRating}</div>
              <p className="text-xs text-gray-600 mt-1">Based on {stats.totalReviews} reviews</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Total Patients</CardTitle>
              <Users className="h-5 w-5 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.totalPatients}</div>
              <p className="text-xs text-gray-600 mt-1">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white shadow-sm border">
            <TabsTrigger value="profile" className="data-[state=active]:bg-[#895129] data-[state=active]:text-white">
              Profile
            </TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-[#895129] data-[state=active]:text-white">
              Services
            </TabsTrigger>
            <TabsTrigger value="appointments" className="data-[state=active]:bg-[#895129] data-[state=active]:text-white">
              Appointments
            </TabsTrigger>
            <TabsTrigger value="availability" className="data-[state=active]:bg-[#895129] data-[state=active]:text-white">
              Availability
            </TabsTrigger>
            <TabsTrigger value="articles" className="data-[state=active]:bg-[#895129] data-[state=active]:text-white">
              Articles
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-[#895129] data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Profile Management */}
          <TabsContent value="profile">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-[#895129]/10 to-[#895129]/5">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Profile Information</CardTitle>
                    <CardDescription>Manage your professional profile and credentials</CardDescription>
                  </div>
                  <Button
                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                    className="bg-[#895129] hover:bg-[#795025] text-white"
                  >
                    {isEditing ? (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="profession" className="text-sm font-medium text-gray-700">Profession</Label>
                      <Input
                        id="profession"
                        value={profileData.profession}
                        onChange={(e) => setProfileData({...profileData, profession: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="specialization" className="text-sm font-medium text-gray-700">Specialization</Label>
                      <Input
                        id="specialization"
                        value={profileData.specialization}
                        onChange={(e) => setProfileData({...profileData, specialization: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience" className="text-sm font-medium text-gray-700">Years of Experience</Label>
                      <Input
                        id="experience"
                        value={profileData.experience}
                        onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="license" className="text-sm font-medium text-gray-700">License Number</Label>
                      <Input
                        id="license"
                        value={profileData.license}
                        onChange={(e) => setProfileData({...profileData, license: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-sm font-medium text-gray-700">Location</Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="fee" className="text-sm font-medium text-gray-700">Consultation Fee ($)</Label>
                      <Input
                        id="fee"
                        value={profileData.consultationFee}
                        onChange={(e) => setProfileData({...profileData, consultationFee: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="languages" className="text-sm font-medium text-gray-700">Languages</Label>
                      <Input
                        id="languages"
                        value={profileData.languages}
                        onChange={(e) => setProfileData({...profileData, languages: e.target.value})}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="education" className="text-sm font-medium text-gray-700">Education</Label>
                    <Input
                      id="education"
                      value={profileData.education}
                      onChange={(e) => setProfileData({...profileData, education: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="about" className="text-sm font-medium text-gray-700">About</Label>
                    <Textarea
                      id="about"
                      value={profileData.about}
                      onChange={(e) => setProfileData({...profileData, about: e.target.value})}
                      disabled={!isEditing}
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Management */}
          <TabsContent value="services">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-[#895129]/10 to-[#895129]/5">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Services & Pricing</CardTitle>
                    <CardDescription>Manage your services and consultation fees</CardDescription>
                  </div>
                  <Button onClick={handleAddService} className="bg-[#895129] hover:bg-[#795025] text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Service
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Service Name</Label>
                          <Input
                            value={service.name}
                            onChange={(e) => {
                              setServices(services.map(s => 
                                s.id === service.id ? {...s, name: e.target.value} : s
                              ));
                            }}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Price ($)</Label>
                          <Input
                            type="number"
                            value={service.price}
                            onChange={(e) => {
                              setServices(services.map(s => 
                                s.id === service.id ? {...s, price: Number(e.target.value)} : s
                              ));
                            }}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Duration</Label>
                          <Input
                            value={service.duration}
                            onChange={(e) => {
                              setServices(services.map(s => 
                                s.id === service.id ? {...s, duration: e.target.value} : s
                              ));
                            }}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-end">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteService(service.id)}
                            className="w-full"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Description</Label>
                        <Textarea
                          value={service.description}
                          onChange={(e) => {
                            setServices(services.map(s => 
                              s.id === service.id ? {...s, description: e.target.value} : s
                            ));
                          }}
                          className="mt-1"
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments */}
          <TabsContent value="appointments">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-[#895129]/10 to-[#895129]/5">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Appointment Management</CardTitle>
                    <CardDescription>View and manage your appointment bookings</CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Search appointments..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg z-50">
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {filteredAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="font-semibold text-gray-900">{appointment.patientName}</h3>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                            <div>
                              <span className="font-medium">Date:</span> {appointment.date}
                            </div>
                            <div>
                              <span className="font-medium">Time:</span> {appointment.time}
                            </div>
                            <div>
                              <span className="font-medium">Service:</span> {appointment.service}
                            </div>
                            <div>
                              <span className="font-medium">Email:</span> {appointment.patientEmail}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Notes:</span> {appointment.notes}
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-lg font-bold text-gray-900">${appointment.fee}</div>
                          <div className="flex gap-2 mt-2">
                            {appointment.status === "pending" && (
                              <>
                                <Button 
                                  size="sm" 
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => handleUpdateAppointmentStatus(appointment.id, "confirmed")}
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Confirm
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="destructive"
                                  onClick={() => handleUpdateAppointmentStatus(appointment.id, "cancelled")}
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Cancel
                                </Button>
                              </>
                            )}
                            {appointment.status === "confirmed" && (
                              <Button 
                                size="sm" 
                                className="bg-[#895129] hover:bg-[#795025]"
                                onClick={() => handleUpdateAppointmentStatus(appointment.id, "completed")}
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Complete
                              </Button>
                            )}
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Availability */}
          <TabsContent value="availability">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-[#895129]/10 to-[#895129]/5">
                <CardTitle className="text-xl text-gray-900">Availability Settings</CardTitle>
                <CardDescription>Set your working hours and available time slots</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {availability.map((slot) => (
                    <div key={slot.day} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
                      <div className="flex items-center gap-4">
                        <div className="w-24">
                          <span className="font-medium text-gray-900">{slot.day}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={slot.available}
                            onChange={(e) => handleUpdateAvailability(slot.day, 'available', e.target.checked)}
                            className="rounded border-gray-300"
                          />
                          <span className="text-sm text-gray-600">Available</span>
                        </div>
                      </div>
                      {slot.available && (
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Label className="text-sm">From:</Label>
                            <Input
                              type="time"
                              value={slot.startTime.includes('AM') || slot.startTime.includes('PM') ? 
                                slot.startTime.replace(' AM', '').replace(' PM', '') : slot.startTime}
                              onChange={(e) => handleUpdateAvailability(slot.day, 'startTime', e.target.value)}
                              className="w-32"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <Label className="text-sm">To:</Label>
                            <Input
                              type="time"
                              value={slot.endTime.includes('AM') || slot.endTime.includes('PM') ? 
                                slot.endTime.replace(' AM', '').replace(' PM', '') : slot.endTime}
                              onChange={(e) => handleUpdateAvailability(slot.day, 'endTime', e.target.value)}
                              className="w-32"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="bg-[#895129] hover:bg-[#795025] text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Availability
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Articles Management */}
          <TabsContent value="articles">
            <ArticleManager professionalId="1" />
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-[#895129]/10 to-[#895129]/5">
                <CardTitle className="text-xl text-gray-900">Performance Analytics</CardTitle>
                <CardDescription>Track your performance and earnings over time</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-r from-[#895129]/10 to-[#895129]/5 rounded-lg">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-[#895129]" />
                    <h3 className="font-semibold text-gray-900">Completed</h3>
                    <p className="text-2xl font-bold text-[#895129]">{stats.completedAppointments}</p>
                    <p className="text-sm text-gray-600">Appointments</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                    <h3 className="font-semibold text-gray-900">Pending</h3>
                    <p className="text-2xl font-bold text-orange-600">{stats.pendingAppointments}</p>
                    <p className="text-sm text-gray-600">Appointments</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
                    <XCircle className="h-8 w-8 mx-auto mb-2 text-red-600" />
                    <h3 className="font-semibold text-gray-900">Cancelled</h3>
                    <p className="text-2xl font-bold text-red-600">{stats.cancelledAppointments}</p>
                    <p className="text-sm text-gray-600">Appointments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
