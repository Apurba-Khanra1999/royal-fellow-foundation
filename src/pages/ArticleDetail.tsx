
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  Star, 
  Heart,
  Share2,
  BookOpen
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

const ArticleDetail = () => {
  const { id } = useParams();

  // Mock article data - in real app, this would come from API
  const article: Article = {
    id: 1,
    title: "Understanding Heart Disease Prevention: A Comprehensive Guide",
    content: `Heart disease remains the leading cause of death worldwide, but the good news is that many cases are preventable through lifestyle modifications and early intervention. In this comprehensive guide, we'll explore the latest evidence-based strategies for preventing cardiovascular disease.

## Understanding Risk Factors

Cardiovascular disease risk factors can be divided into two categories: modifiable and non-modifiable. Non-modifiable factors include age, gender, and genetic predisposition. However, the modifiable factors are where we can make the most significant impact.

### Modifiable Risk Factors:

1. **High Blood Pressure (Hypertension)**
   - Often called the "silent killer"
   - Target: Less than 130/80 mmHg for most adults
   - Can be managed through diet, exercise, and medication

2. **High Cholesterol**
   - LDL cholesterol should be less than 100 mg/dL
   - HDL cholesterol should be 40 mg/dL or higher for men, 50 mg/dL or higher for women
   - Diet and statins can help manage cholesterol levels

3. **Smoking**
   - Increases risk of heart disease by 2-4 times
   - Quitting smoking reduces risk within 1-2 years
   - Even secondhand smoke exposure increases risk

4. **Diabetes**
   - Doubles the risk of heart disease
   - Good glycemic control is essential
   - HbA1c should be less than 7% for most diabetics

5. **Obesity**
   - BMI over 30 significantly increases risk
   - Waist circumference is also important
   - Even modest weight loss can reduce risk

## Lifestyle Interventions

### Diet and Nutrition

The Mediterranean diet has been extensively studied and shown to reduce cardiovascular events by up to 30%. Key components include:

- **Fruits and Vegetables**: Aim for 5-9 servings daily
- **Whole Grains**: Replace refined grains with whole grain options
- **Healthy Fats**: Olive oil, nuts, and fatty fish
- **Lean Proteins**: Fish, poultry, legumes
- **Limited Processed Foods**: Reduce sodium and added sugars

### Physical Activity

Regular exercise is one of the most powerful tools for heart disease prevention:

- **Aerobic Exercise**: 150 minutes of moderate intensity or 75 minutes of vigorous intensity weekly
- **Strength Training**: At least 2 days per week
- **Flexibility and Balance**: Yoga or stretching exercises
- **Daily Movement**: Take stairs, walk during breaks, park farther away

### Stress Management

Chronic stress contributes to heart disease through multiple pathways:

- **Meditation**: Even 10 minutes daily can be beneficial
- **Deep Breathing**: Simple techniques can be done anywhere
- **Regular Sleep**: 7-9 hours of quality sleep nightly
- **Social Connections**: Maintain strong relationships and support systems

## Medical Interventions

### Regular Health Screenings

Prevention starts with knowing your numbers:

- **Blood Pressure**: Check annually, more frequently if elevated
- **Cholesterol**: Every 4-6 years, starting at age 20
- **Blood Sugar**: Every 3 years, starting at age 45
- **BMI and Waist Circumference**: Monitor regularly

### Medications When Appropriate

Sometimes lifestyle changes aren't enough:

- **Statins**: For cholesterol management
- **ACE Inhibitors or ARBs**: For blood pressure control
- **Aspirin**: Low-dose for certain high-risk individuals
- **Diabetes Medications**: For glycemic control

## The Role of Technology

Modern technology offers new tools for heart health:

- **Wearable Devices**: Track activity, heart rate, and sleep
- **Mobile Apps**: Monitor diet, exercise, and medications
- **Telemedicine**: Regular check-ins with healthcare providers
- **Home Monitoring**: Blood pressure and glucose monitors

## Special Considerations

### Women and Heart Disease

Heart disease presents differently in women:

- Symptoms may be more subtle
- Risk increases after menopause
- Pregnancy complications can indicate future risk
- Hormonal factors play a significant role

### Age-Related Factors

Prevention strategies may vary by age:

- **Young Adults**: Focus on establishing healthy habits
- **Middle Age**: Intensive risk factor modification
- **Older Adults**: Balance benefits and risks of interventions

## The Economic Impact

Preventing heart disease isn't just about health—it's also economically beneficial:

- Heart disease costs the US over $200 billion annually
- Prevention is far more cost-effective than treatment
- Workplace wellness programs show positive ROI
- Early intervention prevents more expensive complications

## Conclusion

Heart disease prevention is multifaceted, requiring a comprehensive approach that addresses lifestyle factors, medical management, and regular monitoring. The key is starting early and maintaining consistency over time. Small changes can lead to significant improvements in cardiovascular health.

Remember, prevention is always better than treatment. By taking proactive steps today, you can significantly reduce your risk of developing heart disease and enjoy a longer, healthier life.

## Next Steps

If you're interested in learning more about heart disease prevention:

1. Schedule a visit with your healthcare provider
2. Start with one small change—like a 10-minute daily walk
3. Track your progress with a health app or journal
4. Consider joining a cardiac rehabilitation program if you're at high risk

Prevention is a journey, not a destination. Every step you take toward a healthier lifestyle brings you closer to a heart-healthy future.`,
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
    featuredImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    views: 1234,
    rating: 4.8
  };

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      } else if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      } else if (paragraph.startsWith('- **')) {
        return (
          <div key={index} className="my-4">
            <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
          </div>
        );
      } else {
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/articles">
            <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {article.featuredImage && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={article.featuredImage} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <Card className="mb-8 shadow-lg border-border">
            <CardContent className="p-8">
              <div className="mb-6">
                <Badge className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground">{article.category}</Badge>
                <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
                  {article.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>
              </div>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium text-foreground">{article.authorName}</span>
                  <Badge variant="outline" className="border-primary text-primary">{article.authorProfession}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Published {article.createdAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{article.views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>{article.rating}</span>
                </div>
              </div>

              {/* Article Actions */}
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10">
                  <Heart className="h-4 w-4" />
                  Like Article
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10">
                  <BookOpen className="h-4 w-4" />
                  Save for Later
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Article Content */}
          <Card className="shadow-lg border-border">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                {formatContent(article.content)}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary/10 hover:text-primary border-primary/20">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Card */}
              <div className="mt-8 pt-8 border-t border-border">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground">{article.authorName}</h4>
                        <p className="text-primary font-medium">{article.authorProfession}</p>
                        <p className="text-muted-foreground mt-2">
                          Dr. Smith is a board-certified cardiologist with over 12 years of experience 
                          in interventional cardiology. He specializes in preventive care and has published 
                          numerous research papers in peer-reviewed journals.
                        </p>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
