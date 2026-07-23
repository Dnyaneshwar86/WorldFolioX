'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  QrCode,
  Utensils,
  Plus,
  Trash2,
  Share2,
  Download,
  MessageSquare,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  Zap,
  ShoppingBag,
} from 'lucide-react';
import Link from 'next/link';
import BuildTimer from '@/components/BuildTimer';
import { NameLogo } from '@/components/NameLogo';
import toast, { Toaster } from 'react-hot-toast';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  isVeg: boolean;
  description: string;
}

export default function QrMenuProToolPage() {
  const [hotelName, setHotelName] = useState('हॉटेल साई एक्झिक्युटिव्ह (Hotel Sai Executive)');
  const [tagline, setTagline] = useState('शुद्ध शाकाहारी व मांसाहारी जेवण • Sangamner');
  const [whatsappPhone, setWhatsappPhone] = useState('9370983235');

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 'm1',
      name: 'पनीर बटर मसाला (Paneer Butter Masala)',
      category: 'Main Course',
      price: 220,
      isVeg: true,
      description: 'Rich creamy tomato butter gravy with soft cottage cheese.',
    },
    {
      id: 'm2',
      name: 'चिकन सुक्का (Special Chicken Sukka)',
      category: 'Main Course',
      price: 280,
      isVeg: false,
      description: 'Traditional Kolhapuri spicy roasted chicken fry.',
    },
    {
      id: 'm3',
      name: 'व्हेज बिर्याणी (Special Veg Biryani)',
      category: 'Biryani & Rice',
      price: 180,
      isVeg: true,
      description: 'Aromatic basmati rice cooked with fresh veggies and spices.',
    },
    {
      id: 'm4',
      name: 'कोल्ड कॉफी (Cold Coffee with Ice Cream)',
      category: 'Beverages',
      price: 90,
      isVeg: true,
      description: 'Thick chilled coffee topped with chocolate vanilla ice cream.',
    },
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Main Course');
  const [newItemPrice, setNewItemPrice] = useState<number>(150);
  const [newItemIsVeg, setNewItemIsVeg] = useState(true);
  const [newItemDesc, setNewItemDesc] = useState('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const item: MenuItem = {
      id: `item_${Date.now()}`,
      name: newItemName,
      category: newItemCategory,
      price: Number(newItemPrice),
      isVeg: newItemIsVeg,
      description: newItemDesc || 'Freshly prepared delicious item.',
    };

    setMenuItems([...menuItems, item]);
    setNewItemName('');
    setNewItemDesc('');
    toast.success(`Added "${newItemName}" to Digital Menu!`);
  };

  const handleRemoveItem = (id: string) => {
    setMenuItems(menuItems.filter((i) => i.id !== id));
    toast.success('Menu item removed');
  };

  const qrDataUrl = `https://wa.me/91${whatsappPhone}?text=Hello%20${encodeURIComponent(hotelName)},%20I%20want%20to%20order%20from%20your%20QRMenu!`;
  const fallbackQrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrDataUrl)}`;

  const handleOrderWhatsapp = () => {
    const text = `Hello *${hotelName}*! I'd like to place an order from your QR Digital Menu:
${menuItems.map((i) => `- ${i.name} (₹${i.price})`).join('\n')}

