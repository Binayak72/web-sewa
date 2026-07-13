"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LegalCompliance() {
  const [activeSection, setActiveSection] = useState("tos");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["tos", "privacy", "sla"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        {/* Header Section */}
        <div className="mb-20">
          <h1 className="text-on-background text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-8">Legal &amp; Compliance</h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl leading-relaxed">
            Our commitment to transparency and professional reliability. Please review the terms governing our partnership, infrastructure, and your data protection.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Side Navigation */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-32">
              <nav className="space-y-2 mb-10">
                <button 
                  onClick={() => scrollToSection("tos")}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border-l-4 text-left font-bold text-sm transition-all ${activeSection === "tos" ? "nav-item-active" : "border-transparent text-on-surface-variant hover:bg-surface-container-low"}`}
                >
                  <span className="material-symbols-outlined text-xl">description</span>
                  Terms of Service
                </button>
                <button 
                  onClick={() => scrollToSection("privacy")}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border-l-4 text-left font-bold text-sm transition-all ${activeSection === "privacy" ? "nav-item-active" : "border-transparent text-on-surface-variant hover:bg-surface-container-low"}`}
                >
                  <span className="material-symbols-outlined text-xl">verified_user</span>
                  Privacy Policy
                </button>
                <button 
                  onClick={() => scrollToSection("sla")}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border-l-4 text-left font-bold text-sm transition-all ${activeSection === "sla" ? "nav-item-active" : "border-transparent text-on-surface-variant hover:bg-surface-container-low"}`}
                >
                  <span className="material-symbols-outlined text-xl">speed</span>
                  Service Level Agreement
                </button>
              </nav>
              <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant shadow-sm">
                <h4 className="text-on-surface font-bold mb-3">Need legal help?</h4>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Questions about our legal terms or compliance standards?</p>
                <Link href="/contact-legal" className="inline-block w-full text-center py-3 px-4 rounded-xl border-2 border-outline-variant bg-surface hover:bg-surface-container text-on-surface font-bold text-sm transition-all">
                  Contact Legal Team
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1 space-y-32">
            {/* Section: Terms of Service */}
            <section className="legal-content scroll-mt-32" id="tos">
              <div className="mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/30 text-secondary font-extrabold text-[11px] uppercase tracking-widest mb-6">Effective: October 2026</span>
                <h2 className="text-on-background text-4xl font-extrabold tracking-tight mb-4">Terms of Service</h2>
                <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
              </div>
              <div className="max-w-none">
                <h3 className="text-on-background text-2xl font-bold mb-6">1. Acceptance of Terms</h3>
                <p>
                  By accessing or using the Web Sewa infrastructure, reseller platform, or hosting services, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these terms. Web Sewa provides high-performance reseller hosting solutions, and your use of these services signifies your acknowledgment of the technical and legal responsibilities involved.
                </p>
                <h3 className="text-on-background text-2xl font-bold mt-16 mb-6">2. User Responsibilities</h3>
                <p>
                  As a reseller of Web Sewa services, you maintain primary responsibility for the end-users you support. Your obligations include:
                </p>
                <ul className="text-on-surface-variant space-y-3">
                  <li>Providing first-tier technical support to your own clients directly.</li>
                  <li>Ensuring all sub-accounts comply with our Acceptable Use Policy guidelines.</li>
                  <li>Maintaining accurate and up-to-date billing records for your downstream users.</li>
                  <li>Securing your reseller administrative credentials with multi-factor authentication.</li>
                  <li>Monitoring and preventing resource abuse within your allocated infrastructure node.</li>
                </ul>
                <h3 className="text-on-background text-2xl font-bold mt-16 mb-6">3. Payment Terms</h3>
                <p>
                  All services are billed on a recurring basis (monthly or annually) as selected during registration. Fees are non-refundable except as expressly stated in our Refund Policy. Web Sewa reserves the right to suspend accounts that are more than 48 hours past due. Resellers are responsible for collecting payments from their clients; client non-payment does not exempt the Reseller from their financial obligations to Web Sewa.
                </p>
                <h3 className="text-on-background text-2xl font-bold mt-16 mb-6">4. Refund Policy</h3>
                <p>
                  We offer a 30-day "No-Questions-Asked" satisfaction guarantee for new hosting accounts. This refund applies only to hosting fees and specifically excludes domain registrations, SSL certificates, and custom professional services. Refunds requested after the 30-day window will be handled at the sole discretion of the Web Sewa billing department and may be issued as service credits.
                </p>
              </div>
            </section>

            {/* Section: Privacy Policy */}
            <section className="legal-content scroll-mt-32" id="privacy">
              <div className="mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/30 text-secondary font-extrabold text-[11px] uppercase tracking-widest mb-6">Updated: Oct 24, 2026</span>
                <h2 className="text-on-background text-4xl font-extrabold tracking-tight mb-4">Privacy Policy</h2>
                <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
              </div>
              <div className="max-w-none">
                <p className="text-lg">
                  We collect information necessary to provide professional hosting services, including contact details, billing information, and technical metadata. We do not sell your personal information to third parties.
                </p>
                <h3 className="text-on-background text-2xl font-bold mt-16 mb-8 text-center lg:text-left">Security Infrastructure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                  <div className="p-10 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-8 shadow-sm">
                      <span className="material-symbols-outlined text-secondary" style={{fontSize: "32px"}}>lock_open</span>
                    </div>
                    <h4 className="text-on-surface text-xl font-bold mb-4">Encryption at Rest</h4>
                    <p className="text-sm leading-relaxed mb-0">All sensitive user data is encrypted using industry-standard AES-256 protocols within our storage nodes.</p>
                  </div>
                  <div className="p-10 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-tertiary-container/30 flex items-center justify-center mb-8 shadow-sm">
                      <span className="material-symbols-outlined text-tertiary" style={{fontSize: "32px"}}>admin_panel_settings</span>
                    </div>
                    <h4 className="text-on-surface text-xl font-bold mb-4">Access Control</h4>
                    <p className="text-sm leading-relaxed mb-0">Strict internal protocols and zero-trust principles restrict data access to verified authorized personnel only.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: SLA */}
            <section className="legal-content scroll-mt-32" id="sla">
              <div className="mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/30 text-secondary font-extrabold text-[11px] uppercase tracking-widest mb-6">Availability Guarantee</span>
                <h2 className="text-on-background text-4xl font-extrabold tracking-tight mb-4">Service Level Agreement</h2>
                <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
              </div>
              <div className="p-12 rounded-[32px] bg-primary relative overflow-hidden mb-16 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-on-primary-fixed-variant opacity-50"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                  <div className="shrink-0">
                    <div className="text-7xl font-black text-on-primary tracking-tighter mb-2">99.9%</div>
                    <div className="font-extrabold text-secondary text-sm uppercase tracking-[0.2em]">Uptime Guaranteed</div>
                  </div>
                  <div className="hidden md:block w-px h-24 bg-on-primary/10"></div>
                  <p className="text-primary-fixed/90 text-xl font-medium leading-relaxed italic">
                    "We guarantee that our network and power infrastructure will be available 99.9% of the time in any given monthly billing cycle, or we provide service credits."
                  </p>
                </div>
              </div>
              <h3 className="text-on-background text-2xl font-bold mb-8">Service Credit Entitlement</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex justify-between items-center p-8 rounded-2xl border border-outline-variant bg-surface shadow-sm hover:shadow-lg transition-all">
                  <span className="font-bold text-on-surface">99.5% - 99.8% Uptime</span>
                  <span className="text-xl font-black text-secondary">5% Credit</span>
                </div>
                <div className="flex justify-between items-center p-8 rounded-2xl border border-outline-variant bg-surface shadow-sm hover:shadow-lg transition-all">
                  <span className="font-bold text-on-surface">99.0% - 99.4% Uptime</span>
                  <span className="text-xl font-black text-secondary">15% Credit</span>
                </div>
                <div className="flex justify-between items-center p-8 rounded-2xl border border-outline-variant bg-surface shadow-sm hover:shadow-lg transition-all">
                  <span className="font-bold text-on-surface">98.0% - 98.9% Uptime</span>
                  <span className="text-xl font-black text-secondary">25% Credit</span>
                </div>
                <div className="flex justify-between items-center p-8 rounded-2xl border border-outline-variant bg-surface shadow-sm hover:shadow-lg transition-all">
                  <span className="font-bold text-on-surface">Below 98.0% Uptime</span>
                  <span className="text-xl font-black text-secondary">50% Credit</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
