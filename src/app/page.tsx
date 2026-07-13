import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative pt-24 pb-32 overflow-hidden subtle-grid">
        <div className="absolute inset-0 hero-gradient transition-all duration-700 opacity-100 translate-y-0"></div>
        {/* Decorative Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full transition-all duration-700 opacity-100 translate-y-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full transition-all duration-700 opacity-100 translate-y-0"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 text-center transition-all duration-700 opacity-100 translate-y-0">
          
          <h1 className="text-on-background text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
            Professional Reseller Hosting for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Empire</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Empower your hosting business with Web Sewa's high-performance white-label infrastructure. Launch your own brand with sub-millisecond latency and effortless global scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reseller-hosting-plans" className="w-full sm:w-auto bg-primary text-on-primary font-extrabold text-body-md px-10 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl shadow-primary/10 text-center">
              Start Free Trial
            </Link>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-outline-variant bg-surface hover:bg-surface-container text-on-surface font-extrabold text-body-md px-10 py-4 rounded-xl transition-all">
              <span className="material-symbols-outlined">play_circle</span>
              Book a Demo
            </button>
          </div>
          {/* Hero Image / Visual */}
          <div className="mt-20 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-outline-variant group">
            <div className="w-full aspect-video bg-surface-container relative overflow-hidden">
              <img className="w-full h-full object-cover transform group-hover:scale-105 transition-duration-700" alt="Professional Dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKzxm4VhnDgj-LbTC2J4u5x0TfzQ328Y1W31DrUBJRbZlf5B6t0WBmDUzLEG3xRafLFNLKdeLySUh96bLto4YikXMzoYRaG6PkQRqmLFk5-jLPzvQrWbB-t4JnK-YE2k2KKTEvGD6wrgPx42_JiY_6zT82q1M4kKBJ57KLiBuyA-OWWC-gZxeBhAViXvDda0d2GxPW-i8LeA_Kahwd1y3ZX4VM5cpz_MuFID2QIgxPrUy0ZpWMGWGnyA" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Infrastructure */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop transition-all duration-700 opacity-100 translate-y-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-on-background text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Premium Infrastructure</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">Built for speed, reliability, and global scale. Our network backbone is engineered to handle the demands of the next billion users.</p>
            </div>
            <Link className="text-secondary font-bold inline-flex items-center gap-2 hover:underline" href="/technical-features">
              Explore Network Architecture
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
            {/* Feature 1 */}
            <div className="group flex flex-col p-8 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-all">
              <div className="w-14 h-14 bg-primary-container rounded-xl flex items-center justify-center text-primary mb-8 shadow-sm">
                <span className="material-symbols-outlined" style={{fontSize: "32px"}}>settings_applications</span>
              </div>
              <h3 className="text-on-surface text-xl font-bold mb-4">WHMCS Integration</h3>
              <p className="text-on-surface-variant mb-6 flex-1">Seamlessly automate your billing and client management with our pre-configured WHMCS modules.</p>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-outline-variant bg-surface">
                <img className="w-full h-full object-cover" alt="WHMCS Integration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASG1nctzKixjMG-nt0oO3KSKzdBugztSoIs1aDcIp_9XMwacHOuPm87DdVrTXS_4nrX_u6vyfJnFK_ntnteGK7eMUPYWPwgtvxyE1aTKCLZl3AI-V_Eywvl0jXR1LY15IsUs0mEfp2K7n7XQaE0F2N9NDSXQrBhfFcpBK1MwrlR4d3AEZ1R1zlkx2ykYJVZN_rV0ICzXx8P9huxVSHnLlUIngFAx1ijxB_S2nMmYDy5cLlhjvYVR6_aw" />
              </div>
            </div>
            {/* Feature 2 */}
            <div className="group flex flex-col p-8 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-all">
              <div className="w-14 h-14 bg-secondary-container/30 rounded-xl flex items-center justify-center text-secondary mb-8 shadow-sm">
                <span className="material-symbols-outlined" style={{fontSize: "32px"}}>branding_watermark</span>
              </div>
              <h3 className="text-on-surface text-xl font-bold mb-4">White-Label Branding</h3>
              <p className="text-on-surface-variant mb-6 flex-1">Your brand, our power. Custom nameservers and control panels that keep your business front and center.</p>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-outline-variant bg-surface">
                <img className="w-full h-full object-cover" alt="White-Label Branding" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxmhpTViqsquTm4DXO6c4HoOZeizSZ9PFH6y8LdyBC5EycqnSZLyD_ORx0D4Va2LqpDnfBccQkVQ1Bf9NAHWI_n2S_Tl52LDI1V8ZcEdaUkE082GUpTU-cIJ8oxt632JOyNAJU7IzzS79NZTDuCbkxd4z8bO-RBsH1mUe8QFSueQjOrJaRQ0ZFEpTFfLpialeBsp9Fq-3PtFvH0VM3Om_eGX6hySmbDYHjPqmkonclK4EhiQ5PDP3E9A" />
              </div>
            </div>
            {/* Feature 3 */}
            <div className="group flex flex-col p-8 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-surface-container-high transition-all">
              <div className="w-14 h-14 bg-tertiary-container rounded-xl flex items-center justify-center text-tertiary mb-8 shadow-sm">
                <span className="material-symbols-outlined" style={{fontSize: "32px"}}>storage</span>
              </div>
              <h3 className="text-on-surface text-xl font-bold mb-4">NVMe SSD Storage</h3>
              <p className="text-on-surface-variant mb-6 flex-1">Blazing fast data access with enterprise-grade NVMe storage, ensuring your clients' sites load instantly.</p>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-outline-variant bg-surface">
                <img className="w-full h-full object-cover" alt="NVMe SSD Storage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4a1nMRjyMrU2xG37Q6uEpxwB04QhSnbkj3q_DWWBHSQxQIeBUoZkOK1jLakkBdrr41pUURXEve5O_RbR2cCrCnaXrlFPsHR_zFHqhKapZSEXdEo_sVwIgkoDTXIgpeToDGT9SwzOe5HEFuqSd7YKnnBZ7l3FqesVEeIL9BM6K_3CznUvcROZeE3oWAzpelR8x-X3B1YyZKIgar7hjp5jIgD40LLrTwHX0TY6_-TiSAJnaMe_nOJSv9Q" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-section-gap relative bg-surface-container-low overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 subtle-grid opacity-50 transition-all duration-700 opacity-100 translate-y-0"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 transition-all duration-700 opacity-100 translate-y-0">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-on-background text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Flexible Plans</h2>
            <p className="text-on-surface-variant text-lg">Choose the perfect tier for your team's velocity. From startup solo-acts to global enterprise powerhouses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="flex flex-col p-10 rounded-2xl bg-surface border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-on-surface text-xl font-bold mb-2">Starter Reseller</h3>
              <p className="text-on-surface-variant text-sm mb-8">Perfect for early stage projects.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-on-surface text-5xl font-black">$0</span>
                <span className="text-on-surface-variant font-medium">/mo</span>
              </div>
              <Link href="/reseller-hosting-plans" className="w-full py-4 text-center rounded-xl border-2 border-outline-variant font-bold text-on-surface mb-10 hover:bg-surface-container transition-colors">Get Started</Link>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  5 Projects
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Community Support
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Basic Analytics
                </li>
              </ul>
            </div>
            {/* Pro Plan */}
            <div className="relative flex flex-col p-10 rounded-2xl bg-surface border-2 border-secondary shadow-2xl shadow-secondary/10 transition-all duration-300 transform hover:-translate-y-2 ring-4 ring-secondary/5">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
              <h3 className="text-on-surface text-xl font-bold mb-2">Professional Reseller</h3>
              <p className="text-on-surface-variant text-sm mb-8">Scale your team with ease.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-on-surface text-5xl font-black">$49</span>
                <span className="text-on-surface-variant font-medium">/mo</span>
              </div>
              <Link href="/reseller-hosting-plans" className="w-full py-4 text-center rounded-xl bg-secondary text-on-secondary font-bold mb-10 hover:shadow-lg shadow-secondary/20 transition-all">Go Pro</Link>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Unlimited Projects
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Priority Support
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Advanced Insights
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Custom Domains
                </li>
              </ul>
            </div>
            {/* Enterprise Plan */}
            <div className="flex flex-col p-10 rounded-2xl bg-surface border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-on-surface text-xl font-bold mb-2">Enterprise Reseller</h3>
              <p className="text-on-surface-variant text-sm mb-8">Global performance for big teams.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-on-surface text-5xl font-black">$199</span>
                <span className="text-on-surface-variant font-medium">/mo</span>
              </div>
              <button className="w-full py-4 rounded-xl border-2 border-primary bg-primary text-on-primary font-bold mb-10 hover:opacity-90 transition-all">Contact Sales</button>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Full Suite Access
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  Custom Compliance
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>check_circle</span>
                  SSO/SAML
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop transition-all duration-700 opacity-100 translate-y-0">
          <div className="relative bg-primary rounded-[32px] p-12 lg:p-24 overflow-hidden">
            {/* Decor */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-on-primary-fixed-variant opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-on-primary text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to ship faster?</h2>
              <p className="text-primary-fixed/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">Join 50,000+ resellers building their hosting empire on Web Sewa. No credit card required to start.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/reseller-hosting-plans" className="bg-surface text-primary font-extrabold text-body-lg px-12 py-5 rounded-2xl hover:bg-primary-container transition-all">Get Started Free</Link>
                <Link href="/technical-features" className="text-on-primary font-bold text-body-lg px-8 py-5 border border-on-primary/20 rounded-2xl hover:bg-on-primary/10 transition-all">View Documentation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
