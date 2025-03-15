import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Users, 
  Check, 
  Calendar, 
  Coffee, 
  Wifi, 
  Tv, 
  Wind, 
  ShowerHead,
  Utensils
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { rooms } from '../data/mockData';

const RoomDetailPage = () => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === id);
  
  if (!room) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Room Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The room you're looking for doesn't exist or has been removed.</p>
          <Link to="/rooms">
            <Button>View All Rooms</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  // Map amenities to icons
  const amenityIcons = {
    'Wi-Fi': <Wifi className="h-5 w-5" />,
    'TV': <Tv className="h-5 w-5" />,
    'Air Conditioning': <Wind className="h-5 w-5" />,
    'Private Bathroom': <ShowerHead className="h-5 w-5" />,
    'Mini Bar': <Coffee className="h-5 w-5" />,
    'Room Service': <Utensils className="h-5 w-5" />
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/rooms" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Rooms
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-96">
                <img 
                  src={room.image} 
                  alt={`${room.roomType.name} Room ${room.roomNumber}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    room.status === 'available' ? 'bg-green-100 text-green-800' : 
                    room.status === 'occupied' ? 'bg-red-100 text-red-800' : 
                    room.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{room.roomType.name} Room</h1>
                    <p className="text-gray-500">Room {room.roomNumber}</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">${room.price}<span className="text-sm text-gray-500">/night</span></div>
                </div>
                
                <div className="flex items-center text-gray-500 mb-6">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Max {room.roomType.capacity} {room.roomType.capacity === 1 ? 'person' : 'people'}</span>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                  <p className="text-gray-600">
                    {room.roomType.description}. This spacious {room.roomType.name.toLowerCase()} room offers a comfortable stay with modern amenities and elegant decor. Perfect for {room.roomType.capacity === 1 ? 'solo travelers' : room.roomType.capacity === 2 ? 'couples' : 'families'} looking for a relaxing experience.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Room Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {room.roomType.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="text-blue-600 mr-3">
                          {amenityIcons[amenity] || <Check className="h-5 w-5" />}
                        </div>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Book This Room</h2>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Room Rate:</span>
                  <span className="font-medium">${room.price}/night</span>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span>${room.price}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">*Taxes and fees not included</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="pl-10 flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="pl-10 flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <select className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    {room.roomType.capacity > 2 && (
                      <>
                        <option>3 Guests</option>
                        {room.roomType.capacity > 3 && <option>4 Guests</option>}
                      </>
                    )}
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to={`/book/${room.id}`}>
                  <Button 
                    className="w-full" 
                    disabled={room.status !== 'available'}
                  >
                    {room.status === 'available' ? 'Book Now' : 'Currently Unavailable'}
                  </Button>
                </Link>
                {room.status !== 'available' && (
                  <p className="text-sm text-red-600 mt-2 text-center">
                    This room is currently {room.status}. Please check back later or choose another room.
                  </p>
                )}
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                <p className="flex items-center mb-2">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Free cancellation up to 24 hours before check-in
                </p>
                <p className="flex items-center mb-2">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  No prepayment needed
                </p>
                <p className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Pay at the hotel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoomDetailPage;