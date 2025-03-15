import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Calendar, Clock, User, MapPin, CreditCard } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { reservations, rooms, guests } from '../data/mockData';

const ReservationStatusBadge = ({ status }) => {
  const statusStyles = {
    'confirmed': 'bg-green-100 text-green-800',
    'checked-in': 'bg-blue-100 text-blue-800',
    'checked-out': 'bg-gray-100 text-gray-800',
    'cancelled': 'bg-red-100 text-red-800',
    'pending': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const ReservationsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Get current date for filtering
  const currentDate = new Date();
  
  // Filter reservations based on active tab
  const filteredReservations = reservations.filter(reservation => {
    if (activeTab === 'upcoming') {
      return new Date(reservation.checkInDate) >= currentDate;
    } else if (activeTab === 'past') {
      return new Date(reservation.checkOutDate) < currentDate;
    } else if (activeTab === 'cancelled') {
      return reservation.status === 'cancelled';
    }
    return true; // 'all' tab
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Reservations</h1>
          <p className="mt-2 text-lg text-gray-600">
            View and manage your current and past bookings
          </p>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['upcoming', 'past', 'cancelled', 'all'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        {filteredReservations.length > 0 ? (
          <div className="space-y-6">
            {filteredReservations.map((reservation) => {
              const room = rooms.find(r => r.id === reservation.roomId);
              const guest = guests.find(g => g.id === reservation.guestId);
              
              return (
                <Card key={reservation.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={room?.image} 
                        alt={`${room?.roomType.name} Room`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{room?.roomType.name} Room</h3>
                          <p className="text-gray-500">Room {room?.roomNumber}</p>
                        </div>
                        <ReservationStatusBadge status={reservation.status} />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Check-in</p>
                            <p>{new Date(reservation.checkInDate).toLocaleDateString()}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Check-out</p>
                            <p>{new Date(reservation.checkOutDate).toLocaleDateString()}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <User className="h-5 w-5 text-gray-400 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Guest</p>
                            <p>{guest?.name}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Payment</p>
                            <p className="capitalize">{reservation.paymentStatus}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-bold text-gray-900">
                          Total: ${reservation.totalAmount}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          {reservation.status === 'confirmed' && (
                            <Button variant="outline" size="sm">Modify</Button>
                          )}
                          {(reservation.status === 'confirmed' || reservation.status === 'pending') && (
                            <Button variant="danger" size="sm">Cancel</Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No reservations found</h3>
            <p className="text-gray-500 mb-6">You don't have any {activeTab} reservations</p>
            <Button onClick={() => setActiveTab('all')}>View All Reservations</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ReservationsPage;