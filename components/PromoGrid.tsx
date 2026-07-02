'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PromoGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, online, offline
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 promos initially

  const promos = [
    {
      id: 1,
      image: '/Thumbnail-erafone.webp',
      title: 'Upgrade Gadget Impian di Erafone Cicilan 0% Tenor 12 Bulan',
      period: 'Periode sampai 31 Juli 2025',
      merchant: 'erafone',
      type: 'online',
      slug: 'erafone-cicilan-0',
      isActive: true
    },
    {
      id: 2,
      image: '/Thumbnail-17.webp',
      title: 'Perbanyak Transaksi Dapat Hadiah Terbaik di Urban Republic!',
      period: 'Periode sampai 31 Desember 2025',
      merchant: 'urban-republic',
      type: 'offline',
      slug: 'urban-republic-hadiah',
      isActive: true
    },
    {
      id: 3,
      image: '/Thumbnail-18.webp',
      title: 'Buruan Beli Gadget dan Laptop di Event Helix X Kredivo!',
      period: 'Periode sampai 30 September 2025',
      merchant: 'helix',
      type: 'online',
      slug: 'helix-gadget-laptop',
      isActive: true
    },
    {
      id: 4,
      image: '/Thumbnail-16.webp',
      title: 'Langganan Internet Bisa Dapet Cashback Points s.d. 10.000!',
      period: 'Periode sampai 31 Desember 2025',
      merchant: 'orbit',
      type: 'online',
      slug: 'orbit-cashback',
      isActive: true
    },
    {
      id: 5,
      image: '/Thumbnail-19.webp',
      title: 'Beli vivo atau Infinix Dapat Hadiah Langsung!',
      period: 'Periode 1 Juli - 31 Agustus 2025',
      merchant: 'infinix',
      type: 'offline',
      slug: 'vivo-infinix-hadiah',
      isActive: true
    },
    {
      id: 6,
      image: '/Thumbnail-20.webp',
      title: 'Beli MacBook & iPad Dapet Cicilan 0% Tenor 12 Bulan!',
      period: 'Periode sampai 30 Juni 2025',
      merchant: 'apple',
      type: 'online',
      slug: 'apple-macbook-ipad',
      isActive: true
    },
    {
      id: 7,
      image: '/Thumbnail-erafone.webp',
      title: 'Upgrade Gadget Impian di Erafone Cicilan 0% Tenor 12 Bulan',
      period: 'Periode sampai 31 Juli 2025',
      merchant: 'erafone',
      type: 'online',
      slug: 'erafone-cicilan-0',
      isActive: true
    },
    {
      id: 8,
      image: '/Thumbnail-17.webp',
      title: 'Perbanyak Transaksi Dapat Hadiah Terbaik di Urban Republic!',
      period: 'Periode sampai 31 Desember 2025',
      merchant: 'urban-republic',
      type: 'offline',
      slug: 'urban-republic-hadiah',
      isActive: true
    },
    {
      id: 9,
      image: '/Thumbnail-18.webp',
      title: 'Buruan Beli Gadget dan Laptop di Event Helix X Kredivo!',
      period: 'Periode sampai 30 September 2025',
      merchant: 'helix',
      type: 'online',
      slug: 'helix-gadget-laptop',
      isActive: true
    },
    {
      id: 10,
      image: '/Thumbnail-16.webp',
      title: 'Langganan Internet Bisa Dapet Cashback Points s.d. 10.000!',
      period: 'Periode sampai 31 Desember 2025',
      merchant: 'orbit',
      type: 'online',
      slug: 'orbit-cashback',
      isActive: true
    },
    {
      id: 11,
      image: '/Thumbnail-19.webp',
      title: 'Beli vivo atau Infinix Dapat Hadiah Langsung!',
      period: 'Periode 1 Juli - 31 Agustus 2025',
      merchant: 'infinix',
      type: 'offline',
      slug: 'vivo-infinix-hadiah',
      isActive: true
    },
    {
      id: 12,
      image: '/Thumbnail-20.webp',
      title: 'Beli MacBook & iPad Dapet Cicilan 0% Tenor 12 Bulan!',
      period: 'Periode sampai 30 Juni 2025',
      merchant: 'apple',
      type: 'online',
      slug: 'apple-macbook-ipad',
      isActive: true
    }
  ];

  const filteredPromos = promos.filter((promo) => {
    const matchesSearch = promo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || promo.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const visiblePromos = filteredPromos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPromos.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const resetFilter = () => {
    setSearchQuery('');
    setFilterType('all');
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Cari Promo</h1>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cicilan 0%"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-500"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Tipe Promo */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Tipe Promo</h3>
                <div className="flex sm:flex-col gap-4 sm:gap-3">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={filterType === 'online'}
                        onChange={() => setFilterType(filterType === 'online' ? 'all' : 'online')}
                        className="w-6 h-6 border-2 border-gray-300 rounded appearance-none checked:bg-sky-500 checked:border-sky-500 cursor-pointer"
                      />
                      {filterType === 'online' && (
                        <svg className="w-4 h-4 text-white absolute top-1 left-1 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="ml-3 text-gray-700 text-base sm:text-lg">Online</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={filterType === 'offline'}
                        onChange={() => setFilterType(filterType === 'offline' ? 'all' : 'offline')}
                        className="w-6 h-6 border-2 border-gray-300 rounded appearance-none checked:bg-sky-500 checked:border-sky-500 cursor-pointer"
                      />
                      {filterType === 'offline' && (
                        <svg className="w-4 h-4 text-white absolute top-1 left-1 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="ml-3 text-gray-700 text-base sm:text-lg">Offline</span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex sm:flex-col gap-3">
                <button 
                  onClick={resetFilter}
                  className="flex-1 sm:flex-none py-2 sm:py-3 bg-white border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-50 transition-colors text-sm sm:text-lg"
                >
                  Hapus Filter
                </button>
                <button className="flex-1 sm:flex-none py-2 sm:py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-lg">
                  Terapkan Filter
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Promo Cards */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600 text-sm sm:text-base">Menampilkan 1 - {visiblePromos.length} promo dari 95 promo</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {visiblePromos.map((promo) => (
                <div key={promo.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-40 sm:h-48 bg-gray-100">
                    <Image
                      src={promo.image}
                      alt={promo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-xs text-gray-500 mb-2">{promo.period}</p>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                      {promo.title}
                    </h3>
                    <Link 
                      href={`/promo/${promo.slug || 'erafone-cicilan-0'}`}
                      className="text-xs sm:text-sm text-sky-500 font-semibold hover:text-sky-600 transition-colors"
                    >
                      Lihat Rincian
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="text-center">
                <button 
                  onClick={loadMore}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors shadow-md text-sm sm:text-base"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
