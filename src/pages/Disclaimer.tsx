
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Disclaimer
          </h1>
          
          <Card className="mb-6">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Website Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  The information contained in this website is for general information purposes only. 
                  The information is provided by ProfConnect and while we endeavor to keep the information 
                  up to date and correct, we make no representations or warranties of any kind, express or 
                  implied, about the completeness, accuracy, reliability, suitability or availability with 
                  respect to the website or the information, products, services, or related graphics contained 
                  on the website for any purpose.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Services Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  ProfConnect acts as a platform connecting users with professional service providers. 
                  We are not responsible for the professional advice, services, or conduct of any third-party 
                  professionals listed on our platform. All professional relationships, agreements, and 
                  services are between users and service providers directly.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Educational Information Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  The educational institution information provided on our platform is for informational 
                  purposes only. While we strive to provide accurate and up-to-date information about 
                  colleges, universities, and educational programs, we recommend that users verify all 
                  information directly with the institutions before making any educational decisions.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Medical and Legal Advice Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  The content on ProfConnect is not intended to be a substitute for professional medical 
                  advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified 
                  health provider with any questions you may have regarding a medical condition. Similarly, 
                  legal information provided should not be construed as legal advice.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  Any reliance you place on information from ProfConnect is strictly at your own risk. 
                  In no event will we be liable for any loss or damage including without limitation, 
                  indirect or consequential loss or damage, or any loss or damage whatsoever arising from 
                  loss of data or profits arising out of, or in connection with, the use of this website.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">External Links Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  Through this website you are able to link to other websites which are not under the 
                  control of ProfConnect. We have no control over the nature, content and availability 
                  of those sites. The inclusion of any links does not necessarily imply a recommendation 
                  or endorse the views expressed within them.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">User-Generated Content</h2>
                <p className="text-muted-foreground mb-6">
                  Reviews, ratings, and other user-generated content on our platform represent the opinions 
                  of individual users and do not reflect the views of ProfConnect. We do not verify the 
                  accuracy of user-generated content and advise users to exercise their own judgment when 
                  considering such information.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Availability Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  Every effort is made to keep the website up and running smoothly. However, ProfConnect 
                  takes no responsibility for, and will not be liable for, the website being temporarily 
                  unavailable due to technical issues beyond our control.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  ProfConnect reserves the right to modify this disclaimer at any time. Changes will be 
                  effective immediately upon posting on the website. Your continued use of the website 
                  after any changes indicates your acceptance of the modified disclaimer.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this disclaimer, please contact us at:
                  <br />
                  Email: info@profconnect.com
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

export default Disclaimer;
