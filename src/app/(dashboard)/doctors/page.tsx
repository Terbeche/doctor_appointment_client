import DashboardLayout from '@/components/layout/DashboardLayout';
import Link from 'next/link';
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  availability: string;
}

const Doctors: Doctor[] = [
  { id: 1, name: 'test 1', specialty: 'Cardiology', availability: 'Mon-Fri' },
  { id: 2, name: 'test 2', specialty: 'Pediatrics', availability: 'Tue-Sat' },
];

export default function DoctorsPage() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
          <Link 
            href="/doctors/add" 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Add New Doctor
          </Link>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {Doctors.map((doctor) => (
              <li key={doctor.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    Available: {doctor.availability}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
} 