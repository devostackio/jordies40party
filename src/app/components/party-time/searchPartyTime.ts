import { PARTY_TIME_TABS, type PartyTimeTabId } from './constants';
import { PARTY_TIME_SEARCH_INDEX, type PartyTimeSearchEntry } from './partyTimeSearchIndex';

export type PartyTimeSearchHit = {
  entry: PartyTimeSearchEntry;
  score: number;
  excerpt: string;
  matchedTerms: string[];
};

const TAB_LABELS = Object.fromEntries(
  PARTY_TIME_TABS.map((t) => [t.id, t.label]),
) as Partial<Record<PartyTimeTabId, string>>;

const STOP_WORDS = new Set([
  'a',
  'an',
  'the',
  'is',
  'are',
  'was',
  'were',
  'do',
  'does',
  'did',
  'i',
  'me',
  'my',
  'we',
  'our',
  'you',
  'your',
  'what',
  'when',
  'where',
  'how',
  'can',
  'to',
  'for',
  'of',
  'in',
  'on',
  'at',
  'it',
  'and',
  'or',
]);

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[^\w\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(query: string): string[] {
  return normalize(query)
    .split(' ')
    .filter((term) => term.length > 0 && !STOP_WORDS.has(term));
}

function corpus(entry: PartyTimeSearchEntry): string {
  return normalize(
    [entry.title, entry.snippet, ...entry.keywords].join(' '),
  );
}

function excerptAroundMatch(text: string, term: string, maxLen = 160): string {
  const normalized = normalize(text);
  const idx = normalized.indexOf(term);
  if (idx === -1) return text.length > maxLen ? `${text.slice(0, maxLen).trim()}…` : text;

  const start = Math.max(0, idx - 48);
  const end = Math.min(text.length, idx + term.length + 96);
  let slice = text.slice(start, end).trim();
  if (start > 0) slice = `…${slice}`;
  if (end < text.length) slice = `${slice}…`;
  return slice;
}

function scoreEntry(
  entry: PartyTimeSearchEntry,
  terms: string[],
  phrase: string,
): { score: number; matchedTerms: string[] } | null {
  const haystack = corpus(entry);
  const title = normalize(entry.title);
  const matchedTerms: string[] = [];
  let score = 0;

  if (phrase.length >= 3 && haystack.includes(phrase)) {
    score += 40;
  }

  for (const term of terms) {
    if (term.length < 2) continue;

    const inTitle = title.includes(term);
    const inKeywords = entry.keywords.some((k) => normalize(k).includes(term));
    const inBody = haystack.includes(term);

    if (!inTitle && !inKeywords && !inBody) continue;

    matchedTerms.push(term);
    if (inTitle) score += 14;
    if (inKeywords) score += 9;
    if (inBody) score += 5;

    const occurrences = haystack.split(term).length - 1;
    score += Math.min(occurrences, 3);
  }

  if (matchedTerms.length === 0) return null;
  if (terms.length > 1 && matchedTerms.length === terms.length) {
    score += 12;
  }

  return { score, matchedTerms };
}

export function searchPartyTime(query: string): PartyTimeSearchHit[] {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const phrase = normalize(trimmed);
  const terms = tokenize(trimmed);
  if (terms.length === 0) return [];

  const hits: PartyTimeSearchHit[] = [];

  for (const entry of PARTY_TIME_SEARCH_INDEX) {
    const result = scoreEntry(entry, terms, phrase);
    if (!result || result.score < 4) continue;

    const primaryTerm = result.matchedTerms[0];
    const source = `${entry.title}. ${entry.snippet}`;
    hits.push({
      entry,
      score: result.score,
      excerpt: excerptAroundMatch(source, primaryTerm),
      matchedTerms: result.matchedTerms,
    });
  }

  return hits
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

export function tabLabelFor(tabId: PartyTimeTabId): string {
  return TAB_LABELS[tabId] ?? 'Party Crew';
}
