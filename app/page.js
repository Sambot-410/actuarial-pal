import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}