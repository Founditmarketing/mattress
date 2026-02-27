import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the Product type
export type Product = {
  id: number;
  brand: string;
  name: string;
  type: string;
  price: string;
  image: string;
  tag: string;
  category: string;
};

// Default/Initial Data
const initialProducts: Product[] = [
  {
    id: 1,
    brand: "Tempur-Pedic",
    name: "TEMPUR-ProAdapt®",
    type: "Medium Hybrid",
    price: "$2,899",
    image: "https://images.unsplash.com/photo-1505693416388-b0346809d0bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Best Seller",
    category: "Tempur-Pedic"
  },
  {
    id: 2,
    brand: "Sealy",
    name: "Posturepedic® Plus",
    type: "Firm Tight Top",
    price: "$1,099",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "In Stock",
    category: "Sealy"
  },
  {
    id: 3,
    brand: "Stearns & Foster",
    name: "Estate Collection",
    type: "Soft Pillow Top",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Luxury",
    category: "Stearns & Foster"
  },
  {
    id: 4,
    brand: "Tempur-Pedic",
    name: "TEMPUR-LuxeBreeze®",
    type: "Soft Memory Foam",
    price: "$4,999",
    image: "https://images.unsplash.com/photo-1505693416388-b0346809d0bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Cooling Tech",
    category: "Tempur-Pedic"
  }
];

type InventoryContextType = {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: number) => void;
  resetInventory: () => void;
};

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const InventoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    // Load from local storage if available, otherwise use initial data
    const saved = localStorage.getItem('mattress-inventory');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('mattress-inventory', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts(prev => [newProduct, ...prev]);
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const resetInventory = () => {
    setProducts(initialProducts);
  };

  return (
    <InventoryContext.Provider value={{ products, addProduct, deleteProduct, resetInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (context === undefined) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
};
