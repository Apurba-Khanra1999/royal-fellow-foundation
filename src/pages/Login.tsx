
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Mail, Lock, Shield, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: ""
  });
  const [adminFormData, setAdminFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back! Redirecting to dashboard...",
      });
      localStorage.setItem("userType", "user");
      localStorage.setItem("isAuthenticated", "true");
      navigate("/professional-dashboard");
      setIsLoading(false);
    }, 1000);
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Admin Login Successful",
        description: "Welcome to admin dashboard!",
      });
      localStorage.setItem("userType", "admin");
      localStorage.setItem("isAuthenticated", "true");
      navigate("/admin");
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
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-center text-gray-900">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Choose your login type to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="user" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  User Login
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Admin Login
                </TabsTrigger>
              </TabsList>

              {/* User Login */}
              <TabsContent value="user">
                <form onSubmit={handleUserLogin} className="space-y-4">
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
                    <Label htmlFor="user-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="user-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
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
                  <div className="flex items-center justify-between">
                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                      Forgot password?
                    </Link>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </TabsContent>

              {/* Admin Login */}
              <TabsContent value="admin">
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="Enter admin email"
                        className="pl-10"
                        value={adminFormData.email}
                        onChange={(e) => setAdminFormData({...adminFormData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Admin Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter admin password"
                        className="pl-10 pr-10"
                        value={adminFormData.password}
                        onChange={(e) => setAdminFormData({...adminFormData, password: e.target.value})}
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
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <p className="text-sm text-orange-800 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Admin access requires special permissions
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Admin Sign In"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
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

export default Login;
