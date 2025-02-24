import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  We are dedicated to making healthcare accessible to everyone by providing
                  a seamless platform for booking doctor appointments. Our mission is to
                  bridge the gap between patients and healthcare providers, ensuring quality
                  medical care is just a click away.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">For Patients</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Easy appointment booking</li>
                      <li>Wide network of qualified doctors</li>
                      <li>Instant confirmations</li>
                      <li>Reminder notifications</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">For Doctors</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Efficient patient management</li>
                      <li>Schedule optimization</li>
                      <li>Digital presence</li>
                      <li>Reduced no-shows</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-xl font-medium mb-2">Accessibility</h3>
                    <p className="text-gray-600">
                      Making healthcare available to everyone, everywhere
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium mb-2">Quality</h3>
                    <p className="text-gray-600">
                      Ensuring the highest standards of medical care
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      Leveraging technology to improve healthcare delivery
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Sidebar />
    </div>
  );
}
