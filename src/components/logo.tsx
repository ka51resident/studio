import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.png';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2" aria-label="Akash Enterprises Home">
      <Image
        src={logo}
        alt="Akash Enterprises Logo"
        width={160}
        height={51}
        className="text-primary"
        priority
      />
    </Link>
  );
}
