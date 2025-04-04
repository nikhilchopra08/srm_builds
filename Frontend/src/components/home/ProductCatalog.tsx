import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Droplets, Zap, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      image: "/api/placeholder/1200/600",
      title: "Solar Panels",
      description: "High-efficiency solar panels to power your home with clean energy from the sun. Our premium solar panels deliver maximum energy conversion and are built to withstand all weather conditions for decades of reliable performance.",
      icon: <Sun className="h-6 w-6 text-yellow-500 mr-2" />,
      badge: { text: "Popular", color: "bg-green-500" }
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Water Systems",
      description: "Rainwater harvesting and greywater recycling systems for water conservation. Reduce your water footprint and utility bills with our integrated water management solutions designed for modern homes.",
      icon: <Droplets className="h-6 w-6 text-blue-500 mr-2" />
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Many More coming soon...",
      description: "Stay tuned for new green energy solutions coming to our catalog. We're constantly innovating and expanding our product line to help you create a more sustainable home.",
      icon: <Zap className="h-6 w-6 text-yellow-500 mr-2" />,
      badge: { text: "New", color: "bg-blue-500" }
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Many More coming soon...",
      description: "Stay tuned for new green energy solutions coming to our catalog. We're constantly innovating and expanding our product line to help you create a more sustainable home.",
      icon: <Zap className="h-6 w-6 text-yellow-500 mr-2" />,
      badge: { text: "New", color: "bg-blue-500" }
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 w-full bg-green-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="relative w-full">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div className="relative bg-white">
              {/* Featured Product */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/5 h-64 md:h-[500px] relative overflow-hidden">
                  <img 
                    src={products[currentIndex].image}
                    alt={products[currentIndex].title} 
                    className="w-full h-full object-cover"
                  />
                  {products[currentIndex].badge && (
                    <div className={`absolute top-4 right-4 ${products[currentIndex].badge.color} text-white text-sm font-bold px-3 py-1 rounded-lg`}>
                      {products[currentIndex].badge.text}
                    </div>
                  )}
                </div>
                <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-3">
                      {products[currentIndex].icon}
                    </div>
                    <h3 className="font-bold text-3xl text-gray-800">{products[currentIndex].title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{products[currentIndex].description}</p>
                  <Link to="/products" className="text-green-700 font-medium text-lg hover:text-green-800 inline-flex items-center">
                    View Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons - Larger and more prominent */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Previous product"
          >
            <ChevronLeft className="h-8 w-8 text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Next product"
          >
            <ChevronRight className="h-8 w-8 text-gray-800" />
          </button>
          
          {/* Larger Dots Indicator */}
          <div className="flex justify-center mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-2 w-4 h-4 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-green-600 w-8' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition duration-200 shadow-md">
            View All Products
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;