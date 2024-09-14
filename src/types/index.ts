export interface Doctor {
    id: number;
    name: string;
    specialty: string;
  }
  
  export interface Reservation {
    id: number;
    doctorId: number;
    userId: number;
    date: string;
    city: string;
  }
  
  export interface User {
    id: number;
    username: string;
    isAdmin: boolean;
  }