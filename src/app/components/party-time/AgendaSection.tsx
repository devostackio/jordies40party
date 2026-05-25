import { Calendar, Clock } from 'lucide-react';

export function AgendaSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Calendar className="w-8 h-8 text-pink-500 shrink-0" />
        <h2 className="text-3xl text-slate-800">Agenda</h2>
      </div>

      <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-amber-50 rounded-2xl p-6 md:p-8 shadow-lg">
        <p className="text-sm uppercase tracking-wide text-orange-600 font-medium mb-1">
          Thursday, May 28th
        </p>
        <h3 className="text-2xl text-slate-800 mb-6">Day One — Arrival &amp; Welcome</h3>

        <div className="relative pl-8 border-l-2 border-orange-300 space-y-8">
          <div className="relative">
            <span className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-100" />
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="font-semibold text-slate-800">4:00 PM</span>
              <span className="text-slate-600">Check-In Opens</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Early check-in might be possible. We may explore the Resort ahead of our rental being ready. 
              If you're arriving early, text Jordie — who will provide instructions. See room assignments in the <strong>Rooms</strong> tab.
            </p>
          </div>
        </div>

        <p className="mt-8 text-slate-600 text-sm italic">
          More activities for arrival day will be added soon — check back or text Jordie for updates.
        </p>
      </div>
    </div>
  );
}
