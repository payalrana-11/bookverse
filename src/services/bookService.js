const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = "AIzaSyAkux0xX1213dG2hMwkZsutAr2dPZsgvlk";   


//  SEARCH BOOKS
export const searchBooks = async (query, maxResults = 20) => {
  try {
    const res = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(query)}&maxResults=${maxResults}&printType=books&key=${API_KEY}`
    );

    if (!res.ok) throw new Error("Failed fetching books");

    const data = await res.json();
    return data.items || [];
  } catch (err) {
    console.error("Search error:", err);
    return [];
  }
};


//  FETCH BOOKS BY CATEGORY
export const fetchBooksByCategory = async (category, maxResults = 20) => {
  return searchBooks(`subject:${category}`, maxResults);
};


//  FETCH POPULAR / TRENDING BOOKS
export const fetchPopularBooks = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}?q=bestsellers&orderBy=relevance&maxResults=12&printType=books&key=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error(`Popular books fetch failed: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.items || [];
  } catch (err) {
    console.error('Popular books error:', err);
    return [];
  }
};
