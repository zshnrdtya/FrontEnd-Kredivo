'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'Erwin Dermawan',
      rating: 5,
      text: 'Aplikasi fintech ok, ga ribet, ga lama. Limit fantastis, proses pencairan dana atau pembayaran barang sangat cepat sekali, puas sekali menggunakan Kredivo, sukses selalu dan lancar',
      avatar: '👨'
    },
    {
      name: 'A. Putra Gunawan',
      rating: 5,
      text: 'Mantul aplikasinya, hanya kredivo yang bunga nya kecil dan banyak membantu saya. yang lain lewat dah buatnya terlalu besar tidak ada lawan buat aplikasi yang satu ini hanya Kredivo, kalau orang lain bilang kredivo bagini begitu, buat saya sih oke aja tidak ada masalah selama saya pake terus.',
      avatar: '👨'
    },
    {
      name: 'Yudi Adriayana',
      rating: 5,
      text: 'Saya kasih ulasan baru, terimakasih banyak tata kredivo yang sudah memberikan kemudahan bagi saya, saya bisa meminjam cicilar 12 bulan. dengan mudah dan pembayaran yang ga ribey, senggga kedepannya tantar dan banyak lagi promo juga bonus untuk pengguna aktif Kredivo.',
      avatar: '👨'
    },
    {
      name: 'Sarah Putri',
      rating: 5,
      text: 'Kredivo sangat membantu saya dalam berbelanja online. Proses approval cepat dan mudah! Saya sudah pakai Kredivo selama 2 tahun dan tidak pernah kecewa.',
      avatar: '👩'
    }
  ];

  const visibleCount = 2;
  const maxIndex = testimonials.length - visibleCount;

  const scrollUp = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollDown = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    // Padding atas diubah jadi pt-0 agar menempel ke atas
    <section className="py-20 pt-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* items-start agar konten teks dan testimoni sejajar rapi sejak awal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content - Title */}
          {/* Diberi mt-8 atau sesuai kebutuhan agar sejajar pas di bawah sisa gambar features */}
          <div className="lg:mt-10">
            <h2 className="text-3xl md:text-4xl font-normal mb-2 text-gray-700 leading-tight">
              Jutaan orang sudah hidup
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-950">
              #Sefleksibelitu
            </h2>
          </div>

          {/* Right Content - Vertical Slider */}
          {/* Menggunakan lg:-mt-14 (margin top negatif) khusus di desktop agar slider naik ke area HP */}
          <div className="flex flex-col items-center w-full max-w-xl mx-auto lg:-mt-14 z-30 relative">
            
            {/* Scroll Up Button */}
            <button
              onClick={scrollUp}
              disabled={currentIndex === 0}
              className={`mb-4 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm border ${
                currentIndex === 0
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed border-gray-200'
                  : 'bg-white text-sky-400 hover:bg-sky-50 border-sky-100'
              }`}
              aria-label="Scroll up"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>

            {/* Window Container */}
            <div className="w-full h-[460px] md:h-[500px] overflow-hidden relative px-2">
              <div 
                className="transition-transform duration-500 ease-in-out space-y-6"
                style={{ transform: `translateY(-${currentIndex * 244}px)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#dcf0fa] rounded-2xl p-6 h-[220px] flex flex-col justify-between shadow-inner"
                  >
                    <div>
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl mr-3 shadow-sm border border-white overflow-hidden">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#209cdb] text-base">
                            {testimonial.name}
                          </h4>
                          <div className="flex space-x-0.5 mt-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-xs md:text-sm leading-relaxed line-clamp-4">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Down Button */}
            <button
              onClick={scrollDown}
              disabled={currentIndex >= maxIndex}
              className={`mt-4 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm border ${
                currentIndex >= maxIndex
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed border-gray-200'
                  : 'bg-white text-sky-400 hover:bg-sky-50 border-sky-100'
              }`}
              aria-label="Scroll down"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}