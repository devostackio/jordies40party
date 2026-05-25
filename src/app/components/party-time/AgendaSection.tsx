import { Calendar, Clock } from 'lucide-react';
import { AGENDA_DAYS } from './constants';

export function AgendaSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Calendar className="w-8 h-8 text-pink-500 shrink-0" />
        <h2 className="text-3xl text-slate-800">Agenda</h2>
      </div>

      <div className="space-y-6">
        {AGENDA_DAYS.map((day) => (
          <div
            key={day.date}
            className="bg-gradient-to-br from-orange-50 via-pink-50 to-amber-50 rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <p className="text-sm uppercase tracking-wide text-orange-600 font-medium mb-1">
              {day.date}
            </p>
            <h3 className="text-2xl text-slate-800 mb-6">{day.title}</h3>

            <div className="relative">
              <div
                className="absolute left-3 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-orange-300"
                aria-hidden
              />
              <ul className="space-y-8">
                {day.items.map((item) => (
                  <li
                    key={`${item.time ?? ''}-${item.label}`}
                    className="relative flex gap-4"
                  >
                    <div className="relative z-10 flex w-6 shrink-0 justify-center pt-1.5">
                      <span className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-100" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        {item.time ? (
                          <>
                            <Clock className="w-4 h-4 text-orange-500" />
                            <span className="font-semibold text-slate-800">{item.time}</span>
                          </>
                        ) : null}
                        <span className="text-slate-800 font-medium">
                          {item.label}
                          {item.optional ? (
                            <span className="ml-1.5 text-sm font-normal text-orange-600">
                              (optional)
                            </span>
                          ) : null}
                        </span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {day.footnote ? (
              <p className="mt-8 text-slate-600 text-sm italic">{day.footnote}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
