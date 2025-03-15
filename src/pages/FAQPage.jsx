import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Input from '../components/ui/Input';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQs, setOpenFAQs] = useState({});
  
  const faqCategories = [
    {
      title: 'Reservations',
      faqs: [
        {
          id: 'res1',
          question: 'How do I make a reservation?',
          answer: 'You can make a reservation through our website, by calling our reservation line at +254 712 345 678, or by emailing us at reservations@serenehotel.co.ke. We recommend booking in advance to secure your preferred dates and room type.'
        },
        {
          id: 'res2',
          question: 'What is your cancellation policy?',
          answer: 'Our standard cancellation policy allows free cancellation up to 24 hours before your scheduled check-in date. Cancellations made less than 24 hours before check-in may be subject to a charge equivalent to one night\'s stay. Special rates or promotions may have different cancellation terms, which will be specified at the time of booking.'
        },
        {
          id: 'res3',
          question: 'Can I modify my reservation after booking?',
          answer: 'Yes, you can modify your reservation subject to availability. Please contact our reservation team as soon as possible if you need to make changes to your booking. Changes made less than 24 hours before check-in may be subject to our cancellation policy.'
        },
        {
          id: 'res4',
          question: 'Do you require a deposit to secure a reservation?',
          answer: 'For standard bookings, we typically require a credit card to guarantee your reservation, but no deposit is charged until check-in. For group bookings, special events, or during peak seasons, we may require a deposit of one night\'s stay. The specific deposit requirements will be communicated during the booking process.'
        }
      ]
    },
    {
      title: 'Rooms & Amenities',
      faqs: [
        {
          id: 'room1',
          question: 'What time is check-in and check-out?',
          answer: 'Check-in time is from 2:00 PM, and check-out time is by 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability and may incur additional charges.'
        },
        {
          id: 'room2',
          question: 'Do you offer free Wi-Fi?',
          answer: 'Yes, complimentary high-speed Wi-Fi is available throughout the hotel, including all guest rooms and public areas.'
        },
        {
          id: 'room3',
          question: 'What amenities are included in the room?',
          answer: 'All rooms include air conditioning, flat-screen TV, private bathroom with shower and/or bathtub, toiletries, hairdryer, in-room safe, minibar, coffee/tea making facilities, and complimentary bottled water. Specific amenities may vary by room type.'
        },
        {
          id: 'room4',
          question: 'Is breakfast included in the room rate?',
          answer: 'Breakfast is included in most of our room rates. Please check the details of your specific booking to confirm. Our breakfast buffet is served daily from 6:30 AM to 10:30 AM in our main restaurant.'
        }
      ]
    },
    {
      title: 'Services & Facilities',
      faqs: [
        {
          id: 'serv1',
          question: 'Do you have a restaurant on-site?',
          answer: 'Yes, we have an on-site restaurant serving local and international cuisine. Our restaurant is open for breakfast, lunch, and dinner. We also offer room service during designated hours.'
        },
        {
          id: 'serv2',
          question: 'Is there parking available?',
          answer: 'Yes, we offer complimentary parking for hotel guests. Valet parking is also available for an additional fee.'
        },
        {
          id: 'serv3',
          question: 'Do you have a fitness center or swimming pool?',
          answer: 'Yes, we have a fully-equipped fitness center that is open 24/7 for hotel guests. Our outdoor swimming pool is open from 7:00 AM to 8:00 PM daily, weather permitting.'
        },
        {
          id: 'serv4',
          question: 'Do you offer airport transfers?',
          answer: 'Yes, we offer airport transfer services for an additional fee. Please contact our concierge at least 24 hours in advance to arrange transportation.'
        }
      ]
    },
    {
      title: 'Payment & Billing',
      faqs: [
        {
          id: 'pay1',
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, M-Pesa, and cash. For security reasons, we may require a valid ID for cash payments.'
        },
        {
          id: 'pay2',
          question: 'When will my credit card be charged?',
          answer: 'For most bookings, your credit card will be authorized at check-in for the total amount of your stay plus an additional amount for incidentals. The final charge will be processed at check-out. Some special rates or promotions may require advance payment.'
        },
        {
          id: 'pay3',
          question: 'Do you charge for incidentals?',
          answer: 'Upon check-in, we place a hold on your credit card for incidentals. The standard hold amount is $50 per night. This hold will be released upon check-out if no additional charges are incurred.'
        },
        {
          id: 'pay4',
          question: 'Can I get an invoice for my stay?',
          answer: 'Yes, we can provide a detailed invoice for your stay. Please request this at check-out or contact our front desk. For corporate bookings, please provide your company details at check-in to ensure the invoice is correctly formatted.'
        }
      ]
    }
  ];
  
  const toggleFAQ = (id) => {
    setOpenFAQs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Filter FAQs based on search term
  const filteredFAQs = searchTerm.trim() === '' 
    ? faqCategories 
    : faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Serene Hotel. If you can't find what you're looking for, please contact us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, index) => (
              <div key={index} className="mb-10">
                {category.faqs.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
                    <div className="space-y-2">
                      {category.faqs.map((faq) => (
                        <FAQItem
                          key={faq.id}
                          question={faq.question}
                          answer={faq.answer}
                          isOpen={openFAQs[faq.id] || false}
                          toggleOpen={() => toggleFAQ(faq.id)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500">
                We couldn't find any FAQs matching your search. Please try different keywords or contact us directly.
              </p>
            </div>
          )}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            If you couldn't find the answer to your question, please don't hesitate to contact our customer service team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-900">info@serenehotel.co.ke</span>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-gray-900">+254 712 345 678</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;