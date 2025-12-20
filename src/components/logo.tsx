import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.png';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 py-2" aria-label="Akash Enterprises Home">
      <Image
        src={logo}
        alt="Akash Enterprises Logo"
        width={120}
        height={38}
        className="text-primary"
        priority
      />
    </Link>
  );
}
