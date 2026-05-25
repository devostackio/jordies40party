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
