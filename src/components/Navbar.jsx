import React, { useState } from "react";
import { Menu, X, BookOpen, Search as SearchIcon } from "lucide-react";

const Navbar = ({ currentView, onChangeView, onScrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);     //is hamburger menu open in mobile screen

  const handleNavClick = (view, sectionId) => {
    onChangeView(view);
    setIsMobileMenuOpen(false);

    if (view === "home" && sectionId) {
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleNavClick("home", "hero")}
          >
            <BookOpen className="h-8 w-8 text-indigo-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              BookVerse
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("home", "hero")}       //text gray and white on hovering
              className={`text-sm font-medium transition-colors ${
                currentView === "home" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick("about")}
              className={`text-sm font-medium transition-colors ${
                currentView === "about" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNavClick("all-books")}
              className={`text-sm font-medium transition-colors ${
                currentView === "all-books" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              All Books
            </button>

            <button
              onClick={() => handleNavClick("search")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
            >
              <SearchIcon size={16} />
              <span>Search Books</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavClick("home", "hero")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick("about")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick("all-books")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
            >
              All Books
            </button>

            <button
              onClick={() => handleNavClick("search")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-indigo-400 hover:text-indigo-300 hover:bg-white/10"
            >
              Search Books
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
