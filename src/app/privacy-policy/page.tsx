"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("data-collection");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["data-collection", "data-usage", "security", "user-rights", "cookies"];
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

  return (
    <div className="bg-surface-container-lowest">
      {/* Header Section */}
      <section className="relative pt-20 pb-16 subtle-grid">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-tertiary-container/30 border border-tertiary/20 text-tertiary rounded-full font-bold text-xs uppercase tracking-widest mb-8">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            Effective Date: Oct 24, 2026
          </span>
          <h1 className="text-on-background text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
            At Web Sewa, we prioritize the protection of your digital footprint. This document outlines our rigorous standards for data privacy, security, and your rights as a professional reseller.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-gutter">
            
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-32 p-6 rounded-2xl bg-surface-container-low border border-outline-variant">
                <h3 className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-6">Contents</h3>
                <ul className="space-y-5">
                  <li>
                    <Link 
                      href="#data-collection"
                      className={`block pl-4 text-sm border-l-2 transition-all ${activeSection === "data-collection" ? "border-secondary text-on-background font-semibold" : "border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary"}`}
                    >
                      1. Data Collection
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#data-usage"
                      className={`block pl-4 text-sm border-l-2 transition-all ${activeSection === "data-usage" ? "border-secondary text-on-background font-semibold" : "border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary"}`}
                    >
                      2. Data Usage
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#security"
                      className={`block pl-4 text-sm border-l-2 transition-all ${activeSection === "security" ? "border-secondary text-on-background font-semibold" : "border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary"}`}
                    >
                      3. Security
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#user-rights"
                      className={`block pl-4 text-sm border-l-2 transition-all ${activeSection === "user-rights" ? "border-secondary text-on-background font-semibold" : "border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary"}`}
                    >
                      4. User Rights
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#cookies"
                      className={`block pl-4 text-sm border-l-2 transition-all ${activeSection === "cookies" ? "border-secondary text-on-background font-semibold" : "border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary"}`}
                    >
                      5. Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Content Canvas */}
            <div className="flex-1 legal-content">
              <section id="data-collection">
                <h2 className="text-on-background text-3xl font-bold flex items-center gap-3 border-b border-outline-variant pb-2 mb-6 mt-12">
                  <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>dataset</span>
                  1. Data Collection
                </h2>
                <p>We collect information necessary to provide professional reseller hosting solutions. This includes identifiers like name, email address, and billing information. Our system also automatically logs technical metadata such as IP addresses, browser types, and operating system details to ensure platform stability and security.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-on-surface font-bold mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm">person</span>
                      Personal Identifiers
                    </h4>
                    <ul className="text-on-surface-variant text-sm space-y-2 !mb-0 !list-none !pl-0">
                      <li className="flex items-center gap-2 !pl-0 !before:content-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                        Account Registration Details
                      </li>
                      <li className="flex items-center gap-2 !pl-0 !before:content-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                        Contact Information
                      </li>
                      <li className="flex items-center gap-2 !pl-0 !before:content-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                        Payment Processing Tokens
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-on-surface font-bold mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm">terminal</span>
                      Technical Data
                    </h4>
                    <ul className="text-on-surface-variant text-sm space-y-2 !mb-0 !list-none !pl-0">
                      <li className="flex items-center gap-2 !pl-0 !before:content-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                        Server Access Logs
                      </li>
                      <li className="flex items-center gap-2 !pl-0 !before:content-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                        API Usage Statistics
                      </li>
                      <li className="flex items-center gap-2 !pl-0 !before:content-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                        Security Authentication Logs
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="data-usage">
                <h2 className="text-on-background text-3xl font-bold flex items-center gap-3 border-b border-outline-variant pb-2 mb-6 mt-12">
                  <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>insights</span>
                  2. Data Usage
                </h2>
                <p>Your information is used strictly to maintain the excellence of Web Sewa services. We process data for authentication, infrastructure management, billing accuracy, and proactive technical support. We do not engage in the sale of user data to third-party advertisers.</p>
                <div className="bg-primary/5 border-l-4 border-secondary p-8 rounded-r-2xl mb-8">
                  <p className="italic text-on-surface-variant text-lg mb-0">"Our commitment is to leverage data only for the optimization of your hosting environment and the security of the global Web Sewa network."</p>
                </div>
              </section>

              <section id="security">
                <h2 className="text-on-background text-3xl font-bold flex items-center gap-3 border-b border-outline-variant pb-2 mb-6 mt-12">
                  <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>lock_person</span>
                  3. Security Infrastructure
                </h2>
                <p>Web Sewa employs enterprise-grade security measures to safeguard all stored information. Our infrastructure is designed to prevent unauthorized access, maintain data integrity, and ensure continuous availability.</p>
                <div className="space-y-6">
                  <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container transition-colors">
                    <div className="w-12 h-12 bg-secondary-container/30 rounded-xl flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined">encrypted</span>
                    </div>
                    <div>
                      <h4 className="text-on-surface font-bold mb-2">Encryption at Rest</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">All persistent data is encrypted using AES-256 standards. Encryption keys are managed via a hardware security module (HSM) with strict rotation policies.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container transition-colors">
                    <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">admin_panel_settings</span>
                    </div>
                    <div>
                      <h4 className="text-on-surface font-bold mb-2">Access Control</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">We implement the Principle of Least Privilege (PoLP). Administrative access is gated by Multi-Factor Authentication (MFA) and audited quarterly.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="user-rights">
                <h2 className="text-on-background text-3xl font-bold flex items-center gap-3 border-b border-outline-variant pb-2 mb-6 mt-12">
                  <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>gavel</span>
                  4. User Rights
                </h2>
                <p>As a Web Sewa client, you retain full sovereignty over your information. We comply with global privacy frameworks including GDPR and CCPA, providing you with the tools to manage your data.</p>
                <div className="space-y-4 text-on-surface-variant">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <p className="mb-0"><strong className="text-on-surface">Right to Access:</strong> You may request a comprehensive export of all personal data we store regarding your account.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <p className="mb-0"><strong className="text-on-surface">Right to Rectification:</strong> You can update or correct any inaccuracies in your personal information via the client portal.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <p className="mb-0"><strong className="text-on-surface">Right to Erasure:</strong> You may request the permanent deletion of your account and associated data, subject to legal retention requirements.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <p className="mb-0"><strong className="text-on-surface">Right to Portability:</strong> We provide standardized API access to ensure your data remains mobile and interoperable.</p>
                  </div>
                </div>
              </section>

              <section id="cookies">
                <h2 className="text-on-background text-3xl font-bold flex items-center gap-3 border-b border-outline-variant pb-2 mb-6 mt-12">
                  <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>cookie</span>
                  5. Cookie Policy
                </h2>
                <p>We use essential cookies to maintain session persistence and security. Analytics cookies are used only with your explicit consent to help us understand platform usage patterns. You can manage your preferences at any time through your browser settings.</p>
              </section>

              <div className="mt-20 pt-10 border-t border-outline-variant">
                <h3 className="text-on-background text-2xl font-bold mb-4">Have questions about your privacy?</h3>
                <p className="text-on-surface-variant mb-8">Our dedicated data protection officer is available to address any concerns regarding our privacy practices.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-legal" className="text-center bg-primary text-on-primary font-bold px-8 py-3.5 rounded-xl hover:shadow-lg transition-all">
                    Contact Security Team
                  </Link>
                  <Link href="/legal-compliance" className="text-center border-2 border-outline-variant text-on-surface font-bold px-8 py-3.5 rounded-xl hover:bg-surface-container transition-all">
                    Read Terms of Service
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
