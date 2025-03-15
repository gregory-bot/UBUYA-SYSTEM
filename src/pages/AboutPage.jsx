import React from 'react';
import Layout from '../components/layout/Layout';
import { Star, Award, Users, Coffee } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Gadden-In</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury and comfort in the heart of Kenya. Our hotel offers premium accommodations with world-class amenities.
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="relative h-96 mb-16 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Serene Hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-3xl font-bold mb-2">Luxury Redefined</h2>
              <p className="text-xl">Since 2010</p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Serene Hotel has established itself as one of the premier luxury accommodations in Kenya. What started as a small family-owned establishment has grown into a renowned destination for travelers seeking comfort, elegance, and exceptional service.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a simple vision: to create a sanctuary where guests could experience the rich culture of Kenya while enjoying world-class amenities and personalized service. Over the years, we have continuously evolved, expanding our facilities and refining our offerings to exceed the expectations of our discerning guests.
              </p>
              <p className="text-gray-600">
                Today, Serene Hotel stands as a testament to our commitment to excellence, blending traditional Kenyan hospitality with modern luxury. Our dedicated team works tirelessly to ensure that every guest's stay is memorable, comfortable, and truly serene.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Hotel Lobby" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Hotel Restaurant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                  alt="Hotel Pool" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Hotel Exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-16 bg-gray-50 py-12 px-6 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from the cleanliness of our rooms to the quality of our cuisine.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hospitality</h3>
              <p className="text-gray-600">
                We embrace the spirit of Kenyan hospitality, welcoming each guest with warmth, respect, and genuine care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices, building trust with our guests and partners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek to improve and innovate, embracing new ideas and technologies to enhance the guest experience.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Meet the dedicated professionals who make Serene Hotel a truly exceptional destination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="James Omondi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">James Omondi</h3>
                <p className="text-blue-600 mb-4">General Manager</p>
                <p className="text-gray-600">
                  With over 15 years of experience in the hospitality industry, James leads our team with passion and dedication.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Mary Wanjiku" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Mary Wanjiku</h3>
                <p className="text-blue-600 mb-4">Operations Director</p>
                <p className="text-gray-600">
                  Mary ensures that every aspect of our hotel operations runs smoothly, delivering exceptional experiences for our guests.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 relative">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="David Kimani" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">David Kimani</h3>
                <p className="text-blue-600 mb-4">Executive Chef</p>
                <p className="text-gray-600">
                  Chef David brings culinary excellence to our restaurant, blending local flavors with international cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The service was exceptional and the room was immaculate. The staff went above and beyond to make our stay memorable."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  JD
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">John Doe</h4>
                  <p className="text-sm text-gray-500">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Beautiful hotel with amazing amenities. The breakfast was delicious and the location was perfect for exploring the city."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  JS
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">Jane Smith</h4>
                  <p className="text-sm text-gray-500">Mombasa, Kenya</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "We had a wonderful stay at Serene Hotel. The rooms were spacious and comfortable, and the staff was friendly and attentive."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  RK
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">Robert Kimani</h4>
                  <p className="text-sm text-gray-500">Kisumu, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;