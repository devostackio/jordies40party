import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { RECAP_DAYS } from './constants';

export function RecapSection() {
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});

  const toggleDay = (date: string) => {
    setExpandedDays((prev) => ({ ...prev, [date]: !prev[date] }));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-violet-500 shrink-0" />
        <h2 className="text-3xl text-slate-800">Trip Recap</h2>
      </div>

      <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-rose-50 p-4 md:p-5 shadow-sm">
        <p className="text-slate-700 leading-relaxed">
          Four days. Six women. One villa. Zero regrets. Here&apos;s everything we packed into this unforgettable long weekend.
        </p>
      </div>

      <div className="space-y-5">
        {RECAP_DAYS.map((day, index) => {
          const isExpanded = Boolean(expandedDays[day.date]);
          const PREVIEW_COUNT = 3;
          const hasMore = day.items.length > PREVIEW_COUNT;
          const visibleItems = isExpanded ? day.items : day.items.slice(0, PREVIEW_COUNT);
          const hiddenCount = day.items.length - PREVIEW_COUNT;

          const gradients = [
            'from-violet-50 via-purple-50 to-rose-50',
            'from-sky-50 via-teal-50 to-emerald-50',
            'from-amber-50 via-orange-50 to-rose-50',
            'from-rose-50 via-pink-50 to-violet-50',
          ];
          const dotColors = [
            'bg-violet-500 ring-violet-100',
            'bg-teal-500 ring-teal-100',
            'bg-orange-500 ring-orange-100',
            'bg-rose-500 ring-rose-100',
          ];
          const lineColors = [
            'bg-violet-200',
            'bg-teal-200',
            'bg-orange-200',
            'bg-rose-200',
          ];
          const labelColors = [
            'text-violet-600',
            'text-teal-600',
            'text-orange-600',
            'text-rose-600',
          ];
          const buttonColors = [
            'border-violet-200 text-violet-700 hover:bg-violet-50',
            'border-teal-200 text-teal-700 hover:bg-teal-50',
            'border-orange-200 text-orange-700 hover:bg-orange-50',
            'border-rose-200 text-rose-700 hover:bg-rose-50',
          ];

          const i = index % 4;

          return (
            <div
              key={day.date}
              className={`bg-gradient-to-br ${gradients[i]} rounded-2xl p-6 md:p-8 shadow-md`}
            >
              <p className={`text-sm uppercase tracking-wide font-medium mb-1 ${labelColors[i]}`}>
                {day.date}
              </p>
              <h3 className="text-2xl text-slate-800 mb-2">{day.title}</h3>
              <p className="text-slate-600 italic text-sm mb-6">{day.vibe}</p>

              <div className="relative">
                <div
                  className={`absolute left-3 top-2 bottom-2 w-0.5 -translate-x-1/2 ${lineColors[i]}`}
                  aria-hidden
                />
                <ul className="space-y-5">
                  {visibleItems.map((item) => (
                    <li key={item.label} className="relative flex gap-4">
                      <div className="relative z-10 flex w-6 shrink-0 justify-center pt-1">
                        <span
                          className={`w-4 h-4 rounded-full ring-4 ${dotColors[i]} flex items-center justify-center text-[10px]`}
                        />
                      </div>
                      <div className="flex items-center gap-2 min-w-0 flex-1 pt-0.5">
                        <span className="text-xl leading-none" aria-hidden>
                          {item.emoji}
                        </span>
                        <span className="text-slate-800 font-medium leading-snug">{item.label}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {hasMore ? (
                <button
                  type="button"
                  onClick={() => toggleDay(day.date)}
                  className={`mt-5 inline-flex items-center gap-1.5 rounded-lg border bg-white/80 px-3 py-1.5 text-sm font-medium transition-colors ${buttonColors[i]}`}
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      {`+${hiddenCount} more`}
                    </>
                  )}
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
