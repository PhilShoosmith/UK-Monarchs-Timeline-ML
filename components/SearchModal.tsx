
import React, { useState, useEffect } from 'react';
import { HISTORICAL_PERIODS } from '../constants';
import { useTranslation } from 'react-i18next';

interface SearchFilters {
  name: string;
  startYear: string;
  endYear: string;
  period: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: SearchFilters) => void;
  initialFilters: SearchFilters;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onApply, initialFilters }) => {
  const { t } = useTranslation();
  const [name, setName] = useState(initialFilters.name);
  const [startYear, setStartYear] = useState(initialFilters.startYear);
  const [endYear, setEndYear] = useState(initialFilters.endYear);
  const [period, setPeriod] = useState(initialFilters.period);

  useEffect(() => {
    if (isOpen) {
      setName(initialFilters.name);
      setStartYear(initialFilters.startYear);
      setEndYear(initialFilters.endYear);
      setPeriod(initialFilters.period);
    }
  }, [isOpen, initialFilters]);


  if (!isOpen) return null;

  const handleApply = () => {
    onApply({ name, startYear, endYear, period });
  };

  const handleClear = () => {
    setName('');
    setStartYear('');
    setEndYear('');
    setPeriod('');
    onApply({ name: '', startYear: '', endYear: '', period: '' });
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div
        className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl max-w-md w-full flex flex-col animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-slate-700 flex justify-between items-center">
          <h2 id="search-modal-title" className="text-xl font-bold text-slate-200">
            {t("Advanced Search")}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-3xl leading-none font-bold"
            aria-label={t("Close")}
          >
            &times;
          </button>
        </header>
        <div className="p-6 space-y-6">
          {/* Search by Name */}
          <div>
            <label htmlFor="search-name" className="block text-sm font-medium text-slate-300 mb-2">{t("Search by Name")}</label>
            <input
              type="text"
              id="search-name"
              placeholder={t("e.g., Henry VIII")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-4 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* Search by Date Range */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">{t("Search by Reign Date")}</label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                placeholder={t("From")}
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                className="w-full text-center py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label={t("From")}
              />
              <span className="text-slate-400">–</span>
              <input
                type="number"
                placeholder={t("To")}
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
                className="w-full text-center py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label={t("To")}
              />
            </div>
          </div>

          {/* Search by Period */}
          <div>
            <label htmlFor="search-period" className="block text-sm font-medium text-slate-300 mb-2">{t("Search by Period")}</label>
            <select
              id="search-period"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              <option value="">{t("All Periods")}</option>
              {HISTORICAL_PERIODS.map(p => (
                <option key={p.name} value={p.name}>{t(p.name)}</option>
              ))}
            </select>
          </div>
        </div>
        <footer className="p-4 flex justify-between items-center border-t border-slate-700">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-slate-300 font-semibold rounded-lg hover:bg-slate-700 transition-colors"
          >
            {t("Clear Filters")}
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            {t("Apply")}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SearchModal;
