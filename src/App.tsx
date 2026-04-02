import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Truck, Clock, Star, Menu, X, ChevronRight, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { InventoryProvider, useInventory } from './context/InventoryContext';
import { AdminDashboard } from './components/AdminDashboard';
import { QuizPage } from './pages/QuizPage';
import { ProductPage } from './pages/ProductPage';

// Components
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-red-400" /> Same Day Delivery Available</span>
            <span className="hidden sm:flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-red-400" /> Locally Owned Since 2005</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:251-968-6888" className="hover:text-red-400 transition-colors">Gulf Shores: (251) 968-6888</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 h-24 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center overflow-hidden py-4 pl-4 mix-blend-multiply">
              <img src="/logo.jpg" alt="Mattress Depot Logo" className="h-20 md:h-24 w-auto object-contain scale-[1.7] md:scale-[2] origin-left" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#mattresses" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Mattresses</a>
            <a href="/#adjustable" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Adjustable Bases</a>
            <a href="/#accessories" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Accessories</a>
            <a href="/#about" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Why Us</a>
            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-red-500/20 flex items-center gap-2">
              Visit Showroom <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="/#mattresses" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Mattresses</a>
            <a href="/#adjustable" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Adjustable Bases</a>
            <a href="/#accessories" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Accessories</a>
            <a href="/#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Why Us</a>
            <button className="w-full mt-4 bg-red-500 text-white px-5 py-3 rounded-lg text-base font-bold">
              Visit Showroom
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const StickyCallButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a href="tel:251-968-6888" className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg">
        <Phone className="w-5 h-5" /> Call Now
      </a>
      <a href="#contact" className="flex-1 bg-red-500 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg">
        <MapPin className="w-5 h-5" /> Directions
      </a>
    </div>
  );
};

const InventoryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Truck className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Check Availability</h3>
          <p className="text-slate-600 text-sm mt-1">
            See if your perfect mattress is in stock for same-day delivery!
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">What size do you need?</label>
            <select className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none">
              <option>Queen</option>
              <option>King</option>
              <option>Full</option>
              <option>Twin</option>
              <option>Twin XL</option>
              <option>California King</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Comfort</label>
            <select className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none">
              <option>Medium</option>
              <option>Plush (Soft)</option>
              <option>Firm</option>
              <option>Not Sure</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Your Phone Number</label>
            <input 
              type="tel" 
              placeholder="(251) 555-0123"
              className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-500/20 transition-all mt-2">
            Check Stock Now
          </button>
          
          <p className="text-xs text-center text-slate-400 mt-4">
            We'll text you back within 15 minutes during business hours.
          </p>
        </form>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Copywriting Variations (A/B Test Options):
  // Option 1 (Current): "Sleep Better Tonight. Delivered Today."
  // Option 2: "Gulf Shores' Only Same-Day Mattress Delivery."
  // Option 3: "Don't Wait Weeks. Sleep Great Tonight."

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <InventoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-b0346809d0bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Gulf Shores' #1 Mattress Store
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Sleep Better Tonight. <br />
                <span className="text-red-400">Delivered Today.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                Experience the best sleep of your life with our premium selection of Tempur-Pedic, Sealy, and Stearns & Foster. Locally owned, unbeatable prices, and same-day delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/quiz"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-[0_8px_30px_rgb(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgb(245,158,11,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Find Your Perfect Sleep <ArrowRight className="w-5 h-5" />
                </Link>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 px-8 py-4 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Truck className="w-5 h-5" /> Check Inventory
                </button>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500" /> In Stock Now
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500" /> Best Price Guarantee
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-red-500 to-red-300 rounded-2xl blur opacity-20"></div>
            <img 
              src="/hero_mattress.png" 
              alt="Premium Mattress" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border border-white/10"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-red-500 fill-red-500" />)}
              </div>
              <div className="text-sm font-bold">500+ Local Reviews</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-red-500" />,
      title: "Same Day Delivery",
      desc: "Order by 2 PM and sleep on your new mattress tonight. We stock what we sell."
    },
    {
      icon: <Star className="w-8 h-8 text-red-500" />,
      title: "Locally Owned",
      desc: "Serving Gulf Shores since 2005. We treat you like a neighbor, not a number."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-red-500" />,
      title: "Premium Brands",
      desc: "Authorized retailer for Tempur-Pedic, Sealy, Stearns & Foster, and more."
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "100-Night Trial",
      desc: "Sleep soundly knowing you have 100 nights to ensure it's the perfect fit."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinancingBanner = () => {
  return (
    <div className="bg-slate-900 text-white py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
        <span className="font-bold text-red-400 uppercase tracking-wider text-sm">Special Offer</span>
        <span className="text-sm sm:text-base">
          Get <span className="font-bold">0% Interest Financing</span> for up to 60 Months*
        </span>
        <a href="#" className="text-xs sm:text-sm underline hover:text-red-400 transition-colors">
          See if you qualify
        </a>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { products } = useInventory();
  const navigate = useNavigate();
  
  const categories = ["All", "Tempur-Pedic", "Stearns & Foster", "Sealy"];
  
  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.brand === activeTab);

  return (
    <section className="py-20 bg-slate-50" id="mattresses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Inventory</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            We stock the top brands so you don't have to wait. Browse our most popular models available for same-day delivery.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === cat 
                    ? "bg-slate-900 text-white shadow-lg" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group border border-slate-100 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                  {product.tag}
                </span>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{product.brand}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{product.type}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">{product.price}</span>
                  <button 
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1 z-20 relative"
                  >
                    Details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-500">
              No products found in this category.
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-red-600 hover:border-red-600 transition-colors">
            View Full Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Do you really deliver same day?",
      a: "Yes! If you purchase an in-stock mattress before 2:00 PM, we guarantee delivery to Gulf Shores, Orange Beach, and Foley the very same day."
    },
    {
      q: "Will you take away my old mattress?",
      a: "Absolutely. We offer haul-away services for a small fee, or free with select premium mattress purchases. We ensure it's disposed of or recycled responsibly."
    },
    {
      q: "Do you offer financing?",
      a: "We offer 0% interest financing for up to 60 months through Synchrony Home, as well as no-credit-needed options through Snap Finance."
    },
    {
      q: "What is your return policy?",
      a: "We offer a 100-Night Comfort Guarantee. If you're not sleeping better after 30 nights, we'll work with you to exchange it for a model that fits you better."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">
            Everything you need to know about getting your best night's sleep.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden hover:border-red-400/50 transition-colors">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 bg-slate-50 group-open:bg-white transition-colors">
                  <span className="text-slate-900 font-bold">{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-slate-600 px-6 pb-6 pt-2 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-red-400 fill-red-400" />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Gulf Shores Loves Us</h2>
          <p className="text-slate-600">Rated 5 Stars on Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Best mattress buying experience ever. No pressure, great prices, and they delivered it within 2 hours!",
              author: "Sarah J.",
              location: "Gulf Shores, AL"
            },
            {
              text: "We needed a mattress for our rental property ASAP. Mattress Depot saved the day with their same-day delivery.",
              author: "Mike T.",
              location: "Orange Beach, AL"
            },
            {
              text: "The staff was incredibly knowledgeable and helped me find the perfect mattress for my back pain.",
              author: "Linda R.",
              location: "Foley, AL"
            }
          ].map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
            >
              <div className="absolute top-8 right-8 text-slate-200">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
              </div>
              <p className="text-slate-700 mb-6 relative z-10 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{review.author}</p>
                <p className="text-sm text-slate-500">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Brands = () => {
  const brands = [
    "Tempur-Pedic",
    "Stearns & Foster",
    "Sealy",
    "Malouf",
    "Wellsville"
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Authorized Retailer For Premium Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* In a real app, these would be SVG logos. Using text for now with specific styling to mimic logos */}
          {brands.map((brand, idx) => (
            <span key={idx} className="text-2xl md:text-3xl font-bold text-slate-800 font-display">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocalStory = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-full z-0"></div>
            <img 
              src="/storefront_luxury.png" 
              alt="Mattress Depot Luxury Showroom" 
              className="relative z-10 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] w-full object-cover aspect-[4/3] border border-slate-100"
            />
            <div className="absolute bottom-8 left-8 z-20 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="font-bold text-slate-900 flex items-center gap-2">
                <Star className="w-5 h-5 text-red-500 fill-red-500" />
                Since 2005
              </p>
              <p className="text-sm text-slate-600">Serving Gulf Shores & Orange Beach for over 20 years.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Buy From a Big Box Store When You Can Buy Local?
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                At <span className="font-bold text-slate-900">Mattress Depot</span>, we're not just selling mattresses; we're your neighbors. Locally owned and operated since 2005, we understand the unique needs of Gulf Shores residents and vacation rental owners.
              </p>
              <p>
                Unlike the big chains that make you wait weeks for delivery, <span className="font-bold text-red-600">we stock what we sell.</span> That means you can walk in today and sleep better tonight.
              </p>
              
              <ul className="space-y-3 mt-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span>Same-Day Delivery & Set Up</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span>Free Old Mattress Removal</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span>Special Pricing for Condo Owners</span>
                </li>
              </ul>

              <div className="pt-6">
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-bold transition-colors">
                  Read Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Showroom</h2>
            <p className="text-slate-600 mb-8">
              Come test drive your new mattress today. We're located right on Hwy 59.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Address</h3>
                  <p className="text-slate-600">6798 Hwy 59<br />Gulf Shores, AL 36542</p>
                  <a href="#" className="text-red-600 font-medium hover:underline mt-1 inline-block">Get Directions</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600">Call us for inventory checks</p>
                  <a href="tel:251-968-6888" className="text-lg font-bold text-slate-900 hover:text-red-600 transition-colors">(251) 968-6888</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Hours</h3>
                  <p className="text-slate-600">Mon - Sat: 10:00 AM - 6:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative bg-slate-200 min-h-[400px]">
             {/* Map Placeholder - In production use Google Maps Embed */}
             <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                <div className="text-center p-6">
                  <MapPin className="w-12 h-12 text-slate-500 mx-auto mb-2" />
                  <p className="text-slate-600 font-medium">Interactive Map Loading...</p>
                  <p className="text-xs text-slate-500 mt-1">(Google Maps Integration)</p>
                </div>
             </div>
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.577867807664!2d-87.68658868488126!3d30.29166698179298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a066666666667%3A0x6666666666666666!2s6798%20AL-59%2C%20Gulf%20Shores%2C%20AL%2036542!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy"
               className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [showAdminLink, setShowAdminLink] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <>
      {isAdminOpen && <AdminDashboard onClose={() => setIsAdminOpen(false)} />}
      <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6 overflow-hidden py-2 pl-2">
              <img src="/logo.jpg" alt="Mattress Depot Logo" className="h-16 md:h-20 w-auto object-contain scale-[1.5] md:scale-[1.8] origin-left rounded-lg mix-blend-screen" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Gulf Shores' premier locally owned mattress store. Dedicated to better sleep since 2005.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Mattresses</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Adjustable Bases</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Pillows</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Protectors</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Clearance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Delivery Info</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Financing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>6798 Hwy 59<br />Gulf Shores, AL 36542</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:251-968-6888" className="hover:text-red-400">(251) 968-6888</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div>
                  <p>Mon-Sat: 10am - 6pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mattress Depot South. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <button 
              onClick={() => setIsAdminOpen(true)}
              onMouseEnter={() => setShowAdminLink(true)}
              className={`flex items-center gap-1 hover:text-red-400 transition-colors ${showAdminLink ? 'opacity-100' : 'opacity-0'}`}
            >
              <Lock className="w-3 h-3" /> Owner Login
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

const Home = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <Brands />
      <Features />
      <FeaturedProducts />
      <LocalStory />
      <FAQ />
      <Testimonials />
      <ContactSection />
    </main>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <div className="min-h-screen flex flex-col font-sans">
          <FinancingBanner />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            {/* Additional routes will be added here */}
          </Routes>
          <Footer />
          <StickyCallButton />
        </div>
      </InventoryProvider>
    </BrowserRouter>
  );
}
