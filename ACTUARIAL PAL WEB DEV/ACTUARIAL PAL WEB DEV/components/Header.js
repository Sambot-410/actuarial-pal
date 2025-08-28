<<<<<<< HEAD:ACTUARIAL PAL WEB DEV/components/header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Actuarial Pal
        </Link>
        <nav className="space-x-8">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
=======
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Actuarial Pal
        </Link>
        <nav className="space-x-8">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
>>>>>>> 84b15499094f1d2d6d070dece1bf0102c5bf3cdf:ACTUARIAL PAL WEB DEV/components/Header.js
