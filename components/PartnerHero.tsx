import Image from 'next/image';

interface PartnerHeroProps {
  onHubungiKamiClick: () => void;
}

export default function PartnerHero({ onHubungiKamiClick }: PartnerHeroProps) {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Pilihan Pembayaran yang <span className="text-yellow-300">#Sefleksibelitu</span> untuk semua!
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-sky-50 leading-relaxed">
              Ratusan merchant telah bermitra dengan kami dan Kredivo terbukti membantu meningkatkan konversi transaksi online & offline hingga lebih dari 30%
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={onHubungiKamiClick}
                className="px-5 py-3 md:px-8 md:py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg text-sm md:text-lg flex items-center gap-2"
              >
                <Image src="/icon-hub.png" alt="Hubungi" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5" />
                Hubungi Kami
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-44 sm:h-56 md:h-72 lg:h-80 flex items-center justify-center">
            <Image
              src="/merchant-banner-e1700637780941.webp"
              alt="Partner Illustration"
              width={600}
              height={400}
              className="object-contain drop-shadow-2xl w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
