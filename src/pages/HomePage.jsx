import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Coffee, Wifi, Utensils, MapPin } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { rooms } from '../data/mockData';

const HomePage = () => {
  // Get featured rooms (available rooms)
  const featuredRooms = rooms.filter(room => room.status === 'available').slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="relative h-[600px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/528427/pexels-photo-528427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
          >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-green-600 sm:text-5xl md:text-6xl">
                Experience Luxury & Comfort
              </h1>
              <p className="mt-4 text-xl text-white">
                Discover the perfect blend of elegance, comfort, and exceptional service at Serene Hotel.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/rooms">
                  <Button size="lg">View Rooms</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="bg-white bg-opacity-20 text-white border-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Box */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                <input
                  type="date"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                <input
                  type="date"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Rooms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Rooms</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the epitome of luxury with our carefully designed rooms and suites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src={room.image} 
                    alt={room.roomType.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                    ${room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{room.roomType.name} Room</h3>
                  <p className="mt-2 text-gray-600">{room.roomType.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Link to={`/rooms/${room.id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/rooms">
              <Button size="lg">View All Rooms</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Amenities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Hotel Amenities</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Enjoy our world-class facilities designed for your comfort and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Wifi className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Free Wi-Fi</h3>
              <p className="mt-2 text-gray-600">High-speed internet access throughout the hotel.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Breakfast</h3>
              <p className="mt-2 text-gray-600">Complimentary breakfast with a variety of options.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Restaurant</h3>
              <p className="mt-2 text-gray-600">On-site restaurant serving local and international cuisine.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Prime Location</h3>
              <p className="mt-2 text-gray-600">Conveniently located near major attractions and business centers.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Guests Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied guests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>
      
      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Ready to experience luxury?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-blue-100">
                  Book your stay today and enjoy our special rates and packages.
                </p>
              </div>
              <div className="mt-8 flex md:mt-0">
                <Link to="/rooms">
                  <Button variant="secondary" size="lg">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;