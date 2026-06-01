import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Analytics, track } from '@vercel/analytics/react';
import { PartyTimeHero } from '@/app/components/party-time/PartyTimeHero';
import { PartyTimeTabs } from '@/app/components/party-time/PartyTimeTabs';
import { PartyTimeContactFooter } from '@/app/components/party-time/PartyTimeContactFooter';
import {
  MAP_LINKS,
  PARTY_TIME_TABS,
  type PartyTimeTabId,
} from '@/app/components/party-time/constants';
import { MapPin } from 'lucide-react';

const VALID_TAB_IDS = new Set(PARTY_TIME_TABS.map((t) => t.id));
const DESIGN_B_TAB_IDS = new Set<PartyTimeTabId>(['agenda', 'partycrew', 'stay']);
const DESIGN_C_TAB_IDS = new Set<PartyTimeTabId>(['recap', 'partycrew']);
const B_VARIANT_START_UTC_MS = Date.parse('2026-05-28T16:00:01Z'); //Mid-Departure
const C_VARIANT_START_UTC_MS = Date.parse('2026-05-28T20:00:01Z'); //Post-Arrivals & Welcome
const D_VARIANT_START_UTC_MS = Date.parse('2026-05-29T01:00:01Z'); //Day 1 Explore
const E_VARIANT_START_UTC_MS = Date.parse('2026-05-30T01:00:01Z'); //Birthday Dinner Design
const F_VARIANT_START_UTC_MS = Date.parse('2026-05-31T06:00:01Z'); //Farewell Design

type PartyTimePageProps = {
  variant?: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
};

function parseTabParam(value: string | null, designVariant: 'a' | 'b' | 'c'): PartyTimeTabId {
  if (designVariant === 'c') {
    if (value && DESIGN_C_TAB_IDS.has(value as PartyTimeTabId)) {
      return value as PartyTimeTabId;
    }
    return 'recap';
  }
  const allowedTabIds = designVariant === 'b' ? DESIGN_B_TAB_IDS : VALID_TAB_IDS;
  if (value && allowedTabIds.has(value as PartyTimeTabId)) {
    return value as PartyTimeTabId;
  }
  return designVariant === 'b' ? 'agenda' : 'stay';
}

export default function PartyTimePage({ variant }: PartyTimePageProps) {
  const designVariant: 'a' | 'b' | 'c' =
    variant === 'c' ? 'c' : variant ?? (Date.now() >= B_VARIANT_START_UTC_MS ? 'b' : 'a');
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<PartyTimeTabId>(() =>
    parseTabParam(searchParams.get('tab'), designVariant),
  );
  const isDesignB = designVariant === 'b';
  const isDesignC = designVariant === 'c';

  useEffect(() => {
    const tabFromUrl = parseTabParam(searchParams.get('tab'), designVariant);
    setActiveTab(tabFromUrl);
  }, [searchParams, designVariant]);

  const handleTabChange = (tab: PartyTimeTabId) => {
    setActiveTab(tab);
    setSearchParams({ tab }, { replace: true });
    track('party_time_tab', { tab });
    document.getElementById('party-time-guide')?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroVariant = isDesignC ? 'c' : isDesignB ? 'b' : 'a';
  const tabsVariant = isDesignC ? 'c' : isDesignB ? 'b' : 'a';

  return (
    <div className={`min-h-screen bg-gradient-to-b ${isDesignC ? 'from-violet-50 to-white' : 'from-sky-50 to-white'}`}>
      <Analytics />
      <PartyTimeHero variant={heroVariant} />

      <div id="party-time-guide" className="scroll-mt-4">
        <PartyTimeTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
          variant={tabsVariant}
        />
      </div>

      {isDesignB ? (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_LINKS.coordinates)}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-20 right-4 z-30 inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70 md:bottom-6 md:right-6"
          aria-label="Open villa location in maps"
        >
          <MapPin className="h-4 w-4" />
          <span>Villa location</span>
        </a>
      ) : null}

      <PartyTimeContactFooter minimal={isDesignC} />
    </div>
  );
}
