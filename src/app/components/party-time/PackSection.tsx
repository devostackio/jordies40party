import { Luggage } from 'lucide-react';
import { PACKING_CATEGORIES } from './constants';

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
