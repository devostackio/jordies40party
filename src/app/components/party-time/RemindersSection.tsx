import { Car, ClipboardList, PartyPopper, ShoppingBag } from 'lucide-react';
import { RENTAL_POLICIES_URL } from './constants';

const REMINDERS = [
  {
    icon: ClipboardList,
    title: 'Check-In — Thursday, May 28th',
    body: (
      <>
        Check-in opens at <strong>2:00 PM</strong>. Guaranteed check-in is at{' '}
        <strong>4:00 PM</strong>. Early check-in may be available after{' '}
        <strong>12:00 PM</strong> if the room is ready — otherwise enjoy the resort until it is.
        Arriving early? Text Jordie — we may be able to store bags. Arriving late? Your tote and
        room will be waiting. The house will be decorated in champagne, gold, and light cream all
        weekend. Yes, there will be balloons. Let&apos;s live it up!
      </>
    ),
  },
  {
    icon: ClipboardList,
    title: 'Read the Rental Policies',
    body: (
      <>
        Resort management takes these seriously. Please review before you arrive:{' '}
        <a
          href={RENTAL_POLICIES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-700 underline hover:text-teal-900"
        >
          northbeachrentals.com/POLICIES
        </a>
        . Nothing alarming — just great info!
      </>
    ),
  },
  {
    icon: Car,
    title: 'Parking',
    body: 'The villa has a two-car garage and driveway space. If we need overflow, the resort has additional parking. Coordinate with Jordie if you\'re driving — especially if carpooling.',
  },
  {
    icon: ShoppingBag,
    title: 'Nearby Essentials',
    body: 'Publix, CVS, and Walmart are all within 10 minutes. Forgot something? Don\'t stress — you\'ve got options. Instacart and Uber Eats help too.',
  },
  {
    icon: PartyPopper,
    title: 'Saturday Birthday Celebration — Soirée Dress Code',
    body: 'We\'ll likely capture a group photo Saturday evening before or after dinner. Dress code: beach cocktail or chic semi-formal (light & airy). Jordie is wearing a light cream, orange & mauve halter long-flowing A-line dress.',
  },
];

export function RemindersSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <ClipboardList className="w-8 h-8 text-teal-600 shrink-0" />
        <h2 className="text-3xl text-slate-800">Before You Leave Home</h2>
      </div>

      <p className="text-slate-700 text-lg">Quick reminders so nothing slips through the cracks:</p>

      <div className="space-y-4">
        {REMINDERS.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-6 shadow-lg flex gap-4"
          >
            <item.icon className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-700 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
