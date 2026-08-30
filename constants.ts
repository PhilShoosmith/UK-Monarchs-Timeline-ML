
export const ROUNDS_PER_GAME = 10;
export const YEAR_TOLERANCE = 5; // Guesses within this many years are correct
export const TIMELINE_START_YEAR = 1050;
export const TIMELINE_END_YEAR = 2030;
export const ROUND_DURATION_SECONDS = 30;

export const HISTORICAL_PERIODS = [
  { name: 'Norman & Plantagenet', start: 1066, end: 1485, color: 'bg-red-900/50', textColor: 'text-red-300', borderColor: 'border-red-700', hoverBorder: 'hover:border-red-700', timelineColor: 'bg-red-600' },
  { name: 'Tudor', start: 1485, end: 1603, color: 'bg-green-900/50', textColor: 'text-green-300', borderColor: 'border-green-700', hoverBorder: 'hover:border-green-700', timelineColor: 'bg-green-600' },
  { name: 'Stuart', start: 1603, end: 1714, color: 'bg-sky-900/50', textColor: 'text-sky-300', borderColor: 'border-sky-700', hoverBorder: 'hover:border-sky-700', timelineColor: 'bg-sky-600' },
  { name: 'Hanover & Windsor', start: 1714, end: 2030, color: 'bg-purple-900/50', textColor: 'text-purple-300', borderColor: 'border-purple-700', hoverBorder: 'hover:border-purple-700', timelineColor: 'bg-purple-600' },
];