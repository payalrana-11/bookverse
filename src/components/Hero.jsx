import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = ({ onDiscoverClick }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/20 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium text-sm mb-6 animate-fade-in-up">
              The Ultimate Digital Library
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Discover Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Next Read
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore a universe of stories, knowledge, and adventures. From timeless classics to modern bestsellers, find the perfect book to match your vibe.
            </p>

            <button
              onClick={onDiscoverClick}
              className="group bg-white text-black hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Discover Books
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>

              <img
                src={`${import.meta.env.BASE_URL}bookimg.jpeg`}
                alt="Reading Atmosphere"
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
              />

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
