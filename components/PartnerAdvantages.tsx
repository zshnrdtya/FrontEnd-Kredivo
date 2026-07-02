import Image from 'next/image';

export default function PartnerAdvantages() {
  const advantages = [
    {
      icon: '/ic_keunggulan_01.png',
      title: 'Solusi Point of Sale (PoS) yang Efektif',
      description: 'Tingkatkan penjualan sebesar 30%-50% berkat solusi keuangan PoS'
    },
    {
      icon: '/icon-tingkat.png',
      title: 'Tingkatkan Nilai Pesanan Rata-Rata Sebesar 2X',
      description: 'Pelanggan menjadi lebih sering berbelanja'
    },
    {
      icon: '/ic_keunggulan_03.png',
      title: 'Tingkatkan Nilai Konversi dengan Kredivo sebesar 30%',
      description: 'Proses checkout sangat mudah cukup 2 klik saja akan meningkatkan tingkat konversi sebesar 50%'
    },
    {
      icon: '/ic_keunggulan_04.png',
      title: 'Biaya Transaksi yang Lebih rendah',
      description: 'Nikmati MDR yang lebih rendah dibandingkan penyedia jasa sejenis'
    }
  ];

  return (
    <section className="bg-gray-100 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Keunggulan</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <div className="relative w-8 h-8 md:w-12 md:h-12">
                  <Image src={advantage.icon} alt={advantage.title} fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-1 md:mb-3 text-gray-800 px-1 leading-snug">
                {advantage.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 px-1 hidden sm:block">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
