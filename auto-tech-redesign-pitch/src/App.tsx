import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneCall, 
  Wrench, 
  CarFront, 
  Truck, 
  ShieldCheck, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Target, 
  Search,
  MapPin,
  Clock,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'pitch' | 'wireframe'>('pitch');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-500" />
            <span className="font-bold tracking-tight">Found It Marketing</span>
          </div>
          <div className="flex gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
            <button 
              onClick={() => setActiveTab('pitch')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'pitch' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              The Pitch & ROI
            </button>
            <button 
              onClick={() => setActiveTab('wireframe')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'wireframe' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              Live Wireframe
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {activeTab === 'pitch' ? (
          <motion.div 
            key="pitch"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-24"
          >
            <PitchView />
          </motion.div>
        ) : (
          <motion.div 
            key="wireframe"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pb-24 bg-white text-zinc-900"
          >
            <WireframeView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PitchView() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-500/20">
          <AlertTriangle className="w-4 h-4" />
          Critical Business Rescue Operation
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
          Stop Bleeding Leads in Cenla. <br/>
          <span className="text-zinc-500">Start Dominating.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Auto Tech isn't just a shop; it's a 40-year legacy. But right now, your website is actively costing you money. We aren't here to talk about "aesthetics"—we are here to fix a massive leak in your revenue funnel.
        </p>
      </div>

      {/* The Problem */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-red-400 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            The Current Reality
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              <p className="text-zinc-300"><strong className="text-white">The Trust Killer:</strong> Your homepage greets users with a massive, broken video player error ("Media error: Format(s) not supported"). For a brand built on 40 years of trust, this looks amateurish and abandoned.</p>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              <p className="text-zinc-300"><strong className="text-white">Poor Emergency Funneling:</strong> Stranded on Highway 28? Your site lacks a sticky mobile "Click-to-Call for Emergency Tow" button. People in emergencies don't navigate menus; they bounce to a competitor.</p>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              <p className="text-zinc-300"><strong className="text-white">Lack of Authority:</strong> You bury your 1984 heritage and 3rd-generation family-owned status under generic formatting instead of using it as a weapon against dealership service centers.</p>
            </li>
          </ul>
        </div>

        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6" />
            The Revenue Rescue Plan
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <p className="text-zinc-300"><strong className="text-white">Immediate Hero Fix:</strong> High-definition, fast-loading imagery of your actual shop/trucks with a massive "24/7 Emergency Towing" click-to-call button.</p>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <p className="text-zinc-300"><strong className="text-white">The Trust Bar:</strong> Front-and-center authority: "Serving Cenla Since 1984 | 3rd Generation Family Owned | Full-Service Collision & Repair."</p>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <p className="text-zinc-300"><strong className="text-white">Dedicated Service Silos:</strong> Clear, distinct routing for Mechanical, Collision, Towing, and Auto Sales to capture high-intent search traffic.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Market Research / ROI Proof */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-emerald-500" />
          The ROI Proof (Market Research)
        </h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-zinc-800 bg-zinc-900/50">
            <h3 className="text-xl font-semibold">Auto Tech (Pineville / Alexandria, LA)</h3>
            <p className="text-zinc-400 text-sm mt-1">Market Analysis & Opportunity Assessment</p>
          </div>
          
          <div className="divide-y divide-zinc-800">
            {/* GLS */}
            <div className="p-6 grid md:grid-cols-3 gap-4">
              <div className="font-medium text-zinc-300">GLS (Google Local Services) Availability</div>
              <div className="md:col-span-2 space-y-2">
                <div className="flex justify-between items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-400">Status</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Available in target area</span>
                </div>
                <div className="flex justify-between items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-400">Vertical Checks</span>
                  <span className="text-white text-right">Auto Repair & Towing supported</span>
                </div>
              </div>
            </div>

            {/* Google Ads */}
            <div className="p-6 grid md:grid-cols-3 gap-4">
              <div className="font-medium text-zinc-300">Google Ads (AdWords) Metrics</div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                  <div className="text-zinc-500 text-sm mb-1">Suggested CPC</div>
                  <div className="text-xl font-semibold text-white">$3.50 – $8.00</div>
                </div>
                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                  <div className="text-zinc-500 text-sm mb-1">Est. Monthly Budget</div>
                  <div className="text-xl font-semibold text-white">$1,500 - $3,000</div>
                </div>
                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                  <div className="text-zinc-500 text-sm mb-1">CPA (Search)</div>
                  <div className="text-xl font-semibold text-white">$35 - $60</div>
                </div>
                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                  <div className="text-zinc-500 text-sm mb-1">CPA (Remarketing)</div>
                  <div className="text-xl font-semibold text-white">$15 - $25</div>
                </div>
              </div>
            </div>

            {/* Total Budget */}
            <div className="p-6 grid md:grid-cols-3 gap-4 bg-emerald-500/5">
              <div className="font-medium text-emerald-400">Total Recommended Budget</div>
              <div className="md:col-span-2">
                <div className="bg-zinc-950 p-4 rounded-lg border border-emerald-500/20">
                  <div className="text-zinc-400 text-sm mb-1">Aggregate Estimate</div>
                  <div className="text-2xl font-bold text-emerald-400">$2,500 / mo</div>
                  <div className="text-sm text-zinc-500 mt-1">Combined recommended spend for maximum impact across channels</div>
                </div>
              </div>
            </div>

            {/* GMB */}
            <div className="p-6 grid md:grid-cols-3 gap-4">
              <div className="font-medium text-zinc-300">GMB (Google Business Profile) Status</div>
              <div className="md:col-span-2 space-y-2">
                <div className="flex justify-between items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-400">Verification Status</span>
                  <span className="text-emerald-400 font-medium">Verified</span>
                </div>
                <div className="flex flex-col gap-2 bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-400">Optimization Level</span>
                  <span className="text-red-400 text-sm">Poor. Missing regular updates, Q&A, and optimized service categories. Bleeding local map pack visibility.</span>
                </div>
              </div>
            </div>

            {/* Owner Research */}
            <div className="p-6 grid md:grid-cols-3 gap-4">
              <div className="font-medium text-zinc-300">Owner Research</div>
              <div className="md:col-span-2 space-y-2">
                <div className="flex justify-between items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-400">Key Decision Makers</span>
                  <span className="text-white text-right">3rd Generation Family Owners</span>
                </div>
                <div className="flex flex-col gap-2 bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-400">Digital Footprint</span>
                  <span className="text-white text-sm">Strong local reputation, 40 years in business, but digital presence does not reflect their real-world authority. Vulnerable to newer, digitally-savvy competitors.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* UI/UX Direction */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8">UI/UX Direction for Development</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-zinc-400">
            The aesthetic must shift from "dated local shop" to "premium, undisputed regional authority." We are leveraging a high-contrast, industrial-modern design language.
          </p>
          <ul className="mt-6 space-y-4 text-zinc-300">
            <li><strong>Typography:</strong> Bold, extended sans-serif for headings (e.g., Impact or modern geometric sans) to convey strength and reliability. Clean, highly legible sans-serif for body copy.</li>
            <li><strong>Color Palette:</strong> Deep asphalt blacks and slate grays, contrasted with high-visibility safety orange or emergency red for primary CTAs (Towing), and a trustworthy mechanic blue for secondary actions.</li>
            <li><strong>Imagery:</strong> No stock photos. High-definition, authentic photography of the actual facility, branded tow trucks, and the team. Gritty but professional.</li>
            <li><strong>Interaction:</strong> Sticky mobile header with a persistent, thumb-friendly "Call for Tow" button. Fast load times are non-negotiable for stranded users.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function WireframeView() {
  return (
    <div className="w-full font-sans">
      {/* Sticky Mobile-First Emergency Header */}
      <div className="bg-red-600 text-white py-3 px-4 sticky top-16 z-40 shadow-md flex justify-between items-center md:hidden">
        <div className="font-bold flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          Need a Tow?
        </div>
        <button className="bg-white text-red-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-sm">
          <PhoneCall className="w-4 h-4" />
          Call 24/7
        </button>
      </div>

      {/* Main Navigation */}
      <header className="bg-zinc-950 text-white py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter uppercase italic">
          Auto Tech
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#" className="hover:text-red-500 transition-colors">Mechanical</a>
          <a href="#" className="hover:text-red-500 transition-colors">Collision</a>
          <a href="#" className="hover:text-red-500 transition-colors">Towing</a>
          <a href="#" className="hover:text-red-500 transition-colors">Auto Sales</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">24/7 Dispatch</div>
            <div className="text-lg font-bold text-red-500">(318) 555-0198</div>
          </div>
          <button className="bg-white text-zinc-950 px-6 py-2.5 rounded-md font-bold hover:bg-zinc-200 transition-colors">
            Book Service
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-900">
        {/* Simulated high-def background */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2574&auto=format&fit=crop" 
            alt="Auto Shop Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-sm font-bold uppercase tracking-wider mb-6">
              <Truck className="w-4 h-4" />
              Central Louisiana's #1 Auto Center
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight mb-6">
              We Fix It Right. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">The First Time.</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-10 max-w-xl font-medium">
              From major collision repair to 24/7 emergency towing. Don't trust your vehicle to just anyone. Trust the family that's been doing it since 1984.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-600/20">
                <PhoneCall className="w-6 h-6" />
                24/7 Emergency Tow
              </button>
              <button className="bg-white hover:bg-zinc-100 text-zinc-950 px-8 py-4 rounded-md font-black text-lg uppercase tracking-wide flex items-center justify-center gap-3 transition-all">
                <Wrench className="w-6 h-6" />
                Book Shop Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Trust Bar */}
      <section className="bg-zinc-950 text-white py-8 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
              <ShieldCheck className="w-10 h-10 text-red-500 shrink-0" />
              <div>
                <div className="font-bold text-lg">Serving Cenla Since 1984</div>
                <div className="text-zinc-400 text-sm">40 Years of Proven Trust</div>
              </div>
            </div>
            <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
              <Target className="w-10 h-10 text-red-500 shrink-0" />
              <div>
                <div className="font-bold text-lg">3rd Generation Family Owned</div>
                <div className="text-zinc-400 text-sm">Local Roots, Expert Care</div>
              </div>
            </div>
            <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
              <Wrench className="w-10 h-10 text-red-500 shrink-0" />
              <div>
                <div className="font-bold text-lg">Full-Service Facility</div>
                <div className="text-zinc-400 text-sm">Mechanical, Collision & Towing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Silos */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-950 mb-4">Comprehensive Auto Care</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">One facility. Every service you need. We route you to the right experts immediately.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Silo 1 */}
            <div className="group bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col">
              <div className="h-48 bg-zinc-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop" alt="Mechanical" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Wrench className="absolute bottom-4 left-4 w-8 h-8 text-white" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Mechanical Repair</h3>
                <p className="text-zinc-600 text-sm mb-4 flex-1">Full diagnostics, engine repair, brakes, AC, and routine maintenance by certified techs.</p>
                <div className="flex items-center text-red-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  Schedule Service <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Silo 2 */}
            <div className="group bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col">
              <div className="h-48 bg-zinc-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605810731468-18017364132b?q=80&w=1000&auto=format&fit=crop" alt="Collision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <ShieldCheck className="absolute bottom-4 left-4 w-8 h-8 text-white" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Collision Center</h3>
                <p className="text-zinc-600 text-sm mb-4 flex-1">Major body work, frame straightening, and flawless paint matching. We work with all insurance.</p>
                <div className="flex items-center text-red-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  Get an Estimate <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Silo 3 */}
            <div className="group bg-red-600 text-white border border-red-700 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col">
              <div className="h-48 bg-red-800 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&w=1000&auto=format&fit=crop" alt="Towing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 mix-blend-multiply" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-transparent" />
                <Truck className="absolute bottom-4 left-4 w-8 h-8 text-white" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">24/7 Towing</h3>
                <p className="text-red-100 text-sm mb-4 flex-1">Stranded? We have the largest fleet in Cenla ready to dispatch immediately to your location.</p>
                <div className="flex items-center text-white font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  Call Dispatch Now <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Silo 4 */}
            <div className="group bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col">
              <div className="h-48 bg-zinc-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop" alt="Auto Sales" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <CarFront className="absolute bottom-4 left-4 w-8 h-8 text-white" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Pre-Owned Vehicles</h3>
                <p className="text-zinc-600 text-sm mb-4 flex-1">Fully inspected, reliable pre-owned cars and trucks backed by our service guarantee.</p>
                <div className="flex items-center text-red-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  View Inventory <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
