import Image from 'next/image';

export default function FeatureCards() {
  const features = [
    {
      title: '#Sefleksibelitu',
      subtitle: 'Pakainya',
      image: '/Gemini_Generated_Image_1t2sc11t2sc11t2s.png',
      bgColor: 'bg-blue-600'
    },
    {
      title: 'Sefleksibelitu',
      subtitle: 'Tenornya',
      image: '/Gemini_Generated_Image_4ao3xq4ao3xq4ao3.png',
      bgColor: 'bg-orange-500'
    },
    {
      title: '#Sefleksibelitu',
      subtitle: 'Merchantnya',
      image: '/Gemini_Generated_Image_6rxs196rxs196rxs.png',
      bgColor: 'bg-blue-700'
    }
  ];

  return (
    <section className="bg-gray-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer relative aspect-[3/4]`}
            >
              <Image src={feature.image} alt={feature.title} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-semibold mt-1 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
