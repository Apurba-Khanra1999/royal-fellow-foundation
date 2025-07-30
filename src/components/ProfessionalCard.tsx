
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
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProfessionalProps {
  professional: {
    id: number;
    name: string;
    profession: string;
    location: string;
    rating: number;
    reviews: number;
    experience: number;
    fee: number;
    image: string;
    verified: boolean;
    nextAvailable: string;
  };
}

const ProfessionalCard = ({ professional }: ProfessionalProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Professional Image */}
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={professional.image}
            alt={professional.name}
            className="w-full h-full object-cover"
          />
          {professional.verified && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-green-500 hover:bg-green-500 text-white">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              {professional.nextAvailable}
            </Badge>
          </div>
        </div>

        {/* Professional Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {professional.name}
              </h3>
              <p className="font-semibold" style={{ color: '#895129' }}>{professional.profession}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">
                ${professional.fee}
              </div>
              <div className="text-sm text-gray-500">per session</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{professional.location}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="font-semibold">{professional.rating}</span>
              <span className="text-gray-500 ml-1">({professional.reviews} reviews)</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>{professional.experience} years exp.</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Link to={`/professional/${professional.id}`} className="flex-1">
              <Button 
                className="w-full text-white"
                style={{ backgroundColor: '#895129' }}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="border-gray-300 hover:bg-gray-50">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalCard;
