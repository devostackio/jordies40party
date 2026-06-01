import React from 'react';
import { ChevronDown, Heart, Sparkles, Sun } from 'lucide-react';
import heroImage from '@/assets/images/myrtle-beach-ferris-wheel.png';

const GROUP_PHOTO_URL = '/partyCrewGroupPic.jpeg';

type PartyTimeHeroProps = {
  variant?: 'a' | 'b' | 'c';
};

export function PartyTimeHero({ variant = 'a' }: PartyTimeHeroProps) {
  const isVariantB = variant === 'b';
  const isVariantC = variant === 'c';

  if (isVariantC) {
    return (
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={GROUP_PHOTO_URL}
            alt="The party crew — Jordie's 40th birthday trip"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/60 via-rose-800/45 to-slate-900/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl py-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-200" />
              <Sparkles className="w-8 h-8 text-violet-500" />
              <Heart className="w-8 h-8 text-rose-500 fill-rose-200" />
            </div>
            <p className="text-sm uppercase tracking-widest text-violet-600 font-medium mb-2">
              Golden Hour Girls — Jordie&apos;s 40th
            </p>
            <h1 className="text-4xl md:text-5xl mb-4 text-slate-800">
              Thank You
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-400 via-rose-400 to-amber-400 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              To every single one of you who showed up — in person, in spirit, with a gift, a message, or just love from afar — thank you. You made my 40th more than I ever could have imagined.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              This crew is everything. North Myrtle Beach gave us sun, sand, and unforgettable memories. Scroll through the recap below and relive the magic we made together.
            </p>
            <button
              type="button"
              onClick={() =>
                document.getElementById('party-time-guide')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 hover:shadow-lg transition-all mb-6"
            >
              See the Recap
              <ChevronDown className="w-4 h-4" />
            </button>
            <p className="text-slate-700 italic">
              — With all the love, Jordie ✨
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Myrtle Beach sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/50 via-amber-400/35 to-teal-500/45" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl py-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sun className="w-8 h-8 text-amber-500" />
            <Sparkles className="w-8 h-8 text-orange-500" />
          </div>
          <p className="text-sm uppercase tracking-widest text-orange-600 font-medium mb-2">
            Golden Hour Girls — It&apos;s Almost Time!
          </p>
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-800">
            {isVariantB ? 'Resort Mode' : 'Party Time'}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 via-amber-300 to-teal-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {isVariantB
              ? 'This weekend is about sunshine, resort amenities, and pure relaxation. Claim your pool chair, hit the beach, and soak up every golden-hour minute with zero pressure.'
              : 'The countdown is over, the bags are packed, and Myrtle Beach is calling our names. This is going to be one for the books — sun, sand, cocktails, and nothing but good energy with my favorite women.'}
          </p>
          <button
            type="button"
            onClick={() =>
              document.getElementById('party-time-guide')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 hover:shadow-lg transition-all mb-6"
          >
            See the Weekend Guide
            <ChevronDown className="w-4 h-4" />
          </button>
          <p className="text-slate-600 leading-relaxed">
            {isVariantB
              ? 'Tap into the plan when you want it, but make this your easy weekend: pool, beach, sunshine, and whatever feels good in the moment.'
              : 'Below is everything you need for arrival day — directions, packing, what to expect, and how to reach me. Read through, screenshot what you need, and get ready to glow.'}
          </p>
          <p className="mt-6 text-slate-700 italic">
            — With love and sunscreen, Jordie ☀️
          </p>
        </div>
      </div>
    </section>
  );
}
