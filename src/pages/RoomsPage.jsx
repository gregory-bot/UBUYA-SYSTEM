import React from 'react';
import Layout from '../components/layout/Layout';
import RoomList from '../components/rooms/RoomList';
import { rooms } from '../data/mockData';

const RoomsPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Rooms & Suites</h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover our selection of comfortable and luxurious accommodations.
          </p>
        </div>
        
        <RoomList rooms={rooms} />
      </div>
    </Layout>
  );
};

export default RoomsPage;