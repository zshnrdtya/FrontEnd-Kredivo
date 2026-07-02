'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: 'Top up & tagihan',
      description: 'Top up pulsa dan paket data, bayar listrik ataupun beli token listrik, bayar tagihan BPJS, tagihan nomor pasca bayar, tagihan PDAM, internet & TV kabel dan tagihan telepon bisa kamu lakukan melalui aplikasi Kredivo dan bayar bulan depan.',
      color: 'bg-sky-500'
    },
    {
      id: 1,
      title: 'Belanja online',
      description: 'Belanja di ribuan merchant online favorit dan bayar nanti dengan cicilan 0%.',
      color: 'bg-sky-500'
    },
    {
      id: 2,
      title: 'Belanja offline',
      description: 'Belanja di toko fisik dengan scan QR code dan bayar menggunakan Kredivo PayLater.',
      color: 'bg-sky-500'
    },
    {
      id: 3,
      title: 'Pinjaman tunai KrediFazz',
      description: 'Dapatkan pinjaman tunai langsung ke rekening kamu dengan proses yang cepat dan mudah.',
      color: 'bg-sky-500'
    }
  ];

  return (
    // Padding bawah diganti jadi pb-0 supaya jarak ke Testimonials rapat
    <section className="bg-sky-50/40 pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Features List */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                Fitur Kredivo PayLater
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl">
                Berbagai fitur kredivo yang bikin hidup kamu jadi <span className="font-semibold">#Sefleksibelitu</span>
              </p>
            </div>

            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`flex items-start space-x-4 cursor-pointer transition-all ${
                  activeFeature === index ? '' : 'opacity-50 hover:opacity-75'
                }`}
              >
                {/* Bullet Point Circle */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  activeFeature === index ? feature.color : 'bg-gray-300'
                }`}>
                  <span className="text-white text-2xl leading-none">•</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                    activeFeature === index ? 'text-gray-800' : 'text-gray-400'
                  }`}>
                    {feature.title}
                  </h3>
                  {activeFeature === index && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Image - Phone Mockup with Person */}
          <div className="relative w-full h-[500px] md:h-[580px] flex justify-center lg:justify-end items-start mt-6 lg:mt-0">
            {/* Wrapper utama pembungkus kedua gambar */}
            <div className="relative w-[340px] md:w-[440px] h-full">
              
              {/* Person & Orange Background */}
              {/* Diubah jadi top-12 md:top-16 agar sejajar naik ke atas */}
              <div className="absolute top-12 md:top-1 left-0 w-[240px] md:w-[320px] h-[75%] md:h-[80%] z-10">
                <Image
                  src="/people-Belanja-online-dan-offline.webp"
                  alt="Person with Kredivo App"
                  fill
                  className="object-contain object-top"
                  priority
                />
              </div>

              {/* Phone Mockup - TETAP DI ATAS (z-20) */}
              <div className="absolute top-0 right-0 w-[180px] md:w-[240px] h-[85%] md:h-[90%] z-20">
                <Image
                  src="/UI-Dashboard.webp"
                  alt="Kredivo App Dashboard"
                  fill
                  className="object-contain object-right-top drop-shadow-2xl"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}