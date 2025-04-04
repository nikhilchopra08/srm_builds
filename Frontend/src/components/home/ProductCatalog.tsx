import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Droplets, Zap, ArrowRight } from 'lucide-react';

const ProductCatalog: React.FC = () => {
  return (
    <section className="py-16 bg-[#718f63]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-white">Our Green Energy Solutions</h2>
        <p className="section-subtitle text-center text-white">
          Explore our range of high-quality, efficient green energy products for your home.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="card">
            <div className="h-48 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Solar Panels" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                Popular
              </div>
            </div>
            <div className="p-5 bg-[#dde8cf]">
              <div className="flex items-center mb-2">
                <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="font-bold text-lg">Solar Panels</h3>
              </div>
              <p className="text-gray-600 mb-4">High-efficiency solar panels to power your home with clean energy from the sun.</p>
              <Link to="/products" className="text-[#718f63] font-medium hover:text-green-700 inline-flex items-center">
                View Products
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="card bg-[#dde8cf]">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img 
                src="https://rainwatermanagement.com/cdn/shop/articles/Above-Ground-1600_2_2000x.jpg?v=1624460157" 
                alt="Water Conservation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center mb-2">
                <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-bold text-lg">Water Systems</h3>
              </div>
              <p className="text-gray-600 mb-4">Rainwater harvesting and greywater recycling systems for water conservation.</p>
              <Link to="/products" className="text-[#718f63] font-medium hover:text-green-700 inline-flex items-center">
                View Products
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="card bg-[#dde8cf]">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Battery Storage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                New
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center mb-2">
                <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="font-bold text-lg">Many More coming soon...</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/products" className="btn-primary inline-flex text-[black] items-center bg-[#dde8cf]">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;