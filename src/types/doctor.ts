import { Appointment } from "./appointment";
import { Patient } from "./patient";

export interface Doctor {
    id: string;
    name: string;
    email: string;
    specialty: string;
    availability: string;
    appointments: Appointment[];
    patients: Patient[];
}