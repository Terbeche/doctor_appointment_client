import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                Doctor Appointments
              </Link>
            <Link href="/" className="px-3 py-2 text-gray-900 hover:text-gray-600">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 text-gray-900 hover:text-gray-600">
                About
              </Link>
              <Link href="/contact" className="px-3 py-2 text-gray-900 hover:text-gray-600">
                Contact
              </Link>
              <Link href="/login" className="px-3 py-2 text-gray-900 hover:text-gray-600">
                Login
              </Link>
              <Link href="/register" className="px-3 py-2 text-gray-900 hover:text-gray-600">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 