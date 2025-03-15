import React, { useState } from 'react';
import RoomCard from './RoomCard';
import { Search, Filter } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

const RoomList = ({ rooms }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roomType, setRoomType] = useState('');
  const [status, setStatus] = useState('');
  const [priceRange, setPriceRange] = useState('');

  // Get unique room types
  const roomTypes = [...new Set(rooms.map(room => room.roomType.name))];

  // Filter rooms based on search and filters
  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          room.roomType.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = roomType === '' || room.roomType.name === roomType;
    const matchesStatus = status === '' || room.status === status;
    
    let matchesPrice = true;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      matchesPrice = room.price >= min && (max ? room.price <= max : true);
    }
    
    return matchesSearch && matchesType && matchesStatus && matchesPrice;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setRoomType('');
    setStatus('');
    setPriceRange('');
  };

  return (
    <div>
      <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search rooms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="">All Room Types</option>
                {roomTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </Select>
            </div>
            
            <div>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="available">Available</option>
                <option value="occupied">Occupied</option>
                <option value="maintenance">Maintenance</option>
                <option value="reserved">Reserved</option>
              </Select>
            </div>
            
            <div>
              <Select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="0-100">$0 - $100</option>
                <option value="101-200">$101 - $200</option>
                <option value="201-300">$201 - $300</option>
                <option value="301">$301+</option>
              </Select>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Button
              variant="outline"
              onClick={resetFilters}
              className="w-full md:w-auto"
            >
              <Filter className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </div>
      
      {filteredRooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No rooms found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default RoomList;