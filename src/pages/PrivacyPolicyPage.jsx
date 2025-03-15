import React from 'react';
import Layout from '../components/layout/Layout';

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 1, 2025</p>
        
        <div className="prose prose-blue max-w-none">
          <p>
            At Serene Hotel, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or stay at our hotel.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          
          <p>We may collect the following types of information:</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Contact information (name, email address, phone number, postal address)</li>
            <li>Identification information (passport or ID details, date of birth)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Reservation details (check-in/check-out dates, room preferences, special requests)</li>
            <li>Loyalty program information</li>
            <li>Feedback and survey responses</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Usage Information</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>IP address and device information</li>
            <li>Browser type and settings</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Date and time of access</li>
            <li>Pages viewed and features used</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          
          <p>We may use your information for the following purposes:</p>
          
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Process and manage your reservations</li>
            <li>Provide and improve our services</li>
            <li>Process payments and prevent fraud</li>
            <li>Communicate with you about your stay, services, or inquiries</li>
            <li>Send promotional offers and marketing communications (if you have opted in)</li>
            <li>Administer loyalty programs</li>
            <li>Conduct surveys and collect feedback</li>
            <li>Comply with legal obligations</li>
            <li>Analyze usage patterns to improve our website and services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing and Disclosure</h2>
          
          <p>We may share your information with:</p>
          
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Service providers who perform services on our behalf (payment processors, IT service providers, marketing partners)</li>
            <li>Business partners for co-branded offers or services</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>Third parties in the event of a merger, acquisition, or sale of assets</li>
          </ul>
          
          <p>We do not sell your personal information to third parties.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
          
          <p>
            We use cookies and similar tracking technologies to collect information about your browsing activities. These technologies help us analyze website traffic, customize content, and provide a better user experience. You can manage your cookie preferences through your browser settings.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
          
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
          
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict the processing of your information</li>
            <li>Data portability</li>
            <li>Withdraw consent (where processing is based on consent)</li>
          </ul>
          
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
          
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
          
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mt-4">
            <p className="font-medium">Serene Hotel</p>
            <p>123 Hotel Street, Nairobi, Kenya</p>
            <p>Email: privacy@serenehotel.co.ke</p>
            <p>Phone: +254 712 345 678</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;