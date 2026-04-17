import React, { useState } from 'react';
import { searchBooks } from '../services/bookService';
import BookCard from './BookCard';
import { ArrowLeft, Search as SearchIcon, Loader2 } from 'lucide-react';

function Search({ onBack, favorites, onToggleFavorite, onBookClick }) {
  const [query, setQuery] = useState('');          //typing in search bar
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setHasSearched(true);

    const books = await searchBooks(query, 30);
    setResults(books);
    setLoading(false);
  };

  const isFavorite = (id) => favorites.some((b) => b.id === id);

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Find Your Next Adventure</h2>
          <form onSubmit={handleSearch} className="relative">
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, author, or genre..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-white text-lg focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-gray-500"
            />

            <button 
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors"
            >
              <SearchIcon size={20} />
            </button>
          </form>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
          </div>
        ) : (
          <div>
            {/* No Results */}
            {hasSearched && results.length === 0 && (
              <div className="text-center text-gray-400 py-10">
                No results found for "{query}". Try a different term.
              </div>
            )}

            {/* Search Results */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {results.map((book) => (
                <BookCard 
                  key={book.id} 
                  book={book} 
                  isFavorite={isFavorite(book.id)}
                  onToggleFavorite={onToggleFavorite}
                  onClick={onBookClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
