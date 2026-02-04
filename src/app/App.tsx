import { Calendar, MapPin, Sparkles, Users, Heart } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/images/myrtle-beach-ferris-wheel.png';
import signImage from '@/assets/images/myrtle-beach-sign.png';
import { RsvpModal } from '@/app/components/RsvpModal';
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <Analytics />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Myrtle Beach" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/40 via-sky-400/30 to-teal-400/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-orange-500" />
            <h1 className="text-5xl md:text-7xl mb-4 text-slate-800">
              Girls Trip
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl mb-6 text-slate-700">
              Myrtle Beach, SC
            </h2>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-slate-600 mb-8">
              <Calendar className="w-6 h-6" />
              <span>May 28-31, 2026</span>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-12 py-4 rounded-full text-xl hover:shadow-lg transition-all transform hover:scale-105" onClick={() => setIsModalOpen(true)}>
              RSVP Now
            </button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-teal-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-pink-500" />
              <h2 className="text-4xl text-slate-800">Welcome to the party!</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Hope you're gearing up for a time to step away, relax and connect with old and new friends alike. You all are my sisters, cousins and friends and I'm so blessed to have the ability to do this now with so many of you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Myrtle Beach Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-sky-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={signImage} 
                alt="Myrtle Beach Sign" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-teal-600" />
                <h2 className="text-4xl text-slate-800">Why Myrtle Beach?</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                It's warm, it's coastal and all major airlines can get here relatively easily either non-stop or 1 layover. We have ladies from California, Georgia, Minnesota, Raleigh/Durham, Florida, Connecticut, New York, DC and everywhere in between! I really hope to see you all and spend some much needed girl-time at the beach!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-slate-800">Event Schedule</h2>
          
          <div className="space-y-6">
            {/* Thursday/Friday */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-orange-400">
              <h3 className="text-2xl mb-2 text-slate-800">Thursday, May 28 (or early Friday)</h3>
              <p className="text-slate-600 text-lg">Arrive! Informal hangout</p>
            </div>

            {/* Friday */}
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-pink-500">
              <div className="flex items-start gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-pink-500 mt-1" />
                <h3 className="text-2xl text-slate-800">Friday, May 29*</h3>
              </div>
              <p className="text-slate-700 text-lg">
                <strong>Kickoff:</strong> Brunch, activities/excursions + beach time - casual
              </p>
            </div>

            {/* Saturday */}
            <div className="bg-gradient-to-r from-teal-50 to-sky-50 rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-teal-500">
              <div className="flex items-start gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-teal-500 mt-1" />
                <h3 className="text-2xl text-slate-800">Saturday, May 30*</h3>
              </div>
              <p className="text-slate-700 text-lg">
                Full day w/group dinner - <strong>semi-formal/dressy!!</strong>
              </p>
            </div>

            {/* Sunday */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-sky-400">
              <h3 className="text-2xl mb-2 text-slate-800">Sunday, May 31</h3>
              <p className="text-slate-600 text-lg">Depart or hangout</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-12 bg-gradient-to-br from-orange-100 via-pink-100 to-teal-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl mb-4 text-slate-800">What's Included</h3>
            <p className="text-slate-700 text-lg mb-4">
              Core birthday events (Brunch, Friday night, and Saturday dinner) are fully hosted/covered. Any additional activities will be at your own expense.
            </p>
            <ul className="space-y-2 text-slate-700 text-lg">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></span>
                Welcome Brunch
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-teal-500 rounded-full"></span>
                Friday Night Fun Event
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-sky-500 rounded-full"></span>
                Birthday Dinner (Saturday Night)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Travel Partners Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-50 via-teal-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-teal-600" />
              <h2 className="text-4xl text-slate-800">Travel Partners & Family</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              This is a <strong>GIRLS TRIP 🙂</strong>
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              If you're planning to travel with a family member or partner outside of the party-attendants, just let me know ahead of time! While I don't wish to exclude your family and partners, I will ask that designated "girls time" just be us. Thanks for understanding.
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-orange-100 via-pink-100 to-teal-100 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-4xl mb-6 text-slate-800">So, you ask, "How do I RSVP?"</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Please do me a huge favor? To facilitate and streamline planning for the event and ensure everyone has a great time, I'm collecting a few details up front - including interest, preference, and even your input on some of the activities we'll do together!
            </p>
            <p className="text-2xl mb-8 text-slate-800">
              First and foremost, <strong>ARE YOU IN???</strong>
            </p>
            <div className="inline-block">
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-teal-500 text-white px-16 py-6 rounded-full text-2xl hover:shadow-2xl transition-all transform hover:scale-105 animate-pulse" onClick={() => setIsModalOpen(true)}>
                Let's Go!!!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-pink-400" />
            <p className="text-lg">Myrtle Beach Girls Trip 2026</p>
          </div>
          <p className="text-slate-300">May 28-31 • See you at the beach!</p>
        </div>
      </footer>

      {/* RSVP Modal */}
      <RsvpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}