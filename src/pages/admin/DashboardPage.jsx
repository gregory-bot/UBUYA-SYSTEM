import React from 'react';
import { 
  Users, 
  BedDouble, 
  CalendarCheck, 
  DollarSign,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Percent
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import StatCard from '../../components/dashboard/StatCard';
import { rooms, reservations, guests } from '../../data/mockData';

const DashboardPage = () => {
  // Calculate statistics
  const totalRooms = rooms.length;
  const availableRooms = rooms.filter(room => room.status === 'available').length;
  const occupancyRate = Math.round(((totalRooms - availableRooms) / totalRooms) * 100);
  
  const totalReservations = reservations.length;
  const confirmedReservations = reservations.filter(res => res.status === 'confirmed').length;
  
  // Calculate revenue
  const totalRevenue = reservations.reduce((sum, res) => sum + res.totalAmount, 0);
  const paidRevenue = reservations
    .filter(res => res.paymentStatus === 'paid')
    .reduce((sum, res) => sum + res.totalAmount, 0);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">
            Overview of hotel performance and key metrics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Occupancy Rate" 
            value={`${occupancyRate}%`} 
            icon={<Percent className="h-6 w-6" />}
            change="12"
            changeType="increase"
          />
          
          <StatCard 
            title="Available Rooms" 
            value={availableRooms} 
            icon={<BedDouble className="h-6 w-6" />}
            change="5"
            changeType="decrease"
          />
          
          <StatCard 
            title="Total Reservations" 
            value={totalReservations} 
            icon={<CalendarCheck className="h-6 w-6" />}
            change="8"
            changeType="increase"
          />
          
          <StatCard 
            title="Total Revenue" 
            value={`$${totalRevenue}`} 
            icon={<DollarSign className="h-6 w-6" />}
            change="15"
            changeType="increase"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Occupancy Overview</h2>
              <select className="text-sm border-gray-300 rounded-md">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            
            <div className="h-64 flex items-center justify-center">
              <BarChart3 className="h-48 w-48 text-gray-300" />
              <p className="text-gray-500 absolute">Occupancy chart will be displayed here</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg- gray-50 p-4 rounded-md">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Weekday Occupancy</p>
                    <p className="text-lg font-semibold">{Math.round(occupancyRate * 0.8)}%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Weekend Occupancy</p>
                    <p className="text-lg font-semibold">{Math.round(occupancyRate * 1.2)}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Revenue Overview</h2>
              <select className="text-sm border-gray-300 rounded-md">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            
            <div className="h-64 flex items-center justify-center">
              <BarChart3 className="h-48 w-48 text-gray-300" />
              <p className="text-gray-500 absolute">Revenue chart will be displayed here</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Collected Revenue</p>
                    <p className="text-lg font-semibold">${paidRevenue}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-yellow-100 text-yellow-600 mr-3">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pending Revenue</p>
                    <p className="text-lg font-semibold">${totalRevenue - paidRevenue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Reservations</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guest
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Room
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check-in
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check-out
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reservations.map((reservation) => {
                  const guest = guests.find(g => g.id === reservation.guestId);
                  const room = rooms.find(r => r.id === reservation.roomId);
                  
                  return (
                    <tr key={reservation.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            {guest?.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{guest?.name}</div>
                            <div className="text-sm text-gray-500">{guest?.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{room?.roomType.name} Room</div>
                        <div className="text-sm text-gray-500">Room {room?.roomNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {reservation.checkInDate.toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {reservation.checkOutDate.toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          reservation.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                          reservation.status === 'checked-in' ? 'bg-blue-100 text-blue-800' : 
                          reservation.status === 'checked-out' ? 'bg-gray-100 text-gray-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${reservation.totalAmount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;