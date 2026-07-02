'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function MerchantGrid() {
  const [visibleCount, setVisibleCount] = useState(8);

  const merchants = [
    // First 8 merchants
    { name: 'Tokopedia', image: '/Shop-at-tokopedia.png', bgColor: 'bg-gradient-to-b from-green-400 to-green-600' },
    { name: 'Lazada', image: '/Lazada.webp', bgColor: 'bg-gradient-to-b from-purple-400 to-blue-600' },
    { name: 'MyTelkomsel', image: '/MyTelkomsel.webp', bgColor: 'bg-gradient-to-b from-gray-200 to-blue-500' },
    { name: 'Indomaret', image: '/Indomaret-copy-2.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-600' },
    { name: 'Alfamart', image: '/Alfamart.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-600' },
    { name: 'Erafone', image: '/Erafone.webp', bgColor: 'bg-gradient-to-b from-red-500 to-red-700' },
    { name: 'XL', image: '/XL-Indonesia.webp', bgColor: 'bg-gradient-to-b from-sky-400 to-sky-600' },
    { name: 'Tiket.com', image: '/Tiket.com_.png', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    
    // Next 8 merchants
    { name: 'Codashop', image: '/Codashop.webp', bgColor: 'bg-gradient-to-b from-gray-700 to-blue-600' },
    { name: 'Alfamidi', image: '/Alfamidi.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-600' },
    { name: 'McDonalds', image: '/McD.webp', bgColor: 'bg-gradient-to-b from-red-500 to-yellow-500' },
    { name: 'Blibli', image: '/Blibli.webp', bgColor: 'bg-gradient-to-b from-gray-200 to-blue-500' },
    { name: 'Smartfren', image: '/Smartfren.webp', bgColor: 'bg-gradient-to-b from-pink-300 to-blue-500' },
    { name: 'Shell', image: '/SHELL.webp', bgColor: 'bg-gradient-to-b from-red-500 to-yellow-400' },
    { name: 'Zalora', image: '/Zalora.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'Axis', image: '/axis-copy.webp', bgColor: 'bg-gradient-to-b from-purple-400 to-blue-500' },
    
    // Third batch - 8 more merchants
    { name: 'Bukalapak', image: '/Bukalapak.webp', bgColor: 'bg-gradient-to-b from-pink-400 to-blue-500' },
    { name: 'Erablue', image: '/Erablue-copy.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'KAI Access', image: '/KAI-copy.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'CGV', image: '/CGV.webp', bgColor: 'bg-gradient-to-b from-red-600 to-blue-600' },
    { name: 'Matahari', image: '/Matahari.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'Hypermart', image: '/Hypermart.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-600' },
    { name: 'iBox', image: '/Ibox.webp', bgColor: 'bg-gradient-to-b from-gray-600 to-blue-500' },
    { name: 'H&M', image: '/HnM-copy.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    
    // Fourth batch - 8 more merchants
    { name: 'Blibli Instore', image: '/blibliinstore-copy.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'RedDoorz', image: '/RedDoorz.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'XL Prioritas', image: '/XL-prioritas.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'KFC', image: '/KFC-copy.webp', bgColor: 'bg-gradient-to-b from-red-500 to-blue-600' },
    { name: 'Vidio', image: '/Vidio.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'Electronic City', image: '/Electronic-city.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'Az-KO', image: '/Azko-merchant.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Itemku', image: '/itemku-copy.webp', bgColor: 'bg-gradient-to-b from-purple-500 to-blue-600' },
    
    // Fifth batch - 8 more merchants
    { name: 'Ruparupa', image: '/RUPARUPA.COM_.webp', bgColor: 'bg-gradient-to-b from-gray-200 to-blue-500' },
    { name: 'IndiHome', image: '/IndiHome.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Hartono', image: '/hartono.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Cinepolis', image: '/Cinepolis.webp', bgColor: 'bg-gradient-to-b from-gray-700 to-blue-600' },
    { name: 'Orbit', image: '/telkomsel-orbit-copy.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'Digimap', image: '/Digimap.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'Dan+Dan', image: '/danndan-copy.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'FamilyMart', image: '/Familymart.webp', bgColor: 'bg-gradient-to-b from-green-400 to-blue-500' },
    
    // Sixth batch - 8 more merchants
    { name: 'OPPO', image: '/OPPO-online.webp', bgColor: 'bg-gradient-to-b from-green-400 to-blue-500' },
    { name: 'MHI', image: '/Mitrahub-copy.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'Planet Gadget', image: '/planet-gadget-copy.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-600' },
    { name: 'Samsung', image: '/NASA-by-samsung.webp', bgColor: 'bg-gradient-to-b from-gray-700 to-blue-600' },
    { name: 'Topsell', image: '/Topsel.webp', bgColor: 'bg-gradient-to-b from-purple-400 to-blue-500' },
    { name: 'GTN', image: '/GTN.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'Limawaktu', image: '/Limawaktu.webp', bgColor: 'bg-gradient-to-b from-gray-200 to-blue-500' },
    { name: 'Lawson', image: '/Lawson.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    
    // Seventh batch - 8 more merchants
    { name: 'Eraspace', image: '/ERASPACE.COM_.webp', bgColor: 'bg-gradient-to-b from-gray-600 to-blue-500' },
    { name: 'Mitra10', image: '/Mitra10.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'Vivo', image: '/Vivo-Store.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Sahabat Group', image: '/SAHABAT-GROUP.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Fit Hub', image: '/FIT-HUB.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'Andalas Cell', image: '/Andalas-Cell.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Map Club', image: '/MAP-store.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'Xiaode Plaza', image: '/mps-group-sby-1.webp', bgColor: 'bg-gradient-to-b from-purple-400 to-blue-500' },
    
    // Eighth batch - 8 more merchants
    { name: 'Cellular World', image: '/Cellular-word.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Telering', image: '/Telering.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-500' },
    { name: 'Lulu', image: '/lulu.webp', bgColor: 'bg-gradient-to-b from-green-400 to-blue-500' },
    { name: 'Digiplus', image: '/Digiplus.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'Sinarmas Seluler', image: '/Sinarmas-Selluler.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Biz Telekom', image: '/Biz-Telekom.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Meteor Cell', image: '/Meteor-Cell.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Lucky Perdana', image: '/PT-Lucky-perdana-multimedia.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    
    // Ninth batch - 8 more merchants (last batch)
    { name: 'Link Aja', image: '/Link-Aja.webp', bgColor: 'bg-gradient-to-b from-red-500 to-blue-500' },
    { name: 'HSR Wheel', image: '/HSR-WHEEL.webp', bgColor: 'bg-gradient-to-b from-gray-700 to-blue-600' },
    { name: 'Toko Las Vegas', image: '/Toko-Las-Vegas.webp', bgColor: 'bg-gradient-to-b from-gray-500 to-blue-600' },
    { name: 'Prima Freshmart', image: '/PRIMA-FRESHMART.webp', bgColor: 'bg-gradient-to-b from-green-400 to-blue-500' },
    { name: 'OYO', image: '/OYO-Indonesia.webp', bgColor: 'bg-gradient-to-b from-red-500 to-blue-500' },
    { name: 'Apollo Gadget', image: '/Apollo-Gadget-Store.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Makmur Era Abadi', image: '/MAKMUR-ERA-ABADI.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'Sentra Ponsel', image: '/Sentra-ponsel.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    
    // Tenth batch - 8 more merchants
    { name: 'Surya Phone', image: '/SURYA-PHONE-GROUP.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Hacom', image: '/HACOM.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Maxistore', image: '/MAXI-STORE.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Complete Seluler', image: '/COMPLETE-SELULAR.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Machtwatch', image: '/MACHTWATCH.webp', bgColor: 'bg-gradient-to-b from-gray-700 to-blue-600' },
    { name: 'Atlantic Cellular', image: '/ATLANTIC-CELLULAR.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'Hokky Cell', image: '/HOKKY-CELL.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Proban Motoparts', image: '/PROBAN-MOTOPARTS.webp', bgColor: 'bg-gradient-to-b from-red-500 to-blue-600' },
    
    // Eleventh batch - 8 more merchants
    { name: 'Semeru', image: '/SEMERU.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'UR', image: '/Urban-Republic.webp', bgColor: 'bg-gradient-to-b from-green-400 to-blue-600' },
    { name: 'SMS Shop', image: '/SMS-SHOP.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Lili', image: '/LILI-STYLE.webp', bgColor: 'bg-gradient-to-b from-gray-200 to-blue-500' },
    { name: 'Alaska', image: '/ALASKA.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Gumilar', image: '/GUMILAR.webp', bgColor: 'bg-gradient-to-b from-gray-600 to-blue-600' },
    { name: 'Kuta Cell', image: '/KUTA-CELL.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Bnetfit', image: '/BNETFIT.webp', bgColor: 'bg-gradient-to-b from-cyan-400 to-blue-500' },
    
    // Twelfth batch - 8 more merchants
    { name: 'Pertemuan Cellular', image: '/PERTEMUAN-CELLULAR.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Dir1', image: '/diri.webp', bgColor: 'bg-gradient-to-b from-pink-400 to-blue-500' },
    { name: 'Gadget Mart', image: '/GADGET-MART.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Log In', image: '/LOG-IN-MEGASTORE.webp', bgColor: 'bg-gradient-to-b from-gray-500 to-blue-600' },
    { name: 'Xiaomi', image: '/Xiaomi.webp', bgColor: 'bg-gradient-to-b from-gray-700 to-blue-600' },
    { name: 'Elshinta', image: '/ELSHINTA.webp', bgColor: 'bg-gradient-to-b from-orange-500 to-blue-600' },
    { name: 'IKEA', image: '/IKEA.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-yellow-400' },
    { name: 'Berkawan Medan', image: '/BERKAWAN-PONSEL-MEDAN.webp', bgColor: 'bg-gradient-to-b from-purple-400 to-blue-600' },
    
    // Thirteenth batch - 8 more merchants
    { name: 'Kick Avenue', image: '/KICK-AVENUE.webp', bgColor: 'bg-gradient-to-b from-gray-700 to-blue-600' },
    { name: 'Suara Elektro', image: '/SUARA-ELEKTRO-GROUP-min.webp', bgColor: 'bg-gradient-to-b from-cyan-400 to-blue-600' },
    { name: 'Circle K', image: '/Circle-K.webp', bgColor: 'bg-gradient-to-b from-red-500 to-blue-500' },
    { name: 'Sumbar Smartphone', image: '/SUMBAR-SMARTPHONE-min.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Travelio', image: '/TRAVELIO.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'XL Home', image: '/XL-HOME-min.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'WW Ponsel', image: '/WW-PONSEL-min.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Aurel Grup', image: '/AUREL-GRUP-min.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    
    // Fourteenth batch - 8 more merchants
    { name: 'Courts', image: '/COURTS-OFFLINE-min.webp', bgColor: 'bg-gradient-to-b from-teal-400 to-blue-500' },
    { name: 'Sociolla', image: '/Sociolla-1.webp', bgColor: 'bg-gradient-to-b from-pink-300 to-blue-500' },
    { name: 'Sepulsa', image: '/Sepulsa.webp', bgColor: 'bg-gradient-to-b from-green-400 to-blue-500' },
    { name: 'Borneo Cell', image: '/BORNEO-CELL-min.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-600' },
    { name: 'Agres ID', image: '/AGRES-ID-min.webp', bgColor: 'bg-gradient-to-b from-purple-400 to-blue-600' },
    { name: 'Oke Cell', image: '/Okeshop.webp', bgColor: 'bg-gradient-to-b from-pink-400 to-blue-500' },
    { name: 'Mutis Cell', image: '/MUTIS-CELL-NTT-SAMSUNG-FINANCING-min.webp', bgColor: 'bg-gradient-to-b from-pink-300 to-blue-500' },
    { name: 'Planet Ban Jatim', image: '/PLANET-BAN-REGION-JATIM-min.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    
    // Fifteenth batch - 8 more merchants
    { name: 'Fonel', image: '/FONEL-min.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Dolphin Ponsel', image: '/DOLPHIN-PONSEL-min.webp', bgColor: 'bg-gradient-to-b from-gray-300 to-blue-500' },
    { name: 'MMB Group', image: '/MMB-GROUP-min.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Nuansa Home', image: '/NUANSA-ELEKTRONIK-SUPERSTORE-1-min.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'S-Cell NTT', image: '/S-CELL-NTT-SAMSUNG-FINANCING-min-1.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Electro Smart', image: '/Electro-Smart-QR.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'Jaya Baru', image: '/Jaya-Baru.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Tiga Putra', image: '/Tiga-Putra.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    
    // Sixteenth batch - 8 more merchants
    { name: 'Syihab Ponsel', image: '/Syihab-Ponsel-BNJRMSN.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Tangs Ponsel', image: '/Tangs-Ponsel.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Focus', image: '/Focus.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Hello', image: '/Hello.webp', bgColor: 'bg-gradient-to-b from-gray-600 to-blue-600' },
    { name: 'B-Store', image: '/B-Store-.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Gori Cell', image: '/Gori-Cell-Samsung-Financing.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Kiki Cellular', image: '/Kiki-Cellular.webp', bgColor: 'bg-gradient-to-b from-black to-blue-600' },
    { name: 'ME Gallery', image: '/ME-Gallery.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    
    // Seventeenth batch - 8 more merchants
    { name: 'Rose Cell', image: '/Rose-Cell.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: '77', image: '/Urban-Republic.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Rappang', image: '/Rappang-1.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-500' },
    { name: 'Suzuya', image: '/Suzuya-Superstore.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Dunia Cell', image: '/Dunia-Cell.webp', bgColor: 'bg-gradient-to-b from-purple-500 to-blue-600' },
    { name: 'Gedank Beli Gadget', image: '/Gedank-Cell-Samsung-Financing.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-500' },
    { name: 'Lotte Mart', image: '/Lotte-Mart-Indonesia.webp', bgColor: 'bg-gradient-to-b from-red-500 to-blue-500' },
    { name: '50 Cent Ternate', image: '/50-Cent-Group-Ternate-SF.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    
    // Eighteenth batch - 8 more merchants
    { name: 'Maxistore', image: '/MAXI-STORE.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'J-Bros', image: '/Jbros-Computer.webp', bgColor: 'bg-gradient-to-b from-purple-500 to-blue-600' },
    { name: 'Sehati', image: '/Sehati-Indo-Dua.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-500' },
    { name: 'Lucky Cell', image: '/LUCKY-PERDANA-CELL.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Ricky Ponsel', image: '/Ricky-Ponsel.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'HD Cell', image: '/RENAN-STORE.webp', bgColor: 'bg-gradient-to-b from-gray-600 to-blue-600' },
    { name: 'Easybook', image: '/Easy-book.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-500' },
    { name: 'Maxi Store', image: '/MAXI-STORE.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    
    // Nineteenth batch - 8 more merchants
    { name: 'Tribelio', image: '/TRIBELIO.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Les Femmes', image: '/LES-FEMMES.webp', bgColor: 'bg-gradient-to-b from-pink-300 to-blue-500' },
    { name: 'Planet Sports', image: '/PLANET-SPORTS.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Ricky Furniture', image: '/RICKY-FURNITURE-ELEKTRONIK-1.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Juragan Mall', image: '/JURAGAN-MALL-CENTER.webp', bgColor: 'bg-gradient-to-b from-gray-600 to-blue-600' },
    { name: 'Fitness First', image: '/MYFITSOCIETY.webp', bgColor: 'bg-gradient-to-b from-green-400 to-blue-500' },
    { name: 'Focus Cellular', image: '/FOCUS-CELLULAR-1.webp', bgColor: 'bg-gradient-to-b from-pink-400 to-blue-500' },
    { name: 'Mutiara Cell', image: '/MUTIARA-CELL-NTT.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    
    // Twentieth batch - 8 more merchants
    { name: 'Ratu Cell', image: '/RATU-CELL.webp', bgColor: 'bg-gradient-to-b from-yellow-300 to-blue-500' },
    { name: 'Platinum Store', image: '/PLATINUM-STORE.webp', bgColor: 'bg-gradient-to-b from-gray-500 to-blue-600' },
    { name: 'Cindy Cell', image: '/CINDY-CELL.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'Pizza Hut', image: '/Pizza-hut.webp', bgColor: 'bg-gradient-to-b from-red-600 to-blue-500' },
    { name: 'Okeshop', image: '/Okeshop.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Milaphone', image: '/MILAPHONE.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Orca Celluler', image: '/ORCA-CELLULER.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Incomm Group', image: '/INCOMM-GROUP.webp', bgColor: 'bg-gradient-to-b from-gray-200 to-blue-500' },
    
    // Twenty-first batch - 8 more merchants
    { name: 'Fitsomb', image: '/FIT-HUB.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'CB Phone', image: '/CBPHONE.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Irca Celluler', image: '/ORCA-CELLULER.webp', bgColor: 'bg-gradient-to-b from-cyan-400 to-blue-600' },
    { name: 'Samudra Gadget', image: '/SAMUDRA-GADGET-STORE.webp', bgColor: 'bg-gradient-to-b from-orange-400 to-blue-500' },
    { name: 'Asean Celluler', image: '/ASEAN-CELLULER.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'SBC Group', image: '/SBC-GROUP.webp', bgColor: 'bg-gradient-to-b from-yellow-400 to-blue-600' },
    { name: 'Agung Tasik', image: '/AGUNG-GROUP-TASIK.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Buttonsncarves', image: '/buttonscarves.webp', bgColor: 'bg-gradient-to-b from-gray-700 to-blue-600' },
    
    // Twenty-second batch - 8 more merchants
    { name: 'Lotte Grosir', image: '/LOTTE-GROSIR-INDONESIA.webp', bgColor: 'bg-gradient-to-b from-green-400 to-blue-500' },
    { name: 'New Balance', image: '/NEW-BALANCE.webp', bgColor: 'bg-gradient-to-b from-gray-600 to-blue-600' },
    { name: 'Diamond HP', image: '/Diamond-Handphone.webp', bgColor: 'bg-gradient-to-b from-red-400 to-blue-500' },
    { name: 'Parafone', image: '/PARAFONE.webp', bgColor: 'bg-gradient-to-b from-red-500 to-blue-600' },
    { name: 'Sinergi Cell', image: '/SINERGI-CELL.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { name: 'Renan Store', image: '/Renan-store.webp', bgColor: 'bg-gradient-to-b from-pink-400 to-blue-500' },
    { name: 'Sarana Smartphone', image: '/SARANA-SMARTPHONE.webp', bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700' },
    { name: 'Toko Anugerah', image: '/Toko-Anugerah-Gowa.webp', bgColor: 'bg-gradient-to-b from-blue-400 to-blue-600' },
  ];

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, merchants.length));
  };

  const hasMore = visibleCount < merchants.length;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Semua Merchant</h2>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {merchants.slice(0, visibleCount).map((merchant, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className={`absolute inset-0 ${merchant.bgColor}`}>
                <div className="relative w-full h-full">
                  <Image
                    src={merchant.image}
                    alt={merchant.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Only show if there are more merchants */}
        {hasMore && (
          <div className="text-center">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-3 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
