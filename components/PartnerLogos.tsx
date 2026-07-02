import Image from 'next/image';
import Link from 'next/link';

export default function PartnerLogos() {
  const partners = [
    { name: 'Alfamart', logo: '/Alfamart.png' },
    { name: 'Erafone', logo: '/erafone.png' },
    { name: 'Indomaret', logo: '/logo-indomaret.png' },
    { name: 'Tiket.com', logo: '/logo-tiket.png' },
    { name: 'Tokopedia', logo: '/toped-new-logo.png' }
  ];

  return (
    <section className="bg-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-800">Partner Kami</h2>
        <p className="text-center text-gray-600 mb-6 md:mb-10 text-sm sm:text-base">
          *Hanya untuk <span className="font-semibold">E-commerce</span> dengan nilai belanja minimal
        </p>

        {/* Mobile: 2 rows, Desktop: single row flex */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="relative h-8 w-20 sm:h-10 sm:w-24 md:w-32">
                <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain" />
              </div>
            </div>
          ))}

          {/* Merchant Lainnya Button */}
          <Link
            href="/merchant"
            className="inline-block px-4 py-2 md:px-6 md:py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors text-xs sm:text-sm"
          >
            Merchant lainnya
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            *Hanya melalui fitur <span className="font-semibold">Belanja di Tokopedia</span> dalam aplikasi Kredivo
          </p>
        </div>
      </div>
    </section>
  );
}
