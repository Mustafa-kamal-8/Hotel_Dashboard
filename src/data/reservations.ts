export const reservations = [
  {
    id: 'DQ2',
    name: 'Deluxe Queen (2)',
    bookings: [
      { 
        id: 1, 
        name: 'Cameron Harrison', 
        startDate: '2023-02-13', 
        endDate: '2023-02-15', 
        status: 'confirmed',
        hasEndPoint: true 
      },
      { 
        id: 2, 
        name: 'Guy Hawkins', 
        startDate: '2023-02-19', 
        endDate: '2023-02-23', 
        status: 'inProgress',
        hasEndPoint: false 
      },
      { id: 3, name: 'Jerome Bell', startDate: '2023-02-23', endDate: '2023-02-26', status: 'inProgress', hasEndPoint: false },
      { id: 4, name: 'Arlene McCoy', startDate: '2023-02-04', endDate: '2023-02-06', status: 'upcoming', hasEndPoint: true },
    ]
  },
  {
    id: 'DQ3',
    name: 'Deluxe Queen (3)',
    bookings: [
      { id: 5, name: 'Cameron Harrison', startDate: '2023-02-15', endDate: '2023-02-17', status: 'confirmed', hasEndPoint: true },
      { id: 6, name: 'Judith Butler', startDate: '2023-02-19', endDate: '2023-02-20', status: 'inProgress', hasEndPoint: true },
      { id: 7, name: 'Theresa Webb', startDate: '2023-02-23', endDate: '2023-02-27', status: 'upcoming', hasEndPoint: true },
      { id: 7, name: 'wahib', startDate: '2023-02-09', endDate: '2023-02-15', status: 'warning', hasEndPoint: true },
    ]
  },
  {
    id: 'DQ4',
    name: 'Deluxe Queen (4)',
    bookings: [
      { id: 8, name: 'Brooklyn Simmons', startDate: '2023-02-01', endDate: '2023-02-04', status: 'upcoming', hasEndPoint: true },
      { id: 9, name: 'Judith Butler', startDate: '2023-02-25', endDate: '2023-02-27', status: 'upcoming', hasEndPoint: true },
    ]
  },
  {
    id: 'DQ5',
    name: 'Deluxe Queen (5)',
    bookings: [
      { id: 10, name: 'Darlene Robertson', startDate: '2023-02-21', endDate: '2023-02-23', status: 'upcoming', hasEndPoint: true },
    ]
  },
  {
    id: 'DQ6',
    name: 'Deluxe Queen (6)',
    bookings: [
      { id: 11, name: 'Cameron Harrison', startDate: '2023-02-13', endDate: '2023-02-14', status: 'confirmed', hasEndPoint: true },
      { id: 12, name: 'Ronald Richards', startDate: '2023-02-15', endDate: '2023-02-18', status: 'inProgress', hasEndPoint: false },
      { id: 13, name: 'Dianne Russell', startDate: '2023-02-24', endDate: '2023-02-26', status: 'upcoming', hasEndPoint: true },
      { id: 14, name: 'Savannah Nguyen', startDate: '2023-02-27', endDate: '2023-02-28', status: 'upcoming', hasEndPoint: true },
    ]
  },
  {
    id: 'DQ7',
    name: 'Deluxe Queen (7)',
    bookings: [
      { id: 15, name: 'Cameron Harrison', startDate: '2023-02-13', endDate: '2023-02-14', status: 'confirmed', hasEndPoint: true },
      { id: 16, name: 'Ronald Richards', startDate: '2023-02-15', endDate: '2023-02-18', status: 'inProgress', hasEndPoint: false },
      { id: 17, name: 'Dianne Russell', startDate: '2023-02-24', endDate: '2023-02-26', status: 'upcoming', hasEndPoint: true },
      { id: 18, name: 'Savannah Nguyen', startDate: '2023-02-27', endDate: '2023-02-28', status: 'upcoming', hasEndPoint: true },
    ]
  },
  
];

export const dates = [
  { day: 'SUN', date: 12, occupancy: '7.27%', count: null },
  { day: 'MON', date: 13, occupancy: '7.27%', count: null },
  { day: 'TUE', date: 14, occupancy: '7.27%', count: null },
  { day: 'WED', date: 15, occupancy: '7.27%', count: null },
  { day: 'THU', date: 16, occupancy: '47.27%', count: 34 },
  { day: 'FRI', date: 17, occupancy: '96.39%', count: 72 },
  { day: 'SAT', date: 18, occupancy: '127.27%', count: 111 },
  { day: 'SUN', date: 19, occupancy: '96.39%', count: 133 },
  { day: 'MON', date: 20, occupancy: '96.39%', count: 176 },
  { day: 'TUE', date: 21, occupancy: '96.39%', count: 56 },
  { day: 'WED', date: 22, occupancy: '96.39%', count: 36 },
  { day: 'THU', date: 23, occupancy: '96.39%', count: 86 },
  { day: 'FRI', date: 24, occupancy: '96.39%', count: 67 },
  { day: 'SAT', date: 25, occupancy: '96.39%', count: 71 },
  { day: 'SUN', date: 26, occupancy: '96.39%', count: 46 },
];

