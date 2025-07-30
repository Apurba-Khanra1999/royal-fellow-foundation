
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Search, 
  Filter, 
  X, 
  ChevronDown, 
  Calendar,
  MapPin,
  DollarSign,
  Star,
  SlidersHorizontal
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

interface AdvancedSearchProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onReset: () => void;
  resultCount?: number;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
  filters,
  onFiltersChange,
  onReset,
  resultCount
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const getActiveFiltersCount = () => {
    return Object.entries(filters).filter(([key, value]) => {
      if (key === 'search' || key === 'sortBy' || key === 'sortOrder') return false;
      return value !== '' && value !== 0 && value !== 'all';
    }).length;
  };

  const clearFilter = (key: keyof SearchFilters) => {
    const defaultValue = typeof filters[key] === 'number' ? 0 : key === 'sortBy' ? 'name' : key === 'sortOrder' ? 'asc' : 'all';
    updateFilter(key, defaultValue);
  };

  return (
    <Card className="w-full bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Advanced Search & Filters
          </CardTitle>
          <div className="flex items-center gap-2">
            {resultCount !== undefined && (
              <Badge variant="secondary" className="text-sm">
                {resultCount} results
              </Badge>
            )}
            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="h-4 w-4 mr-1" />
                  Filters
                  {getActiveFiltersCount() > 0 && (
                    <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 text-xs">
                      {getActiveFiltersCount()}
                    </Badge>
                  )}
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Main search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search professionals, specializations, or locations..."
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>

        {/* Quick filters */}
        <div className="flex flex-wrap gap-2">
          <Select value={filters.profession} onValueChange={(value) => updateFilter('profession', value)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Profession" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Professions</SelectItem>
              <SelectItem value="Doctor">Doctor</SelectItem>
              <SelectItem value="Lawyer">Lawyer</SelectItem>
              <SelectItem value="Engineer">Engineer</SelectItem>
              <SelectItem value="Architect">Architect</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.status} onValueChange={(value) => updateFilter('status', value)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="experience">Experience</SelectItem>
              <SelectItem value="fee">Consultation Fee</SelectItem>
              <SelectItem value="joinedDate">Join Date</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.sortOrder} onValueChange={(value) => updateFilter('sortOrder', value)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced filters */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Location
                </label>
                <Input
                  placeholder="Enter location..."
                  value={filters.location}
                  onChange={(e) => updateFilter('location', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Specialization</label>
                <Input
                  placeholder="Enter specialization..."
                  value={filters.specialization}
                  onChange={(e) => updateFilter('specialization', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Experience</label>
                <Select value={filters.experience} onValueChange={(value) => updateFilter('experience', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Experience</SelectItem>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  Minimum Rating
                </label>
                <Select value={filters.minRating.toString()} onValueChange={(value) => updateFilter('minRating', Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any Rating</SelectItem>
                    <SelectItem value="3">3+ Stars</SelectItem>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="4.5">4.5+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  Max Consultation Fee
                </label>
                <Input
                  type="number"
                  placeholder="Enter max fee..."
                  value={filters.maxFee || ''}
                  onChange={(e) => updateFilter('maxFee', Number(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Registration Date
                </label>
                <Select value={filters.dateRange} onValueChange={(value) => updateFilter('dateRange', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Time</SelectItem>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 3 months</SelectItem>
                    <SelectItem value="365">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <Button variant="outline" onClick={onReset} className="flex items-center gap-2">
                <X className="h-4 w-4" />
                Reset Filters
              </Button>
              
              <div className="flex gap-2">
                {getActiveFiltersCount() > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {Object.entries(filters).map(([key, value]) => {
                      if (key === 'search' || key === 'sortBy' || key === 'sortOrder' || !value || value === 'all') return null;
                      return (
                        <Badge key={key} variant="secondary" className="flex items-center gap-1">
                          {key}: {value}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => clearFilter(key as keyof SearchFilters)}
                          />
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default AdvancedSearch;
