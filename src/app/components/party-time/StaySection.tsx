import { ExternalLink, Home, MapPin } from 'lucide-react';
import { RENTAL_ADDRESS, RENTAL_POLICIES_URL } from './constants';
import { StayPhotoCarousel } from './StayPhotoCarousel';

export function StaySection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Home className="w-8 h-8 text-teal-600 shrink-0" />
        <h2 className="text-3xl text-slate-800">Where We&apos;re Staying</h2>
      </div>

      <StayPhotoCarousel />

      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-teal-500">
        <h3 className="text-2xl text-slate-800 mb-2">North Beach Resort &amp; Villas</h3>
        <p className="text-slate-600 mb-4 flex items-start gap-2">
          <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
          <span>
            <strong className="text-slate-800">Rental Address:</strong> {RENTAL_ADDRESS}
          </span>
        </p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-2">
            <span className="w-2 h-2 mt-2.5 bg-teal-500 rounded-full shrink-0" />
            4-bedroom beach house with full kitchen, living area, and porch
          </li>
          <li className="flex gap-2">
            <span className="w-2 h-2 mt-2.5 bg-teal-500 rounded-full shrink-0" />
            Full resort access — pools, restaurants, and beachfront
          </li>
        </ul>
        <p className="mt-4 text-slate-600 text-sm">
          Room assignments are in the <strong className="text-slate-700">Rooms</strong> tab. If
          anything looks off, text Jordie.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-teal-50 rounded-2xl p-6 md:p-8 shadow-lg">
        <h3 className="text-xl text-slate-800 mb-2">📋 Rental Policies — Please Read Before Arrival</h3>
        <p className="text-slate-700 mb-4">
          Our host requires all guests to review the property guidelines. Take two minutes — it
          covers check-in/check-out times, noise, parking, and house rules.
        </p>
        <a
          href={RENTAL_POLICIES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-teal-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
        >
          Read Rental Policies
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
