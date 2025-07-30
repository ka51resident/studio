import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="font-bold text-xl tracking-tight">
        <span className="text-primary">A</span>kash <span className="text-accent">E</span>nterprises
      </span>
    </Link>
  );
}
