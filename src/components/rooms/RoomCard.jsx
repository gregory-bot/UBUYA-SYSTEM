import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Check } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';

const RoomStatusBadge = ({ status }) => {
  const statusStyles = {
    available: 'bg-green-100 text-green-800',
    occupied: 'bg-red-100 text-red-800',
    maintenance: 'bg-yellow-100 text-yellow-800',
    reserved: 'bg-blue-100 text-blue-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const RoomCard = ({ room }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={room.image} 
          alt={`${room.roomType.name} Room ${room.roomNumber}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <RoomStatusBadge status={room.status} />
        </div>
      </div>
      
      <CardContent className="flex-grow pt-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{room.roomType.name} Room</h3>
          <p className="text-lg font-bold text-blue-600">${room.price}<span className="text-sm text-gray-500">/night</span></p>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">Room {room.roomNumber}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Users className="h-4 w-4 mr-1" />
          <span>Max {room.roomType.capacity} {room.roomType.capacity === 1 ? 'person' : 'people'}</span>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Room Features:</h4>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {room.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-green-500 mr-1 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <div className="w-full flex space-x-2">
          <Link to={`/rooms/${room.id}`} className="flex-1">
            <Button variant="outline" className="w-full">Details</Button>
          </Link>
          <Link to={`/book/${room.id}`} className="flex-1">
            <Button 
              className="w-full" 
              disabled={room.status !== 'available'}
            >
              {room.status === 'available' ? 'Book Now' : 'Unavailable'}
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;