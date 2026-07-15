import Link from "next/link";
import Image from "next/image";

export default function ContactLegalTeam() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden subtle-grid">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 text-center">
          <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-8 inline-block">
            Legal &amp; Compliance
          </span>
          <h1 className="text-on-background text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
            Integrity in every <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">interaction.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Our legal team is committed to transparency and due process. Reach out to us for inquiries regarding compliance, regulatory matters, or intellectual property.
          </p>
        </div>
      </section>

      {/* Form & Sidebar Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-low border border-outline-variant p-10 rounded-2xl shadow-sm">
                <h2 className="text-on-background text-3xl font-extrabold tracking-tight mb-8">Submit a Legal Inquiry</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-label-md font-bold text-on-surface-variant ml-1">Full Name</label>
                      <input className="w-full bg-surface border border-outline-variant rounded-xl p-4 text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-outline/50" placeholder="John Doe" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label-md font-bold text-on-surface-variant ml-1">Organization (Optional)</label>
                      <input className="w-full bg-surface border border-outline-variant rounded-xl p-4 text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-outline/50" placeholder="Acme Corp" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-md font-bold text-on-surface-variant ml-1">Inquiry Type</label>
                    <select className="w-full bg-surface border border-outline-variant rounded-xl p-4 text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none cursor-pointer">
                      <option>General Legal Inquiry</option>
                      <option>DMCA / Copyright Infringement</option>
                      <option>KYC / Identity Verification</option>
                      <option>Law Enforcement Request</option>
                      <option>Data Privacy (GDPR/CCPA)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-md font-bold text-on-surface-variant ml-1">Message Detail</label>
                    <textarea className="w-full bg-surface border border-outline-variant rounded-xl p-4 text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none placeholder:text-outline/50" placeholder="Please provide a detailed description of your request or inquiry..." rows={6}></textarea>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <input className="w-5 h-5 rounded border-outline-variant bg-surface text-secondary focus:ring-secondary" id="consent" type="checkbox" />
                    <label className="text-label-md text-on-surface-variant leading-relaxed font-medium" htmlFor="consent">
                      I confirm that the information provided is accurate and I agree to the <Link className="text-secondary font-bold hover:underline" href="/privacy-policy">Privacy Policy</Link>.
                    </label>
                  </div>
                  <button className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-extrabold text-lg hover:shadow-lg hover:shadow-secondary/20 transition-all flex items-center justify-center gap-2" type="submit">
                    Send Inquiry
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-on-background text-2xl font-extrabold tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-secondary rounded-full"></span>
                  Common Inquiries
                </h3>
                <div className="space-y-4">
                  {/* DMCA */}
                  <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant group hover:bg-surface-container transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300 shadow-sm">
                        <span className="material-symbols-outlined">copyright</span>
                      </div>
                      <div>
                        <h4 className="text-on-surface font-extrabold mb-1">DMCA Requests</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">Submit formal copyright infringement notices. Please ensure your report includes all digital signatures and necessary documentation.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* KYC */}
                  <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant group hover:bg-surface-container transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0 group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors duration-300 shadow-sm">
                        <span className="material-symbols-outlined">verified_user</span>
                      </div>
                      <div>
                        <h4 className="text-on-surface font-extrabold mb-1">KYC Verification</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">Inquiries regarding high-volume reseller verification or identity disputes for managed enterprise accounts.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Law Enforcement */}
                  <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant group hover:bg-surface-container transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error shrink-0 group-hover:bg-error group-hover:text-on-error transition-colors duration-300 shadow-sm">
                        <span className="material-symbols-outlined">policy</span>
                      </div>
                      <div>
                        <h4 className="text-on-surface font-extrabold mb-1">Law Enforcement</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">Dedicated channel for governmental and law enforcement agencies to submit subpoenas or requests for information.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Asset Card */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg border border-outline-variant">
                <div className="w-full h-72 relative">
                  <img className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700" alt="A cinematic, low-angle shot of a high-tech corporate legal office at night." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvkD43vwor6hWbAS-7CDklS6_8d73biZgEb9Z5t8GHEMZPZv4ILqUfgCC7A6p2rPxg1oA7sxUEBfDapml3nPGucyCwWaXTYaRJT8L02g8gd-BKieVp4NYGk_QpMmQUeNMKBcECwxBRttNSi04d6rblCv59H0zSdb5tI-qX8Huq433tyZyKL5YC-NrAc9YxZzDlrxCCqXJvSwqp6BhOE1UzIkRzbMAIyAqGRY7H8G1EgbkJZO27hyIbpQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-1">Global Presence</p>
                    <p className="text-on-primary text-xl font-extrabold">Trust built on compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Transparency Section */}
      <section className="bg-surface-container-low py-section-gap relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-50"></div>
        <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10">
          <h2 className="text-on-background text-4xl font-extrabold tracking-tight mb-16">Regulatory Transparency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-3">
              <h5 className="text-secondary font-extrabold text-label-md">Data Residency</h5>
              <p className="text-on-surface-variant leading-relaxed">We operate with strict adherence to local data protection laws, ensuring your hosted infrastructure meets jurisdictional requirements.</p>
            </div>
            <div className="space-y-3">
              <h5 className="text-secondary font-extrabold text-label-md">Service Level Agreements</h5>
              <p className="text-on-surface-variant leading-relaxed">All legal interactions are governed by our master service agreement, ensuring 99.9% uptime and clear dispute resolution protocols.</p>
            </div>
            <div className="space-y-3">
              <h5 className="text-secondary font-extrabold text-label-md">Anti-Abuse Policy</h5>
              <p className="text-on-surface-variant leading-relaxed">Web Seva maintains a zero-tolerance policy for illegal content and activities, actively collaborating with security researchers.</p>
            </div>
            <div className="space-y-3">
              <h5 className="text-secondary font-extrabold text-label-md">Encryption Standards</h5>
              <p className="text-on-surface-variant leading-relaxed">Every legal communication is encrypted end-to-end to maintain the highest levels of privilege and confidentiality.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
