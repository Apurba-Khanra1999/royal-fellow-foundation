import React, { useState } from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  Settings,
  HelpCircle,
  Eye,
  Edit,
  CheckCircle,
  XCircle,
  Star,
  BookOpen
} from "lucide-react";
import AdvancedSearch from "@/components/AdvancedSearch";
import ProfessionalDetailModal from "@/components/ProfessionalDetailModal";
import ArticleManager from "@/components/ArticleManager";
import { Badge } from "@/components/ui/badge";

interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
}

interface Availability {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

interface Professional {
  id: number;
  name: string;
  profession: string;
  specialization: string;
  email: string;
  phone: string;
  experience: string;
  license: string;
  status: string;
  appliedDate?: string;
  consultationFee: number;
  location: string;
  documents?: string[];
  bio?: string;
  education?: string;
  certifications?: string[];
  languages?: string[];
  rating?: number;
  totalAppointments?: number;
  monthlyEarnings?: number;
  joinedDate?: string;
  services?: Service[];
  availability?: Availability[];
}

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
  const [activeTab, setActiveTab] = useState("professionals");
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [modalMode, setModalMode] = useState<'view' | 'edit' | 'approve'>('view');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter states
  const [filters, setFilters] = useState<SearchFilters>({
    search: '',
    profession: 'all',
    specialization: '',
    location: '',
    status: 'all',
    minRating: 0,
    maxFee: 0,
    experience: 'all',
    dateRange: 'all',
    sortBy: 'name',
    sortOrder: 'asc'
  });

  // Mock data for professionals
  const mockProfessionals: Professional[] = [
    {
      id: 1,
      name: "Dr. John Smith",
      profession: "Doctor",
      specialization: "Cardiologist",
      email: "john.123@example.com",
      phone: "123-456-7890",
      experience: "10+ years",
      license: "MD12345",
      status: "approved",
      appliedDate: "2024-01-15",
      consultationFee: 250,
      location: "New York, NY",
      rating: 4.5,
      totalAppointments: 120,
      monthlyEarnings: 15000,
      joinedDate: "2023-02-20",
    },
    {
      id: 2,
      name: "Advocate Jane Doe",
      profession: "Lawyer",
      specialization: "Criminal Law",
      email: "jane.456@example.com",
      phone: "987-654-3210",
      experience: "5-10 years",
      license: "JD67890",
      status: "pending",
      appliedDate: "2024-02-01",
      consultationFee: 200,
      location: "Los Angeles, CA",
      rating: 4.2,
      totalAppointments: 90,
      monthlyEarnings: 12000,
      joinedDate: "2023-03-10",
    },
    {
      id: 3,
      name: "Er. David Lee",
      profession: "Engineer",
      specialization: "Civil Engineer",
      email: "david.789@example.com",
      phone: "555-123-4567",
      experience: "2-5 years",
      license: "PE23456",
      status: "approved",
      appliedDate: "2024-02-15",
      consultationFee: 150,
      location: "Chicago, IL",
      rating: 4.8,
      totalAppointments: 150,
      monthlyEarnings: 18000,
      joinedDate: "2023-04-01",
    },
    {
      id: 4,
      name: "Ar. Sarah White",
      profession: "Architect",
      specialization: "Residential Design",
      email: "sarah.abc@example.com",
      phone: "111-222-3333",
      experience: "1-2 years",
      license: "AR78901",
      status: "rejected",
      appliedDate: "2024-03-01",
      consultationFee: 100,
      location: "Houston, TX",
      rating: 4.0,
      totalAppointments: 60,
      monthlyEarnings: 9000,
      joinedDate: "2023-05-15",
    },
    {
      id: 5,
      name: "Dr. Michael Brown",
      profession: "Doctor",
      specialization: "Pediatrician",
      email: "michael.def@example.com",
      phone: "444-555-6666",
      experience: "5-10 years",
      license: "MD23456",
      status: "approved",
      appliedDate: "2024-03-15",
      consultationFee: 220,
      location: "Miami, FL",
      rating: 4.6,
      totalAppointments: 110,
      monthlyEarnings: 14000,
      joinedDate: "2023-06-01",
    },
  ];

  const handleResetFilters = () => {
    setFilters({
      search: '',
      profession: 'all',
      specialization: '',
      location: '',
      status: 'all',
      minRating: 0,
      maxFee: 0,
      experience: 'all',
      dateRange: 'all',
      sortBy: 'name',
      sortOrder: 'asc'
    });
  };

