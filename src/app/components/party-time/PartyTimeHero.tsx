import { ExternalLink, Sparkles, Sun } from 'lucide-react';
import heroImage from '@/assets/images/myrtle-beach-ferris-wheel.png';
import { PARTY_CREW_SLIDESHOW_URL } from './constants';

export function PartyTimeHero() {
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
            Party Time
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 via-amber-300 to-teal-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The countdown is over, the bags are packed, and Myrtle Beach is calling our names.
            This is going to be one for the books — sun, sand, cocktails, and nothing but good
            energy with my favorite women.
          </p>
          <a
            href={PARTY_CREW_SLIDESHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-teal-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all mb-6"
          >
            View Party Crew Slideshow
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-slate-600 leading-relaxed">
            Below is everything you need for arrival day — directions, packing, what to expect,
            and how to reach me. Read through, screenshot what you need, and get ready to glow.
          </p>
          <p className="mt-6 text-slate-700 italic">
            — With love and sunscreen, Jordie ☀️
          </p>
        </div>
      </div>
    </section>
  );
}
