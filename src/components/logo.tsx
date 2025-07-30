import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2" aria-label="Akash Enterprises Home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#logo-gradient)"
          d="M6.3,99.9V0.1h15.8l20,38.9L16.2,99.9H6.3z M100,60.9c0,16.5-12.2,30.3-30.6,30.3c-18.4,0-31.5-14.7-31.5-30.3
	c0-16.5,13-30.3,31.5-30.3C87.8,30.6,100,44.4,100,60.9z M86.2,60.9c0-9.8-6.9-17.4-17-17.4c-9.2,0-16.7,7.6-16.7,17.4
	c0,9.8,7.5,17.4,16.7,17.4C79.3,78.3,86.2,70.7,86.2,60.9z"
        />
      </svg>
      <span className="font-bold text-xl tracking-tight">
        Akash Enterprises
      </span>
    </Link>
  );
}
