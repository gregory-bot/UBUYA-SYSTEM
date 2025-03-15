// Mock data for development purposes

export const roomTypes = [
  {
    id: '1',
    name: 'Standard',
    description: 'Comfortable room with essential amenities',
    capacity: 2,
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Private Bathroom']
  },
  {
    id: '2',
    name: 'Deluxe',
    description: 'Spacious room with premium amenities and city view',
    capacity: 2,
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Private Bathroom', 'Mini Bar', 'City View']
  },
  {
    id: '3',
    name: 'Suite',
    description: 'Luxury suite with separate living area and premium amenities',
    capacity: 4,
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Private Bathroom', 'Mini Bar', 'Living Room', 'Ocean View', 'Jacuzzi']
  },
  {
    id: '4',
    name: 'Family',
    description: 'Spacious room designed for families with children',
    capacity: 4,
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Private Bathroom', 'Mini Bar', 'Garden View']
  }
];

export const rooms = [
  {
    id: '101',
    roomNumber: '101',
    roomType: roomTypes[0],
    status: 'available',
    features: ['Non-smoking', 'Queen Bed'],
    price: 100,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: '102',
    roomNumber: '102',
    roomType: roomTypes[0],
    status: 'occupied',
    features: ['Non-smoking', 'Twin Beds'],
    price: 100,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: '201',
    roomNumber: '201',
    roomType: roomTypes[1],
    status: 'available',
    features: ['Non-smoking', 'King Bed', 'City View'],
    price: 150,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '202',
    roomNumber: '202',
    roomType: roomTypes[1],
    status: 'maintenance',
    features: ['Non-smoking', 'King Bed', 'City View'],
    price: 150,
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: '301',
    roomNumber: '301',
    roomType: roomTypes[2],
    status: 'available',
    features: ['Non-smoking', 'King Bed', 'Ocean View', 'Jacuzzi'],
    price: 250,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '401',
    roomNumber: '401',
    roomType: roomTypes[3],
    status: 'reserved',
    features: ['Non-smoking', 'Queen Bed', 'Twin Beds', 'Garden View'],
    price: 180,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

export const guests = [
  {
    id: '1',
    name: 'kipngeno Gregory',
    email: 'john.doe@example.com',
    phone: '+254748163492',
    address: 'Ruiru, Kiambu'
  },
  {
    id: '2',
    name: 'Chepkoech Carol',
    email: 'chepkoechcariol@gmail.com',
    phone: '+254721685817',
    address: '456 Uthiru, Nairobi'
  }
];

export const reservations = [
  {
    id: '1',
    guestId: '1',
    roomId: '102',
    checkInDate: new Date('2025-01-10'),
    checkOutDate: new Date('2025-01-15'),
    status: 'checked-in',
    totalAmount: 500,
    paymentStatus: 'partial'
  },
  {
    id: '2',
    guestId: '2',
    roomId: '401',
    checkInDate: new Date('2025-01-20'),
    checkOutDate: new Date('2025-01-25'),
    status: 'confirmed',
    totalAmount: 900,
    paymentStatus: 'pending'
  }
];

export const bills = [
  {
    id: '1',
    reservationId: '1',
    billDate: new Date('2025-01-10'),
    totalAmount: 500,
    paymentStatus: 'partial',
    items: [
      {
        id: '1',
        description: 'Room Charge - Standard Room',
        quantity: 5,
        unitPrice: 100,
        totalPrice: 500
      }
    ]
  },
  {
    id: '2',
    reservationId: '2',
    billDate: new Date('2025-01-20'),
    totalAmount: 900,
    paymentStatus: 'pending',
    items: [
      {
        id: '1',
        description: 'Room Charge - Family Room',
        quantity: 5,
        unitPrice: 180,
        totalPrice: 900
      }
    ]
  }
];

export const payments = [
  {
    id: '1',
    billId: '1',
    paymentDate: new Date('2025-01-10'),
    paymentMethod: 'mpesa',
    amount: 250,
    transactionId: 'MPE123456789'
  }
];

export const inventoryItems = [
  {
    id: '1',
    name: 'Bath Towels',
    category: 'Linens',
    quantity: 200,
    unitPrice: 15
  },
  {
    id: '2',
    name: 'Shampoo Bottles',
    category: 'Toiletries',
    quantity: 500,
    unitPrice: 5
  },
  {
    id: '3',
    name: 'Toilet Paper',
    category: 'Toiletries',
    quantity: 1000,
    unitPrice: 2
  },
  {
    id: '4',
    name: 'Bed Sheets',
    category: 'Linens',
    quantity: 150,
    unitPrice: 25
  }
];

export const suppliers = [
  {
    id: '1',
    name: 'Nairobi Linens Ltd',
    contact: {
      name: 'David Kamau',
      email: 'david@nairobilinens.co.ke',
      phone: '+254712345678'
    }
  },
  {
    id: '2',
    name: 'Mombasa Toiletries Suppliers',
    contact: {
      name: 'Fatima Hassan',
      email: 'fatima@mombasatoiletries.co.ke',
      phone: '+254723456789'
    }
  }
];

export const staff = [
  {
    id: '1',
    name: 'kiptoo Onyango',
    role: 'admin',
    username: 'james.admin',
    email: 'kiptooonyango.co.ke',
    phone: '+254712345678'
  },
  {
    id: '2',
    name: 'Damaris Sobolo',
    role: 'staff',
    username: 'mary.staff',
    email: 'damarissobolo.co.ke',
    phone: '+254723456789'
  }
];