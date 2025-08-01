
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Calendar, 
  User, 
  BookOpen, 
  Clock,
  ArrowRight,
  Filter,
  Star,
  Eye
} from "lucide-react";
import Header from "@/components/Header";

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  status: 'published';
  authorId: number;
  authorName: string;
  authorProfession: string;
  createdAt: string;
  updatedAt: string;
  readTime: number;
  tags: string[];
  featuredImage?: string;
  views: number;
  rating: number;
}

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [professionFilter, setProfessionFilter] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const articles: Article[] = [
    {
      id: 1,
      title: "Understanding Heart Disease Prevention: A Comprehensive Guide",
      content: "Heart disease remains the leading cause of death worldwide...",
      excerpt: "Learn about the latest preventive measures for heart disease and how lifestyle changes can make a significant impact on your cardiovascular health.",
      category: "Cardiology",
      status: "published",
      authorId: 1,
      authorName: "Dr. John Smith",
      authorProfession: "Cardiologist",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-16",
      readTime: 8,
      tags: ["heart", "prevention", "health", "cardiology"],
      featuredImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 1234,
      rating: 4.8
    },
    {
      id: 2,
      title: "Corporate Law Best Practices for Modern Businesses",
      content: "In today's complex business environment...",
      excerpt: "Essential guidelines for navigating corporate legal challenges in modern business environments and ensuring compliance.",
      category: "Corporate Law",
      status: "published",
      authorId: 2,
      authorName: "Advocate Jane Doe",
      authorProfession: "Corporate Lawyer",
      createdAt: "2024-01-20",
      updatedAt: "2024-01-20",
      readTime: 12,
      tags: ["corporate", "law", "business", "legal"],
      featuredImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 892,
      rating: 4.6
    },
    {
      id: 3,
      title: "Sustainable Civil Engineering: Building for the Future",
      content: "Environmental consciousness in civil engineering...",
      excerpt: "Explore how sustainable practices in civil engineering are shaping the future of construction and infrastructure development.",
      category: "Civil Engineering",
      status: "published",
      authorId: 3,
      authorName: "Er. David Lee",
      authorProfession: "Civil Engineer",
      createdAt: "2024-01-25",
      updatedAt: "2024-01-25",
      readTime: 10,
      tags: ["sustainability", "engineering", "construction", "environment"],
      featuredImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 567,
      rating: 4.7
    },
    {
      id: 4,
      title: "Modern Residential Design Trends for 2024",
      content: "The landscape of residential architecture is evolving...",
      excerpt: "Discover the latest trends in residential design that are defining modern living spaces and enhancing quality of life.",
      category: "Residential Design",
      status: "published",
      authorId: 4,
      authorName: "Ar. Sarah White",
      authorProfession: "Architect",
      createdAt: "2024-01-30",
      updatedAt: "2024-01-30",
      readTime: 6,
      tags: ["design", "architecture", "residential", "trends"],
      featuredImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 723,
      rating: 4.5
    },
    {
      id: 5,
      title: "Pediatric Care: Early Childhood Development Milestones",
      content: "Understanding child development is crucial...",
      excerpt: "A comprehensive guide to understanding early childhood development milestones and when to seek professional help.",
      category: "Pediatrics",
      status: "published",
      authorId: 5,
      authorName: "Dr. Michael Brown",
      authorProfession: "Pediatrician",
      createdAt: "2024-02-05",
      updatedAt: "2024-02-05",
      readTime: 9,
      tags: ["pediatrics", "development", "children", "health"],
      featuredImage: "https://images.unsplash.com/photo-1593350074319-18e751f47001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 945,
      rating: 4.9
    },
    {
      id: 6,
      title: "Financial Planning for Small Businesses",
      content: "Effective financial management is crucial for business success...",
      excerpt: "Learn essential financial planning strategies that can help small businesses thrive and grow sustainably.",
      category: "Finance",
      status: "published",
      authorId: 6,
      authorName: "CA Priya Sharma",
      authorProfession: "Chartered Accountant",
      createdAt: "2024-02-10",
      updatedAt: "2024-02-10",
      readTime: 7,
      tags: ["finance", "business", "planning", "accounting"],
      featuredImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 678,
      rating: 4.4
    }
  ];

  const categories = [...new Set(articles.map(article => article.category))];
  const professions = [...new Set(articles.map(article => article.authorProfession))];

  const filteredAndSortedArticles = articles
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.authorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = categoryFilter === "all" || article.category === categoryFilter;
      const matchesProfession = professionFilter === "all" || article.authorProfession === professionFilter;
      
      return matchesSearch && matchesCategory && matchesProfession;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        case "oldest":
          return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
        case "popular":
          return b.views - a.views;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const featuredArticle = articles.find(article => article.views > 1000);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Professional Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover expert knowledge and insights from verified professionals across various fields
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-80">
            <Card className="sticky top-24 shadow-lg border-border">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Filter className="h-5 w-5" />
                  Filter & Search
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Search Articles</label>
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="border-border focus:border-primary">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border shadow-lg z-50">
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Profession</label>
                  <Select value={professionFilter} onValueChange={setProfessionFilter}>
                    <SelectTrigger className="border-border focus:border-primary">
                      <SelectValue placeholder="All Professions" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border shadow-lg z-50">
                      <SelectItem value="all">All Professions</SelectItem>
                      {professions.map(profession => (
                        <SelectItem key={profession} value={profession}>{profession}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="border-border focus:border-primary">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border shadow-lg z-50">
                      <SelectItem value="latest">Latest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Quick Stats */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-3">Quick Stats</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Total Articles:</span>
                      <span className="font-medium text-primary">{articles.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Filtered Results:</span>
                      <span className="font-medium text-primary">{filteredAndSortedArticles.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Categories:</span>
                      <span className="font-medium text-primary">{categories.length}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Article */}
            {featuredArticle && (
              <Card className="mb-8 bg-primary/10 border-primary/20 shadow-xl">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground">Featured Article</Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{featuredArticle.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.authorName}</span>
                        <Badge variant="outline" className="border-primary text-primary">{featuredArticle.authorProfession}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredArticle.updatedAt}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{featuredArticle.readTime} min read</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>{featuredArticle.views} views</span>
                      </div>
                    </div>
                    <Link to={`/article/${featuredArticle.id}`}>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Read Article <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Articles Grid - 3 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {filteredAndSortedArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all duration-300 group border-border hover:border-primary/20">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={article.featuredImage || "/placeholder.svg"} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-primary text-primary">{article.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-yellow-600">
                        <Star className="h-3 w-3 fill-current" />
                        <span>{article.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{article.authorName}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime} min</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-1">
                        {article.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Eye className="h-3 w-3" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <Link to={`/article/${article.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-primary/90">
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAndSortedArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Articles Found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
