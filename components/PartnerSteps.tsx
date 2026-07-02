import Image from 'next/image';

interface PartnerStepsProps {
  onHubungiKamiClick: () => void;
}

export default function PartnerSteps({ onHubungiKamiClick }: PartnerStepsProps) {
  const steps = [
    {
      number: '1',
      title: 'Langkah 1',
      subtitle: 'Isi form registrasi',
      image: '/step-form-1.webp'
    },
    {
      number: '2',
      title: 'Langkah 2',
      subtitle: 'Proses integrasi',
      image: '/step-form-2.webp'
    },
    {
      number: '3',
      title: 'Langkah 3',
      subtitle: 'Live integrasi',
      image: '/step-form-3.webp'
    }
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">
          Cukup 3 langkah untuk menjadi partner kami:
        </h2>

        {/* Steps: 1 column on mobile, 3 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-6 md:mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col sm:flex-row md:flex-col gap-4 md:gap-0">
              <div className="bg-gray-100 rounded-2xl overflow-hidden sm:w-48 md:w-full flex-shrink-0">
                <div className="relative w-full aspect-[4/3]">
                  <Image src={step.image} alt={step.title} fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col justify-center md:mt-4 md:text-center">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm sm:text-base font-semibold text-gray-700">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center mb-6 md:mb-8 max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Kredivo menggunakan REST API & PLUGINS (Woocommerce, Prestashop, Magento, Opencart) yang memudahkan merchant dalam integrasi. Kredivo dapat memfasilitasi checkout melalui website, aplikasi, dan transaksi offline. Kami memberikan dukungan penuh untuk memastikan pengalaman integrasi yang memuaskan.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onHubungiKamiClick}
            className="px-6 py-3 md:px-8 md:py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg text-sm md:text-base flex items-center gap-2 mx-auto"
          >
            <Image src="/icon-hub.png" alt="Hubungi" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5" />
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}
