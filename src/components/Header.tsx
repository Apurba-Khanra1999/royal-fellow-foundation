
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  User, 
  Bell,
  LogIn,
  UserPlus,
  Shield,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated] = useState(false); // This would come from your auth context

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">RFF</span>
            </div>
            {/* <img src={"./logo.jpg"} width="130" height="40" /> */}
            <span className="text-xl font-bold text-gray-900">Royal Fellow Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/professionals" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Find Experts
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Categories
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              How it Works
            </Link>
            <Link to="/for-professionals" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              For Professionals
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600" asChild>
                  <Link to="/professional-dashboard">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Professional
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600" asChild>
                  <Link to="/admin">
                    <Shield className="h-4 w-4 mr-2" />
                    Admin
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600" asChild>
                  <Link to="/login">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </Link>
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white" asChild>
                  <Link to="/register">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/professionals" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Experts
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                to="/for-professionals" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                For Professionals
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <>
                    <Button variant="ghost" className="justify-start text-gray-700 hover:text-blue-600" asChild>
                      <Link to="/professional-dashboard" onClick={() => setIsMenuOpen(false)}>
                        <Briefcase className="h-4 w-4 mr-2" />
                        Professional Dashboard
                      </Link>
                    </Button>
                    <Button variant="ghost" className="justify-start text-gray-700 hover:text-blue-600" asChild>
                      <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                        <Shield className="h-4 w-4 mr-2" />
                        Admin Panel
                      </Link>
                    </Button>
                    <Button variant="ghost" className="justify-start text-gray-700 hover:text-blue-600">
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" className="justify-start text-gray-700 hover:text-blue-600" asChild>
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        <LogIn className="h-4 w-4 mr-2" />
                        Sign In
                      </Link>
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white" asChild>
                      <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Sign Up
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
