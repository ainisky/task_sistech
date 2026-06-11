"use client";

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <Navbar />      
      <section className="w-full flex flex-col items-center text-center px-4 pt-16 pb-12">
        <h1 className="font-bold text-[64px] md:text-[80px] leading-[100%] tracking-normal text-[#FE75B0]">
          CONTACT US
        </h1>
        <p className="font-medium text-[20px] md:text-[24px] leading-[140%] tracking-normal text-stone-500 mt-4 max-w-2xl">
          Have questions, feedback, or looking to host a tech meetup? Drop us a message!
        </p>
      </section>
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">          
          <div className="bg-white border border-stone-100 rounded-[24px] p-8 md:p-10 shadow-sm w-full">
            <h2 className="font-bold text-[28px] text-stone-900 mb-6">Send a Message</h2>
            {formSubmitted ? (
              <div className="bg-pink-50 border border-pink-100 rounded-[12px] p-6 text-center text-stone-800">
                <span className="text-3xl">☕</span>
                <h3 className="font-bold text-[18px] text-[#FE75B0] mt-2">Message Sent Successfully!</h3>
                <p className="text-[14px] text-stone-600 mt-1">We will compile a response and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block font-medium text-[14px] text-stone-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ami"
                    className="w-full h-[48px] px-4 rounded-[10px] border border-stone-200 text-stone-900 focus:outline-none focus:border-[#FE75B0] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-medium text-[14px] text-stone-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="example@gmail.com"
                    className="w-full h-[48px] px-4 rounded-[10px] border border-stone-200 text-stone-900 focus:outline-none focus:border-[#FE75B0] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-medium text-[14px] text-stone-700 mb-2">Message</label>
                  <textarea 
                    rows={5} 
                    required
                    placeholder="Tell us what you're asking..."
                    className="w-full p-4 rounded-[10px] border border-stone-200 text-stone-900 focus:outline-none focus:border-[#FE75B0] transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="mt-2 w-full h-[52px] rounded-[10px] bg-[#FE75B0] text-white font-semibold text-[16px] hover:bg-[#e05f96] transition-all shadow-sm"
                >
                  Ping Us
                </button>
              </form>
            )}
          </div>
          <div className="w-full h-[400px] lg:h-[615px] relative rounded-[16px] overflow-hidden shadow-inner border border-stone-100">
            <Image src="/yae-mimik.jpg" alt="My Wife" fill className="object-cover rounded-[16px] opacity-80 group-hover:opacity-100 transition-opacity duration-300"/>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent rounded-[16px] flex items-end justify-center p-6">
              <p className="text-white font-medium text-[18px] leading-[160%]">
                This is me! I am the founder of SISTECH CAFE, and I am an undergraduate student who has a deep interest in technology. I started this cafe because I wanted to create a space where tech creators like myself could work, collaborate, and enjoy great milk without the usual distractions of traditional coffee shops.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}