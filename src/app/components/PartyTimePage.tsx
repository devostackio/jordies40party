import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { PartyTimeHero } from '@/app/components/party-time/PartyTimeHero';
import { PartyTimeTabs } from '@/app/components/party-time/PartyTimeTabs';
import { PartyTimeContactFooter } from '@/app/components/party-time/PartyTimeContactFooter';
import {
  PARTY_TIME_TABS,
  type PartyTimeTabId,
} from '@/app/components/party-time/constants';

const VALID_TAB_IDS = new Set(PARTY_TIME_TABS.map((t) => t.id));

function parseTabParam(value: string | null): PartyTimeTabId {
  if (value && VALID_TAB_IDS.has(value as PartyTimeTabId)) {
    return value as PartyTimeTabId;
  }
  return 'stay';
}

export default function PartyTimePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<PartyTimeTabId>(() =>
    parseTabParam(searchParams.get('tab')),
  );

  useEffect(() => {
    const tabFromUrl = parseTabParam(searchParams.get('tab'));
    setActiveTab(tabFromUrl);
  }, [searchParams]);

  const handleTabChange = (tab: PartyTimeTabId) => {
    setActiveTab(tab);
    setSearchParams({ tab }, { replace: true });
    document.getElementById('party-time-guide')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Analytics />
      <PartyTimeHero />

      <div id="party-time-guide" className="scroll-mt-4">
        <PartyTimeTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <PartyTimeContactFooter />
    </div>
  );
}
