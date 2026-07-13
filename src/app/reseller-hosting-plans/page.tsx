import Link from "next/link";
import Image from "next/image";

export default function ResellerHostingPlans() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden subtle-grid">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 text-center">
          {/* <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/30 text-secondary font-bold text-xs uppercase tracking-widest mb-6">Scalable Infrastructure</span> */}
          <h1 className="text-on-background text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
            Professional White-Label <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Reseller Hosting</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Empower your agency with NVMe-backed performance, isolated environments, and seamless client management. Launch your brand today.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-section-gap bg-surface relative">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Starter */}
            <div className="flex flex-col p-10 rounded-2xl bg-surface border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-on-surface text-xl font-bold mb-2">Starter</h3>
              <p className="text-on-surface-variant text-sm mb-8">Perfect for small portfolios.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-on-surface text-4xl font-black">$24.99</span>
                <span className="text-on-surface-variant font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  50GB NVMe Storage
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  10 cPanel Accounts
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Unmetered Bandwidth
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-outline-variant font-bold text-on-surface hover:bg-surface-container transition-colors">Select Plan</button>
            </div>
            
            {/* Professional (Best Value) */}
            <div className="relative flex flex-col p-10 rounded-2xl bg-surface border-2 border-secondary shadow-2xl shadow-secondary/10 ring-4 ring-secondary/5 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Best Value</div>
              <h3 className="text-on-surface text-xl font-bold mb-2">Professional</h3>
              <p className="text-on-surface-variant text-sm mb-8">Optimized for growing agencies.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-on-surface text-5xl font-black">$49.99</span>
                <span className="text-on-surface-variant font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-on-surface font-bold text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>verified</span>
                  150GB NVMe Storage
                </li>
                <li className="flex items-center gap-3 text-on-surface font-bold text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>verified</span>
                  30 cPanel Accounts
                </li>
                <li className="flex items-center gap-3 text-on-surface font-bold text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>verified</span>
                  Unmetered Bandwidth
                </li>
                <li className="flex items-center gap-3 text-on-surface font-bold text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>verified</span>
                  Free WHMCS License
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-secondary text-on-secondary font-bold hover:shadow-lg shadow-secondary/20 transition-all">Get Started Now</button>
            </div>
            
            {/* Business */}
            <div className="flex flex-col p-10 rounded-2xl bg-surface border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-on-surface text-xl font-bold mb-2">Business</h3>
              <p className="text-on-surface-variant text-sm mb-8">For high-traffic operations.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-on-surface text-4xl font-black">$89.99</span>
                <span className="text-on-surface-variant font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  300GB NVMe Storage
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Unlimited Accounts
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Unmetered Bandwidth
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-outline-variant font-bold text-on-surface hover:bg-surface-container transition-colors">Select Plan</button>
            </div>
            
            {/* Enterprise */}
            <div className="flex flex-col p-10 rounded-2xl bg-surface border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-on-surface text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-on-surface-variant text-sm mb-8">Maximum scale &amp; power.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-on-surface text-4xl font-black">$149.99</span>
                <span className="text-on-surface-variant font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  500GB NVMe Storage
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Unlimited Accounts
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Dedicated Support Line
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-outline-variant font-bold text-on-surface hover:bg-surface-container transition-colors">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="text-center mb-20">
            <h2 className="text-on-background text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Compare Detailed Features</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Everything you need to succeed as a hosting provider, analyzed feature by feature.</p>
          </div>
          <div className="bg-surface rounded-2xl overflow-hidden shadow-xl border border-outline-variant">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left bg-surface-container-high/50 border-b border-outline-variant">
                    <th className="py-8 px-10 text-on-background font-bold text-lg">Features</th>
                    <th className="py-8 px-6 text-on-surface-variant font-bold text-center">Starter</th>
                    <th className="py-8 px-6 text-secondary font-extrabold text-center bg-secondary/5">Professional</th>
                    <th className="py-8 px-6 text-on-surface-variant font-bold text-center">Business</th>
                    <th className="py-8 px-6 text-on-surface-variant font-bold text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant">
                  <tr className="transition-colors border-b border-outline-variant/50 even:bg-surface-container-low">
                    <td className="py-6 px-10 font-bold text-on-surface">Disk Space (NVMe)</td>
                    <td className="py-6 px-6 text-center">50GB</td>
                    <td className="py-6 px-6 text-center text-on-surface font-bold bg-secondary/5">150GB</td>
                    <td className="py-6 px-6 text-center">300GB</td>
                    <td className="py-6 px-6 text-center">500GB</td>
                  </tr>
                  <tr className="transition-colors border-b border-outline-variant/50 even:bg-surface-container-low">
                    <td className="py-6 px-10 font-bold text-on-surface">Number of Accounts</td>
                    <td className="py-6 px-6 text-center">10</td>
                    <td className="py-6 px-6 text-center text-on-surface font-bold bg-secondary/5">30</td>
                    <td className="py-6 px-6 text-center">Unlimited</td>
                    <td className="py-6 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="transition-colors border-b border-outline-variant/50 even:bg-surface-container-low">
                    <td className="py-6 px-10 font-bold text-on-surface">Monthly Bandwidth</td>
                    <td className="py-6 px-6 text-center">Unmetered</td>
                    <td className="py-6 px-6 text-center text-on-surface font-bold bg-secondary/5">Unmetered</td>
                    <td className="py-6 px-6 text-center">Unmetered</td>
                    <td className="py-6 px-6 text-center">Unmetered</td>
                  </tr>
                  <tr className="transition-colors border-b border-outline-variant/50 even:bg-surface-container-low">
                    <td className="py-6 px-10 font-bold text-on-surface">WHMCS License</td>
                    <td className="py-6 px-6 text-center">—</td>
                    <td className="py-6 px-6 text-center text-on-surface font-bold bg-secondary/5">Included</td>
                    <td className="py-6 px-6 text-center">Included</td>
                    <td className="py-6 px-6 text-center">Included</td>
                  </tr>
                  <tr className="transition-colors border-b border-outline-variant/50 even:bg-surface-container-low">
                    <td className="py-6 px-10 font-bold text-on-surface">Daily JetBackup</td>
                    <td className="py-6 px-6 text-center">
                      <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    </td>
                    <td className="py-6 px-6 text-center bg-secondary/5">
                      <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group p-10 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-all">
            <div className="w-16 h-16 bg-secondary-container/30 rounded-xl flex items-center justify-center text-secondary mb-8 shadow-sm">
              <span className="material-symbols-outlined" style={{fontSize: "32px"}}>bolt</span>
            </div>
            <h4 className="text-on-surface text-xl font-bold mb-4">NVMe Velocity</h4>
            <p className="text-on-surface-variant leading-relaxed">Industry-leading storage speeds ensuring your clients' sites load in milliseconds, not seconds.</p>
          </div>
          <div className="group p-10 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-all">
            <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center text-primary mb-8 shadow-sm">
              <span className="material-symbols-outlined" style={{fontSize: "32px"}}>shield</span>
            </div>
            <h4 className="text-on-surface text-xl font-bold mb-4">Bulletproof Security</h4>
            <p className="text-on-surface-variant leading-relaxed">CloudLinux isolation, Imunify360 protection, and free SSL certificates for every account you host.</p>
          </div>
          <div className="group p-10 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-all">
            <div className="w-16 h-16 bg-tertiary-container rounded-xl flex items-center justify-center text-tertiary mb-8 shadow-sm">
              <span className="material-symbols-outlined" style={{fontSize: "32px"}}>support_agent</span>
            </div>
            <h4 className="text-on-surface text-xl font-bold mb-4">24/7 Expert Support</h4>
            <p className="text-on-surface-variant leading-relaxed">Dedicated Tier-3 technicians standing by to assist with migrations and complex server-level inquiries.</p>
          </div>
        </div>
      </section>
    </>
  );
}
