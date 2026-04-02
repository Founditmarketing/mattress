import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Truck, Shield, Star, ThermometerSun, Layers } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useInventory();
  
  // Find product or use a fallback
  const product = products.find(p => p.id === Number(id)) || products[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Breadcrumb / Nav */}
      <div className="bg-slate-50 border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate(-1)} 
            className="text-slate-500 hover:text-slate-900 flex items-center gap-2 font-medium transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Mattresses
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Images Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 relative group">
              <span className="absolute top-6 left-6 bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full z-10 shadow-lg">
                {product.tag}
              </span>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Thumbnail Placeholders */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200 cursor-pointer hover:border-red-500 transition-colors">
                   <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">{product.brand}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-red-400 fill-red-400" />)}
              </div>
              <span className="text-sm font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 cursor-pointer hover:text-slate-900">
                124 Local Reviews
              </span>
            </div>

            <p className="text-3xl font-bold text-slate-900 mb-8">{product.price} <span className="text-base font-normal text-slate-500">for Queen</span></p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Experience unparalleled high-end comfort with the {product.name}. Engineered for premium contouring and pressure relief, this {product.type.toLowerCase()} ensures you wake up completely refreshed and pain-free.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                 <div className="bg-white p-2 rounded-xl shadow-sm"><ThermometerSun className="w-6 h-6 text-red-500" /></div>
                 <div>
                   <p className="text-xs font-bold text-slate-400 uppercase">Cooling</p>
                   <p className="font-bold text-slate-900">Advanced</p>
                 </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                 <div className="bg-white p-2 rounded-xl shadow-sm"><Layers className="w-6 h-6 text-red-500" /></div>
                 <div>
                   <p className="text-xs font-bold text-slate-400 uppercase">Feel</p>
                   <p className="font-bold text-slate-900">Medium Plush</p>
                 </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>In Stock at Gulf Shores Showroom</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Truck className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Free Same-Day Delivery & Setup Available</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>10-Year Warranty & 100-Night Sleep Trial</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgb(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgb(245,158,11,0.4)] hover:-translate-y-1 transition-all text-center">
                 Check Stock Size
               </button>
               <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all text-center">
                 Call Showroom
               </button>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">No pressure. Call us to ask questions.</p>

          </motion.div>
        </div>
      </div>
      
      {/* Technical Specs Section */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">The {product.brand} Difference</h2>
            <div className="space-y-8 text-left">
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Pressure-Relieving Core</h3>
                 <p className="text-slate-600 leading-relaxed">Built with adaptive high-density layers that automatically adjust to your sleeping position, eliminating pressure points on hips and shoulders.</p>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Climate Control Technology</h3>
                 <p className="text-slate-600 leading-relaxed">Features phase-change materials woven directly into the cover to pull heat away from your body, maintaining an optimal sleep temperature in the humid Gulf Coast climate.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
