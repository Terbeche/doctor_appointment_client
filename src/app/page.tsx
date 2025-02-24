import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to Doctor Appointment System
          </h1>
          <Sidebar />
        </div>
      </main>
    </div>
  );
}
