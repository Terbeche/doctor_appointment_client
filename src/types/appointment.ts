import { Doctor } from "./doctor";
import { Patient } from "./patient";

export interface Appointment {
  id: string;
  doctorId: string;
  patientId: string;
  date: string; // Use string for ISO 8601 format (e.g., "2024-02-24T10:00:00.000Z")
  status: "pending" | "confirmed" | "canceled";
  doctor?: Doctor;
  patient?: Patient;
}
