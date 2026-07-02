'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const [isRiplayOpen, setIsRiplayOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Indonesia',
    flag: '/iconindonesia.png'
  });

  const countries = [
    { name: 'Indonesia', flag: '/iconindonesia.png' },
    { name: 'Vietnam', flag: '/icon-vietnam.png' },
    { name: 'Philippines', flag: '/ph-flag.png' },
    { name: 'Thailand', flag: '/th-flag.png' }
  ];

  return (
    <footer className="bg-sky-50/30 border-t border-sky-100 text-gray-600 pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ROW 1: Main Content Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-6">
          
          {/* Column 1: Language & Contract Description (Span 4) */}
          <div className="md:col-span-4 space-y-3">
            {/* Language Selector Custom Button - Blue Background */}
            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm font-medium"
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={selectedCountry.flag}
                    alt={`${selectedCountry.name} Flag`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span>{selectedCountry.name}</span>
                <svg className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  {countries.map((country) => (
                    <button
                      key={country.name}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsLanguageOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image
                          src={country.flag}
                          alt={`${country.name} Flag`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>{country.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="pt-1">
              <h4 className="font-bold text-gray-900 text-base mb-2">Baca & Pelajari Tentang Kontrakmu</h4>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-3">
                Ketentuan Umum ini merupakan kontrak standar yang berlaku sebagai syarat dan ketentuan bagi seluruh pengguna aplikasi finansial yang legal.
              </p>
              
              {/* App Store Badges */}
              <div className="flex items-center space-x-3">
                <a href="#" className="inline-block hover:opacity-80 transition-opacity">
                  <div className="relative w-36 h-12">
                    <Image
                      src="/Google-play-button.png"
                      alt="Get it on Google Play"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </a>
                <a href="#" className="inline-block hover:opacity-80 transition-opacity">
                  <div className="relative w-36 h-12">
                    <Image
                      src="/app-store-button.png"
                      alt="Download on the App Store"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Developers (Span 2) */}
          <div className="md:col-span-2 md:pl-4">
            <h4 className="font-bold text-gray-900 text-base mb-4">Developers</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-sky-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors">Media</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors">Karir</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors">Kontak Kami</Link></li>
            </ul>
          </div>

          {/* Column 3: Kebijakan Privasi (Span 3) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-gray-900 text-base mb-4">Kebijakan Privasi</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-sky-500 transition-colors">Kebijakan Keamanan</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors">Ketentuan Layanan</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors">Program Literasi Keuangan</Link></li>
              <li className="relative">
                <button 
                  onClick={() => setIsRiplayOpen(!isRiplayOpen)}
                  className="hover:text-sky-500 transition-colors flex items-center group"
                >
                  RIPLAY 
                  <span className={`text-[10px] ml-1 bg-gray-100 text-gray-500 px-1 rounded transition-transform ${isRiplayOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {/* Dropdown Menu */}
                {isRiplayOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-500 transition-colors">
                      Pembiayaan Multiguna
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-500 transition-colors">
                      Pembiayaan Motor Listrik
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-500 transition-colors">
                      Pembiayaan Melalui Mitra
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-500 transition-colors">
                      Pembiayaan Modal & Investasi
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-500 transition-colors">
                      Fasilitas Modal Usaha
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Support (Span 3) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-gray-900 text-base mb-4">Punya pertanyaan?</h4>
            <div className="space-y-2">
              {/* Phone Button Link */}
              <a href="tel:08041573348" className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 border border-gray-100 p-1.5 pr-4 rounded-full transition-colors w-fit">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">0804-1-573348</span>
              </a>

              {/* Email Button Link */}
              <a href="mailto:support@kredivo.com" className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 border border-gray-100 p-1.5 pr-4 rounded-full transition-colors w-fit">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">support@kredivo.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* ROW 3: OJK, Certifications, Badges, and Social Media */}
        <div className="border-t border-gray-100 pt-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
          
          {/* Left: OJK & Certification Images */}
          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-gray-500">
              PT Kredivo Finance Indonesia berizin dan diawasi oleh OJK
            </p>
            <div className="flex items-center space-x-3">
              {/* ISO */}
              <div className="relative w-14 h-14 bg-white border border-gray-100 rounded flex items-center justify-center p-1">
                <Image
                  src="/ISO-2025.webp"
                  alt="ISO Certification"
                  fill
                  className="object-contain"
                />
              </div>
              {/* KAN */}
              <div className="relative w-14 h-14 bg-white border border-gray-100 rounded flex items-center justify-center p-1">
                <Image
                  src="/KAN-2025.webp"
                  alt="KAN Certification"
                  fill
                  className="object-contain"
                />
              </div>
              {/* GENCAR */}
              <div className="relative w-14 h-14 bg-white border border-gray-100 rounded flex items-center justify-center p-1">
                <Image
                  src="/logo-gencar-.webp"
                  alt="Gencar Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center space-x-4">
            {/* Facebook */}
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10">
                <Image
                  src="/icon-facebook-1.png"
                  alt="Facebook"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            {/* Instagram */}
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10">
                <Image
                  src="/icon-instagram-1.png"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            {/* TikTok */}
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10">
                <Image
                  src="/icon-tiktok-1.png"
                  alt="TikTok"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* ROW 4: Copyright Bottom Bar */}
        <div className="text-center mt-6 pt-4 border-t border-gray-100 text-xs text-gray-400">
          Copyright © 2026 Kredivo Group. All rights reserved.
        </div>

      </div>
    </footer>
  );
}