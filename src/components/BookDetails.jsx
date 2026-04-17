import React from 'react';
import { Star, Calendar, BookOpen, Heart, Tag, X } from 'lucide-react';

const BookDetails = ({ book, onBack, isFavorite, onToggleFavorite }) => {
  const {
    title,
    authors,
    description,
    imageLinks,
    averageRating,
    categories,
    publishedDate,
    previewLink
  } = book.volumeInfo;

  const thumbnail =
    imageLinks?.thumbnail?.replace('http:', 'https:') ||              //official big image
    imageLinks?.smallThumbnail?.replace('http:', 'https:') ||          // small thumbnail
    'https://picsum.photos/300/450';                                 //random picsum image

  // Remove HTML tags from description
  const cleanDescription =
    description?.replace(/<[^>]*>?/gm, '') || 'No description available.';

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen flex items-center justify-center animate-fade-in">
      <div className="max-w-5xl w-full mx-auto relative">

        {/* Card Container */}
        <div className="bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-indigo-500/50 
        shadow-[0_0_50px_rgba(79,70,241,0.15)] overflow-hidden relative flex flex-col md:flex-row">

          {/* Close button */}
          <button
            onClick={onBack}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 
            hover:bg-red-500/20 text-gray-400 hover:text-red-500 transition-all border border-white/10"
          >
            <X size={24} />
          </button>

          {/* Left Image Section */}
          <div className="w-full md:w-1/3 relative group">
            <div className="h-64 md:h-full w-full relative overflow-hidden bg-black">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 
                transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/3 p-8 md:p-10 flex flex-col relative">

            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {categories?.map((cat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 
                    text-xs font-medium border border-indigo-500/20 flex items-center gap-1"
                  >
                    <Tag size={12} /> {cat}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                {title}
              </h1>

              <p className="text-xl text-gray-400">
                by{' '}
                <span className="text-indigo-400">
                  {authors?.join(', ') || 'Unknown Author'}
                </span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-8 text-sm text-gray-300 border-y border-white/5 py-4">
              {averageRating && (
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                  <span className="font-bold text-white">{averageRating}</span> / 5
                </div>
              )}
              {publishedDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="text-indigo-400" size={18} />
                  <span>{publishedDate.substring(0, 4)}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="flex-grow mb-8 overflow-y-auto max-h-[200px] pr-2 custom-scrollbar">
              <p className="text-gray-300 leading-relaxed text-lg">
                {cleanDescription}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-auto flex gap-4 pt-4 border-t border-white/5">

              <a
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 
                hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all 
                shadow-lg hover:shadow-indigo-500/25"
              >
                <BookOpen size={20} />
                Read Now
              </a>

              <button
                onClick={() => onToggleFavorite(book)}
                className={`flex-1 flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl 
                transition-all border ${
                  isFavorite
                    ? 'bg-pink-500/10 border-pink-500 text-pink-500'
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                }`}
              >
                <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                {isFavorite ? 'Saved' : 'Add to Favorites'}
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetails;
