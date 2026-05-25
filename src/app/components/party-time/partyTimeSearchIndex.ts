import type { AgendaDay, PartyTimeTabId } from './constants';
import {
  AGENDA_DAYS,
  NON_BOARDING_CREW,
  PACKING_BRING_FOR_YOU,
  PACKING_CATEGORIES,
  PROVIDED_AT_VILLA,
  RENTAL_ADDRESS,
  ROOM_ASSIGNMENTS,
} from './constants';

export type PartyTimeSearchEntry = {
  id: string;
  tabId: PartyTimeTabId;
  title: string;
  snippet: string;
  keywords: string[];
};

function roomEntries(): PartyTimeSearchEntry[] {
  return ROOM_ASSIGNMENTS.map((assignment, index) => ({
    id: `room-${index}`,
    tabId: 'rooms' as const,
    title: `${assignment.room}${assignment.bed ? ` — ${assignment.bed}` : ''}`,
    snippet: `Guests: ${assignment.guests.join(', ')}`,
    keywords: [
      assignment.room,
      ...(assignment.bed ? [assignment.bed] : []),
      ...assignment.guests,
      'room',
      'bed',
      'sleep',
      'assignment',
      'who',
    ],
  }));
}

function packItemEntries(): PartyTimeSearchEntry[] {
  return PACKING_CATEGORIES.flatMap((category) =>
    category.items.map((item, itemIndex) => ({
      id: `pack-${category.title}-${itemIndex}`,
      tabId: 'pack' as const,
      title: item,
      snippet: `Pack list — ${category.title}. Beach towels may be provided at the resort; Publix and CVS are minutes away if you forget something.`,
      keywords: [item, category.title, 'pack', 'bring', 'luggage', 'forget', 'suitcase'],
    })),
  );
}

function providedEntries(): PartyTimeSearchEntry[] {
  return PROVIDED_AT_VILLA.flatMap((category) =>
    category.items.map((item, itemIndex) => ({
      id: `provided-${category.title}-${itemIndex}`,
      tabId: 'pack' as const,
      title: item,
      snippet: `Already at the villa (${category.title}) — skip packing this.`,
      keywords: [
        item,
        category.title,
        'provided',
        'stocked',
        'house',
        'kitchen',
        'breakfast',
        'coffee',
        'speakers',
        'groceries',
        'wine',
        'liquor',
        'drinks',
      ],
    })),
  );
}

function agendaDayTokens(day: AgendaDay): string[] {
  const weekday = day.date.split(',')[0].trim().toLowerCase();
  const mayMatch = day.date.match(/may\s+\d+/i)?.[0];
  const tokens = [weekday, day.date.toLowerCase(), day.title.toLowerCase()];
  if (mayMatch) {
    tokens.push(mayMatch.toLowerCase());
    tokens.push(mayMatch.replace(/\s+/g, '').toLowerCase());
  }
  return tokens;
}

function agendaEntries(): PartyTimeSearchEntry[] {
  const allDayTokens = AGENDA_DAYS.flatMap(agendaDayTokens);

  const overview: PartyTimeSearchEntry = {
    id: 'agenda-overview',
    tabId: 'agenda',
    title: 'Weekend agenda — Thursday through Sunday',
    snippet: AGENDA_DAYS.map(
      (day) =>
        `${day.date}: ${day.items.map((item) => item.label).join(', ')}`,
    ).join(' · '),
    keywords: [
      'agenda',
      'schedule',
      'itinerary',
      'plan',
      'timeline',
      'what time',
      'when',
      'activities',
      'weekend',
      ...allDayTokens,
    ],
  };

  const dayEntries = AGENDA_DAYS.map((day, dayIndex) => {
    const dayTokens = agendaDayTokens(day);
    const schedule = day.items
      .map((item) => {
        const time = item.time ? `${item.time} — ` : '';
        const optional = item.optional ? ' (optional)' : '';
        return `${time}${item.label}${optional}`;
      })
      .join('; ');

    return {
      id: `agenda-day-${dayIndex}`,
      tabId: 'agenda' as const,
      title: `${day.date} — ${day.title}`,
      snippet: schedule,
      keywords: [
        'agenda',
        'schedule',
        day.title,
        ...dayTokens,
        ...day.items.flatMap((item) => [item.label, item.time ?? '', item.description]),
      ],
    };
  });

  const itemEntries = AGENDA_DAYS.flatMap((day, dayIndex) =>
    day.items.map((item, itemIndex) => {
      const dayTokens = agendaDayTokens(day);
      const timePrefix = item.time ? `${item.time} — ` : '';
      const weekday = day.date.split(',')[0].trim();

      return {
        id: `agenda-${dayIndex}-${itemIndex}`,
        tabId: 'agenda' as const,
        title: `${timePrefix}${item.label} (${weekday})`,
        snippet: `${day.date} · ${day.title}. ${item.description}`,
        keywords: [
          'agenda',
          'schedule',
          item.label,
          ...(item.time ? [item.time] : []),
          item.description,
          ...dayTokens,
          ...(item.optional ? ['optional'] : []),
        ],
      };
    }),
  );

  return [overview, ...dayEntries, ...itemEntries];
}

