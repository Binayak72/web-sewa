"use client";

import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-section-gap relative bg-surface-container-low overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 subtle-grid opacity-50 transition-all duration-700 opacity-100 translate-y-0"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 transition-all duration-700 opacity-100 translate-y-0">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-on-background text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Flexible Plans</h2>
          <p className="text-on-surface-variant text-lg">Choose the perfect tier for your team's velocity. From startup solo-acts to global enterprise powerhouses.</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-surface border border-outline-variant rounded-full p-1 inline-flex shadow-sm">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!isYearly ? 'bg-surface-container-high text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${isYearly ? 'bg-surface-container-high text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Starter Plan */}
          <div className="flex flex-col p-8 rounded-2xl bg-surface border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-on-surface text-xl font-bold mb-1">Reseller STARTER</h3>
            <p className="text-on-surface-variant text-sm mb-6">Perfect for starting your hosting business</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-on-surface text-4xl font-black">Rs.{isYearly ? '579' : '724'}</span>
              <span className="text-on-surface-variant font-medium mb-1">/mo</span>
            </div>
            <p className="text-on-surface-variant text-xs mb-8">{isYearly ? 'Billed for 12 month term.' : 'Billed monthly.'}</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                10 cPanel Accounts
              </li>
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                100 GB NVMe SSD
              </li>
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                Unlimited Bandwidth
              </li>
            </ul>

            <div className="mb-8">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">LVE RESOURCES (PER ACCT)</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  2 GB DDR5 RAM
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  2 vCPU Cores
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  1 GB | 50 MB/s IO Speed
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  250,000 Inode Limit
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold mb-4 hover:bg-primary/5 transition-colors">Choose plan</button>
              <button className="w-full text-center text-primary text-sm font-bold flex items-center justify-center gap-1">See all features <span className="material-symbols-outlined" style={{fontSize: "18px"}}>expand_more</span></button>
            </div>
          </div>

          {/* Business Plan (Best Deal) */}
          <div className="relative flex flex-col p-8 rounded-2xl bg-surface border-2 border-primary shadow-2xl shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 lg:scale-[1.02] z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-widest">BEST DEAL</div>
            <h3 className="text-on-surface text-xl font-bold mb-1">Reseller Business</h3>
            <p className="text-on-surface-variant text-sm mb-6">Best value for growing businesses</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-on-surface text-4xl font-black">Rs.{isYearly ? '1739' : '2174'}</span>
              <span className="text-on-surface-variant font-medium mb-1">/mo</span>
            </div>
            <p className="text-on-surface-variant text-xs mb-8">{isYearly ? 'Billed for 12 month term.' : 'Billed monthly.'}</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                25 cPanel Accounts
              </li>
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                500 GB NVMe SSD
              </li>
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                Unlimited Bandwidth
              </li>
            </ul>

            <div className="mb-8">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">LVE RESOURCES (PER ACCT)</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  4 GB DDR5 RAM
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  2 vCPU Cores
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  2 GB | 100 MB/s IO Speed
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  250,000 Inode Limit
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <button className="w-full py-3 rounded-lg bg-primary text-on-primary font-bold mb-4 hover:shadow-lg shadow-primary/20 transition-all border-2 border-primary">Choose plan</button>
              <button className="w-full text-center text-primary text-sm font-bold flex items-center justify-center gap-1">See all features <span className="material-symbols-outlined" style={{fontSize: "18px"}}>expand_more</span></button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col p-8 rounded-2xl bg-surface border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-on-surface text-xl font-bold mb-1">Reseller Enterprise</h3>
            <p className="text-on-surface-variant text-sm mb-6">Ultimate power for agencies</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-on-surface text-4xl font-black">Rs.{isYearly ? '3479' : '4349'}</span>
              <span className="text-on-surface-variant font-medium mb-1">/mo</span>
            </div>
            <p className="text-on-surface-variant text-xs mb-8">{isYearly ? 'Billed for 12 month term.' : 'Billed monthly.'}</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                50 cPanel Accounts
              </li>
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                500 GB NVMe SSD
              </li>
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                Unlimited Bandwidth
              </li>
            </ul>

            <div className="mb-8">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">LVE RESOURCES (PER ACCT)</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  4 GB DDR5 RAM
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  2 vCPU Cores
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  2 GB | 100 MB/s IO Speed
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  250,000 Inode Limit
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold mb-4 hover:bg-primary/5 transition-colors">Choose plan</button>
              <button className="w-full text-center text-primary text-sm font-bold flex items-center justify-center gap-1">See all features <span className="material-symbols-outlined" style={{fontSize: "18px"}}>expand_more</span></button>
            </div>
          </div>

          {/* TOP Plan */}
          <div className="flex flex-col p-8 rounded-2xl bg-surface border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-on-surface text-xl font-bold mb-1">Reseller TOP</h3>
            <p className="text-on-surface-variant text-sm mb-6">Maximum capacity for large-scale operations</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-on-surface text-4xl font-black">Rs.{isYearly ? '6959' : '8699'}</span>
              <span className="text-on-surface-variant font-medium mb-1">/mo</span>
            </div>
            <p className="text-on-surface-variant text-xs mb-8">{isYearly ? 'Billed for 12 month term.' : 'Billed monthly.'}</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                100 cPanel Accounts
              </li>
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                1000 GB NVMe SSD
              </li>
              <li className="flex items-center gap-3 text-on-surface text-sm">
                <span className="material-symbols-outlined text-secondary" style={{fontSize: "18px"}}>check</span>
                Unlimited Bandwidth
              </li>
            </ul>

            <div className="mb-8">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">LVE RESOURCES (PER ACCT)</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  4 GB DDR5 RAM
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  4 vCPU Cores
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  4 GB | 100 MB/s IO Speed
                </li>
                <li className="flex items-center gap-3 text-on-surface text-sm">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: "18px"}}>check</span>
                  250,000 Inode Limit
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold mb-4 hover:bg-primary/5 transition-colors">Choose plan</button>
              <button className="w-full text-center text-primary text-sm font-bold flex items-center justify-center gap-1">See all features <span className="material-symbols-outlined" style={{fontSize: "18px"}}>expand_more</span></button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
