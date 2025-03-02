import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Wind, Droplets, Zap, BarChart3, Users, BookOpen, Video, HelpCircle } from 'lucide-react';
import CalculatorSection from '../components/CalculationSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Go Green Today!</h1>
            <p className="text-xl md:text-2xl mb-8">
              Join thousands of homeowners who have switched to clean, renewable energy with Greenify.
              Save money, reduce your carbon footprint, and create a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/assessment" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg">
                Get Started
              </Link>
              <Link to="/calculator" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg">
                Calculate Savings
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className='bg-[#718E62] flex justify-center'>

      <div
      style={{
        backgroundImage: `url("/SRM_Builds.png")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "94vh",
        width : "90vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        
      }}
      
      >
        <div className='flex flex-col justify-end h-screen pb-16'>

      <div className="flex flex-col sm:flex-row justify-end gap-4">
              <Link to="/assessment" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg">
                Get Started
              </Link>
              <Link to="/calculator" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg">
                Calculate Savings
              </Link>
            </div>
        </div>
    </div>
      </section>

      {/* Energy Assessment Tool */}
      <section className="py-16 bg-[#dde8cf]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Energy Assessment Tool</h2>
          <p className="section-subtitle text-center">
            Find out which green energy solutions are best for your home with our quick assessment tool.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Property Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option>Select property type</option>
                    <option>Single-family home</option>
                    <option>Apartment/Condo</option>
                    <option>Townhouse</option>
                    <option>Commercial building</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Average Monthly Energy Bill (&#8377;)</label>
                  <input 
                    type="number" 
                    placeholder="e.g., 150"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Roof Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option>Select roof type</option>
                    <option>Asphalt shingles</option>
                    <option>Metal</option>
                    <option>Tile</option>
                    <option>Flat</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Location (Zip Code)</label>
                  <input 
                    type="text" 
                    placeholder="e.g., 90210"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Home Size (sq ft)</label>
                  <input 
                    type="number" 
                    placeholder="e.g., 2000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Interested In (Select all that apply)</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="solar" className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded" />
                      <label htmlFor="solar" className="ml-2 text-gray-700">Solar Panels</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="battery" className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded" />
                      <label htmlFor="battery" className="ml-2 text-gray-700">Battery Storage</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="heatpump" className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded" />
                      <label htmlFor="heatpump" className="ml-2 text-gray-700">Heat Pumps</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="ev" className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded" />
                      <label htmlFor="ev" className="ml-2 text-gray-700">EV Charging</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/assessment" className="btn-primary inline-flex items-center bg-[#718f63]">
                Get Recommendations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Preview */}
      <section className="py-16 bg-[#718f63]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-white">Our Green Energy Solutions</h2>
          <p className="section-subtitle text-center text-white">
            Explore our range of high-quality, efficient green energy products for your home.
          </p>
          
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Solar Panel Card */}
            <div className="card">
              <div className="h-48  relative overflow-hidden">
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
                <div className="flex items-center mb-2 ">
                  <Sun className="h-5 w-5 text-yellow-500 mr-2 " />
                  <h3 className="font-bold text-lg">Solar Panels</h3>
                </div>
                <p className="text-gray-600 mb-4 ">High-efficiency solar panels to power your home with clean energy from the sun.</p>
                <Link to="/products" className="text-[#718f63] font-medium hover:text-green-700 inline-flex items-center">
                  View Products
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
             
            
            
            {/* Water Systems Card */}
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
            
            {/* Battery Storage Card */}
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

      {/* Cost Calculator Preview */}
      <CalculatorSection/>

      {/* Installation Process */}
      <section className="py-16 bg-[#718f64]  ">
        <div className="container mx-auto px-4 ">
          <h2 className="section-title text-center text-white">Simple Installation Process</h2>
          <p className="section-subtitle text-center text-white">
            We make going green easy with our streamlined installation process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-white  mb-3">1. Assessment</h3>
              <p className="text-white">
                Complete our energy assessment to get personalized recommendations for your home.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full  flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Consultation</h3>
              <p className="text-white">
                Our experts will discuss your options and provide a detailed quote for installation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold  mb-3 text-white">3. Installation</h3>
              <p className="text-white">
                Our certified technicians will install your system quickly and professionally.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/installation" className="btn-primary inline-flex items-center bg-[#dee8d1] text-black">
              Request Installation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16 bg-[#dee8d1]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Educational Resources</h2>
          <p className="section-subtitle text-center">
            Learn more about green energy solutions and how they can benefit your home and the environment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 bg-[#708f64]">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#dee8d1] mr-2" />
                  <h3 className="text-xl font-bold text-white">Articles</h3>
                </div>
                <p className="text-white mb-4">
                  Read our informative articles about renewable energy technologies, benefits, and best practices.
                </p>
                <Link to="/resources" className="text-[#dee8d1] font-medium hover:text-green-700 inline-flex items-center">
                  Browse Articles
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-[#708f64] rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Video className="h-6 w-6 text-[#dee8d1] mr-2" />
                  <h3 className="text-xl font-bold text-white">Videos</h3>
                </div>
                <p className="text-white mb-4">
                  Watch our educational videos explaining green energy concepts, installation processes, and more.
                </p>
                <Link to="/resources" className="text-[#dee8d1] font-medium hover:text-green-700 inline-flex items-center">
                  Watch Videos
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-[#708f64] rounded-xl shadow-md overflow-hidden hover:bg-white  hover:duration-500">
              <div className="p-6">
                <div className="flex items-center mb-4 ">
                  <HelpCircle className="h-6 w-6 text-[#dee8d1] mr-2" />
                  <h3 className="text-xl font-bold text-white">FAQs</h3>
                </div>
                <p className="text-white mb-4">
                  Find answers to commonly asked questions about green energy solutions and our services.
                </p>
                <Link to="/resources" className="text-[#dee8d1] font-medium hover:text-green-700 inline-flex items-center">
                  View FAQs
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-[#dee8d1]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Community Impact</h2>
          <p className="section-subtitle text-center">
            See how our green energy solutions are making a difference in communities across the country.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 ">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src="https://imgs.search.brave.com/A6LD6zg5HXT1phOn4gwm_EeYOMTd381QYkHE2lyLP2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGVyY2hlbmVyZ3ku/Y29tL2Ntcy1hc3Nl/dHMvc29sYXJfZmFy/bV9hbWVyaWNhbl9w/dWJsaWNfcG93ZXJf/YXNzb2NpYXRpb25f/dW5zcGxhc2hfYmVi/NjM1MjYzYS5qcGc" 
                  alt="Community Solar Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-[#dee8d1]">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community Solar Project</h3>
                <p className="text-gray-600 mb-4">
                  Our community solar project in Springfield has helped 250 families access clean energy, reducing carbon emissions by over 1,500 tons annually.
                </p>
                <Link to="/community" className="text-[#708f65] font-medium hover:text-green-700 inline-flex items-center">
                  Read the Story
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-[#dee8d1] rounded-xl shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="School Solar Installation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">School Solar Installation</h3>
                <p className="text-gray-600 mb-4">
                  We installed solar panels at Riverside High School, saving the school ₹45,000 annually in energy costs while educating students about renewable energy.
                </p>
                <Link to="/community" className="text-[#708f65] font-medium hover:text-green-700 inline-flex items-center">
                  Read the Story
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/community" className="btn-primary inline-flex items-center bg-[#708f65]">
              Explore Community Impact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#708f65] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Go Green?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of homeowners who have already made the switch to clean, renewable energy with Greenify.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/assessment" className="bg-white text-black hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg">
              Get Started Today
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;