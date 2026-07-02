import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogos() {
  const brands = [
    { name: 'Alfamart', logo: '/Alfamart.png' },
    { name: 'Erafone', logo: '/erafone.png' },
    { name: 'Indomaret', logo: '/logo-indomaret.png' },
    { name: 'Tiket.com', logo: '/logo-tiket.png' },
    { name: 'Tokopedia', logo: '/toped-new-logo.png' }
  ];

  return (
    <section className="bg-white py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div key={index}>
              <div className="h-12 flex items-center justify-center px-4">
                <div className="relative h-10 w-24 md:w-32">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
          
          {/* Merchant Lainnya Button */}
          <div>
            <Link
              href="/merchant"
              className="inline-block px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors text-sm"
            >
              Merchant lainnya
            </Link>
          </div>
        </div>
        
        {/* Optional text below logos */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            *Hanya melalui fitur <span className="font-semibold">Belanja di Tokopedia</span> dalam aplikasi Kredivo
          </p>
        </div>
      </div>
    </section>
  );
}
