import React, { useState, type ComponentType, type ReactNode } from 'react';
import {
  BedDouble,
  Calendar,
  ClipboardList,
  Home,
  Luggage,
  MapPin,
  Search,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { PARTY_TIME_TABS, type PartyTimeTabId } from './constants';
import { StaySection } from './StaySection';
import { DirectionsSection } from './DirectionsSection';
import { AgendaSection } from './AgendaSection';
import { PackSection } from './PackSection';
import { RemindersSection } from './RemindersSection';
import { RoomAssignmentsSection } from './RoomAssignmentsSection';
import { PartyTimeSearchPanel } from './PartyTimeSearchBar';

const TAB_ICONS: Record<PartyTimeTabId, ComponentType<{ className?: string }>> = {
  stay: Home,
  rooms: BedDouble,
  directions: MapPin,
  agenda: Calendar,
  pack: Luggage,
  reminders: ClipboardList,
};

const TAB_PANELS: Record<PartyTimeTabId, ReactNode> = {
  stay: <StaySection />,
  rooms: <RoomAssignmentsSection />,
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
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchTab = (tab: PartyTimeTabId) => {
    onTabChange(tab);
    setSearchOpen(false);
  };

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
            <div className="w-full flex flex-col gap-2 bg-slate-100/90 p-2 rounded-2xl shadow-inner">
              {searchOpen && (
                <PartyTimeSearchPanel
                  onGoToTab={handleSearchTab}
                  onClose={() => setSearchOpen(false)}
                  autoFocus
                />
              )}
              <div className="flex w-full items-center gap-1">
                <TabsList className="flex h-auto flex-1 min-w-0 gap-1 bg-transparent p-0 shadow-none w-full">
                  {PARTY_TIME_TABS.map((tab) => {
                    const Icon = TAB_ICONS[tab.id];
                    return (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        aria-label={tab.label}
                        className="flex-1 min-w-0 justify-center gap-0 sm:gap-2 px-2 sm:px-3 py-2.5 rounded-xl data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md text-slate-600"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{tab.label}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                <div
                  role="presentation"
                  className="w-px h-9 bg-slate-300 shrink-0 self-center mx-1"
                  aria-hidden
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen((open) => !open)}
                  aria-expanded={searchOpen}
                  aria-controls="party-time-search"
                  aria-label="Search"
                  className={`flex-none inline-flex items-center gap-0 sm:gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 ${
                    searchOpen
                      ? 'bg-slate-400 text-white shadow-sm hover:bg-slate-500'
                      : 'text-slate-500 hover:bg-slate-100/90'
                  }`}
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>
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