  // Filter professionals based on current filters
  const filteredProfessionals = mockProfessionals.filter(professional => {
    const matchesSearch = !filters.search || 
      professional.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      professional.profession.toLowerCase().includes(filters.search.toLowerCase()) ||
      professional.specialization.toLowerCase().includes(filters.search.toLowerCase()) ||
      professional.location.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesProfession = filters.profession === 'all' || professional.profession === filters.profession;
    const matchesSpecialization = !filters.specialization || 
      professional.specialization.toLowerCase().includes(filters.specialization.toLowerCase());
    const matchesLocation = !filters.location || 
      professional.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesStatus = filters.status === 'all' || professional.status === filters.status;
    const matchesMinRating = filters.minRating === 0 || (professional.rating || 0) >= filters.minRating;
    const matchesMaxFee = filters.maxFee === 0 || professional.consultationFee <= filters.maxFee;
    
    return matchesSearch && matchesProfession && matchesSpecialization && 
           matchesLocation && matchesStatus && matchesMinRating && matchesMaxFee;
  }).sort((a, b) => {
    const { sortBy, sortOrder } = filters;
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'rating':
        comparison = (a.rating || 0) - (b.rating || 0);
        break;
      case 'experience':
        comparison = a.experience.localeCompare(b.experience);
        break;
      case 'fee':
        comparison = a.consultationFee - b.consultationFee;
        break;
      case 'joinedDate':
        comparison = new Date(a.joinedDate || '').getTime() - new Date(b.joinedDate || '').getTime();
        break;
      default:
        comparison = 0;
    }
    
    return sortOrder === 'desc' ? -comparison : comparison;
  });

  const openModal = (professional: Professional, mode: 'view' | 'edit' | 'approve') => {
    setSelectedProfessional(professional);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProfessional(null);
    setIsModalOpen(false);
  };

  const handleSaveProfessional = (updatedProfessional: Professional) => {
    // Here you would typically make an API call to update the professional data
    // For this example, we'll just update the mock data
    console.log("Saving professional:", updatedProfessional);
    // Update the professional in the mock data
    const updatedProfessionals = mockProfessionals.map(professional =>
      professional.id === updatedProfessional.id ? updatedProfessional : professional
    );
    // You would also want to update the state with the new data
    // setProfessionals(updatedProfessionals);
    closeModal();
  };

  const updateProfessionalStatus = (id: number, newStatus: string) => {
    // Here you would typically make an API call to update the professional's status
    // For this example, we'll just update the mock data
    console.log(`Updating professional ${id} status to: ${newStatus}`);
    // Update the status in the mock data
    const updatedProfessionals = mockProfessionals.map(professional =>
      professional.id === id ? { ...professional, status: newStatus } : professional
    );
    // You would also want to update the state with the new data
    // setProfessionals(updatedProfessionals);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your platform efficiently.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="professionals">
              <Users className="h-4 w-4 mr-2" />
              Professionals
            </TabsTrigger>
            <TabsTrigger value="articles">
              <BookOpen className="h-4 w-4 mr-2" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="documents">
              <FileText className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="support">
              <HelpCircle className="h-4 w-4 mr-2" />
              Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="professionals" className="space-y-6">
            <AdvancedSearch
              filters={filters}
              onFiltersChange={setFilters}
              onReset={handleResetFilters}
              resultCount={filteredProfessionals.length}
            />

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Professional Management
                </CardTitle>
                <CardDescription>
                  Manage professional applications and profiles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Professional</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Profession</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Applied Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Fee</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Rating</th>
                        <th className="text-right py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProfessionals.map((professional) => (
                        <tr key={professional.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{professional.name}</div>
                              <div className="text-sm text-gray-500">{professional.email}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium">{professional.profession}</div>
                              <div className="text-sm text-gray-500">{professional.specialization}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant={
                              professional.status === 'approved' ? 'default' :
                              professional.status === 'pending' ? 'secondary' : 'destructive'
                            }>
                              {professional.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">
                            {professional.appliedDate}
                          </td>
                          <td className="py-4 px-4 text-sm font-medium">
                            ${professional.consultationFee}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{professional.rating || 'N/A'}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2 justify-end">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => openModal(professional, 'view')}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => openModal(professional, 'edit')}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              {professional.status === 'pending' && (
                                <>
                                  <Button
                                    size="sm"
                                    className="bg-green-600 hover:bg-green-700"
                                    onClick={() => openModal(professional, 'approve')}
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => updateProfessionalStatus(professional.id, 'rejected')}
                                  >
                                    <XCircle className="h-4 w-4" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="articles">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Article Management
                </CardTitle>
                <CardDescription>
                  Manage all articles published by professionals on the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ArticleManager isAdmin={true} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
                <CardDescription>View and manage documents.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add document management content here */}
                <p>This is where document management content will go.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Configure platform settings.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add settings content here */}
                <p>This is where settings content will go.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
                <CardDescription>Get help and support.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add support content here */}
                <p>This is where support content will go.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <ProfessionalDetailModal
        professional={selectedProfessional}
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveProfessional}
        mode={modalMode}
      />
    </div>
  );
};

export default AdminDashboard;
