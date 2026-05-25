import { BedDouble, ExternalLink, Users } from 'lucide-react';
import { NON_BOARDING_CREW, PARTY_CREW_SLIDESHOW_URL, ROOM_ASSIGNMENTS } from './constants';

export function RoomAssignmentsSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <BedDouble className="w-8 h-8 text-violet-600 shrink-0" />
        <h2 className="text-3xl text-slate-800">Room Assignments</h2>
      </div>

      <p className="text-slate-700 text-lg leading-relaxed">
        Here&apos;s who&apos;s sleeping where for the weekend. First names only — if anything
        looks off, text Jordie.
      </p>

      <ul className="space-y-4">
        {ROOM_ASSIGNMENTS.map((assignment, index) => (
          <li
            key={`${assignment.room}-${index}`}
            className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border-l-4 border-violet-400"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-xl text-slate-800">{assignment.room}</h3>
              {assignment.bed && (
                <span className="text-sm text-slate-500">{assignment.bed}</span>
              )}
            </div>
            <p className="text-lg text-slate-700">
              {assignment.guests.join(', ')}
            </p>
            {'note' in assignment && assignment.note && (
              <p className="mt-2 text-sm text-slate-500 italic">{assignment.note}</p>
            )}
          </li>
        ))}
      </ul>

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

      <div className="bg-gradient-to-br from-slate-50 to-violet-50 rounded-2xl p-6 md:p-8 shadow-lg border border-violet-100">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-6 h-6 text-violet-600 shrink-0" />
          <h3 className="text-xl text-slate-800">Non-boarding crew</h3>
        </div>
        <p className="text-slate-600 mb-3 text-sm">
          Celebrating with us but not staying at the villa this trip.
        </p>
        <p className="text-lg text-slate-700">{NON_BOARDING_CREW.join(', ')}</p>
      </div>
    </div>
  );
}
