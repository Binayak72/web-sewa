import Link from "next/link";
import Image from "next/image";

export default function TechnicalFeatures() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden subtle-grid">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <div className="max-w-4xl">
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-secondary/10 border border-secondary/20 text-secondary font-bold text-xs rounded-full tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Technology Stack
            </div> */}
            <h1 className="text-on-background text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
              Enterprise Infrastructure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Optimized for Resellers.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              We don't just host websites; we provide a complete ecosystem. Every account is powered by an ultra-fast stack designed for maximum uptime and seamless automation.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Features Section */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Feature 1: WHMCS */}
            <div className="md:col-span-2 feature-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-2xl bg-surface-container-low border border-outline-variant p-10 flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-3xl text-primary">account_balance_wallet</span>
                </div>
                <h3 className="text-on-surface text-2xl font-bold mb-4">WHMCS Billing Suite</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Complete automation from signup to support. Handle billing, domain management, and customer tickets effortlessly. Included free with all Reseller plans.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 font-bold text-sm text-tertiary">
                    <span className="material-symbols-outlined text-xl">task_alt</span>
                    Instant Auto-Provisioning
                  </div>
                  <div className="flex items-center gap-3 font-bold text-sm text-tertiary">
                    <span className="material-symbols-outlined text-xl">task_alt</span>
                    Automated Global Tax Handling
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 aspect-video rounded-xl bg-white overflow-hidden border border-outline-variant shadow-sm">
                <img className="w-full h-full object-cover" alt="WHMCS software interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGYJER0Plwu1HK9pPLiFiOydG0vSAYdDWftTPWCpoRm00WVJMgZcvHjJ-ZIjxEqIg-PDJB0AXtBLjco_1XOt-iFUYcGLBdLpDjQjyxPo45fdYPAKgeRF-57LcRO42YXq-Yiwc8hrpaXYl279K3OnyvQuLjXP8W6v2T2NVTx5YPBgIl5hTdqX2Qn8UGdGExVRo13-UaNVf3tbdymnOwSHhmPtKKJy8OKbJgoiruToVDqlMzFQoM7XP7R3wo2DPWSqpGY8siBjkGEabq" />
              </div>
            </div>

            {/* Feature 2: Nameservers */}
            <div className="feature-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-2xl bg-surface-container-low border border-outline-variant p-10 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-secondary-container/30 flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-3xl text-secondary">language</span>
              </div>
              <h3 className="text-on-surface text-xl font-bold mb-4">White-Label Branding</h3>
              <p className="text-on-surface-variant mb-10 leading-relaxed">
                Stay invisible. Use private nameservers to maintain your brand's professional identity throughout the client experience.
              </p>
              <div className="mt-auto bg-surface p-6 rounded-xl border border-outline-variant">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <code className="font-mono text-sm text-secondary font-bold">ns1.yourbrand.com</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <code className="font-mono text-sm text-secondary font-bold">ns2.yourbrand.com</code>
                </div>
              </div>
            </div>

            {/* Feature 3: cPanel/WHM */}
            <div className="feature-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-2xl bg-surface-container-low border border-outline-variant p-10">
              <div className="w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-3xl text-primary">dashboard_customize</span>
              </div>
              <h3 className="text-on-surface text-xl font-bold mb-4">Premium Control</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Complete WHM access for you and intuitive cPanel for your clients. Manage accounts, resources, and services with industry-standard tools.
              </p>
            </div>

            {/* Feature 4: 1-Click Installs */}
            <div className="md:col-span-2 feature-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-2xl bg-surface-container-low border border-outline-variant p-10 flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-xl bg-secondary-container/30 flex items-center justify-center mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-3xl text-secondary">rocket_launch</span>
                </div>
                <h3 className="text-on-surface text-2xl font-bold mb-4">400+ Instant Apps</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Provide your clients with Softaculous for one-click installs of WordPress, Joomla, and hundreds more. Automatic updates keep everything secure.
                </p>
              </div>
              <div className="w-full md:w-2/5 aspect-video rounded-xl bg-white overflow-hidden border border-outline-variant shadow-sm">
                <img className="w-full h-full object-cover" alt="Softaculous apps" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvPbZjzEopOvMa3SevImICnBb1R2CWvXFsG9VhrHqW7qmKkruT4wY2m10jJx73F6Y2HU_6MJi9yoJxbuOu1TUKmCz-nLWzLoYOFRHkiUD3qs7vLaz3dkJtOXBvMq8CPtsRsHxyljfSPJ-rf7NS2l3QeGIlbppiILBER7s4s7CejrOLe3VXSuyLH4fGs-86IavMsZWUK4j1XOqUFoxgGgTAcGJW5lVQKrnLrfC481yH7_9GuDBaWhPXCHOaS0coa19xD6zHU_ZSUT7K" />
              </div>
            </div>

            {/* Feature 5: Backups */}
            <div className="md:col-span-3 border border-outline-variant bg-surface-container p-12 md:p-16 rounded-[2rem] relative overflow-hidden">
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-xl bg-tertiary-container flex items-center justify-center mb-8 shadow-sm">
                    <span className="material-symbols-outlined text-4xl text-tertiary">restore</span>
                  </div>
                  <h3 className="text-on-background text-4xl font-extrabold tracking-tight mb-6">Redundant Daily Backups</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                    Your data is your business. We take off-site daily snapshots of every account, giving you and your clients peace of mind with self-service restoration tools.
                  </p>
                  <Link href="/reseller-hosting-plans" className="inline-flex bg-tertiary text-on-tertiary px-8 py-4 rounded-xl font-bold items-center gap-3 hover:shadow-lg shadow-tertiary/20 transition-all">
                    VIEW BACKUP POLICY
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
                <div className="hidden md:flex justify-center">
                  <span className="material-symbols-outlined text-[200px] text-tertiary/10">shield_with_heart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Table */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-on-background text-4xl font-extrabold tracking-tight mb-6">Under the Hood</h2>
            <p className="text-on-surface-variant text-lg">The heavy-duty infrastructure that powers your hosting empire, designed for peak performance and zero bottlenecks.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high border-b border-outline-variant">
                    <th className="px-10 py-6 text-xs font-bold text-on-surface uppercase tracking-widest">Core Component</th>
                    <th className="px-10 py-6 text-xs font-bold text-on-surface uppercase tracking-widest">Enterprise Spec</th>
                    <th className="px-10 py-6 text-xs font-bold text-on-surface uppercase tracking-widest">Competitive Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low transition-all">
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-secondary">memory</span>
                        <span className="font-bold text-on-surface">Storage Engine</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <span className="font-mono text-secondary font-bold bg-secondary/10 px-3 py-1 rounded">NVMe SSD RAID-10</span>
                    </td>
                    <td className="px-10 py-8 text-on-surface-variant text-sm">
                      Exceptional I/O speeds (20x faster than SATA) for lightning-fast database queries.
                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low transition-all">
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-secondary">bolt</span>
                        <span className="font-bold text-on-surface">Web Server</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <span className="font-mono text-secondary font-bold bg-secondary/10 px-3 py-1 rounded">LiteSpeed Enterprise</span>
                    </td>
                    <td className="px-10 py-8 text-on-surface-variant text-sm">
                      Ultra-efficient content delivery with built-in LSCache for WordPress and Magento.
                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low transition-all">
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-secondary">settings_input_component</span>
                        <span className="font-bold text-on-surface">Processors</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <span className="font-mono text-secondary font-bold bg-secondary/10 px-3 py-1 rounded">Intel Xeon Scalable</span>
                    </td>
                    <td className="px-10 py-8 text-on-surface-variant text-sm">
                      High-frequency cores designed for heavy multi-tenant workloads without slowdowns.
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-all">
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-secondary">public</span>
                        <span className="font-bold text-on-surface">Network</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <span className="font-mono text-secondary font-bold bg-secondary/10 px-3 py-1 rounded">10Gbps Uplinks</span>
                    </td>
                    <td className="px-10 py-8 text-on-surface-variant text-sm">
                      Low-latency global connectivity ensuring your sites load instantly anywhere in the world.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="relative bg-primary rounded-[2.5rem] p-12 lg:p-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-on-primary-fixed-variant opacity-50"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-on-primary text-4xl md:text-6xl font-black mb-8 leading-tight">Launch your brand on a foundation of power.</h2>
              <p className="text-primary-fixed/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Every technical feature we offer is included in our transparent pricing. No hidden fees, no upsells, just pure performance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/reseller-hosting-plans" className="bg-surface text-primary font-extrabold text-body-lg px-12 py-5 rounded-2xl hover:bg-primary-container transition-all shadow-xl">
                  VIEW PLANS &amp; PRICING
                </Link>
                <Link href="/contact-legal" className="text-on-primary font-bold text-body-lg px-8 py-5 border border-on-primary/20 rounded-2xl hover:bg-on-primary/10 transition-all">
                  CONTACT SALES
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full -mr-20 -mt-20"></div>
          </div>
        </div>
      </section>
    </>
  );
}
