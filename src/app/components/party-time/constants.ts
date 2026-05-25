export const PARTY_TIME_TABS = [
  { id: 'stay', label: 'Stay', icon: 'Home' },
  { id: 'directions', label: 'Directions', icon: 'MapPin' },
  { id: 'agenda', label: 'Agenda', icon: 'Calendar' },
  { id: 'pack', label: 'Pack', icon: 'Luggage' },
  { id: 'reminders', label: 'Reminders', icon: 'ClipboardList' },
] as const;

export type PartyTimeTabId = (typeof PARTY_TIME_TABS)[number]['id'];

export const RENTAL_ADDRESS = '4951 Salt Creek Ct, North Myrtle Beach, SC 29582';
export const RENTAL_POLICIES_URL = 'https://northbeachrentals.com/POLICIES';
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
      'White / cream / gold outfit for Sun-Kissed Soirée night',
      'Going-out outfit for dinner nights',
      'Comfy loungewear for late nights',
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
      'Bluetooth speaker (if you have one)',
      'Books / Kindle',
      'Preferred snacks for the house',
      'Your best energy ✨',
    ],
  },
];
