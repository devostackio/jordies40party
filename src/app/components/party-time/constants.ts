export const PARTY_TIME_TABS = [
  { id: 'stay', label: 'Stay', icon: 'Home' },
  { id: 'rooms', label: 'Rooms', icon: 'BedDouble' },
  { id: 'directions', label: 'Directions', icon: 'MapPin' },
  { id: 'agenda', label: 'Agenda', icon: 'Calendar' },
  { id: 'pack', label: 'Pack', icon: 'Luggage' },
  { id: 'reminders', label: 'Reminders', icon: 'ClipboardList' },
] as const;

export const ROOM_ASSIGNMENTS = [
  { room: 'Room 1', bed: 'King Bed', guests: ['Kellay'] },
  { room: 'Room 2', bed: 'King Bed', guests: ['Jordie', 'Dominique'] },
  { room: 'Room 3', bed: '2 Queen Beds', guests: ['Cynthia', 'PreShus', 'Andrea'] },
  { room: 'Room 4', bed: 'Full Bed', guests: ['Adwoa'] },
  { room: 'Sofa Bed', bed: null, guests: ['Kellicia'] },
  { room: 'Sofa Bed', bed: null, guests: ['*']},
] as const;

export const NON_BOARDING_CREW = ['Alisa', 'Tatiana'] as const;

export type PartyTimeTabId = (typeof PARTY_TIME_TABS)[number]['id'];

export const RENTAL_ADDRESS = '4951 Salt Creek Ct, North Myrtle Beach, SC 29582';
export const RENTAL_POLICIES_URL = 'https://northbeachrentals.com/POLICIES';
export const PARTY_CREW_SLIDESHOW_URL = 'https://canva.link/8hye4f29z5bspwv';
export const HOST_PHONE = '984-328-1553';
export const HOST_PHONE_LINK = 'tel:+19843281553';

export const MAP_LINKS = {
  google: 'https://www.google.com/maps/search/?api=1&query=4951+Salt+Creek+Ct,+North+Myrtle+Beach,+SC+29582',
  apple: 'https://maps.apple.com/?address=4951+Salt+Creek+Ct,North+Myrtle+Beach,SC+29582',
  coordinates: '33.7921°N, 78.7383°W',
};

export const PACKING_CATEGORIES = [
  {
    title: 'Beach & Pool',
    items: [
      'Swimsuits',
      'Cover-up / sarong',
      'Sunscreen (SPF 30+)',
      'Sunglasses',
      'Wide-brim hat or visor',
      'Water floaties / pool float',
      'Reusable water bottle',
      'Waterproof phone pouch',
    ],
  },
  {
    title: 'Shoes & Clothing',
    items: [
      'Sandals / flip-flops (daily wear)',
      'Tennis shoes (if we explore or walk the boardwalk)',
      'Photo-ready outfit for Birthday Dinner night',
      'Going-out outfit for dinner nights',
      'Comfy lounge wear for late nights',
    ],
  },
  {
    title: 'Personal & Wellness',
    items: [
      'Feminine products (or grab at Publix/CVS nearby)',
      'Any medications / vitamins',
      'General first aid basics (band-aids, ibuprofen)',
      'Skin care & hair care essentials',
      'Body shimmer / glow oil (for golden hour!)',
    ],
  },
  {
    title: 'Fun & Entertainment',
    items: [
      'Card games / board games',
      'Books / Kindle',
      'Your best energy ✨',
    ],
  },
];

export const PROVIDED_AT_VILLA = [
  {
    title: 'Kitchen & House',
    items: [
      'Bluetooth speakers (you can also bring your own if you\'d like)',
      'Coffee maker',
      'Cutlery, cups, and plates',
    ],
  },
  {
    title: 'Food & Drinks',
    items: [
      'Breakfast groceries — eggs, bacon, sausage, English muffins, lactose-free whole milk, creamer, raw sugar',
      'Sparkling water, drinks, wine, and liquor',
    ],
  },
] as const;

