
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Terms and Conditions
          </h1>
          
          <Card className="mb-6">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  By accessing and using RoyalFellowFoundation, you accept and agree to be bound by the terms and 
                  provision of this agreement. These Terms and Conditions govern your use of our website 
                  and services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily access and use RoyalFellowFoundation for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="text-muted-foreground mb-6 space-y-2">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose or for any public display</li>
                  <li>• Attempt to reverse engineer any software contained on the website</li>
                  <li>• Remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4">User Accounts</h2>
                <p className="text-muted-foreground mb-6">
                  When you create an account with us, you must provide information that is accurate, 
                  complete, and current at all times. You are responsible for safeguarding the password 
                  and for any activities that occur under your account.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Services</h2>
                <p className="text-muted-foreground mb-6">
                  RoyalFellowFoundation serves as a platform connecting users with professional service providers. 
                  We do not provide professional services directly and are not responsible for the quality, 
                  accuracy, or completeness of services provided by third-party professionals.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
                <p className="text-muted-foreground mb-6">
                  Payment for services is handled directly between users and service providers. RoyalFellowFoundation 
                  may charge platform fees as specified at the time of service booking. All fees are 
                  non-refundable unless otherwise specified.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Prohibited Uses</h2>
                <p className="text-muted-foreground mb-4">You may not use our service:</p>
                <ul className="text-muted-foreground mb-6 space-y-2">
                  <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>• To submit false or misleading information</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Content</h2>
                <p className="text-muted-foreground mb-6">
                  Our service allows you to post, link, store, share and otherwise make available certain 
                  information, text, graphics, videos, or other material. You are responsible for the content 
                  that you post to the service, including its legality, reliability, and appropriateness.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground mb-6">
                  We may terminate or suspend your account and bar access to the service immediately, 
                  without prior notice or liability, under our sole discretion, for any reason whatsoever 
                  and without limitation, including but not limited to a breach of the Terms.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  The information on this website is provided on an "as is" basis. To the fullest extent 
                  permitted by law, this Company excludes all representations, warranties, conditions and 
                  terms relating to our website and the use of this website.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  In no event shall RoyalFellowFoundation, nor its directors, employees, partners, agents, suppliers, 
                  or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  We reserve the right to modify or replace these Terms at any time. If a revision is 
                  material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms and Conditions, please contact us at:
                  <br />
                  Email: legal@RoyalFellowFoundation.com
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

export default TermsConditions;
