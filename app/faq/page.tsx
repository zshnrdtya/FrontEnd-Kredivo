'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState('umum');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const popularFAQs = [
    {
      id: 0,
      question: 'Apa itu Kredivo?',
      answer: 'Kredivo adalah solusi kredit instan yang memberikan kamu kemudahan untuk beli sekarang dan bayar nanti dalam tenor 1 bulan atau tenor cicilan 3 bulan dengan bunga 0% ataupun tenor cicilan 6/12/18/24 bulan dengan bunga mulai dari 1.99%, 2.49%, 2.60%, 2.99% atau 3.99% per bulan.'
    },
    {
      id: 1,
      question: 'Bagaimana cara mendaftar di Kredivo?',
      answer: 'Untuk mendaftar di Kredivo, download aplikasi Kredivo dari Google Play Store atau App Store, lalu ikuti langkah pendaftaran dengan mengisi data diri dan dokumen yang diperlukan.'
    },
    {
      id: 2,
      question: 'Apa saja syarat pengajuan Kredivo?',
      answer: 'Syarat pengajuan Kredivo: Warga Negara Indonesia berusia 18-60 tahun, memiliki KTP yang masih berlaku, memiliki nomor handphone aktif, dan memiliki penghasilan tetap.'
    },
    {
      id: 3,
      question: 'Dokumen apa saja yang diperlukan untuk membuat dan memiliki akun Kredivo?',
      answer: 'Dokumen yang diperlukan: KTP yang masih berlaku, foto selfie dengan KTP, dan informasi pekerjaan/penghasilan.'
    },
    {
      id: 4,
      question: 'Bagaimana cara menghubungi Customer Service Kredivo?',
      answer: 'Anda dapat menghubungi Customer Service Kredivo melalui: Live Chat di aplikasi (tersedia 24/7), Email: support@kredivo.com, atau Telepon: 0804-1-573348 (Senin-Jumat, 08:00-17:00 WIB)'
    }
  ];

  const categories = [
    {
      id: 'umum',
      title: 'Umum',
      icon: '🔍',
      questions: [
        { id: 1, text: 'Limit', answer: 'Limit adalah batas maksimal kredit yang dapat Anda gunakan di Kredivo.' },
        { id: 2, text: 'Tipe Akun', answer: 'Kredivo memiliki beberapa tipe akun sesuai dengan kebutuhan pengguna.' },
        { id: 3, text: 'Kredivo', answer: 'Kredivo adalah platform penyedia layanan kredit digital.' }
      ]
    },
    {
      id: 'pendaftaran',
      title: 'Pendaftaran Akun',
      icon: '📖',
      questions: [
        { id: 4, text: 'Pengungkapan Informasi', answer: 'Informasi pribadi Anda akan dilindungi sesuai kebijakan privasi.' },
        { id: 5, text: 'Upgrade Akun', answer: 'Anda dapat upgrade akun untuk mendapatkan limit lebih besar.' },
        { id: 6, text: 'Aktivasi Akun', answer: 'Aktivasi akun dilakukan setelah verifikasi dokumen selesai.' },
        { id: 7, text: 'Kendala Pendaftaran', answer: 'Hubungi customer service jika mengalami kendala saat pendaftaran.' },
        { id: 8, text: 'Informasi Pendaftaran', answer: 'Proses pendaftaran membutuhkan KTP dan data pribadi yang valid.' }
      ]
    },
    {
      id: 'pengaturan',
      title: 'Pengaturan & Keamanan',
      icon: '👤',
      questions: [
        { id: 9, text: 'Security Account', answer: 'Gunakan PIN dan biometrik untuk keamanan akun Anda.' },
        { id: 10, text: 'Penutupan Akun', answer: 'Akun dapat ditutup setelah semua tagihan lunas.' },
        { id: 11, text: 'Kredivo Score', answer: 'Kredivo Score menunjukkan kredibilitas Anda sebagai pengguna.' },
        { id: 12, text: 'Unlink Device', answer: 'Anda dapat unlink device lama dari pengaturan keamanan.' },
        { id: 13, text: 'Fitur Sidik Jari', answer: 'Aktifkan fitur sidik jari untuk login lebih mudah dan aman.' },
        { id: 14, text: 'PIN', answer: 'PIN digunakan untuk verifikasi transaksi penting.' },
        { id: 15, text: 'Temporary Block', answer: 'Blokir sementara akun jika ada aktivitas mencurigakan.' },
        { id: 16, text: 'Kendala Akun', answer: 'Hubungi CS jika mengalami kendala dengan akun Anda.' },
        { id: 17, text: 'Akun Kamu', answer: 'Kelola informasi akun dari menu profil.' }
      ]
    },
    {
      id: 'transaksi',
      title: 'Transaksi',
      icon: '📱',
      questions: [
        { id: 18, text: 'Pinjaman Modal Usaha', answer: 'Kredivo menyediakan pinjaman modal usaha dengan bunga kompetitif.' },
        { id: 19, text: 'KrediFlex', answer: 'KrediFlex memberikan fleksibilitas pembayaran sesuai kebutuhan.' },
        { id: 20, text: 'Kredit Motor Listrik', answer: 'Beli motor listrik dengan cicilan 0% tenor tertentu.' },
        { id: 21, text: 'Layanan Booking Hotel', answer: 'Book hotel dan bayar nanti dengan Kredivo.' },
        { id: 22, text: 'Asuransi KrediShield', answer: 'Lindungi transaksi Anda dengan asuransi KrediShield.' },
        { id: 23, text: 'Fitur Belanja di Shopee & Lainnya', answer: 'Belanja di marketplace favorit dengan Kredivo.' },
        { id: 24, text: 'Fitur Langganan', answer: 'Bayar langganan streaming dengan Kredivo.' },
        { id: 25, text: 'Transaksi dengan Nomor Handphone', answer: 'Transfer ke nomor handphone terdaftar.' },
        { id: 26, text: 'Belanja Online', answer: 'Belanja online di ribuan merchant Kredivo.' },
        { id: 27, text: 'Bayar di Kasir', answer: 'Gunakan Kredivo untuk bayar di kasir offline.' },
        { id: 28, text: 'Top Up & Tagihan', answer: 'Top up pulsa dan bayar tagihan dengan Kredivo.' },
        { id: 29, text: 'Barcode', answer: 'Scan barcode untuk transaksi cepat.' },
        { id: 30, text: 'QRIS', answer: 'Bayar dengan QRIS di merchant yang support.' },
        { id: 31, text: 'Travel', answer: 'Book tiket pesawat dan hotel dengan Kredivo.' },
        { id: 32, text: 'KrediMall', answer: 'Belanja di KrediMall dengan promo eksklusif.' },
        { id: 33, text: 'Pinjaman Tunai', answer: 'Dapatkan pinjaman tunai langsung ke rekening.' }
      ]
    },
    {
      id: 'transaksi-saya',
      title: 'Transaksi Saya',
      icon: '🛍️',
      questions: [
        { id: 34, text: 'Status Transaksi', answer: 'Cek status transaksi di menu riwayat.' },
        { id: 35, text: 'Membatalkan Transaksi', answer: 'Transaksi dapat dibatalkan sebelum diproses merchant.' },
        { id: 36, text: 'Transaksi Dibatalkan', answer: 'Dana akan dikembalikan ke limit dalam 1-3 hari kerja.' },
        { id: 37, text: 'Kendala Transaksi', answer: 'Hubungi CS jika transaksi mengalami masalah.' }
      ]
    },
    {
      id: 'pembayaran',
      title: 'Pembayaran',
      icon: '💳',
      questions: [
        { id: 38, text: 'Keringanan Tagihan', answer: 'Ajukan keringanan jika mengalami kesulitan bayar.' },
        { id: 39, text: 'Laporan SLIK', answer: 'Riwayat pembayaran dilaporkan ke SLIK OJK.' },
        { id: 40, text: 'Debit Instan', answer: 'Bayar tagihan otomatis dari rekening bank.' },
        { id: 41, text: 'Kendala Pembayaran', answer: 'Hubungi CS jika pembayaran tidak terproses.' },
        { id: 42, text: 'Keterlambatan Pembayaran', answer: 'Denda keterlambatan akan dikenakan sesuai ketentuan.' },
        { id: 43, text: 'Kelebihan Pembayaran/Dana Lebih', answer: 'Kelebihan bayar akan menjadi kredit untuk transaksi berikutnya.' },
        { id: 44, text: 'Cara Pembayaran', answer: 'Bayar melalui virtual account, transfer, atau debit instan.' }
      ]
    },
    {
      id: 'promo',
      title: 'Promo dan Rewards',
      icon: '🎁',
      questions: [
        { id: 45, text: 'Games', answer: 'Main games di Kredivo dan dapatkan poin reward.' },
        { id: 46, text: 'Kredivo Deals', answer: 'Dapatkan diskon eksklusif di merchant partner.' },
        { id: 47, text: 'Kredi Klab', answer: 'Program loyalitas dengan berbagai keuntungan.' },
        { id: 48, text: 'Voucher Kredivo', answer: 'Gunakan voucher untuk diskon tambahan.' },
        { id: 49, text: 'Mission', answer: 'Selesaikan misi dan dapatkan reward menarik.' },
        { id: 50, text: 'Kredivo Points', answer: 'Kumpulkan poin dan tukar dengan hadiah.' },
        { id: 51, text: 'Kode Referral', answer: 'Ajak teman dan dapatkan bonus referral.' }
      ]
    },
    {
      id: 'seller',
      title: 'Kredivo seller',
      icon: '📦',
      questions: [
        { id: 52, text: 'Transaction', answer: 'Kelola transaksi penjualan di dashboard seller.' },
        { id: 53, text: 'Seller App / Merchant Dashboard', answer: 'Akses dashboard untuk monitoring penjualan.' }
      ]
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const currentCategory = categories.find(cat => cat.id === selectedCategory) || categories[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-100 to-blue-100 py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-gray-900 mb-3">FAQ</h1>
              <p className="text-2xl text-gray-700 leading-snug">
                Daftar Pertanyaan<br />Seputar Kredivo
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 h-64">
                <Image
                  src="/faq-icon.png"
                  alt="FAQ Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Search Box - Full Width Below */}
          <div className="relative max-w-5xl mx-auto">
            <input
              type="text"
              placeholder="Cari topik"
              className="w-full px-6 py-4 rounded-full bg-white border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 pr-12 text-gray-600"
            />
            <button className="absolute right-5 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Popular FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Baca Artikel Terpopuler
          </h2>

          <div className="space-y-3">
            {popularFAQs.map((faq) => (
              <div key={faq.id} className="bg-gray-100 rounded-lg">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-200 transition-colors rounded-lg"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-gray-400 text-xl flex-shrink-0">📄</span>
                    <span className="font-medium text-gray-900 text-base">{faq.question}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center flex-shrink-0 ml-4">
                    {openFAQ === faq.id ? (
                      <span className="text-gray-800 font-bold text-xl leading-none">−</span>
                    ) : (
                      <span className="text-gray-800 font-bold text-xl leading-none">+</span>
                    )}
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-200 pt-4 ml-12">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Pilih Topik Bantuan
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Category List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-4 max-h-[600px] overflow-y-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setOpenQuestion(null);
                    }}
                    className={`flex items-center gap-3 p-3 mb-2 w-full text-left rounded-lg transition-colors ${
                      selectedCategory === category.id 
                        ? 'bg-orange-50 text-orange-500 font-semibold' 
                        : 'text-gray-800 hover:bg-gray-50 font-medium'
                    }`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-base">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content - Questions for Selected Category */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-2xl">{currentCategory.icon}</span>
                {currentCategory.title}
              </h3>
              
              <div className="space-y-3">
                {currentCategory.questions.map((question) => (
                  <div key={question.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      onClick={() => toggleQuestion(question.id)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      <span className="text-gray-900 font-medium text-base">{question.text}</span>
                      <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                        {openQuestion === question.id ? (
                          <span className="text-gray-800 font-bold text-xl leading-none">−</span>
                        ) : (
                          <span className="text-gray-800 font-bold text-xl leading-none">+</span>
                        )}
                      </div>
                    </button>
                    
                    {openQuestion === question.id && (
                      <div className="px-4 pb-4 text-gray-700 leading-relaxed border-t border-gray-200 pt-4 mt-2">
                        {question.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-sky-100 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Butuh bantuan lebih lanjut?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/email.png"
                  alt="Email Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium text-gray-900 text-lg">Kirim email</span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/call.png"
                  alt="Call Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium text-gray-900 text-lg">Hubungi Customer Service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
