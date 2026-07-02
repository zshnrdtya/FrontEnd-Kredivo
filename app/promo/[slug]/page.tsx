'use client';

import Image from 'next/image';
import Link from 'next/link';
import { use, useState } from 'react';

interface PromoDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function PromoDetailPage(props: PromoDetailPageProps) {
  const params = use(props.params);
  const [activeTab, setActiveTab] = useState<'terms' | 'usage'>('terms');
  
  const promoData = {
    'erafone-cicilan-0': {
      title: 'Beli Gadget Impian di Erafone Dapat Cicilan 0% Tenor 12 Bulan!',
      merchant: 'Erafone',
      image: '/Thumbnail-erafone.webp',
      bannerImage: '/Thumbnail-erafone.webp',
      period: 'sampai 31 Juli 2026',
      tenor: '12 Bulan',
      payment: 'Cicilan',
      minTransaction: '5.000.000',
      description: 'Lagi cari series terbaru dari Infinix dan vivo? atau gadget flagship lainnya? Cari dan beli di Erafone aja! Ada Cicilan 0% Tenor 12 Bulan! Syarat dan ketentuan berlaku.',
      terms: [
        'Promo berlaku hingga 31 Juli 2026',
        'Promo cicilan 0% berlaku khusus pembayaran cicilan dengan tenor 12 bulan di Erafone, iBos, Samsung by Erafone, Xiaomi & Eraspace.com\nVoucher promo hanya dapat digunakan 1 (satu) kali oleh setiap pengguna selama periode berlangsung.',
        'Setup transaksi akan dikenakan biaya administrasi sebesar 1.5%',
        'Jika pengguna terlambat melakukan pembayaran tagihan, pengguna akan dikenakan tambahan 2 bulan cicilan beserta bunga dan biaya keterlambatan yang berlaku.',
        'Kuota promo 500 selama masa periode promo',
        'Jika transaksi dibatalkan, diskon ini tidak dapat digunakan lagi untuk transaksi berikutnya.'
      ],
      usage: [
        'Beli produk yang kamu inginkan di merchant favorit kamu.',
        'Pilih pembayaran Kredivo dan login ke akun Kredivo-mu.',
        'Pilih tenor cicilan 12 bulan.',
        'Klik "Voucher belanja hemat" dan pilih Voucher "Cicilan 0% 12 Bulan Double 0% di Erafone, iBox, Samsung by Erafone, Xiaomi & Eraspace.com".',
        'Diskon akan langsung teraplikasikan di transaksimu.'
      ]
    }
  };

  const promo = promoData[params.slug as keyof typeof promoData] || promoData['erafone-cicilan-0'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] bg-gradient-to-r from-sky-400 to-sky-500">
        <Image src={promo.bannerImage || promo.image} alt={promo.title} fill className="object-cover" priority />
      </section>

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center text-xs sm:text-sm text-gray-600 flex-wrap gap-1">
            <Link href="/" className="hover:text-sky-500">Home</Link>
            <span>/</span>
            <Link href="/promo" className="hover:text-sky-500">Promo</Link>
            <span>/</span>
            <span className="text-sky-500">{promo.merchant}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              {promo.title}
            </h1>

            <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              {promo.description}
            </p>

            {/* Info Table */}
            <div className="bg-gray-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: 'Periode', value: promo.period },
                  { label: 'Tenor', value: promo.tenor },
                  { label: 'Pembayaran', value: promo.payment },
                  { label: 'Min. Transaksi', value: promo.minTransaction },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:py-2 gap-1 sm:gap-0">
                    <span className="text-gray-500 text-sm sm:text-base sm:w-40 font-medium">{row.label}</span>
                    <span className="text-gray-800 sm:font-medium text-sm sm:text-base">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b overflow-x-auto">
                <div className="flex min-w-max">
                  <button 
                    onClick={() => setActiveTab('terms')}
                    className={`px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base whitespace-nowrap ${
                      activeTab === 'terms' ? 'text-gray-800 border-b-4 border-orange-500' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Syarat dan Ketentuan
                  </button>
                  <button 
                    onClick={() => setActiveTab('usage')}
                    className={`px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base whitespace-nowrap ${
                      activeTab === 'usage' ? 'text-gray-800 border-b-4 border-orange-500' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Cara Pakai
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {activeTab === 'terms' ? (
                  <ol className="space-y-3 list-decimal list-inside text-gray-700 leading-relaxed text-sm sm:text-base">
                    {promo.terms.map((term, index) => (
                      <li key={index} className="leading-relaxed">{term}</li>
                    ))}
                  </ol>
                ) : (
                  <ol className="space-y-3 list-decimal list-inside text-gray-700 leading-relaxed text-sm sm:text-base">
                    {promo.usage.map((step, index) => (
                      <li key={index} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="relative w-full h-44 sm:h-56 rounded-lg overflow-hidden mb-4 sm:mb-6">
                <Image src={promo.image} alt={promo.title} fill className="object-cover" />
              </div>

              <h3 className="font-bold text-xl sm:text-2xl text-gray-800 mb-4 sm:mb-6">
                {promo.merchant}
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Periode</span>
                  <span className="font-semibold text-gray-800">{promo.period}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Tenor</span>
                  <span className="font-semibold text-gray-800">{promo.tenor}</span>
                </div>
              </div>

              <button className="w-full py-2.5 sm:py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors mb-3 text-sm sm:text-base">
                Belanja Sekarang
              </button>
              <Link 
                href="/promo"
                className="block w-full py-2.5 sm:py-3 border-2 border-sky-500 text-sky-500 rounded-lg font-semibold hover:bg-sky-50 transition-colors text-center text-sm sm:text-base"
              >
                Lihat Promo Lainnya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
