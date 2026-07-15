"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-label-md transition-colors ${
      isActive 
        ? "text-primary font-bold border-b-2 border-primary" 
        : "text-on-surface-variant hover:text-primary font-medium"
    }`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `block px-4 py-3 rounded-lg text-body-md transition-colors ${
      isActive 
        ? "bg-primary/10 text-primary font-bold" 
        : "text-on-surface-variant hover:bg-surface-container hover:text-primary font-medium"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b border-outline-variant px-6 lg:px-margin-desktop py-4">
      <div className="max-w-container-max mx-auto flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-stack-md">
          <Link className={getLinkClass("/technical-features")} href="/technical-features">Infrastructure</Link>
          <Link className={getLinkClass("/reseller-hosting-plans")} href="/reseller-hosting-plans">Pricing</Link>
          <Link className={getLinkClass("/about")} href="/about">About</Link>
          <Link className={getLinkClass("/legal-compliance")} href="/legal-compliance">Compliance</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="text-on-surface font-bold text-label-md px-4 py-2 hover:bg-surface-container transition-all rounded-lg">Log In</button>
          <Link href="/reseller-hosting-plans" className="bg-primary text-on-primary font-bold text-label-md px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all">Get Started</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-on-surface p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant shadow-xl py-4 px-6 flex flex-col gap-2">
          <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/technical-features")} href="/technical-features">Infrastructure</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/reseller-hosting-plans")} href="/reseller-hosting-plans">Pricing</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/about")} href="/about">About</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/legal-compliance")} href="/legal-compliance">Compliance</Link>
          <div className="border-t border-outline-variant my-2"></div>
          <button className="w-full text-left text-on-surface font-bold px-4 py-3 hover:bg-surface-container rounded-lg">Log In</button>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/reseller-hosting-plans" className="block w-full text-center bg-primary text-on-primary font-bold px-6 py-3 rounded-lg mt-2">Get Started</Link>
        </div>
      )}
    </header>
  );
}
