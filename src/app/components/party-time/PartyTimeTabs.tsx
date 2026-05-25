import type { ComponentType, ReactNode } from 'react';
import {
  Calendar,
  ClipboardList,
  Home,
  Luggage,
  MapPin,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { PARTY_TIME_TABS, type PartyTimeTabId } from './constants';
import { StaySection } from './StaySection';
import { DirectionsSection } from './DirectionsSection';
import { AgendaSection } from './AgendaSection';
import { PackSection } from './PackSection';
import { RemindersSection } from './RemindersSection';

const TAB_ICONS: Record<PartyTimeTabId, ComponentType<{ className?: string }>> = {
  stay: Home,
  directions: MapPin,
  agenda: Calendar,
  pack: Luggage,
  reminders: ClipboardList,
};

const TAB_PANELS: Record<PartyTimeTabId, ReactNode> = {
  stay: <StaySection />,
  directions: <DirectionsSection />,
  agenda: <AgendaSection />,
  pack: <PackSection />,
  reminders: <RemindersSection />,
};

type PartyTimeTabsProps = {
  activeTab: PartyTimeTabId;
  onTabChange: (tab: PartyTimeTabId) => void;
};

export function PartyTimeTabs({ activeTab, onTabChange }: PartyTimeTabsProps) {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-sky-50/80">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-slate-600 mb-8 text-lg">
          Jump to what you need — everything for arrival day in one place.
        </p>

        <Tabs
          value={activeTab}
          onValueChange={(value) => onTabChange(value as PartyTimeTabId)}
          className="gap-8"
        >
          <div className="sticky top-0 z-20 -mx-4 px-4 py-3 bg-gradient-to-b from-white via-white/95 to-transparent backdrop-blur-sm">
            <TabsList className="w-full h-auto flex flex-wrap justify-center gap-1 bg-slate-100/90 p-2 rounded-2xl shadow-inner">
              {PARTY_TIME_TABS.map((tab) => {
                const Icon = TAB_ICONS[tab.id];
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex-none px-4 py-2.5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md text-slate-600"
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {PARTY_TIME_TABS.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="mt-4 focus-visible:outline-none animate-in fade-in-50 duration-300"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100">
                {TAB_PANELS[tab.id]}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
