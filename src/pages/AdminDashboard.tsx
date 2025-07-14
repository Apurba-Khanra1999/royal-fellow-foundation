import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProfessionalDetailModal from "@/components/ProfessionalDetailModal";
import AdvancedSearch from "@/components/AdvancedSearch";
import { 
  Users, 
  UserCheck, 
  AlertCircle, 
  TrendingUp, 
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Star,
  DollarSign,
  Calendar,
  Settings,
  Shield,
  Award,
  Activity,
  Save,
  Plus,
  BarChart3,
  FileText,
  Zap,
  Target,
  BookOpen
} from "lucide-react";

interface SearchFilters {
  search: string;
  profession: string;
  specialization: string;
  location: string;
  status: string;
  minRating: number;
  maxFee: number;
  experience: string;
  dateRange: string;
  sortBy: string;
  sortOrder: string;
}

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [editingProfessional, setEditingProfessional] = useState<number | null>(null);
  const [editingUser, setEditingUser] = useState<number | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);
  const [modalMode, setModalMode] = useState<'view' | 'edit' | 'approve'>('view');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    search: '',
    profession: '',
    specialization: '',
    location: '',
    status: '',
    minRating: 0,
    maxFee: 0,
    experience: '',
    dateRange: '',
    sortBy: 'name',
    sortOrder: 'asc'
  });

  const [pendingProfessionals, setPendingProfessionals] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      profession: "Doctor",
      specialization: "Cardiologist",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      experience: "8 years",
      license: "MD123456",
      status: "pending",
      appliedDate: "2024-01-15",
      consultationFee: 200,
      location: "New York, NY",
      documents: ["License.pdf", "Certificate.pdf"],
      bio: "Experienced cardiologist with 8 years of practice in interventional cardiology.",
      education: "Harvard Medical School, MD; Johns Hopkins Residency",
      certifications: ["Board Certified Cardiologist", "Interventional Cardiology Fellowship"],
      languages: ["English", "Spanish"]
    },
    {
      id: 2,
      name: "John Smith",
      profession: "Lawyer",
      specialization: "Corporate Law",
      email: "john.smith@lawfirm.com",
      phone: "+1 (555) 987-6543",
      experience: "12 years",
      license: "BAR789012",
      status: "pending",
      appliedDate: "2024-01-14",
      consultationFee: 300,
      location: "Los Angeles, CA",
      documents: ["BarCertificate.pdf", "Degree.pdf"],
      bio: "Corporate law specialist with extensive experience in mergers and acquisitions.",
      education: "Stanford Law School, JD; Yale University, BA Economics",
      certifications: ["California Bar Association", "Corporate Law Specialist"],
      languages: ["English", "Mandarin"]
    }
  ]);

  const [allProfessionals, setAllProfessionals] = useState([
    {
      id: 3,
      name: "Dr. Michael Chen",
      profession: "Doctor",
      specialization: "Dermatologist",
      email: "m.chen@clinic.com",
      phone: "+1 (555) 456-7890",
      experience: "6 years",
      status: "approved",
      rating: 4.8,
      totalAppointments: 234,
      monthlyEarnings: 15600,
      joinedDate: "2023-06-12",
      location: "Chicago, IL",
      consultationFee: 180,
      license: "MD789012",
      bio: "Specialized dermatologist focusing on cosmetic and medical dermatology.",
      education: "Northwestern University Medical School",
      certifications: ["Board Certified Dermatologist", "Mohs Surgery Specialist"],
      languages: ["English", "Chinese"]
    },
    {
      id: 4,
      name: "Lisa Thompson",
      profession: "Lawyer", 
      specialization: "Family Law",
      email: "lisa.t@legalfirm.com",
      phone: "+1 (555) 321-0987",
      experience: "10 years",
      status: "approved",
      rating: 4.9,
      totalAppointments: 156,
      monthlyEarnings: 22400,
      joinedDate: "2023-03-08",
      location: "Miami, FL",
      consultationFee: 250,
      license: "BAR456789",
      bio: "Family law attorney specializing in divorce and child custody cases.",
      education: "University of Miami Law School",
      certifications: ["Florida Bar Association", "Family Law Specialist"],
      languages: ["English", "Spanish"]
    }
  ]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Emma Wilson",
      email: "emma.w@email.com",
      phone: "+1 (555) 111-2222",
      joinedDate: "2024-01-10",
      totalBookings: 5,
      status: "active",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "David Brown",
      email: "david.b@email.com", 
      phone: "+1 (555) 333-4444",
      joinedDate: "2024-01-08",
      totalBookings: 12,
      status: "active",
      lastActive: "1 day ago"
    }
  ]);

  const [bookings] = useState([
    {
      id: 1,
      userEmail: "emma.w@email.com",
      professionalName: "Dr. Michael Chen",
      service: "Skin Consultation",
      date: "2024-01-20",
      time: "10:00 AM",
      status: "confirmed",
      fee: 180
    },
    {
      id: 2,
      userEmail: "david.b@email.com",
      professionalName: "Lisa Thompson",
      service: "Legal Consultation",
      date: "2024-01-22",
      time: "2:00 PM",
      status: "pending",
      fee: 250
    }
  ]);

  const [stats] = useState({
    totalUsers: 1247,
    totalProfessionals: 89,
    pendingApprovals: 12,
    totalBookings: 334,
    monthlyRevenue: 125000,
    activeUsers: 892,
    completedBookings: 298,
    avgRating: 4.7
  });

  const handleApprove = (professionalId: number) => {
    const professional = pendingProfessionals.find(p => p.id === professionalId);
    if (professional) {
      const updatedProfessional = {
        ...professional,
        status: "approved",
        rating: 0,
        totalAppointments: 0,
        monthlyEarnings: 0,
        joinedDate: new Date().toISOString().split('T')[0]
      };
      setAllProfessionals(prev => [...prev, updatedProfessional]);
      setPendingProfessionals(prev => prev.filter(p => p.id !== professionalId));
      console.log("Approved professional:", professionalId);
    }
  };

  const handleReject = (professionalId: number) => {
    setPendingProfessionals(prev => prev.filter(p => p.id !== professionalId));
    console.log("Rejected professional:", professionalId);
  };

  const handleViewProfessional = (professional: any, mode: 'view' | 'edit' | 'approve') => {
    setSelectedProfessional(professional);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleSaveProfessional = (updatedProfessional: any) => {
    if (modalMode === 'approve') {
      handleApprove(updatedProfessional.id);
    } else {
      setAllProfessionals(prev => 
        prev.map(p => p.id === updatedProfessional.id ? updatedProfessional : p)
      );
    }
    console.log("Saved professional:", updatedProfessional);
  };

  const handleEditProfessional = (professionalId: number) => {
    setEditingProfessional(professionalId);
  };

  const handleSaveProfessionalInline = (professionalId: number, updatedData: any) => {
    setAllProfessionals(prev => 
      prev.map(p => p.id === professionalId ? { ...p, ...updatedData } : p)
    );
    setEditingProfessional(null);
    console.log("Saved professional:", professionalId, updatedData);
  };

  const handleDeleteProfessional = (professionalId: number) => {
    if (window.confirm("Are you sure you want to delete this professional?")) {
      setAllProfessionals(prev => prev.filter(p => p.id !== professionalId));
      console.log("Deleted professional:", professionalId);
    }
  };

  const handleEditUser = (userId: number) => {
    setEditingUser(userId);
  };

  const handleSaveUser = (userId: number, updatedData: any) => {
    setUsers(prev => 
      prev.map(u => u.id === userId ? { ...u, ...updatedData } : u)
    );
    setEditingUser(null);
    console.log("Saved user:", userId, updatedData);
  };

  const handleDeleteUser = (userId: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(prev => prev.filter(u => u.id !== userId));
      console.log("Deleted user:", userId);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-800 border-green-200";
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "rejected": return "bg-red-100 text-red-800 border-red-200";
      case "active": return "bg-blue-100 text-blue-800 border-blue-200";
      case "confirmed": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getProfessionIcon = (profession: string) => {
    switch (profession.toLowerCase()) {
      case "doctor": return "🩺";
      case "lawyer": return "⚖️";
      case "engineer": return "🔧";
      case "architect": return "🏗️";
      default: return "👤";
    }
  };

  // Enhanced filtering logic
  const applyFilters = (professionals: any[]) => {
    return professionals.filter(prof => {
      const matchesSearch = prof.name.toLowerCase().includes(searchFilters.search.toLowerCase()) ||
                           prof.email.toLowerCase().includes(searchFilters.search.toLowerCase()) ||
                           prof.profession.toLowerCase().includes(searchFilters.search.toLowerCase()) ||
                           prof.specialization.toLowerCase().includes(searchFilters.search.toLowerCase());
      
      const matchesProfession = !searchFilters.profession || prof.profession === searchFilters.profession;
      const matchesSpecialization = !searchFilters.specialization || 
                                   prof.specialization.toLowerCase().includes(searchFilters.specialization.toLowerCase());
      const matchesLocation = !searchFilters.location || 
                             prof.location.toLowerCase().includes(searchFilters.location.toLowerCase());
      const matchesStatus = !searchFilters.status || prof.status === searchFilters.status;
      const matchesRating = prof.rating >= searchFilters.minRating;
      const matchesFee = !searchFilters.maxFee || prof.consultationFee <= searchFilters.maxFee;
      
      return matchesSearch && matchesProfession && matchesSpecialization && 
             matchesLocation && matchesStatus && matchesRating && matchesFee;
    }).sort((a, b) => {
      const { sortBy, sortOrder } = searchFilters;
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'name') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === 'desc') {
        return aValue < bValue ? 1 : -1;
      }
      return aValue > bValue ? 1 : -1;
    });
  };

  const filteredProfessionals = applyFilters(allProfessionals);
  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           user.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const resetFilters = () => {
    setSearchFilters({
      search: '',
      profession: '',
      specialization: '',
      location: '',
      status: '',
      minRating: 0,
      maxFee: 0,
      experience: '',
      dateRange: '',
      sortBy: 'name',
      sortOrder: 'asc'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      {/* Enhanced Header */}
      <div className="bg-white shadow-xl border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 text-lg">Comprehensive platform management and analytics</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" className="hover:bg-red-50 hover:border-red-200 hover:text-red-600">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">Total Users</CardTitle>
              <Users className="h-6 w-6 text-blue-200" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-blue-100 text-sm mt-2">
                <TrendingUp className="h-4 w-4" />
                +12% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">Active Professionals</CardTitle>
              <UserCheck className="h-6 w-6 text-green-200" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalProfessionals}</div>
              <div className="flex items-center gap-1 text-green-100 text-sm mt-2">
                <TrendingUp className="h-4 w-4" />
                +5% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-100">Pending Approvals</CardTitle>
              <AlertCircle className="h-6 w-6 text-orange-200" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-100">{pendingProfessionals.length}</div>
              <div className="text-orange-100 text-sm mt-2">Requires attention</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">Monthly Revenue</CardTitle>
              <DollarSign className="h-6 w-6 text-purple-200" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${stats.monthlyRevenue.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-purple-100 text-sm mt-2">
                <TrendingUp className="h-4 w-4" />
                +18% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="approvals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg border-2 border-gray-100 h-14">
            <TabsTrigger 
              value="approvals" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white font-medium"
            >
              Pending Approvals ({pendingProfessionals.length})
            </TabsTrigger>
            <TabsTrigger 
              value="professionals" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-teal-500 data-[state=active]:text-white font-medium"
            >
              All Professionals ({allProfessionals.length})
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white font-medium"
            >
              Users ({users.length})
            </TabsTrigger>
            <TabsTrigger 
              value="bookings" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-medium"
            >
              Bookings ({bookings.length})
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white font-medium"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Pending Approvals */}
          <TabsContent value="approvals">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                      <AlertCircle className="h-6 w-6 text-orange-600" />
                      Professional Applications
                    </CardTitle>
                    <CardDescription className="text-lg">Review and approve new professional registrations</CardDescription>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-lg font-semibold">
                    {pendingProfessionals.length} Pending
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {pendingProfessionals.map((professional) => (
                    <Card key={professional.id} className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center text-3xl">
                              {getProfessionIcon(professional.profession)}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{professional.name}</h3>
                              <p className="text-orange-600 font-medium text-lg">{professional.profession} - {professional.specialization}</p>
                              <p className="text-gray-600">{professional.experience} experience</p>
                            </div>
                          </div>
                          <Badge className={`${getStatusColor(professional.status)} text-sm px-3 py-1`}>
                            <Clock className="h-3 w-3 mr-1" />
                            {professional.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{professional.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{professional.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{professional.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">${professional.consultationFee}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">License: <span className="font-medium">{professional.license}</span></span>
                            <span className="text-sm text-gray-600">Applied: <span className="font-medium">{professional.appliedDate}</span></span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-blue-300 hover:bg-blue-50"
                              onClick={() => handleViewProfessional(professional, 'approve')}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View Full Details
                            </Button>
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                              onClick={() => handleApprove(professional.id)}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Quick Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              className="shadow-lg"
                              onClick={() => handleReject(professional.id)}
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* All Professionals */}
          <TabsContent value="professionals">
            <div className="space-y-6">
              <AdvancedSearch
                filters={searchFilters}
                onFiltersChange={setSearchFilters}
                onReset={resetFilters}
                resultCount={filteredProfessionals.length}
              />
              
              <Card className="shadow-xl border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                        <UserCheck className="h-6 w-6 text-blue-600" />
                        All Professionals
                      </CardTitle>
                      <CardDescription className="text-lg">Manage all registered professionals on the platform</CardDescription>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg font-semibold">
                      {filteredProfessionals.length} Total
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {filteredProfessionals.map((professional) => (
                      <Card key={professional.id} className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          {editingProfessional === professional.id ? (
                            <ProfessionalEditForm 
                              professional={professional} 
                              onSave={(data) => handleSaveProfessionalInline(professional.id, data)}
                              onCancel={() => setEditingProfessional(null)}
                            />
                          ) : (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full flex items-center justify-center text-3xl">
                                  {getProfessionIcon(professional.profession)}
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold text-gray-900">{professional.name}</h3>
                                  <p className="text-blue-600 font-medium text-lg">{professional.profession} - {professional.specialization}</p>
                                  <div className="flex items-center gap-6 mt-2 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                      <Star className="h-4 w-4 text-yellow-500" />
                                      {professional.rating}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4" />
                                      {professional.totalAppointments} bookings
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <DollarSign className="h-4 w-4" />
                                      ${professional.monthlyEarnings}/month
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Mail className="h-4 w-4" />
                                      {professional.email}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Badge className={getStatusColor(professional.status)}>
                                  {professional.status}
                                </Badge>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="border-blue-300 hover:bg-blue-50"
                                  onClick={() => handleViewProfessional(professional, 'view')}
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  View Details
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="border-green-300 hover:bg-green-50"
                                  onClick={() => handleViewProfessional(professional, 'edit')}
                                >
                                  <Edit className="h-4 w-4 mr-1" />
                                  Edit Full Profile
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-300" 
                                  onClick={() => handleDeleteProfessional(professional.id)}
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Remove
                                </Button>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                      <Users className="h-6 w-6 text-green-600" />
                      User Management
                    </CardTitle>
                    <CardDescription className="text-lg">View and manage all registered users</CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg font-semibold">
                      {filteredUsers.length} Total
                    </Badge>
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {filteredUsers.map((user) => (
                    <Card key={user.id} className="border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        {editingUser === user.id ? (
                          <UserEditForm 
                            user={user} 
                            onSave={(data) => handleSaveUser(user.id, data)}
                            onCancel={() => setEditingUser(null)}
                          />
                        ) : (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                                <Users className="h-6 w-6 text-green-600" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 text-lg">{user.name}</h3>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="text-sm text-gray-500">
                                  Joined: {user.joinedDate} • {user.totalBookings} bookings • {user.phone}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge className={getStatusColor(user.status)}>
                                <Activity className="h-3 w-3 mr-1" />
                                {user.status}
                              </Badge>
                              <span className="text-sm text-gray-500">Last seen: {user.lastActive}</span>
                              <Button size="sm" variant="outline" onClick={() => handleEditUser(user.id)}>
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700" onClick={() => handleDeleteUser(user.id)}>
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings */}
          <TabsContent value="bookings">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-purple-600" />
                  Booking Management
                </CardTitle>
                <CardDescription className="text-lg">Monitor and manage all platform bookings</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <Card key={booking.id} className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">
                              {booking.userEmail} → {booking.professionalName}
                            </h3>
                            <p className="text-purple-600 font-medium">{booking.service}</p>
                            <p className="text-sm text-gray-500">
                              {booking.date} at {booking.time}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                            <span className="text-xl font-bold text-gray-900">${booking.fee}</span>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-100">
                      <TrendingUp className="h-6 w-6" />
                      Growth Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">+24%</div>
                    <div className="text-blue-100">This month</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-100">
                      <Star className="h-6 w-6" />
                      Avg. Rating
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">{stats.avgRating}</div>
                    <div className="text-green-100">Platform average</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-100">
                      <Shield className="h-6 w-6" />
                      Success Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">98.5%</div>
                    <div className="text-purple-100">Booking completion</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Performance Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Active Users</span>
                        <span className="font-bold">{stats.activeUsers}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Completed Bookings</span>
                        <span className="font-bold">{stats.completedBookings}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Total Bookings</span>
                        <span className="font-bold">{stats.totalBookings}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Generate Monthly Report
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Bulk Notifications
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Zap className="h-4 w-4 mr-2" />
                        System Maintenance
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <BookOpen className="h-4 w-4 mr-2" />
                        View Audit Logs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Professional Detail Modal */}
      <ProfessionalDetailModal
        professional={selectedProfessional}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProfessional}
        mode={modalMode}
      />
    </div>
  );
};

// Professional Edit Form Component
const ProfessionalEditForm = ({ professional, onSave, onCancel }: any) => {
  const [formData, setFormData] = useState(professional);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="consultationFee">Consultation Fee</Label>
          <Input
            id="consultationFee"
            type="number"
            value={formData.consultationFee}
            onChange={(e) => setFormData({...formData, consultationFee: Number(e.target.value)})}
          />
        </div>
        <div>
          <Label htmlFor="experience">Experience</Label>
          <Input
            id="experience"
            value={formData.experience}
            onChange={(e) => setFormData({...formData, experience: e.target.value})}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="specialization">Specialization</Label>
        <Input
          id="specialization"
          value={formData.specialization}
          onChange={(e) => setFormData({...formData, specialization: e.target.value})}
        />
      </div>
      <div className="flex gap-2">
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 mr-1" />
          Save Changes
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

// User Edit Form Component
const UserEditForm = ({ user, onSave, onCancel }: any) => {
  const [formData, setFormData] = useState(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-lg z-50">
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2">
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 mr-1" />
          Save Changes
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AdminDashboard;
