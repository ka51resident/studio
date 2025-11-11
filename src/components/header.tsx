
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from './logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Who We are' },
  { href: '/portfolio', label: 'What We Do' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        'text-base font-semibold transition-colors hover:text-primary',
        pathname === href ? 'text-primary' : 'text-muted-foreground'
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-18 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        
        {/* Mobile Header */}
        <div className="flex w-full items-center justify-between md:hidden">
            <div className="flex-1">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-8 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <SheetDescription className="sr-only">Main navigation links for the site.</SheetDescription>
                    </SheetHeader>
                    <div className="py-6">
                        <Logo />
                    </div>
                    <nav className="grid gap-6 text-lg font-medium">
                        {navLinks.map((link) => (
                        <NavLink key={link.href} {...link} />
                        ))}
                    </nav>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="flex flex-1 justify-center">
                <Logo />
            </div>

            <div className="flex-1" />
        </div>

        
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-start">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>

        <div className="hidden grow basis-0 justify-end md:flex">
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
