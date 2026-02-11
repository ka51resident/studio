import Link from "next/link";
import Logo from "./logo";
import { PrivacyPolicyModal } from "./privacy-policy-modal";
import { CertificateModal } from "./certificate-modal";

const certifications = [
  { title: "ISO 9001:2015", imageSrc: "/certs/9001.webp" },
  { title: "ISO 14001:2015", imageSrc: "/certs/14001.webp" },
  { title: "ISO 45001:2018", imageSrc: "/certs/45001.webp" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo width={150} height={48} />
            <p className="text-sm text-muted-foreground">
              Powering Progress with People, Safety and Sustainability
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/qhsc-policy"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  QHSE Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Our Certifications</h3>
            <div className="flex flex-col space-y-2 items-start">
              {certifications.map((cert) => (
                <CertificateModal
                  key={cert.title}
                  title={cert.title}
                  imageSrc={cert.imageSrc}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Akash Enterprises. All rights
            reserved.
          </p>
          <p>
            Designed and Developed by <b>AE.Labs</b>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <PrivacyPolicyModal />
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
