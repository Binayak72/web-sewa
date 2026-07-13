import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden subtle-grid">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <div className="max-w-4xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary font-semibold text-sm mb-6 border border-secondary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              EMPOWERING DIGITAL COMMERCE
            </div> */}
            <h1 className="text-on-background text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
              Powering the Next <span className="bg-gradient-to-br from-on-background to-secondary text-transparent bg-clip-text">Generation</span> of Reseller Giants
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Web Sewa is more than a provider. We are the invisible backbone for over 2,000 hosting entrepreneurs, delivering high-performance infrastructure and elite white-label tools to build your empire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary font-extrabold text-body-md px-10 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl shadow-primary/10 flex items-center justify-center gap-2">
                Explore Solutions <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-outline-variant bg-surface hover:bg-surface-container text-on-surface font-extrabold text-body-md px-10 py-4 rounded-xl transition-all">
                Watch Video Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-on-background text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">The Architecture of Invisible Success</h2>
              <p className="text-on-surface-variant text-xl leading-relaxed italic border-l-4 border-secondary pl-6">
                "Our mission is to democratize world-class hosting infrastructure, enabling any entrepreneur to compete with industry giants through invisible, industrial-strength technology."
              </p>
              <div className="grid gap-6 pt-4">
                <div className="flex items-start gap-6 p-8 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-white hover:shadow-xl transition-all">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-secondary">
                    <span className="material-symbols-outlined text-3xl">branding_watermark</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-on-background mb-2">True White-Label Freedom</h4>
                    <p className="text-on-surface-variant leading-relaxed">Your brand is the hero. Our hardware, support, and network remain completely anonymous to your clients.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-8 rounded-2xl bg-surface-container-low border border-outline-variant hover:bg-white hover:shadow-xl transition-all">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-secondary">
                    <span className="material-symbols-outlined text-3xl">hub</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-on-background mb-2">Frictionless Automation</h4>
                    <p className="text-on-surface-variant leading-relaxed">Scale effortlessly with automated billing, instant provisioning, and integrated technical support tools.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/5 blur-2xl rounded-[40px] opacity-50"></div>
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
                <img alt="Data center technology" className="w-full aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_x376N1A2msE2rnu7tcnlcimiDc2igMXLWtYrvuLIWswtyGGRA30GAjvmutQZupHI87BvCsuUG-OT3HAySH7N4NN27xLhnLw1AsSmL4-6gqgwIeDDUEszN7akiSqKeQXmpdgEYHeLuYdcu99d9Tcps3zqhhmZT_wWfqMLST0rgQD9ZdjEaUI_mBhQZMPBUR1H-xUM-VbIrJP8FkXtDqfFy7K-CRaRJNo_U7QcO9tBwO37pGrrzABaPQ" />
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-primary/90 to-transparent text-white">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-black">100%</div>
                    <div className="text-sm font-bold uppercase tracking-widest leading-tight">Enterprise<br/>Hardware</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-section-gap bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-30"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-xl">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Our DNA</span>
              <h2 className="text-on-background text-4xl md:text-5xl font-extrabold tracking-tight">The Values That Fuel Our Partnerships</h2>
            </div>
            <p className="text-on-surface-variant max-w-sm text-lg">We don't just sell servers; we invest in your growth through a culture of radical excellence.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface p-10 rounded-[32px] border border-outline-variant shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="text-[64px] font-black text-secondary/10 mb-2 leading-none group-hover:text-secondary/20 transition-colors">01</div>
              <h3 className="text-2xl font-bold text-on-background mb-4">Unshakeable Reliability</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Your clients' livelihoods depend on your uptime. We treat every millisecond of availability as sacred, with multi-redundant systems and predictive maintenance.
              </p>
              <div className="h-1.5 w-12 bg-secondary rounded-full"></div>
            </div>
            
            <div className="bg-surface p-10 rounded-[32px] border border-outline-variant shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="text-[64px] font-black text-secondary/10 mb-2 leading-none group-hover:text-secondary/20 transition-colors">02</div>
              <h3 className="text-2xl font-bold text-on-background mb-4">Radical Transparency</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                No hidden caps, no surprise fees, and 100% public status reports. We believe trust is built through honesty, even during technical challenges.
              </p>
              <div className="h-1.5 w-12 bg-secondary rounded-full"></div>
            </div>
            
            <div className="bg-surface p-10 rounded-[32px] border border-outline-variant shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="text-[64px] font-black text-secondary/10 mb-2 leading-none group-hover:text-secondary/20 transition-colors">03</div>
              <h3 className="text-2xl font-bold text-on-background mb-4">Relentless Innovation</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                The web moves fast. We stay ahead with NVMe Gen5 storage, AI-driven security layers, and next-gen cooling to keep your business on the cutting edge.
              </p>
              <div className="h-1.5 w-12 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="bg-primary rounded-[40px] p-12 lg:p-24 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-on-primary-fixed-variant opacity-50"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -mr-32 -mt-32"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">Engineered for Global Scale</h2>
                <p className="text-primary-fixed/80 text-xl mb-12 leading-relaxed">Our proprietary Tier-4 network is optimized for high-concurrency reseller workloads, ensuring peak performance for every sub-account you host.</p>
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <div className="text-5xl font-black text-secondary-fixed mb-2">10ms</div>
                    <div className="text-sm font-bold text-white/60 uppercase tracking-widest">Global Latency</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-secondary-fixed mb-2">99.9%</div>
                    <div className="text-sm font-bold text-white/60 uppercase tracking-widest">Uptime SLA</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 flex items-center gap-6 hover:bg-white/10 transition-colors group">
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl group-hover:scale-110 transition-transform">public</span>
                  <span className="font-bold text-xl">24+ Edge Locations Worldwide</span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 flex items-center gap-6 hover:bg-white/10 transition-colors group">
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl group-hover:scale-110 transition-transform">verified_user</span>
                  <span className="font-bold text-xl">ISO 27001 Certified Security</span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 flex items-center gap-6 hover:bg-white/10 transition-colors group">
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl group-hover:scale-110 transition-transform">engineering</span>
                  <span className="font-bold text-xl">L3 Admin Support 24/7/365</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap bg-surface relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center relative z-10">
          <h2 className="text-on-background text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Ready to Build Your Empire?</h2>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12">Join 2,000+ digital agencies and hosting startups who trust Web Sewa for their infrastructure needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/reseller-hosting-plans" className="bg-secondary text-on-secondary font-black text-body-lg px-12 py-5 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-secondary/20">Get Started Now</Link>
            <Link href="/contact-legal" className="bg-surface-container-high text-on-surface font-extrabold text-body-lg px-12 py-5 rounded-2xl hover:bg-surface-container-highest transition-all border border-outline-variant">Schedule a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
