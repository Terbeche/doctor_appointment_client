import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/dashboard"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              href="/doctors"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Doctors
            </Link>
          </li>
          <li>
            <Link 
              href="/doctors/add"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Add Doctor
            </Link>
          </li>
          <li>
            <Link 
              href="/appointments"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Appointments
            </Link>
          </li>
          <li>
            <Link 
              href="/appointments/book"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
} 