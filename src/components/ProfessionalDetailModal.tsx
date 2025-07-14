
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Save, 
  User, 
  Briefcase, 
  Calendar, 
  Clock, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  DollarSign,
  FileText,
  Award,
  Plus,
  Minus,
  Edit,
  Trash2
} from "lucide-react";

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

interface ProfessionalDetailModalProps {
  professional: Professional | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (professional: Professional) => void;
  mode: 'view' | 'edit' | 'approve';
}

const ProfessionalDetailModal: React.FC<ProfessionalDetailModalProps> = ({
  professional,
  isOpen,
  onClose,
  onSave,
  mode
}) => {
  const [formData, setFormData] = useState<Professional | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  React.useEffect(() => {
    if (professional) {
      setFormData({
        ...professional,
        services: professional.services || [
          { id: 1, name: "Consultation", description: "General consultation", duration: 30, price: professional.consultationFee || 100, category: "General" }
        ],
        availability: professional.availability || [
          { id: 1, day: "Monday", startTime: "09:00", endTime: "17:00", isAvailable: true },
          { id: 2, day: "Tuesday", startTime: "09:00", endTime: "17:00", isAvailable: true },
          { id: 3, day: "Wednesday", startTime: "09:00", endTime: "17:00", isAvailable: true },
          { id: 4, day: "Thursday", startTime: "09:00", endTime: "17:00", isAvailable: true },
          { id: 5, day: "Friday", startTime: "09:00", endTime: "17:00", isAvailable: true },
          { id: 6, day: "Saturday", startTime: "10:00", endTime: "14:00", isAvailable: false },
          { id: 7, day: "Sunday", startTime: "10:00", endTime: "14:00", isAvailable: false }
        ],
        bio: professional.bio || "Experienced professional dedicated to providing quality services.",
        education: professional.education || "Relevant degree and certifications",
        certifications: professional.certifications || ["Professional License", "Board Certification"],
        languages: professional.languages || ["English"]
      });
    }
  }, [professional]);

  if (!formData) return null;

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const updateField = (field: string, value: any) => {
    setFormData(prev => prev ? { ...prev, [field]: value } : null);
  };

  const addService = () => {
    const newService: Service = {
      id: Date.now(),
      name: "",
      description: "",
      duration: 30,
      price: 100,
      category: "General"
    };
    setFormData(prev => prev ? {
      ...prev,
      services: [...(prev.services || []), newService]
    } : null);
  };

  const updateService = (id: number, field: string, value: any) => {
    setFormData(prev => prev ? {
      ...prev,
      services: prev.services?.map(service => 
        service.id === id ? { ...service, [field]: value } : service
      )
    } : null);
  };

  const removeService = (id: number) => {
    setFormData(prev => prev ? {
      ...prev,
      services: prev.services?.filter(service => service.id !== id)
    } : null);
  };

  const updateAvailability = (id: number, field: string, value: any) => {
    setFormData(prev => prev ? {
      ...prev,
      availability: prev.availability?.map(slot => 
        slot.id === id ? { ...slot, [field]: value } : slot
      )
    } : null);
  };

  const isEditable = mode === 'edit' || mode === 'approve';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <User className="h-6 w-6" />
            {formData.name} - Professional Details
          </DialogTitle>
          <DialogDescription>
            {mode === 'approve' ? 'Review and approve professional application' : 
             mode === 'edit' ? 'Edit professional details' : 'View professional profile'}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      disabled={!isEditable}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      disabled={!isEditable}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      disabled={!isEditable}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => updateField('location', e.target.value)}
                      disabled={!isEditable}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Professional Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profession</Label>
                    <Select
                      value={formData.profession}
                      onValueChange={(value) => updateField('profession', value)}
                      disabled={!isEditable}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Doctor">Doctor</SelectItem>
                        <SelectItem value="Lawyer">Lawyer</SelectItem>
                        <SelectItem value="Engineer">Engineer</SelectItem>
                        <SelectItem value="Architect">Architect</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input
                      id="specialization"
                      value={formData.specialization}
                      onChange={(e) => updateField('specialization', e.target.value)}
                      disabled={!isEditable}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => updateField('experience', e.target.value)}
                      disabled={!isEditable}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="license">License Number</Label>
                    <Input
                      id="license"
                      value={formData.license}
                      onChange={(e) => updateField('license', e.target.value)}
                      disabled={!isEditable}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Bio & Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => updateField('bio', e.target.value)}
                    disabled={!isEditable}
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="education">Education</Label>
                    <Textarea
                      id="education"
                      value={formData.education}
                      onChange={(e) => updateField('education', e.target.value)}
                      disabled={!isEditable}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="consultationFee">Consultation Fee ($)</Label>
                    <Input
                      id="consultationFee"
                      type="number"
                      value={formData.consultationFee}
                      onChange={(e) => updateField('consultationFee', Number(e.target.value))}
                      disabled={!isEditable}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Services Offered</h3>
              {isEditable && (
                <Button onClick={addService} size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Service
                </Button>
              )}
            </div>
            <div className="space-y-4">
              {formData.services?.map((service) => (
                <Card key={service.id}>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label>Service Name</Label>
                        <Input
                          value={service.name}
                          onChange={(e) => updateService(service.id, 'name', e.target.value)}
                          disabled={!isEditable}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Category</Label>
                        <Input
                          value={service.category}
                          onChange={(e) => updateService(service.id, 'category', e.target.value)}
                          disabled={!isEditable}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Duration (min)</Label>
                        <Input
                          type="number"
                          value={service.duration}
                          onChange={(e) => updateService(service.id, 'duration', Number(e.target.value))}
                          disabled={!isEditable}
                        />
                      </div>
                      <div className="space-y-2 flex items-end gap-2">
                        <div className="flex-1">
                          <Label>Price ($)</Label>
                          <Input
                            type="number"
                            value={service.price}
                            onChange={(e) => updateService(service.id, 'price', Number(e.target.value))}
                            disabled={!isEditable}
                          />
                        </div>
                        {isEditable && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeService(service.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={service.description}
                        onChange={(e) => updateService(service.id, 'description', e.target.value)}
                        disabled={!isEditable}
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="availability" className="space-y-4">
            <h3 className="text-lg font-semibold">Weekly Availability</h3>
            <div className="space-y-4">
              {formData.availability?.map((slot) => (
                <Card key={slot.id}>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div className="font-medium">{slot.day}</div>
                      <div className="space-y-2">
                        <Label>Start Time</Label>
                        <Input
                          type="time"
                          value={slot.startTime}
                          onChange={(e) => updateAvailability(slot.id, 'startTime', e.target.value)}
                          disabled={!isEditable}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>End Time</Label>
                        <Input
                          type="time"
                          value={slot.endTime}
                          onChange={(e) => updateAvailability(slot.id, 'endTime', e.target.value)}
                          disabled={!isEditable}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Available</Label>
                        <Select
                          value={slot.isAvailable ? "yes" : "no"}
                          onValueChange={(value) => updateAvailability(slot.id, 'isAvailable', value === "yes")}
                          disabled={!isEditable}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Available</SelectItem>
                            <SelectItem value="no">Not Available</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <h3 className="text-lg font-semibold">Documents & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Uploaded Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {formData.documents?.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm">{doc}</span>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    )) || <p className="text-gray-500">No documents uploaded</p>}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {formData.certifications?.map((cert, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <h3 className="text-lg font-semibold">Performance Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4" />
                    Rating
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{formData.rating || 0}</div>
                  <div className="text-sm text-gray-500">Average rating</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{formData.totalAppointments || 0}</div>
                  <div className="text-sm text-gray-500">Total bookings</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4" />
                    Earnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${formData.monthlyEarnings || 0}</div>
                  <div className="text-sm text-gray-500">Monthly earnings</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-3 pt-6 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          {isEditable && (
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfessionalDetailModal;
