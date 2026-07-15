import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-stack-lg">
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start">
            <div className="mb-6 w-full max-w-[200px]">
              <Logo className="mb-6" />
            </div>
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
          <p className="text-on-surface-variant text-sm">© 2026 Web Seva. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
