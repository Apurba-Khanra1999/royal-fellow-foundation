
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Mail, Lock, User, Phone, Building, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

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

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        full_name: userFormData.name,
        email_address: userFormData.email,
        phone_number: userFormData.phone,
        password: userFormData.password,
        confirm_password: userFormData.confirmPassword
      });

      // Check for success status
      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Registration Successful",
          description: "Welcome to Royal Fellow Foundation! Please login to continue.",
        });
        navigate("/login");
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error?.response?.data?.message || error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo and Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-[#895129] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">RFF</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Royal Fellow Foundation</span>
          </Link>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-200">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="mt-2 text-sm text-gray-600">Join our professional community</p>
          </div>

          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100">
              <TabsTrigger 
                value="user" 
                className="flex items-center gap-2 data-[state=active]:bg-[#895129] data-[state=active]:text-white"
              >
                <User className="h-4 w-4" />
                User
              </TabsTrigger>
              <TabsTrigger 
                value="professional" 
                className="flex items-center gap-2 data-[state=active]:bg-[#895129] data-[state=active]:text-white"
              >
                <Building className="h-4 w-4" />
                Professional
              </TabsTrigger>
            </TabsList>

            {/* User Registration */}
            <TabsContent value="user">
              <form onSubmit={handleUserRegister} className="space-y-6">
                <div>
                  <Label htmlFor="user-name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="user-name"
                      type="text"
                      placeholder="Enter your full name"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={userFormData.name}
                      onChange={(e) => setUserFormData({...userFormData, name: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="user-email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="user-email"
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={userFormData.email}
                      onChange={(e) => setUserFormData({...userFormData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="user-phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="user-phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={userFormData.phone}
                      onChange={(e) => setUserFormData({...userFormData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="user-password" className="block text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="user-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={userFormData.password}
                      onChange={(e) => setUserFormData({...userFormData, password: e.target.value})}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="user-confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="user-confirm-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={userFormData.confirmPassword}
                      onChange={(e) => setUserFormData({...userFormData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#895129] hover:bg-[#795025] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#895129] disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </div>
              </form>
            </TabsContent>

            {/* Professional Registration */}
            <TabsContent value="professional">
              <form onSubmit={handleProfessionalRegister} className="space-y-4">
                <div>
                  <Label htmlFor="prof-name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="prof-name"
                      type="text"
                      placeholder="Enter your full name"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={professionalFormData.name}
                      onChange={(e) => setProfessionalFormData({...professionalFormData, name: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="prof-email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="prof-email"
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={professionalFormData.email}
                      onChange={(e) => setProfessionalFormData({...professionalFormData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="prof-phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="prof-phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={professionalFormData.phone}
                      onChange={(e) => setProfessionalFormData({...professionalFormData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="prof-profession" className="block text-sm font-medium text-gray-700">
                    Profession
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="prof-profession"
                      type="text"
                      placeholder="e.g., Doctor, Lawyer, CA"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={professionalFormData.profession}
                      onChange={(e) => setProfessionalFormData({...professionalFormData, profession: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="prof-experience" className="block text-sm font-medium text-gray-700">
                    Years of Experience
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="prof-experience"
                      type="number"
                      placeholder="Years of experience"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={professionalFormData.experience}
                      onChange={(e) => setProfessionalFormData({...professionalFormData, experience: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="prof-license" className="block text-sm font-medium text-gray-700">
                    License/Registration Number
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="prof-license"
                      type="text"
                      placeholder="Professional license number"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={professionalFormData.license}
                      onChange={(e) => setProfessionalFormData({...professionalFormData, license: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="prof-password" className="block text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="prof-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={professionalFormData.password}
                      onChange={(e) => setProfessionalFormData({...professionalFormData, password: e.target.value})}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="prof-confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="prof-confirm-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
                      value={professionalFormData.confirmPassword}
                      onChange={(e) => setProfessionalFormData({...professionalFormData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                  <p className="text-sm text-amber-800">
                    Professional accounts require verification. You'll receive approval confirmation within 24-48 hours.
                  </p>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#895129] hover:bg-[#795025] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#895129] disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link 
                  to="/login" 
                  className="font-medium text-[#895129] hover:text-[#795025] transition-colors duration-200"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-sm text-gray-600 hover:text-[#895129] transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Eye, EyeOff, Mail, Lock, User, Phone, Building, FileText } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [userFormData, setUserFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [professionalFormData, setProfessionalFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     profession: "",
//     experience: "",
//     license: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const handleUserRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (userFormData.password !== userFormData.confirmPassword) {
//       toast({
//         title: "Error",
//         description: "Passwords don't match",
//         variant: "destructive"
//       });
//       return;
//     }
//     setIsLoading(true);

//     setTimeout(() => {
//       toast({
//         title: "Registration Successful",
//         description: "Welcome to Royal Fellow Foundation! Please login to continue.",
//       });
//       navigate("/login");
//       setIsLoading(false);
//     }, 1000);
//   };

//   const handleProfessionalRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (professionalFormData.password !== professionalFormData.confirmPassword) {
//       toast({
//         title: "Error",
//         description: "Passwords don't match",
//         variant: "destructive"
//       });
//       return;
//     }
//     setIsLoading(true);

//     setTimeout(() => {
//       toast({
//         title: "Professional Registration Submitted",
//         description: "Your application is under review. You'll be notified once approved.",
//       });
//       navigate("/login");
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         {/* Logo and Header */}
//         <div className="text-center">
//           <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-8">
//             <div className="w-12 h-12 bg-[#895129] rounded-xl flex items-center justify-center">
//               <span className="text-white font-bold text-lg">RF</span>
//             </div>
//             <span className="text-2xl font-bold text-gray-900">Royal Fellow Foundation</span>
//           </Link>
//         </div>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-200">
//           <div className="mb-6 text-center">
//             <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
//             <p className="mt-2 text-sm text-gray-600">Join our professional community</p>
//           </div>

//           <Tabs defaultValue="user" className="w-full">
//             <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100">
//               <TabsTrigger 
//                 value="user" 
//                 className="flex items-center gap-2 data-[state=active]:bg-[#895129] data-[state=active]:text-white"
//               >
//                 <User className="h-4 w-4" />
//                 User
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="professional" 
//                 className="flex items-center gap-2 data-[state=active]:bg-[#895129] data-[state=active]:text-white"
//               >
//                 <Building className="h-4 w-4" />
//                 Professional
//               </TabsTrigger>
//             </TabsList>

//             {/* User Registration */}
//             <TabsContent value="user">
//               <form onSubmit={handleUserRegister} className="space-y-6">
//                 <div>
//                   <Label htmlFor="user-name" className="block text-sm font-medium text-gray-700">
//                     Full Name
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <User className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="user-name"
//                       type="text"
//                       placeholder="Enter your full name"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={userFormData.name}
//                       onChange={(e) => setUserFormData({...userFormData, name: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="user-email" className="block text-sm font-medium text-gray-700">
//                     Email Address
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Mail className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="user-email"
//                       type="email"
//                       placeholder="Enter your email"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={userFormData.email}
//                       onChange={(e) => setUserFormData({...userFormData, email: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="user-phone" className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Phone className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="user-phone"
//                       type="tel"
//                       placeholder="Enter your phone number"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={userFormData.phone}
//                       onChange={(e) => setUserFormData({...userFormData, phone: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="user-password" className="block text-sm font-medium text-gray-700">
//                     Password
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="user-password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Create a password"
//                       className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={userFormData.password}
//                       onChange={(e) => setUserFormData({...userFormData, password: e.target.value})}
//                       required
//                     />
//                     <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                       <button
//                         type="button"
//                         className="text-gray-400 hover:text-gray-600 focus:outline-none"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="user-confirm-password" className="block text-sm font-medium text-gray-700">
//                     Confirm Password
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="user-confirm-password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Confirm your password"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={userFormData.confirmPassword}
//                       onChange={(e) => setUserFormData({...userFormData, confirmPassword: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Button
//                     type="submit"
//                     className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#895129] hover:bg-[#795025] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#895129] disabled:opacity-50"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Creating Account..." : "Create Account"}
//                   </Button>
//                 </div>
//               </form>
//             </TabsContent>

//             {/* Professional Registration */}
//             <TabsContent value="professional">
//               <form onSubmit={handleProfessionalRegister} className="space-y-4">
//                 <div>
//                   <Label htmlFor="prof-name" className="block text-sm font-medium text-gray-700">
//                     Full Name
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <User className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="prof-name"
//                       type="text"
//                       placeholder="Enter your full name"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={professionalFormData.name}
//                       onChange={(e) => setProfessionalFormData({...professionalFormData, name: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="prof-email" className="block text-sm font-medium text-gray-700">
//                     Email Address
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Mail className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="prof-email"
//                       type="email"
//                       placeholder="Enter your email"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={professionalFormData.email}
//                       onChange={(e) => setProfessionalFormData({...professionalFormData, email: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="prof-phone" className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Phone className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="prof-phone"
//                       type="tel"
//                       placeholder="Enter your phone number"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={professionalFormData.phone}
//                       onChange={(e) => setProfessionalFormData({...professionalFormData, phone: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="prof-profession" className="block text-sm font-medium text-gray-700">
//                     Profession
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Building className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="prof-profession"
//                       type="text"
//                       placeholder="e.g., Doctor, Lawyer, CA"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={professionalFormData.profession}
//                       onChange={(e) => setProfessionalFormData({...professionalFormData, profession: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="prof-experience" className="block text-sm font-medium text-gray-700">
//                     Years of Experience
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FileText className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="prof-experience"
//                       type="number"
//                       placeholder="Years of experience"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={professionalFormData.experience}
//                       onChange={(e) => setProfessionalFormData({...professionalFormData, experience: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="prof-license" className="block text-sm font-medium text-gray-700">
//                     License/Registration Number
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FileText className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="prof-license"
//                       type="text"
//                       placeholder="Professional license number"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={professionalFormData.license}
//                       onChange={(e) => setProfessionalFormData({...professionalFormData, license: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="prof-password" className="block text-sm font-medium text-gray-700">
//                     Password
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="prof-password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Create a password"
//                       className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={professionalFormData.password}
//                       onChange={(e) => setProfessionalFormData({...professionalFormData, password: e.target.value})}
//                       required
//                     />
//                     <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                       <button
//                         type="button"
//                         className="text-gray-400 hover:text-gray-600 focus:outline-none"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="prof-confirm-password" className="block text-sm font-medium text-gray-700">
//                     Confirm Password
//                   </Label>
//                   <div className="mt-1 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       id="prof-confirm-password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Confirm your password"
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#895129] focus:border-[#895129]"
//                       value={professionalFormData.confirmPassword}
//                       onChange={(e) => setProfessionalFormData({...professionalFormData, confirmPassword: e.target.value})}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
//                   <p className="text-sm text-amber-800">
//                     Professional accounts require verification. You'll receive approval confirmation within 24-48 hours.
//                   </p>
//                 </div>

//                 <div>
//                   <Button
//                     type="submit"
//                     className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#895129] hover:bg-[#795025] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#895129] disabled:opacity-50"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Submitting Application..." : "Submit Application"}
//                   </Button>
//                 </div>
//               </form>
//             </TabsContent>
//           </Tabs>

//           <div className="mt-6">
//             <div className="text-center">
//               <p className="text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <Link 
//                   to="/login" 
//                   className="font-medium text-[#895129] hover:text-[#795025] transition-colors duration-200"
//                 >
//                   Sign in here
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-6">
//           <Link 
//             to="/" 
//             className="text-sm text-gray-600 hover:text-[#895129] transition-colors duration-200"
//           >
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;