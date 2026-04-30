import React, { useState, useEffect, useRef } from 'react';
import { GameMode, ScoreEntry } from '../types';
import { supabase } from '../lib/supabase';
import { Volume2, VolumeX } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Confetti from './Confetti';

interface HallOfFameProps {
  onBack: () => void;
}

const HallOfFame: React.FC<HallOfFameProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [activeTab, setActiveTab] = useState<GameMode>('fact');
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(e => {
          console.log('Autoplay prevented:', e);
          setIsPlaying(false);
        });
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.error('Error playing audio:', e));
      }
    }
  };

  useEffect(() => {
    const fetchScores = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('royal_leaderboard')
          .select('name, score, time_left, created_at')
          .eq('game_mode', activeTab)
          .order('score', { ascending: false })
          .order('time_left', { ascending: false })
          .limit(10);

        if (error) throw error;
        
        // Map database fields to ScoreEntry interface
        const formattedScores: ScoreEntry[] = (data || []).map(item => ({
          name: item.name,
          score: item.score,
          timeLeft: item.time_left,
          date: item.created_at
        }));

        setScores(formattedScores);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScores();
  }, [activeTab]);

  const getTitle = (mode: GameMode) => {
    switch (mode) {
      case 'fact': return t('Guess the Monarch');
      case 'year': return t('Guess the Year');
      case 'monarch': return t('Guess the Successor');
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col items-center p-4 md:p-8 overflow-y-auto">
      {showConfetti && <Confetti />}
      <div className="max-w-4xl w-full bg-slate-800/90 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-700 shadow-2xl animate-fade-in-up">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-slate-700 pb-6">
          <div className="flex items-center gap-3">
             <div className="bg-amber-500/20 p-2 rounded-full border border-amber-500/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
             </div>
             <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600 uppercase tracking-tighter">
                {t("Hall of Fame")}
             </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleAudio}
              className="p-2 bg-slate-700 text-amber-400 rounded-full hover:bg-slate-600 transition-all shadow-lg flex items-center justify-center"
              aria-label={isPlaying ? t("Mute Music") : t("Play Music")}
              title={isPlaying ? t("Mute Music") : t("Play Music")}
            >
              {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
            <button
              onClick={onBack}
              className="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-bold shadow-lg flex items-center gap-2"
            >
              {t("Back to Menu")}
            </button>
          </div>
        </header>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          src="https://archive.org/download/GodSaveTheQueen_305/God-Save-The-Queen.mp3"
          loop
          preload="auto"
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {(['fact', 'year', 'monarch'] as GameMode[]).map(mode => (
            <button
              key={mode}
              onClick={() => setActiveTab(mode)}
              className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${
                activeTab === mode 
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                : 'bg-slate-700/50 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              {getTitle(mode)}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto min-h-[400px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-400 font-bold animate-pulse">{t("Consulting the Royal Archives...")}</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 text-[10px] sm:text-xs uppercase tracking-widest">
                  <th className="py-3 px-2 sm:px-4 font-black">{t("Rank")}</th>
                  <th className="py-3 px-2 sm:px-4 font-black">{t("Player")}</th>
                  <th className="py-3 px-2 sm:px-4 font-black text-center">{t("Correct")}</th>
                  <th className="py-3 px-2 sm:px-4 font-black text-center">{t("Time Left")}</th>
                  <th className="py-3 px-2 sm:px-4 font-black text-right hidden sm:table-cell">{t("Date")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {scores.length > 0 ? (
                  scores.map((entry, index) => (
                    <tr key={index} className={`group hover:bg-slate-700/30 transition-colors ${index === 0 ? 'bg-amber-500/5' : ''}`}>
                      <td className="py-3 px-2 sm:px-4">
                        <div className="flex items-center gap-2">
                          <span className={`w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-base rounded-full flex items-center justify-center font-bold ${
                            index === 0 ? 'bg-amber-400 text-amber-950 scale-110 shadow-[0_0_10px_rgba(251,191,36,0.5)]' :
                            index === 1 ? 'bg-slate-300 text-slate-900' :
                            index === 2 ? 'bg-amber-700 text-amber-100' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:px-4 font-bold text-sm sm:text-base text-slate-100 group-hover:text-blue-400 transition-colors truncate max-w-[100px] sm:max-w-[200px]">
                        {entry.name}
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-green-400 font-black text-base sm:text-lg">{entry.score}</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <span className="text-yellow-400 font-mono font-bold text-xs sm:text-sm">{entry.timeLeft}s</span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-right text-slate-500 text-xs sm:text-sm hidden sm:table-cell">
                        {new Date(entry.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-500 font-medium italic">
                      {t("The history books are currently empty for this category...")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;