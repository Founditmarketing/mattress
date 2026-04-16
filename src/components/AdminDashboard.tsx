import { useState } from 'react';
import { useInventory } from '../context/InventoryContext';
import { Trash2, Plus, X, LayoutDashboard, LogOut, Package } from 'lucide-react';
import { motion } from 'motion/react';

export const AdminDashboard = ({ onClose }: { onClose: () => void }) => {
  const { products, addProduct, deleteProduct, resetInventory } = useInventory();
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({
    brand: 'Sealy',
    name: '',
    type: '',
    price: '',
    tag: 'In Stock',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({
      ...newProduct,
      category: newProduct.brand // Simple mapping for demo
    });
    setIsAdding(false);
    setNewProduct({
      brand: 'Sealy',
      name: '',
      type: '',
      price: '',
      tag: 'In Stock',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-100 overflow-y-auto">
      {/* Admin Header */}
      <div className="bg-slate-900 text-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="text-red-400" />
            <span className="font-bold text-lg">Owner Dashboard</span>
          </div>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" /> Exit to Store
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Inventory Management</h1>
            <p className="text-slate-500">Manage your products displayed on the homepage.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={resetInventory}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Reset Demo Data
            </button>
            <button 
              onClick={() => setIsAdding(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>
        </div>

        {/* Add Product Form */}
        {isAdding && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Add New Product</h3>
              <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Brand</label>
                <select 
                  value={newProduct.brand}
                  onChange={e => setNewProduct({...newProduct, brand: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg"
                >
                  <option>Tempur-Pedic</option>
                  <option>Sealy</option>
                  <option>Stearns & Foster</option>
                  <option>Serenity Sleep</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Model Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. ProAdapt Soft"
                  value={newProduct.name}
                  onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Type/Description</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 12-inch Hybrid"
                  value={newProduct.type}
                  onChange={e => setNewProduct({...newProduct, type: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Price</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. $1,299"
                  value={newProduct.price}
                  onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Badge Tag</label>
                <select 
                  value={newProduct.tag}
                  onChange={e => setNewProduct({...newProduct, tag: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg"
                >
                  <option>In Stock</option>
                  <option>Best Seller</option>
                  <option>Sale</option>
                  <option>New Arrival</option>
                </select>
              </div>
               <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                <input 
                  type="text" 
                  placeholder="https://..."
                  value={newProduct.image}
                  onChange={e => setNewProduct({...newProduct, image: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                <button 
                  type="button" 
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-800"
                >
                  Save Product
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Product List */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-medium text-slate-500">Product</th>
                <th className="p-4 font-medium text-slate-500">Brand</th>
                <th className="p-4 font-medium text-slate-500">Price</th>
                <th className="p-4 font-medium text-slate-500">Status</th>
                <th className="p-4 font-medium text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden">
                        <img src={product.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{product.name}</div>
                        <div className="text-xs text-slate-500">{product.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-slate-600">{product.brand}</td>
                  <td className="p-4 font-medium text-slate-900">{product.price}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {product.tag}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    <Package className="w-12 h-12 mx-auto mb-2 opacity-20" />
                    No products found. Add one to get started!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
