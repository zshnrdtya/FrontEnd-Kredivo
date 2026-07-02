import Image from 'next/image';
import MerchantGrid from '@/components/MerchantGrid';

export default function MerchantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                Merchant Kami
              </h1>
              
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <select className="w-full px-4 py-2.5 sm:py-3 bg-gray-100 border border-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-200 transition-colors text-sm sm:text-base">
                    <option>Kategori Merchant</option>
                    <option>E-Commerce</option>
                    <option>Retail</option>
                    <option>Travel</option>
                    <option>Fashion</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Cari Merchant"
                    className="w-full px-4 py-2.5 sm:py-3 bg-sky-500 text-white placeholder-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 text-sm sm:text-base"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Illustration - hidden on small mobile, shown from sm */}
            <div className="hidden sm:flex relative justify-end">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <Image src="/icon-merchant.png" alt="Merchant Illustration" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchant Grid */}
      <MerchantGrid />
    </div>
  );
}
