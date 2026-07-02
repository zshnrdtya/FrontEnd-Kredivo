import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-end">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Belanja Sekarang,<br />
              Bayar Nanti<br />
              <span className="text-yellow-300">#Sefleksibelitu</span>
            </h1>
            <p className="text-base sm:text-lg text-sky-50">
              Bayar Belanjaan Sekarang Atau Nanti? Terserah Kamu! Cicil 0% Untuk
              Belanja Di Merchant Favorit Kamu
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
              {/* QR Code Image */}
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-lg">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                  <Image
                    src="/homepage_qr_code-1.webp"
                    alt="QR Code Kredivo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm mb-3 font-medium">Download aplikasi Kredivo</p>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="inline-block">
                    <div className="bg-black text-white px-3 py-2 sm:px-4 rounded-lg flex items-center space-x-2 text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <span>Google Play</span>
                    </div>
                  </a>
                  <a href="#" className="inline-block">
                    <div className="bg-black text-white px-3 py-2 sm:px-4 rounded-lg flex items-center space-x-2 text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      <span>App Store</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[480px] w-full">
            <Image
              src="/cta-kredivo-2026.webp"
              alt="Kredivo Hero"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
