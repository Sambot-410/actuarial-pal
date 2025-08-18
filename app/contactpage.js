import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="py-16 px-4 container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6">
          Have questions? Reach out to us directly:
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p><strong>Email:</strong> actuarialpal@gmail.com</p>
          <p><strong>Phone:</strong> +2348038426122</p>
          <p className="mt-4 text-gray-600">
            We'll respond within 24 hours.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}