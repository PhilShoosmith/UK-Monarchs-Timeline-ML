import React, { useState, useMemo } from 'react';
import { Monarch, AnyLastGuess } from '../types';
import { useTranslation } from 'react-i18next';

interface NextMonarchGuesserProps {
  monarchs: Monarch[];
  onSubmit: (monarchId: number) => void;
  disabled: boolean;
  lastGuess: AnyLastGuess | null;
}

const NextMonarchGuesser: React.FC<NextMonarchGuesserProps> = ({ monarchs, onSubmit, disabled, lastGuess }) => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<string>('');

  const sortedMonarchs = useMemo(() => 
    [...monarchs].sort((a, b) => t(a.name).localeCompare(t(b.name))),
    [monarchs, t]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled || !selectedId) return;
    onSubmit(parseInt(selectedId, 10));
  };

  const feedbackClass = useMemo(() => {
    if (lastGuess?.type === 'monarch') {
      return lastGuess.isCorrect
        ? 'bg-green-600 hover:bg-green-700 ring-2 ring-green-400 scale-105'
        : 'bg-red-600 hover:bg-red-700 ring-2 ring-red-400 scale-105';
    }
    return 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500/50';
  }, [lastGuess]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 w-full">
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        disabled={disabled}
        className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white text-lg w-full flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 disabled:opacity-50"
        aria-label={t("Select the next monarch")}
      >
        <option value="" disabled>{t("Select a monarch...")}</option>
        {sortedMonarchs.map(monarch => (
          <option key={monarch.id} value={monarch.id}>
            {t(monarch.name)}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={disabled || !selectedId}
        className={`w-full sm:w-auto px-6 py-3 text-white font-bold rounded-lg transform transition-all duration-300 ease-in-out shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 focus:outline-none ${feedbackClass}`}
      >
        {t("Submit")}
      </button>
    </form>
  );
};

export default NextMonarchGuesser;
