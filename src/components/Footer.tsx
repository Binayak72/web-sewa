import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-stack-lg">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="text-secondary w-6 h-6">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-on-background font-bold tracking-tight">Web Sewa</span>
            </Link>
            <p className="text-on-surface-variant text-sm mb-8">The performance-first developer platform.</p>
          </div>
          <div>
            <h4 className="text-on-surface font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary" href="/technical-features">Infrastructure</Link></li>
              <li><Link className="hover:text-primary" href="/reseller-hosting-plans">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-on-surface font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary" href="/about">About</Link></li>
              <li><Link className="hover:text-primary" href="/contact-legal">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-on-surface font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary" href="/sla">SLA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-on-surface font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary" href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary" href="/legal-compliance">Compliance</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between gap-8 items-center">
          <p className="text-on-surface-variant text-sm">© 2026 Web Sewa. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
