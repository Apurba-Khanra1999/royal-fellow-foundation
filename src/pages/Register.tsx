
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Mail, Lock, User, Phone, Building, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [professionalFormData, setProfessionalFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    experience: "",
    license: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleUserRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userFormData.password !== userFormData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      toast({
        title: "Registration Successful",
        description: "Welcome to ProConnect! Please login to continue.",
      });
      navigate("/login");
      setIsLoading(false);
    }, 1000);
  };

  const handleProfessionalRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (professionalFormData.password !== professionalFormData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      toast({
        title: "Professional Registration Submitted",
        description: "Your application is under review. You'll be notified once approved.",
      });
      navigate("/login");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">PC</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">ProConnect</span>
          </Link>
          <p className="text-gray-600 mt-2">Create your account</p>
        </div>

        <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-center text-gray-900">
              Join ProConnect
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Choose your account type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="user" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  User
                </TabsTrigger>
                <TabsTrigger value="professional" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Professional
                </TabsTrigger>
              </TabsList>

              {/* User Registration */}
              <TabsContent value="user">
                <form onSubmit={handleUserRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="user-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={userFormData.name}
                        onChange={(e) => setUserFormData({...userFormData, name: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="user-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={userFormData.email}
                        onChange={(e) => setUserFormData({...userFormData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="user-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="pl-10"
                        value={userFormData.phone}
                        onChange={(e) => setUserFormData({...userFormData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="user-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10"
                        value={userFormData.password}
                        onChange={(e) => setUserFormData({...userFormData, password: e.target.value})}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="user-confirm-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10"
                        value={userFormData.confirmPassword}
                        onChange={(e) => setUserFormData({...userFormData, confirmPassword: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>

              {/* Professional Registration */}
              <TabsContent value="professional">
                <form onSubmit={handleProfessionalRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="prof-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="prof-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={professionalFormData.name}
                        onChange={(e) => setProfessionalFormData({...professionalFormData, name: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="prof-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={professionalFormData.email}
                        onChange={(e) => setProfessionalFormData({...professionalFormData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="prof-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="pl-10"
                        value={professionalFormData.phone}
                        onChange={(e) => setProfessionalFormData({...professionalFormData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-profession">Profession</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="prof-profession"
                        type="text"
                        placeholder="e.g., Doctor, Lawyer, CA"
                        className="pl-10"
                        value={professionalFormData.profession}
                        onChange={(e) => setProfessionalFormData({...professionalFormData, profession: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-experience">Years of Experience</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="prof-experience"
                        type="number"
                        placeholder="Years of experience"
                        className="pl-10"
                        value={professionalFormData.experience}
                        onChange={(e) => setProfessionalFormData({...professionalFormData, experience: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-license">License/Registration Number</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="prof-license"
                        type="text"
                        placeholder="Professional license number"
                        className="pl-10"
                        value={professionalFormData.license}
                        onChange={(e) => setProfessionalFormData({...professionalFormData, license: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="prof-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10"
                        value={professionalFormData.password}
                        onChange={(e) => setProfessionalFormData({...professionalFormData, password: e.target.value})}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="prof-confirm-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10"
                        value={professionalFormData.confirmPassword}
                        onChange={(e) => setProfessionalFormData({...professionalFormData, confirmPassword: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-sm text-amber-800">
                      Professional accounts require verification. You'll receive approval confirmation within 24-48 hours.
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
