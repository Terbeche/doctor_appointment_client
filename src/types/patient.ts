import { Appointment } from "./appointment";

export interface Patient {
    id: string;
    name: string;
    email: string;
    phone?: string;
    appointments: Appointment[];
}