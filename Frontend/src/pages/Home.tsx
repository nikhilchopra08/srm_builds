import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import CommunityImpact from '../components/home/CommunityImpact';
import EducationalResources from '../components/home/EducationalResources';
import InstallationProcess from '../components/home/InstallationProcess';
import CalculatorSection from '../components/CalculationSection';
import ProductCatalog from '../components/home/ProductCatalog';
import EnergyAssessment from '../components/home/EnergyAssessment';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?auto=format&fit=crop&q=80&w=1920",
    title: "Discover Nature",
    description: "Explore the beauty of untouched landscapes"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920",
    title: "Mountain Adventures",
    description: "Scale new heights and find your peak"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1920",
    title: "Sunset Valleys",
    description: "Experience magical moments at dusk"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920",
    title: "Forest Trails",
    description: "Walk through ancient woodland paths"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1920",
    title: "Misty Mornings",
    description: "Wake up to nature's tranquility"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1920",
    title: "Mountain Lakes",
    description: "Discover pristine alpine waters"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1920",
    title: "Hidden Waterfalls",
    description: "Find secluded natural wonders"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !hasScrolled) {
      setHasScrolled(true);
      const nextSection = document.getElementById('next-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col">
      <section className='bg-[#718E62] flex justify-center'>
        <div
          style={{
            backgroundImage: `url("/SRM_Builds.png")`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "94vh",
            width: "90vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className='flex flex-col justify-end h-screen'>
            <div className="grid grid-cols-2 mb-[12vh] gap-8">
              <Link to="/assessment" className="mx-auto bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg">
                Get Started
              </Link>
              <Link to="/calculator" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg">
                Calculate Savings
              </Link>
            </div>
          </div>
        </div>
      </section>
      <EnergyAssessment />
      <ProductCatalog />
      <CalculatorSection />
      <InstallationProcess />
      <EducationalResources />
      <CommunityImpact />
      
      {/* Added Carousel Section as the last section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Main Carousel */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute h-full w-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="mb-4 text-5xl font-bold">{slide.title}</h1>
                    <p className="text-xl">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Side Navigation */}
        <div className="absolute left-8 top-1/2 flex -translate-y-1/2 flex-col gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-10 w-10 rounded-full border-2 border-white text-sm font-medium transition-all duration-300 ${
                index === currentSlide
                  ? 'scale-110 bg-white text-gray-900'
                  : 'bg-black/30 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;