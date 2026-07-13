"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-label-md transition-colors ${
      isActive 
        ? "text-primary font-bold border-b-2 border-secondary" 
        : "text-on-surface-variant hover:text-primary font-medium"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b border-outline-variant px-6 lg:px-margin-desktop py-4">
      <div className="max-w-container-max mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-secondary w-8 h-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-on-background text-xl font-extrabold tracking-tight">WebSewa</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-stack-md">
          <Link className={getLinkClass("/technical-features")} href="/technical-features">Infrastructure</Link>
          <Link className={getLinkClass("/reseller-hosting-plans")} href="/reseller-hosting-plans">Pricing</Link>
          <Link className={getLinkClass("/about")} href="/about">About</Link>
          <Link className={getLinkClass("/legal-compliance")} href="/legal-compliance">Compliance</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-primary font-bold text-label-md px-4 py-2 hover:bg-surface-container transition-all rounded-lg">Log In</button>
          <Link href="/reseller-hosting-plans" className="bg-primary text-on-primary font-bold text-label-md px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all">Get Started</Link>
        </div>
      </div>
    </header>
  );
}
