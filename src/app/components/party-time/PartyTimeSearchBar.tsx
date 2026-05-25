import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import type { PartyTimeTabId } from './constants';
import { searchPartyTime, tabLabelFor } from './searchPartyTime';

type PartyTimeSearchPanelProps = {
  onGoToTab: (tab: PartyTimeTabId) => void;
  onClose?: () => void;
  autoFocus?: boolean;
};

function highlightTerms(text: string, terms: string[]): ReactNode[] {
  if (terms.length === 0) return [text];

  const pattern = terms
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isMatch = terms.some((t) => part.toLowerCase() === t.toLowerCase());
    if (isMatch) {
      return (
        <mark
          key={`${part}-${index}`}
          className="rounded-sm bg-amber-200/80 text-slate-900 px-0.5 not-italic"
        >
          {part}
        </mark>
      );
    }
    return part;
  });
}

export function PartyTimeSearchPanel({
  onGoToTab,
  onClose,
  autoFocus = false,
}: PartyTimeSearchPanelProps) {
  const [query, setQuery] = useState('');

  const hits = useMemo(() => searchPartyTime(query), [query]);
  const hasQuery = query.trim().length >= 2;

  useEffect(() => {
    if (autoFocus) {
      document.getElementById('party-time-search')?.focus();
    }
  }, [autoFocus]);

  const handleResultClick = (tab: PartyTimeTabId) => {
    onGoToTab(tab);
    onClose?.();
  };

  return (
    <div className="w-full">
      <label htmlFor="party-time-search" className="sr-only">
        Search party-time guide
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <Input
          id="party-time-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search — parking, sunscreen, room, check-in…"
          className="h-10 pl-10 pr-10 text-sm rounded-xl border-slate-200 bg-white shadow-sm"
          autoComplete="off"
          spellCheck={false}
        />
        {query.length > 0 && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {hasQuery && (
        <div
          className="mt-3 max-h-[min(50vh,20rem)] overflow-y-auto animate-in fade-in-50 duration-200"
          role="region"
          aria-live="polite"
          aria-label="Search results"
        >
          {hits.length === 0 ? (
            <p className="text-slate-600 text-center py-4 text-sm">
              No matches for &ldquo;{query.trim()}&rdquo;. Try parking, dress code, Jordie,
              sunscreen, or room names.
            </p>
          ) : (
            <>
              <p className="text-xs text-slate-500 mb-2">
                {hits.length} {hits.length === 1 ? 'result' : 'results'}
              </p>
              <ul className="space-y-2">
                {hits.map((hit) => {
                  const tabLabel = tabLabelFor(hit.entry.tabId);
                  return (
                    <li key={hit.entry.id}>
                      <button
                        type="button"
                        onClick={() => handleResultClick(hit.entry.tabId)}
                        className="w-full text-left group rounded-xl p-3 bg-white border border-slate-200/90 shadow-sm hover:border-orange-200 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium uppercase tracking-wide text-teal-700 mb-0.5">
                              {tabLabel}
                            </p>
                            <h3 className="text-sm font-medium text-slate-800 group-hover:text-orange-700 transition-colors">
                              {highlightTerms(hit.entry.title, hit.matchedTerms)}
                            </h3>
                            <p className="mt-1 text-slate-600 leading-relaxed text-xs line-clamp-2">
                              {highlightTerms(hit.excerpt, hit.matchedTerms)}
                            </p>
                          </div>
                          <span className="shrink-0 flex items-center gap-0.5 text-xs font-medium text-orange-600 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                            Open
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
