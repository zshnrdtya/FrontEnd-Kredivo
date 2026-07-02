import Image from 'next/image';

export default function Benefits() {
  const benefits = [
    {
      image: '/Keuntungan-Kredivo-image-1.webp',
      title: 'Dapatkan limit hingga 50 juta',
      description: 'untuk belanja di ribuan merchant online & offline'
    },
    {
      image: '/keuntungan-Kredivo-9-bulan.webp',
      title: 'Bayar bulan depan atau Cicilan',
      description: '3/6/9/12/18/24 bulan tanpa DP'
    },
    {
      image: '/keuntungan-kredivo-220925.png',
      title: 'Bebas bunga & biaya admin',
      description: 'untuk bayar bulan depan'
    },
    {
      image: '/Keuntungan-Kredivo-image-4.webp',
      title: 'Perlindungan berlapis untuk',
      description: 'data pribadi & transaksimu'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Keuntungan Pakai Kredivo PayLater
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 md:mb-6">
                <Image src={benefit.image} alt={benefit.title} fill className="object-contain" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800 leading-snug px-1">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