export const PARTY_TIME_SEARCH_INDEX: PartyTimeSearchEntry[] = [
  {
    id: 'stay-property',
    tabId: 'stay',
    title: 'Where We\'re Staying — North Beach Resort & Villas',
    snippet:
      '4-bedroom beach house with full kitchen, living area, and porch. Full resort access — pools, restaurants, and beachfront.',
    keywords: [
      'stay',
      'villa',
      'house',
      'resort',
      'north beach',
      'beach',
      'property',
      'kitchen',
      'porch',
      'pool',
      'amenities',
    ],
  },
  {
    id: 'stay-address',
    tabId: 'stay',
    title: 'Rental address',
    snippet: RENTAL_ADDRESS,
    keywords: [
      RENTAL_ADDRESS,
      'address',
      'location',
      'where',
      'salt creek',
      'whitepoint',
      'myrtle beach',
      '4951',
    ],
  },
  {
    id: 'stay-policies',
    tabId: 'stay',
    title: 'Rental policies — read before arrival',
    snippet:
      'Review check-in/check-out times, noise, parking, and house rules on the rental site before you arrive.',
    keywords: [
      'policies',
      'rules',
      'house rules',
      'check-in',
      'check-out',
      'noise',
      'rental',
      'guidelines',
      'northbeachrentals',
    ],
  },
  {
    id: 'rooms-intro',
    tabId: 'rooms',
    title: 'Room assignments',
    snippet:
      'Who\'s sleeping where for the weekend. First names only — text Jordie if anything looks off.',
    keywords: ['rooms', 'room', 'assignments', 'bedroom', 'sleeping', 'bed'],
  },
  ...roomEntries(),
  {
    id: 'rooms-non-boarding',
    tabId: 'rooms',
    title: 'Non-boarding crew',
    snippet: `${NON_BOARDING_CREW.join(', ')} — celebrating with us but not staying at the villa.`,
    keywords: [...NON_BOARDING_CREW, 'non-boarding', 'day guest', 'not staying'],
  },
  {
    id: 'directions-overview',
    tabId: 'directions',
    title: 'Getting there — directions to the villa',
    snippet:
      'The villa is in the Whitepoint community within North Beach Resort & Villas. Driving routes from the north and west are listed on the Directions tab.',
    keywords: ['directions', 'drive', 'driving', 'route', 'gps', 'navigate', 'getting there'],
  },
  {
    id: 'directions-north',
    tabId: 'directions',
    title: 'From the North (I-95 / Raleigh / Virginia)',
    snippet:
      'Take I-95 South to SC-9 East toward North Myrtle Beach. Follow SC-9 to Main Street, North Ocean Blvd, 49th Ave N, then into North Beach Resort / Whitepoint to 4951 Salt Creek Ct.',
    keywords: ['i-95', 'raleigh', 'virginia', 'north', 'sc-9', 'main street'],
  },
  {
    id: 'directions-west',
    tabId: 'directions',
    title: 'From the West (I-26 / Columbia / Charlotte)',
    snippet:
      'Take I-26 East to US-501 East toward Myrtle Beach, then US-17 North to North Myrtle Beach. Turn right on 49th Ave N into North Beach Resort / Whitepoint.',
    keywords: ['i-26', 'columbia', 'charlotte', 'west', 'us-501', 'us-17', 'kings highway'],
  },
  {
    id: 'directions-maps',
    tabId: 'directions',
    title: 'GPS & map links',
    snippet: `Open ${RENTAL_ADDRESS} in Google Maps or Apple Maps. Coordinates: 33.7921°N, 78.7383°W.`,
    keywords: ['google maps', 'apple maps', 'gps', 'coordinates', 'map', 'navigation'],
  },
  {
    id: 'directions-airport',
    tabId: 'directions',
    title: 'Flying in — airport ride from MYR',
    snippet:
      'Myrtle Beach International Airport (MYR) is about 20 minutes north. Text Jordie when you land for pickup or a rideshare group.',
    keywords: [
      'airport',
      'fly',
      'flying',
      'flight',
      'myr',
      'ride',
      'pickup',
      'pick up',
      'uber',
      'lyft',
      'shuttle',
    ],
  },
  ...agendaEntries(),
  ...packItemEntries(),
  ...providedEntries(),
  ...PACKING_BRING_FOR_YOU.map((item, index) => ({
    id: `pack-bring-${index}`,
    tabId: 'pack' as const,
    title: item,
    snippet: 'Meals and drinks are covered for the group — bring only if it fits your needs.',
    keywords: [item, 'dietary', 'snacks', 'dinner', 'allergy', 'yourself'],
  })),
  {
    id: 'pack-overview',
    tabId: 'pack',
    title: 'What to pack — overview',
    snippet:
      'Beach towels may be provided at the resort. Publix and CVS are minutes away. Jordie has the house stocked for many essentials.',
    keywords: ['pack', 'packing', 'luggage', 'bring', 'forget', 'towels', 'publix', 'cvs'],
  },
  {
    id: 'reminders-checkin',
    tabId: 'reminders',
    title: 'Check-in — Thursday, May 28th',
    snippet:
      'Check-in opens at 2:00 PM; guaranteed at 4:00 PM. Early check-in may be available after 12:00 PM if the room is ready. Text Jordie if arriving early or late.',
    keywords: ['check-in', 'check in', '2pm', '4pm', 'early', 'late', 'bags', 'balloons'],
  },
  {
    id: 'reminders-policies',
    tabId: 'reminders',
    title: 'Read the rental policies',
    snippet: 'Resort management takes policies seriously — review northbeachrentals.com/POLICIES before arrival.',
    keywords: ['policies', 'rules', 'rental', 'resort'],
  },
  {
    id: 'reminders-parking',
    tabId: 'reminders',
    title: 'Parking',
    snippet:
      'Two-car garage and driveway at the villa. Resort overflow parking available — coordinate with Jordie if driving or carpooling.',
    keywords: ['parking', 'garage', 'driveway', 'car', 'carpool', 'overflow'],
  },
  {
    id: 'reminders-essentials',
    tabId: 'reminders',
    title: 'Nearby essentials — Publix, CVS, Walmart',
    snippet:
      'Publix, CVS, and Walmart within 10 minutes. Instacart and Uber Eats work too if you forget something.',
    keywords: ['publix', 'cvs', 'walmart', 'grocery', 'pharmacy', 'instacart', 'uber eats', 'shop'],
  },
  {
    id: 'reminders-dress',
    tabId: 'reminders',
    title: 'Saturday birthday — dress code',
    snippet:
      'Group photo Saturday evening: beach cocktail or chic semi-formal (light & airy). Jordie wears cream, orange & mauve halter A-line.',
    keywords: [
      'dress',
      'dress code',
      'outfit',
      'birthday',
      'saturday',
      'soirée',
      'photo',
      'semi-formal',
      'cocktail',
    ],
  },
  {
    id: 'contact-host',
    tabId: 'directions',
    title: 'Text or call Jordie',
    snippet:
      'Questions, rides, or running late — reach Jordie by phone. Also listed under Flying In on Directions.',
    keywords: ['jordie', 'phone', 'text', 'call', 'contact', 'host', '984', 'lost', 'help', 'ride'],
  },
];
