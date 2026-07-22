'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { SERVICE_TIERS } from '@/lib/data';
import { X, QrCode, CreditCard, CheckCircle, ShieldCheck, Lock, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';

export default function PaymentModal() {
  const { persona, isPaymentOpen, setIsPaymentOpen, selectedTierId } = useApp();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaidSuccess, setIsPaidSuccess] = useState(false);

  if (!isPaymentOpen) return null;

  const tier = SERVICE_TIERS.find((t) => t.id === selectedTierId) || SERVICE_TIERS[1];
  const isIndia = persona.currency === 'INR';

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaidSuccess(true);
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
      toast.success('Payment successfully verified!');
    }, 1500);
  };

  const handleClose = () => {
    setIsPaymentOpen(false);
    setIsPaidSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!isPaidSuccess ? (
          <>
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {isIndia ? <QrCode className="w-6 h-6" /> : <CreditCard className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Book Package: {tier.title}</h3>
                <p className="text-xs text-slate-400">
                  {isIndia ? `Scan UPI QR Code (₹${tier.inrPrice.toLocaleString('en-IN')})` : `Stripe Payment ($${tier.usdPrice})`}
                </p>
              </div>
            </div>

            {isIndia ? (
              /* UPI QR Code Scanner Simulation */
              <div className="flex flex-col items-center space-y-4 py-4 bg-slate-950 rounded-2xl border border-white/10 p-6">
                <div className="p-4 bg-white rounded-2xl shadow-xl">
                  {/* Generated SVG QR Code representation */}
                  <svg className="w-44 h-44" viewBox="0 0 100 100">
                    <path fill="#000" d="M0,0 h30 v30 h-30 z M40,0 h20 v10 h-20 z M70,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M80,10 h10 v10 h-10 z M0,40 h10 v20 h-10 z M20,40 h30 v10 h-30 z M60,40 h40 v30 h-40 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M40,80 h20 v20 h-20 z M70,80 h30 v20 h-30 z" />
                  </svg>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-xs font-mono text-emerald-400 font-bold">UPI ID: dnyaneshwar@upi</p>
                  <p className="text-[11px] text-slate-400">Scan with Google Pay, PhonePe, Paytm, or BHIM</p>
                </div>
              </div>
            ) : (
              /* Stripe International Credit Card Simulation */
              <div className="space-y-3 py-2">
                <div className="space-y-1">
                  <label className="text-xs text-slate-400 font-mono">Cardholder Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-400 font-mono">Card Number</label>
                  <input
                    type="text"
                    defaultValue="•••• •••• •••• 4242"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400 font-mono">Expiry</label>
                    <input
                      type="text"
                      defaultValue="12/28"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 font-mono">CVC</label>
                    <input
                      type="text"
                      defaultValue="888"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleSimulatePayment}
              disabled={isProcessing}
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <span>Verifying Payment...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Confirm Booking & Pay</span>
                </>
              )}
            </button>
          </>
        ) : (
          /* Payment Success View */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-white">Booking Verified!</h3>
            <p className="text-xs text-slate-300">
              Thank you! Dnyaneshwar will contact you directly within 2 hours.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
