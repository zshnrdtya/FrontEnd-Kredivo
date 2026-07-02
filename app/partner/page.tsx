'use client';

import { useState } from 'react';
import PartnerHero from '@/components/PartnerHero';
import PartnerAdvantages from '@/components/PartnerAdvantages';
import PartnerLogos from '@/components/PartnerLogos';
import PartnerSteps from '@/components/PartnerSteps';

export default function PartnerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    province: 'DKI Jakarta',
    city: '',
    name: '',
    position: '',
    phone: '',
    email: '',
    website: '',
    businessType: 'online'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBusinessTypeChange = (type: string) => {
    setFormData(prev => ({ ...prev, businessType: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <PartnerHero onHubungiKamiClick={() => setIsModalOpen(true)} />
      <PartnerAdvantages />
      <PartnerLogos />
      <PartnerSteps onHubungiKamiClick={() => setIsModalOpen(true)} />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Image (hidden on mobile) */}
              <div className="hidden md:block relative h-full min-h-[600px]">
                <img
                  src="/merchant-banner-e1700637780941.webp"
                  alt="Kredivo"
                  className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
                />
              </div>

              {/* Right side - Form */}
              <div className="p-5 sm:p-8">
                <div className="flex justify-between items-start mb-5">
                  <h2 className="text-base sm:text-xl font-bold text-gray-900 pr-4">
                    Silakan isi informasi di bawah ini:
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl leading-none flex-shrink-0"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-700 mb-1">
                      Nama Perusahaan / Nama Toko<span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-b border-gray-300 focus:border-sky-500 focus:outline-none text-sm" />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm text-gray-700 mb-1">
                      Alamat Perusahaan<span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} required
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-b border-gray-300 focus:border-sky-500 focus:outline-none text-sm" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-700 mb-1">
                        Pilih Provinsi<span className="text-red-500">*</span>
                      </label>
                      <select name="province" value={formData.province} onChange={handleInputChange} required
                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded bg-sky-500 text-white focus:outline-none text-xs sm:text-sm">
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jawa Tengah">Jawa Tengah</option>
                        <option value="Jawa Timur">Jawa Timur</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-700 mb-1">
                        Kab/Kota<span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="city" value={formData.city} onChange={handleInputChange} required
                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-b border-gray-300 focus:border-sky-500 focus:outline-none text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-700 mb-1">Nama<span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-b border-gray-300 focus:border-sky-500 focus:outline-none text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-700 mb-1">Posisi<span className="text-red-500">*</span></label>
                      <input type="text" name="position" value={formData.position} onChange={handleInputChange} required
                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-b border-gray-300 focus:border-sky-500 focus:outline-none text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-700 mb-1">No HP<span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-b border-gray-300 focus:border-sky-500 focus:outline-none text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-700 mb-1">Email<span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-b border-gray-300 focus:border-sky-500 focus:outline-none text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm text-gray-700 mb-1">Alamat Website (Optional)</label>
                    <input type="url" name="website" value={formData.website} onChange={handleInputChange}
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-b border-gray-300 focus:border-sky-500 focus:outline-none text-sm" />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm text-gray-700 mb-2">Tipe Bisnis</label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { value: 'online', label: 'Online' },
                        { value: 'offline', label: 'Offline' },
                        { value: 'both', label: 'Online and Offline' }
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" name="businessType" value={opt.value}
                            checked={formData.businessType === opt.value}
                            onChange={() => handleBusinessTypeChange(opt.value)}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-500" />
                          <span className="text-xs sm:text-sm text-gray-700">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <button type="submit"
                      className="w-full py-2.5 sm:py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors text-sm sm:text-base">
                      Kirim
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
