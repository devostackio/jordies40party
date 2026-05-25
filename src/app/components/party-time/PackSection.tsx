import { CheckCircle2, Luggage, PackageCheck } from 'lucide-react';
import {
  PACKING_BRING_FOR_YOU,
  PACKING_CATEGORIES,
  PROVIDED_AT_VILLA,
} from './constants';

export function PackSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Luggage className="w-8 h-8 text-amber-600 shrink-0" />
        <h2 className="text-3xl text-slate-800">Don&apos;t Forget</h2>
      </div>

      <p className="text-slate-700 text-lg leading-relaxed">
        Beach towels are likely provided at the resort, but bring your own if you want extras. We
        have full access to all resort amenities. Publix and CVS are just minutes away for anything
        you forget.
      </p>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <PackageCheck className="w-7 h-7 text-teal-600 shrink-0" />
          <h3 className="text-2xl text-slate-800">Already Covered — Skip Packing These</h3>
        </div>
        <p className="text-slate-700 leading-relaxed -mt-2">
          Jordie&apos;s got the house stocked. These are provided at the villa — save the suitcase
          space.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {PROVIDED_AT_VILLA.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl p-6 shadow-lg bg-gradient-to-br from-teal-50 to-sky-50 border-l-4 border-teal-500"
            >
              <h4 className="text-lg font-medium text-slate-800 mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-6 md:p-8 shadow-lg bg-white border-l-4 border-orange-400">
          <h4 className="text-lg font-medium text-slate-800 mb-2">Still bring for yourself</h4>
          <p className="text-slate-600 text-sm mb-4">
            Meals and drinks are covered for the group — pack these only if they fit your needs.
          </p>
          <ul className="space-y-2">
            {PACKING_BRING_FOR_YOU.map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-700">
                <span className="w-1.5 h-1.5 mt-2 bg-orange-500 rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4">
        <Luggage className="w-7 h-7 text-amber-600 shrink-0" />
        <h3 className="text-2xl text-slate-800">What to Pack</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {PACKING_CATEGORIES.map((category, index) => (
          <div
            key={category.title}
            className={`rounded-2xl p-6 shadow-lg ${
              index % 2 === 0
                ? 'bg-white border-l-4 border-amber-400'
                : 'bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-400'
            }`}
          >
            <h3 className="text-lg font-medium text-slate-800 mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 mt-2 bg-amber-500 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
