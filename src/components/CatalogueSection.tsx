import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from './ProductCard';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  Sparkles, 
  Activity, 
  PackageCheck, 
  FileText,
  ChevronDown
} from 'lucide-react';

export const CatalogueSection: React.FC = () => {
  const { 
    products, 
    isLoadingProducts, 
    language, 
    t, 
    searchQuery, 
    setSearchQuery,
    selectedCategory,
    setSelectedCategory 
  } = useApp();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'alpha'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(36);

  // Enhanced Filter & Search Logic
  const filteredProducts = useMemo(() => {
    const active = products.filter(p => p.is_active !== false);

    // If search query is present, match across all active products
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      let matches = active.filter(p => 
        p.name.toLowerCase().includes(q) ||
        (p.name_bn && p.name_bn.toLowerCase().includes(q)) ||
        p.test_code.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.included_tests && p.included_tests.some(t => t.toLowerCase().includes(q)))
      );

      // If user selected a specific category, filter within category if matches exist
      if (selectedCategory !== 'all') {
        const inCategory = matches.filter(p => {
          if (selectedCategory === 'package') return p.category === 'package';
          if (selectedCategory === 'profile') return p.category === 'profile';
          if (selectedCategory === 'test') return p.category === 'test';
          if (selectedCategory === 'popular') return p.is_popular;
          return true;
        });
        if (inCategory.length > 0) {
          matches = inCategory;
        }
      }

      // Sort
      if (sortBy === 'price-asc') {
        matches.sort((a, b) => a.final_price - b.final_price);
      } else if (sortBy === 'price-desc') {
        matches.sort((a, b) => b.final_price - a.final_price);
      } else if (sortBy === 'alpha') {
        matches.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        matches.sort((a, b) => {
          if (a.is_popular && !b.is_popular) return -1;
          if (!a.is_popular && b.is_popular) return 1;
          return 0;
        });
      }

      return matches;
    }

    let result = [...active];

    // Category filter when no search query
    if (selectedCategory === 'package') {
      result = result.filter(p => p.category === 'package');
    } else if (selectedCategory === 'profile') {
      result = result.filter(p => p.category === 'profile');
    } else if (selectedCategory === 'test') {
      result = result.filter(p => p.category === 'test');
    } else if (selectedCategory === 'popular') {
      result = result.filter(p => p.is_popular);
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.final_price - b.final_price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.final_price - a.final_price);
    } else if (sortBy === 'alpha') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      result.sort((a, b) => {
        if (a.is_popular && !b.is_popular) return -1;
        if (!a.is_popular && b.is_popular) return 1;
        return 0;
      });
    }

    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);

  const displayedProducts = useMemo(() => {
    if (searchQuery.trim()) {
      return filteredProducts;
    }
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount, searchQuery]);

  return (
    <section id="catalog" className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Search Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {language === 'bn' ? 'সকল ডায়াগনস্টিক টেস্ট ও হেলথ প্যাকেজ' : 'All Diagnostic Tests & Health Packages'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {language === 'bn' 
              ? 'টেস্টের নাম বা কোড দিয়ে সার্চ করুন এবং সহজেই হরিহরপাড়ায় হোম কালেকশনের জন্য বুক করুন।'
              : 'Search by test name, package name, or Thyrocare code to find exactly what your doctor prescribed.'}
          </p>

          {/* Search Bar Input */}
          <div className="relative pt-2">
            <div className="relative flex items-center shadow-lg rounded-2xl bg-white border-2 border-purple-200/90 focus-within:border-purple-600 focus-within:ring-4 focus-within:ring-purple-500/10 transition-all">
              <Search className="w-5 h-5 text-purple-600 ml-4 shrink-0" />
              <input
                id="search-tests-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full py-3.5 pl-3 pr-10 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-hidden bg-transparent rounded-2xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-2 text-slate-400 hover:text-slate-600 mr-2 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Active Search Results Banner */}
            {searchQuery && (
              <div className="mt-3 p-3 bg-white border border-rose-200 rounded-2xl flex items-center justify-between flex-wrap gap-2 shadow-2xs">
                <div className="flex items-center space-x-2 text-xs text-slate-800">
                  <span className="font-bold text-[#e23744]">
                    {language === 'bn'
                      ? `"${searchQuery}" এর জন্য ${filteredProducts.length} টি টেস্ট ও প্যাকেজ পাওয়া গেছে`
                      : `Found ${filteredProducts.length} tests matching "${searchQuery}"`}
                  </span>
                </div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#e23744] hover:underline font-bold cursor-pointer"
                >
                  {language === 'bn' ? 'সার্চ রিসেট করুন' : 'Clear search'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Chips & Sort Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pt-2">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setVisibleCount(36);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#e23744] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {t.filterAll}
            </button>

            <button
              onClick={() => {
                setSelectedCategory('popular');
                setVisibleCount(36);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1 cursor-pointer ${
                selectedCategory === 'popular'
                  ? 'bg-[#e23744] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.filterPopular}</span>
            </button>

            <button
              onClick={() => {
                setSelectedCategory('package');
                setVisibleCount(36);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1 cursor-pointer ${
                selectedCategory === 'package'
                  ? 'bg-[#e23744] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <PackageCheck className="w-3.5 h-3.5" />
              <span>{t.filterPackages}</span>
            </button>

            <button
              onClick={() => {
                setSelectedCategory('profile');
                setVisibleCount(36);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1 cursor-pointer ${
                selectedCategory === 'profile'
                  ? 'bg-[#e23744] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{t.filterProfiles}</span>
            </button>

            <button
              onClick={() => {
                setSelectedCategory('test');
                setVisibleCount(36);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1 cursor-pointer ${
                selectedCategory === 'test'
                  ? 'bg-[#e23744] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.filterTests}</span>
            </button>
          </div>

          {/* Sort Dropdown & Count */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-slate-500 font-medium">
              <strong className="text-slate-900">{filteredProducts.length}</strong> {t.productsFound}
            </span>

            <div className="flex items-center space-x-1.5 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 shadow-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs font-semibold text-slate-700 bg-transparent focus:outline-hidden cursor-pointer"
              >
                <option value="featured">{t.sortFeatured}</option>
                <option value="price-asc">{t.sortPriceLowHigh}</option>
                <option value="price-desc">{t.sortPriceHighLow}</option>
                <option value="alpha">{t.sortAlphabetical}</option>
              </select>
            </div>
          </div>

        </div>

        {/* Loading State */}
        {isLoadingProducts && (
          <div className="py-20 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-purple-600 border-t-transparent" />
            <p className="mt-3 text-sm text-slate-600 font-medium">Loading catalogue...</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoadingProducts && filteredProducts.length === 0 && (
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 max-w-lg mx-auto space-y-4 my-8">
            <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {language === 'bn' ? 'কোনো টেস্ট পাওয়া যায়নি' : 'No tests found'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.noProductsFound}
            </p>
            <div className="pt-2 flex flex-col items-center space-y-3">
              <div className="flex flex-wrap justify-center gap-2">
                {['CBC', 'Thyroid', 'Lipid', 'HbA1c', 'Liver LFT', 'Aarogyam 1.3'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSearchQuery(item);
                      setSelectedCategory('all');
                    }}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-[#e23744] text-xs font-semibold rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs font-bold bg-[#e23744] text-white px-4 py-2 rounded-xl hover:bg-rose-700 transition-colors cursor-pointer shadow-xs"
              >
                {language === 'bn' ? 'সকল টেস্ট দেখুন' : 'Show All Tests'}
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {!isLoadingProducts && displayedProducts.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {!searchQuery.trim() && visibleCount < filteredProducts.length && (
              <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setVisibleCount(prev => prev + 48)}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-[#e23744] hover:bg-rose-700 text-white text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <span>
                    {language === 'bn'
                      ? `আরও টেস্ট দেখুন (${filteredProducts.length - visibleCount} টি বাকি)`
                      : `Load More Tests (${filteredProducts.length - visibleCount} remaining)`}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setVisibleCount(filteredProducts.length)}
                  className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-sm font-bold shadow-xs transition-all cursor-pointer"
                >
                  <span>
                    {language === 'bn'
                      ? `সবগুলো দেখুন (${filteredProducts.length})`
                      : `Show All (${filteredProducts.length})`}
                  </span>
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
};
