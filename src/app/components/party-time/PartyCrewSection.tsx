import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { PARTY_CREW_MEMBERS, PARTY_CREW_SLIDESHOW_URL } from './constants';

export function PartyCrewSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Users className="w-8 h-8 text-violet-600 shrink-0" />
        <h2 className="text-3xl text-slate-800">Party Crew</h2>
      </div>

      <p className="text-slate-700 text-lg leading-relaxed">
        Meet the crew and where everyone is coming from.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PARTY_CREW_MEMBERS.map((member) => (
          <article
            key={member.name}
            className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-medium text-slate-800">{member.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{member.city}</p>
          </article>
        ))}
      </div>

      <div className="text-center pt-2">
        <p className="text-slate-600 mb-4">
          Want the full crew lineup? Check out who&apos;s coming to the party.
        </p>
        <a
          href={PARTY_CREW_SLIDESHOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 hover:shadow-lg transition-all"
        >
          View Party Crew Slideshow
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
