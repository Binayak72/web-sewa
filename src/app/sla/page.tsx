import Link from "next/link";
import Image from "next/image";

export default function SLA() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden subtle-grid">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/30 border border-secondary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-bold text-[10px] text-secondary uppercase tracking-[0.2em]">Enterprise Commitment</span>
          </div>
          <h1 className="text-on-background text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
            Service Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Agreement</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Web Seva guarantees industry-leading uptime, rapid support responses, and hardware reliability for professional reseller hosting environments.
          </p>

          {/* 99.9% Metric - Styled as a Feature Card */}
          <div className="max-w-2xl mx-auto p-12 rounded-[2rem] bg-surface-container-low border border-outline-variant shadow-xl relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] group-hover:bg-secondary/10 transition-colors"></div>
            <div className="relative z-10">
              <span className="text-on-background text-7xl md:text-8xl font-black tracking-tighter mb-4 block">99.9%</span>
              <h2 className="text-secondary text-xl font-black uppercase tracking-widest mb-4">Uptime Guarantee</h2>
              <p className="text-on-surface-variant text-base leading-relaxed">We stand behind our network stability with a transparent credit-back policy for any unplanned downtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Credit Table */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="mb-12">
            <h2 className="text-on-background text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Service Credit Entitlement</h2>
            <p className="text-on-surface-variant text-lg">In the event that our 99.9% monthly uptime guarantee is not met, clients are eligible for credits based on the schedule below.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-outline-variant shadow-lg bg-surface">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high border-b border-outline-variant">
                  <th className="p-6 font-bold text-xs uppercase tracking-widest text-primary">Monthly Uptime Percentage</th>
                  <th className="p-6 font-bold text-xs uppercase tracking-widest text-primary">Service Credit Amount</th>
                  <th className="p-6 font-bold text-xs uppercase tracking-widest text-primary">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="p-6 text-on-surface font-semibold">99.9% - 100%</td>
                  <td className="p-6 text-on-surface-variant">Standard Operations</td>
                  <td className="p-6"><span className="px-4 py-1.5 rounded-full bg-tertiary-container text-tertiary font-bold text-[10px] uppercase tracking-wider group-hover:scale-105 transition-transform inline-block">Guaranteed</span></td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="p-6 text-on-surface font-semibold">99.5% - 99.8%</td>
                  <td className="p-6 text-on-surface-variant">5% of Monthly Service Fee</td>
                  <td className="p-6"><span className="px-4 py-1.5 rounded-full bg-secondary-container/50 text-secondary font-bold text-[10px] uppercase tracking-wider group-hover:scale-105 transition-transform inline-block">Eligible</span></td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="p-6 text-on-surface font-semibold">99.0% - 99.4%</td>
                  <td className="p-6 text-on-surface-variant">10% of Monthly Service Fee</td>
                  <td className="p-6"><span className="px-4 py-1.5 rounded-full bg-secondary-container/50 text-secondary font-bold text-[10px] uppercase tracking-wider group-hover:scale-105 transition-transform inline-block">Eligible</span></td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="p-6 text-on-surface font-semibold">98.0% - 98.9%</td>
                  <td className="p-6 text-on-surface-variant">25% of Monthly Service Fee</td>
                  <td className="p-6"><span className="px-4 py-1.5 rounded-full bg-secondary-container/50 text-secondary font-bold text-[10px] uppercase tracking-wider group-hover:scale-105 transition-transform inline-block">Eligible</span></td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="p-6 text-on-surface font-semibold">Below 98.0%</td>
                  <td className="p-6 text-on-surface-variant">50% of Monthly Service Fee</td>
                  <td className="p-6"><span className="px-4 py-1.5 rounded-full bg-error-container text-error font-bold text-[10px] uppercase tracking-wider group-hover:scale-105 transition-transform inline-block">Critical Credit</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-section-gap relative bg-surface-container-low">
        <div className="absolute inset-0 subtle-grid opacity-30"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Support */}
            <div className="group flex flex-col p-10 rounded-2xl bg-surface border border-outline-variant hover:bg-surface-container-high hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary-container rounded-xl flex items-center justify-center text-primary mb-8 shadow-sm">
                <span className="material-symbols-outlined" style={{fontSize: "32px"}}>support_agent</span>
              </div>
              <h3 className="text-on-surface text-xl font-bold mb-4">Support Response</h3>
              <p className="text-on-surface-variant mb-8 flex-1 leading-relaxed">We guarantee a first-human response to all critical support tickets within 30 minutes, 24/7/365.</p>
              <div className="pt-6 border-t border-outline-variant">
                <span className="font-bold text-sm text-secondary">30 Min Critical Response</span>
              </div>
            </div>

            {/* Hardware */}
            <div className="group flex flex-col p-10 rounded-2xl bg-surface border border-outline-variant hover:bg-surface-container-high hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-secondary-container/30 rounded-xl flex items-center justify-center text-secondary mb-8 shadow-sm">
                <span className="material-symbols-outlined" style={{fontSize: "32px"}}>memory</span>
              </div>
              <h3 className="text-on-surface text-xl font-bold mb-4">Hardware Replacement</h3>
              <p className="text-on-surface-variant mb-8 flex-1 leading-relaxed">Faulty hardware components are guaranteed to be replaced within 4 hours of identification by our NOC team.</p>
              <div className="pt-6 border-t border-outline-variant">
                <span className="font-bold text-sm text-secondary">4-Hour Hardware Swap</span>
              </div>
            </div>

            {/* Maintenance */}
            <div className="group flex flex-col p-10 rounded-2xl bg-surface border border-outline-variant hover:bg-surface-container-high hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-tertiary-container rounded-xl flex items-center justify-center text-tertiary mb-8 shadow-sm">
                <span className="material-symbols-outlined" style={{fontSize: "32px"}}>update</span>
              </div>
              <h3 className="text-on-surface text-xl font-bold mb-4">Maintenance Windows</h3>
              <p className="text-on-surface-variant mb-8 flex-1 leading-relaxed">Planned maintenance is performed during low-traffic periods and announced at least 48 hours in advance.</p>
              <div className="pt-6 border-t border-outline-variant">
                <span className="font-bold text-sm text-secondary">48-Hour Advanced Notice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policy Section */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-on-background text-3xl font-extrabold sticky top-32">Terms &amp; Definitions</h2>
            </div>
            <div className="md:w-2/3 space-y-16">
              <div className="space-y-4">
                <h4 className="text-secondary text-2xl font-black">Uptime Measurement</h4>
                <p className="text-on-surface-variant text-lg leading-relaxed">Uptime is measured as the total number of minutes in a calendar month minus the total number of minutes of Service Unavailability. Service Unavailability is defined as the period when our network is unreachable from outside sources via ICMP and HTTP/HTTPS.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-secondary text-2xl font-black">Credit Request Procedure</h4>
                <p className="text-on-surface-variant text-lg leading-relaxed">To receive a Service Credit, the customer must submit a request via the client portal within seven (7) days of the month in which the Service Unavailability occurred. Credits are applied to the next billing cycle and cannot exceed the total monthly fee of the affected service.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-secondary text-2xl font-black">Exclusions</h4>
                <p className="text-on-surface-variant text-lg leading-relaxed">Service Unavailability caused by the following are excluded from SLA calculations: (i) Scheduled Maintenance, (ii) Customer-controlled configurations or scripts, (iii) External DDoS attacks, (iv) Force Majeure events, or (v) Account suspension due to TOS violations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="relative bg-primary rounded-[32px] p-12 lg:p-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-on-primary-fixed-variant opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-on-primary text-4xl md:text-5xl font-black mb-8 leading-tight">Need more details on our infrastructure?</h2>
              <p className="text-primary-fixed/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">Our support team is available 24/7 to provide technical white papers and network topology documentation.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact-legal" className="bg-surface text-primary font-extrabold text-body-lg px-12 py-5 rounded-2xl hover:bg-primary-container transition-all shadow-xl">Contact Support</Link>
                <Link href="/legal-compliance" className="text-on-primary font-bold text-body-lg px-8 py-5 border border-on-primary/20 rounded-2xl hover:bg-on-primary/10 transition-all">Download Full SLA (PDF)</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
