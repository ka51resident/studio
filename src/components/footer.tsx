import Link from 'next/link';
import Logo from './logo';
import Image from 'next/image';
import certificationLogo from './certification.jpg';
import { PrivacyPolicyModal } from './privacy-policy-modal';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo width={150} height={48} />
            <p className="text-sm text-muted-foreground">
              Building the future, one project at a time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Who We Are</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary">What We Do</Link></li>
              <li><Link href="/qhsc-policy" className="text-sm text-muted-foreground hover:text-primary">QHSE Policy</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Our Certifications</h3>
            
            <Image 
                src={certificationLogo}
                alt="TÜV NORD Certification" 
                width={150} 
                height={150}
                className="rounded-md"
            />
            
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Akash Enterprises. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <PrivacyPolicyModal />
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
