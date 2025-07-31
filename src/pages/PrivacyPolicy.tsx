
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Privacy Policy
          </h1>
          
          <Card className="mb-6">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, contact us, or participate in our surveys. This may include your name, 
                  email address, phone number, and other contact information.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <ul className="text-muted-foreground mb-6 space-y-2">
                  <li>• To provide, maintain, and improve our services</li>
                  <li>• To process transactions and send related information</li>
                  <li>• To communicate with you about our services</li>
                  <li>• To personalize your experience on our platform</li>
                  <li>• To comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information with trusted service providers who assist us in operating our platform, 
                  conducting our business, or serving you, as long as they agree to keep this information confidential.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground mb-6">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze site traffic, and understand where our visitors are coming from. You can control 
                  cookie preferences through your browser settings.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-6">
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of certain communications from us. To exercise these rights, please contact us 
                  using the information provided below.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground mb-6">
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you are a parent or guardian and 
                  believe your child has provided us with personal information, please contact us.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@RoyalFellowFoundation.com
                  <br />
                  Phone: +1 (555) 123-4567
                  <br />
                  Address: 123 Main Street, City, State 12345
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
