import { Car, MapPin, Navigation, Plane, Smartphone } from 'lucide-react';
import { HOST_PHONE, HOST_PHONE_LINK, MAP_LINKS, RENTAL_ADDRESS } from './constants';

const ROUTES = [
  {
    title: 'From the North (I-95 / Raleigh / Virginia)',
    steps:
      'Take I-95 South to SC-9 East toward North Myrtle Beach. Follow SC-9 until it becomes Main Street. Turn right onto North Ocean Blvd, then left onto 49th Ave N. Follow signs into the North Beach Resort / Whitepoint community to 4951 Salt Creek Ct.',
  },
  {
    title: 'From the West (I-26 / Columbia / Charlotte)',
    steps:
      'Take I-26 East to US-501 East toward Myrtle Beach. Once in the Myrtle Beach area, take US-17 North (Kings Highway) toward North Myrtle Beach. Turn right onto 49th Ave N and follow into the North Beach Resort / Whitepoint community to 4951 Salt Creek Ct.',
  },
];

export function DirectionsSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Navigation className="w-8 h-8 text-orange-500 shrink-0" />
        <h2 className="text-3xl text-slate-800">Getting There</h2>
      </div>

      <p className="text-slate-700 text-lg">
        The villa is in the Whitepoint community within North Beach Resort &amp; Villas. Choose
        your route below:
      </p>

      <div className="space-y-4">
        {ROUTES.map((route) => (
          <div
            key={route.title}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-400"
          >
            <div className="flex items-start gap-2 mb-2">
              <Car className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
              <h3 className="text-lg font-medium text-slate-800">{route.title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed pl-7">{route.steps}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-teal-600" />
          <h3 className="text-xl text-slate-800">GPS &amp; Map Links</h3>
        </div>
        <p className="text-slate-700 mb-4">
          <strong>Address:</strong> {RENTAL_ADDRESS}
        </p>
        <p className="text-slate-600 text-sm mb-4">
          Coordinates: {MAP_LINKS.coordinates}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={MAP_LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-teal-200 text-teal-800 px-5 py-2.5 rounded-full hover:bg-teal-50 transition-colors font-medium"
          >
            Google Maps
          </a>
          <a
            href={MAP_LINKS.apple}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-teal-200 text-teal-800 px-5 py-2.5 rounded-full hover:bg-teal-50 transition-colors font-medium"
          >
            Apple Maps
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Plane className="w-6 h-6 text-pink-600" />
          <h3 className="text-xl text-slate-800">Flying In? Need a Ride from the Airport?</h3>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          If you&apos;re flying into Myrtle Beach International Airport (MYR), the villa is about
          20 minutes north. We&apos;re coordinating rides — text Jordie as soon as you land so we
          can pick you up or arrange a rideshare group.
        </p>
        <a
          href={HOST_PHONE_LINK}
          className="inline-flex items-center gap-2 text-lg font-medium text-orange-600 hover:text-orange-700"
        >
          <Smartphone className="w-5 h-5" />
          {HOST_PHONE}
        </a>
      </div>
    </div>
  );
}
