export interface Monarch {
  id: number;
  name: string;
  house: string;
  reignStart: number;
  reignEnd: number | null; // Can be null for the current monarch
  context: string;
  title: string;
  imageUrl?: string;
  coatOfArmsUrl?: string;
}

export type GameState = 'start' | 'playing' | 'feedback' | 'end' | 'review' | 'privacy' | 'terms' | 'hall-of-fame' | 'family-tree';

export type GameMode = 'year' | 'monarch' | 'fact';

export interface ScoreEntry {
  name: string;
  score: number;
  timeLeft: number;
  date: string;
}

export interface LeaderboardData {
  year: ScoreEntry[];
  monarch: ScoreEntry[];
  fact: ScoreEntry[];
}

export interface LastYearGuess {
  type: 'year';
  isCorrect: boolean;
  guessedYear: number;
  correctYear: number;
  timedOut?: boolean;
}

export interface LastMonarchGuess {
  type: 'monarch';
  isCorrect: boolean;
  guessedMonarchId: number;
  correctMonarchId: number;
  timedOut?: boolean;
}

export interface LastFactGuess {
  type: 'fact';
  isCorrect: boolean;
  guessedMonarchId: number;
  correctMonarchId: number;
  timedOut?: boolean;
}

export type AnyLastGuess = LastYearGuess | LastMonarchGuess | LastFactGuess;