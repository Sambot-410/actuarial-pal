import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="py-16 px-4 container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">About Actuarial Pal</h1>
        <p className="text-lg mb-4">
          Hi, I'm <strong>Samson Sunday Viyon</strong>, the founder of <strong>Actuarial Pal</strong>.
        </p>
        <p className="mb-4">
          I created Actuarial Pal to make learning actuarial science easier, clearer, and more accessible. 
          With years of experience in the field, I've seen how complex topics can be simplified with the right guidance.
        </p>
        <p>
          Our mission is to support aspiring actuaries through structured, affordable, and personalized training — 
          helping you pass exams and build a strong foundation for your career.
        </p>
      </main>
      <Footer />
    </>
  );
}