export const PACKING_BRING_FOR_YOU = [
  'Your own snacks',
  'Alternative dinners for your dietary needs',
] as const;

export type AgendaItem = {
  time?: string;
  label: string;
  description: string;
  optional?: boolean;
};

export type AgendaDay = {
  date: string;
  title: string;
  items: readonly AgendaItem[];
  footnote?: string;
};

export const AGENDA_DAYS: readonly AgendaDay[] = [
  {
    date: 'Thursday, May 28th',
    title: 'Day One — Arrival & Welcome',
    items: [
      {
        time: '4:00 PM',
        label: 'Check-In Opens',
        description:
          "Guaranteed check-in at 4:00 PM — early check-in may be possible if the villa is ready. Until then, enjoy the resort (beach, pool, explore). Arriving early? Text Jordie for instructions. See room assignments in the Rooms tab.",
      },
      {
        time: '5:00 – 7:00 PM',
        label: "Snacks & Hors d'oeuvres",
        description: 'Light bites and welcome snacks at the house as everyone settles in.',
      },
      {
        label: 'Dinner',
        description: 'Optional — join a group meal or order in on your own.',
        optional: true,
      },
      {
        time: 'Evening',
        label: 'Boardwalk or Resort',
        description:
          'Head to the boardwalk (~20 minutes away) or keep it low-key at the resort — your call.',
      },
    ],
  },
  {
    date: 'Friday, May 29th',
    title: 'Day Two — Beach, Pool & Boardwalk',
    items: [
      {
        time: 'Before 10:00 AM',
        label: 'Breakfast @ the House',
        description: 'Casual breakfast at the villa — come and go as you wake up.',
      },
      {
        label: 'Beach & Pool @ the Resort',
        description: 'Hang at the beach and pool — the main plan for the day.',
      },
      {
        label: 'Optional Outings',
        description: 'Outlets shopping, mini-golf, or explore on your own.',
        optional: true,
      },
      {
        time: 'Evening',
        label: 'Dinner Together @ the House',
        description: 'Italian / pizza night at the villa.',
      },
      {
        time: 'Late Night — Plan 1',
        label: 'Boardwalk or Broadway at the Beach',
        description: 'Head out for the evening — about 20 minutes away.',
      },
      {
        time: 'Late Night — Plan 2 (if it rains)',
        label: 'Game Night & Movies',
        description: 'Stay in for games and movies at the house.',
      },
    ],
  },
  {
    date: 'Saturday, May 30th',
    title: 'Day Three — Murrells Inlet & Birthday Dinner',
    items: [
      {
        time: 'Before 10:00 AM',
        label: 'Breakfast @ the House',
        description: 'Same relaxed breakfast plan as Friday.',
      },
      {
        time: '10:30 AM – 3:30 PM',
        label: 'Murrells Inlet & Brookgreen Gardens',
        description:
          'Group outing to the inlet and gardens. Lunch at Murrells Inlet while we are out.',
      },
      {
        time: '6:00 PM',
        label: 'Dinner @ Cypress Room',
        description: 'Birthday dinner at the Cypress Room, Island Vista Resort.',
      },
      {
        label: 'After Party (optional)',
        description: 'House of Blues or Keys 88 Bar — join if you are up for it.',
        optional: true,
      },
    ],
  },
  {
    date: 'Sunday, May 31st',
    title: 'Day Four — Sunrise & Farewell',
    items: [
      {
        time: '6:00 AM',
        label: 'Sunrise Beach Walk',
        description: 'Optional early stroll — meet on the beach if you are an early riser.',
      },
      {
        time: '8:30 AM',
        label: 'Breakfast / Brunch @ the House',
        description: 'Last shared meal at the villa.',
      },
      {
        time: '10:45 AM',
        label: 'Pack & Head Out',
        description:
          'Target checkout time is 10:45 AM. You can keep enjoying the beach and leave whenever works for you.',
      },
    ],
  },
];
