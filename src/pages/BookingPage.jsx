import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ReservationForm from '../components/reservations/ReservationForm';
import { rooms } from '../data/mockData';

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  
  const room = rooms.find(r => r.id === id);
  
  if (!room) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Room Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The room you're trying to book doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/rooms')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Rooms
          </button>
        </div>
      </Layout>
    );
  }
  
  if (room.status !== 'available') {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Room Not Available</h1>
          <p className="text-lg text-gray-600 mb-8">
            This room is currently {room.status}. Please check back later or choose another room.
          </p>
          <button
            onClick={() => navigate('/rooms')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            View Available Rooms
          </button>
        </div>
      </Layout>
    );
  }
  
  const handleSubmit = (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setBookingData({
        ...data,
        confirmationNumber: Math.random().toString(36).substring(2, 10).toUpperCase(),
        bookingDate: new Date().toISOString()
      });
      setBookingComplete(true);
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Book Your Stay</h1>
          <p className="mt-2 text-lg text-gray-600">
            Complete the form below to book your room.
          </p>
        </div>
        
        {bookingComplete ? (
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
              <p className="text-gray-600 mt-2">
                Your reservation has been successfully confirmed. Check your email for details.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Booking Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Confirmation Number</p>
                  <p className="font-medium">{bookingData.confirmationNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Booking Date</p>
                  <p className="font-medium">{new Date(bookingData.bookingDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Guest Name</p>
                  <p className="font-medium">{bookingData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{bookingData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Check-in Date</p>
                  <p className="font-medium">{bookingData.checkInDate.toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Check-out Date</p>
                  <p className="font-medium">{bookingData.checkOutDate.toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Room Type</p>
                  <p className="font-medium">{room.roomType.name} Room</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Room Number</p>
                  <p className="font-medium">{room.roomNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Number of Nights</p>
                  <p className="font-medium">{bookingData.nights}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className="font-medium">${bookingData.totalAmount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-medium capitalize">{bookingData.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Status</p>
                  <p className="font-medium">Pending</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                A confirmation email has been sent to {bookingData.email} with all the details.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                >
                  Return to Home
                </button>
                <button
                  onClick={() => navigate('/reservations')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  View My Reservations
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ReservationForm room={room} onSubmit={handleSubmit} />
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-6">
                <div className="relative h-48">
                  <img 
                    src={room.image} 
                    alt={`${room.roomType.name} Room ${room.roomNumber}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{room.roomType.name} Room</h3>
                  <p className="text-gray-500 mb-4">Room {room.roomNumber}</p>
                  
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">Room Rate:</span>
                    <span className="font-medium">${room.price}/night</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">Max Occupancy:</span>
                    <span className="font-medium">{room.roomType.capacity} {room.roomType.capacity === 1 ? 'person' : 'people'}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 my-4"></div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Room Features:</h4>
                    <ul className="text-sm text-gray-600">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;