Total Items: ${menuItems.length}`;
    window.open(`https://wa.me/91${whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 space-y-8 font-sans selection:bg-amber-500 selection:text-slate-950">
      <Toaster position="top-right" />

      {/* Header Banner with NameLogo */}
      <header className="max-w-6xl mx-auto glass-panel p-4 rounded-3xl border border-amber-500/40 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <Link href="/" className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500 transition-colors">
            <ArrowLeft className="w-4 h-4 text-slate-300" />
          </Link>
          <div>
            <div className="flex items-center space-x-2">
              <NameLogo firstName="QRMENU" secondName="PRO" icon="utensils" accentColor="text-amber-400" />
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-bold">
                Live Hotel SaaS Demo
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1">Create instant WhatsApp QR menus for local hotels & cafes in 5 mins</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:block">
            <BuildTimer />
          </div>
          <a
            href="https://wa.me/919370983235?text=Hello%20Dnyaneshwar,%20I%20want%20QRMenu%20Pro%20setup%20for%20my%20hotel%20(Rs%20999)!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center space-x-2 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Setup (₹999)</span>
          </a>
        </div>
      </header>

      {/* Notification Banner */}
      <div className="max-w-6xl mx-auto p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center space-x-2">
        <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
        <span>
          <strong>Live Interactive Tool:</strong> Edit the hotel details below, add dishes, and test the live QR code order generation!
        </span>
      </div>

      {/* Main Grid: Builder & Preview */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Menu Builder Controls */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <Utensils className="w-5 h-5 text-amber-400" />
              <span>Hotel & Cafe Profile</span>
            </h2>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <label className="text-slate-400">Hotel / Restaurant Name</label>
                <input
                  type="text"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs mt-1"
                />
              </div>

              <div>
                <label className="text-slate-400">Tagline / Location</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs mt-1"
                />
              </div>

              <div>
                <label className="text-slate-400">WhatsApp Order Mobile Number (+91)</label>
                <input
                  type="text"
                  value={whatsappPhone}
                  onChange={(e) => setWhatsappPhone(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs mt-1"
                />
              </div>
            </div>
          </div>

          {/* Add New Item Form */}
          <form onSubmit={handleAddItem} className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <Plus className="w-5 h-5 text-emerald-400" />
              <span>Add Dish / Item to Menu</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div>
                <label className="text-slate-400">Item Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Masala Dosa"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs mt-1"
                />
              </div>

              <div>
                <label className="text-slate-400">Category</label>
                <select
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs mt-1"
                >
                  <option value="Starters">Starters</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Biryani & Rice">Biryani & Rice</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Desserts">Desserts</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400">Price (₹)</label>
                <input
                  type="number"
                  required
                  value={newItemPrice}
                  onChange={(e) => setNewItemPrice(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs mt-1"
                />
              </div>

              <div>
                <label className="text-slate-400">Type</label>
                <div className="flex space-x-2 mt-1">
                  <button
                    type="button"
                    onClick={() => setNewItemIsVeg(true)}
                    className={`flex-1 py-2 rounded-xl border text-xs font-bold transition-all ${
                      newItemIsVeg ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    🌱 Veg
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewItemIsVeg(false)}
                    className={`flex-1 py-2 rounded-xl border text-xs font-bold transition-all ${
                      !newItemIsVeg ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    🍗 Non-Veg
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-xs font-mono">Short Description</label>
              <input
                type="text"
                placeholder="Delicious ingredients..."
                value={newItemDesc}
                onChange={(e) => setNewItemDesc(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs mt-1 font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Digital Menu</span>
            </button>
          </form>
        </div>

        {/* Right Column: Live Mobile Preview & QR Card */}
        <div className="space-y-6">
          {/* QR Code Printable Card with qrcode.react */}
          <div className="glass-panel p-6 rounded-3xl border border-amber-500/40 space-y-4 text-center shadow-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
              <QrCode className="w-4 h-4" />
              <span>Table Stand QR Code</span>
            </div>

            <div className="bg-white p-4 rounded-2xl w-48 h-48 mx-auto flex items-center justify-center shadow-lg border-4 border-amber-500">
              <QRCodeSVG value={qrDataUrl} size={160} />
            </div>

            <p className="text-xs text-slate-300 font-mono">Scan QR with Mobile Camera to order directly on WhatsApp</p>

            <div className="flex justify-center space-x-2 font-mono text-xs">
              <a
                href={fallbackQrImageUrl}
                target="_blank"
                download="qrmenu.png"
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500 text-slate-300 hover:text-white transition-colors flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Printable QR</span>
              </a>
            </div>
          </div>

          {/* Customer Digital Menu Mobile Preview */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-base font-bold text-white">{hotelName}</h3>
                <p className="text-xs text-amber-400 font-mono">{tagline}</p>
              </div>
              <ShoppingBag className="w-5 h-5 text-amber-400" />
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {menuItems.map((item) => (
                <div key={item.id} className="p-3.5 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-between space-x-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`} />
                      <h4 className="text-xs font-bold text-white">{item.name}</h4>
                    </div>
                    <p className="text-[10px] text-slate-400 line-clamp-1">{item.description}</p>
                    <span className="text-xs font-bold font-mono text-amber-400">₹{item.price}</span>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleOrderWhatsapp}
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Test Order on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
