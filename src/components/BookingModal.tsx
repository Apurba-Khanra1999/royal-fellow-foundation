
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone,
  CheckCircle,
  ArrowLeft,
  CreditCard
} from "lucide-react";
import { toast } from "sonner";

interface BookingModalProps {
  professional: {
    name: string;
    profession: string;
    consultationFee: number;
    image: string;
    availability: Record<string, string[]>;
  };
  onClose: () => void;
}

const BookingModal = ({ professional, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1); // 1: Select Time, 2: Personal Info, 3: Confirmation
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("online");
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    reason: ""
  });

  const handleTimeSelection = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setStep(2);
  };

  const handlePersonalInfoSubmit = () => {
    if (!personalInfo.name || !personalInfo.email || !personalInfo.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    setStep(3);
  };

  const handleBookingConfirm = () => {
    // Simulate booking process
    toast.success("Appointment booked successfully! Confirmation sent to your email.");
    onClose();
  };

  const getDaysOfWeek = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      const dateStr = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
      
      if (professional.availability[dayName]) {
        days.push({
          dayName,
          dateStr,
          fullDate: date.toISOString().split('T')[0],
          slots: professional.availability[dayName]
        });
      }
    }
    
    return days;
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            {step > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep(step - 1)}
                className="p-1"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            Book Appointment with {professional.name}
          </DialogTitle>
        </DialogHeader>

        {/* Step 1: Time Selection */}
        {step === 1 && (
          <div className="space-y-6">
            {/* Professional Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{professional.name}</h3>
                    <p className="text-blue-600">{professional.profession}</p>
                    <p className="text-gray-600">Consultation Fee: ${professional.consultationFee}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Type */}
            <div>
              <h4 className="font-semibold mb-3">Appointment Type</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant={appointmentType === "online" ? "default" : "outline"}
                  onClick={() => setAppointmentType("online")}
                  className="justify-start h-auto p-4"
                >
                  <div className="text-left">
                    <div className="font-semibold">Online Consultation</div>
                    <div className="text-sm opacity-70">Video/Phone call</div>
                  </div>
                </Button>
                <Button
                  variant={appointmentType === "offline" ? "default" : "outline"}
                  onClick={() => setAppointmentType("offline")}
                  className="justify-start h-auto p-4"
                >
                  <div className="text-left">
                    <div className="font-semibold">In-Person Visit</div>
                    <div className="text-sm opacity-70">At clinic</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Available Slots */}
            <div>
              <h4 className="font-semibold mb-3">Select Date & Time</h4>
              <div className="space-y-4">
                {getDaysOfWeek().map((day) => (
                  <div key={day.fullDate} className="border rounded-lg p-4">
                    <h5 className="font-medium mb-3">
                      {day.dayName} - {day.dateStr}
                    </h5>
                    <div className="grid grid-cols-3 gap-2">
                      {day.slots.map((time) => (
                        <Button
                          key={`${day.fullDate}-${time}`}
                          variant="outline"
                          size="sm"
                          onClick={() => handleTimeSelection(day.fullDate, time)}
                          className="justify-center"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {step === 2 && (
          <div className="space-y-6">
            {/* Selected Appointment */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">
                    {new Date(selectedDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">{selectedTime}</span>
                  <Badge variant="secondary" className="ml-auto">
                    {appointmentType === "online" ? "Online" : "In-Person"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information Form */}
            <div className="space-y-4">
              <h4 className="font-semibold">Personal Information</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      value={personalInfo.name}
                      onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                      className="pl-10"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      className="pl-10"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    value={personalInfo.phone}
                    onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                    className="pl-10"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Reason for Consultation
                </label>
                <Textarea
                  value={personalInfo.reason}
                  onChange={(e) => setPersonalInfo({...personalInfo, reason: e.target.value})}
                  placeholder="Briefly describe your concern or reason for the appointment"
                  rows={3}
                />
              </div>
            </div>

            <Button onClick={handlePersonalInfoSubmit} className="w-full">
              Continue to Confirmation
            </Button>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Confirm Your Appointment
              </h3>
              <p className="text-gray-600">
                Please review your appointment details below
              </p>
            </div>

            {/* Appointment Summary */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{professional.name}</h4>
                    <p className="text-sm text-blue-600">{professional.profession}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <Badge variant="secondary">
                      {appointmentType === "online" ? "Online Consultation" : "In-Person Visit"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Patient:</span>
                    <span className="font-medium">{personalInfo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{personalInfo.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium">{personalInfo.phone}</span>
                  </div>
                  {personalInfo.reason && (
                    <div>
                      <span className="text-gray-600">Reason:</span>
                      <p className="mt-1 text-sm bg-gray-50 p-2 rounded">
                        {personalInfo.reason}
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-green-600">
                      ${professional.consultationFee}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Payment on appointment</span>
                  <Badge variant="outline" className="ml-auto">No advance payment</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                Back to Edit
              </Button>
              <Button onClick={handleBookingConfirm} className="flex-1 bg-green-600 hover:bg-green-700">
                Confirm Booking
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
