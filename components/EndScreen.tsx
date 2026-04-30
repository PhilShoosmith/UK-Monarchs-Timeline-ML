import React, { useState, useEffect } from 'react';
import { ROUNDS_PER_GAME } from '../constants';
import { GameMode } from '../types';
import { supabase } from '../lib/supabase';
import { useTranslation } from 'react-i18next';

interface EndScreenProps {
  score: number;
  timeLeft: number;
  gameMode: GameMode;
  onRestart: () => void;
  onShowHallOfFame: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, timeLeft, gameMode, onRestart, onShowHallOfFame }) => {
  const { t } = useTranslation();
  const [displayScore, setDisplayScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getTitleAndMessage = () => {
    const percentage = (score / ROUNDS_PER_GAME) * 100;
    if (percentage === 100) return { title: t("A Royal Historian!"), message: t("Perfect score! Your knowledge of the monarchy is truly impeccable.") };
    if (percentage >= 80) return { title: t("Noble Scholar!"), message: t("An impressive performance! You know your kings and queens.") };
    if (percentage >= 50) return { title: t("Court Contender"), message: t("A respectable score. You're well on your way to mastering royal history.") };
    if (percentage >= 20) return { title: t("Village Commoner"), message: t("A good start, but there's more to learn about the Crown.") };
    return { title: t("A Humble Subject"), message: t("Don't be discouraged! History is a vast kingdom to explore. Try again!") };
  };

  const { title, message } = getTitleAndMessage();

  useEffect(() => {
    if (score === 0) {
        setDisplayScore(0);
        return;
    };
    let currentScore = 0;
    const timer = setInterval(() => {
      currentScore += 1;
      if (currentScore > score) {
        clearInterval(timer);
        setDisplayScore(score);
      } else {
        setDisplayScore(currentScore);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [score]);

  const handleSubmitScore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      const { error } = await supabase
        .from('royal_leaderboard')
        .insert([
          { 
            name: playerName.trim(), 
            score: score, 
            time_left: timeLeft, 
            game_mode: gameMode 
          }
        ]);

      if (error) throw error;
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting score to Supabase:', err);
      setErrorMsg(t('Submission failed. Check your connection.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-slate-900 opacity-80"></div>
      <div className="relative text-center p-8 bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-700 max-w-lg mx-auto z-10 animate-fade-in-up">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-2 animate-fade-in-up animation-delay-200">
          {t("Game Over")}
        </h2>
        <h3 className="text-3xl font-bold text-slate-200 mb-4 animate-fade-in-up animation-delay-400">{title}</h3>
        <p className="text-lg text-slate-300 mb-6 animate-fade-in-up animation-delay-600">
            {message}
        </p>

        <div className="w-full bg-slate-900/50 rounded-lg p-4 my-8 flex flex-col gap-2 animate-fade-in-up animation-delay-800">
          <div className="flex justify-around text-center">
            <div className="px-4">
                <p className="text-5xl font-bold text-green-400 transition-all duration-300">{displayScore}</p>
                <p className="text-slate-400 mt-1 text-sm uppercase tracking-wider">{t("Correct")}</p>
            </div>
            <div className="border-l border-slate-700"></div>
            <div className="px-4">
                <p className="text-5xl font-bold text-yellow-400 transition-all duration-300">{timeLeft}s</p>
                <p className="text-slate-400 mt-1 text-sm uppercase tracking-wider">{t("Time Left")}</p>
            </div>
          </div>
        </div>

        {score > 0 && !isSubmitted ? (
          <form onSubmit={handleSubmitScore} className="mb-8 p-4 bg-slate-900/30 rounded-lg border border-slate-700/50 animate-fade-in-up animation-delay-1000">
             <p className="text-sm text-slate-400 mb-3 font-semibold uppercase tracking-wider">{t("Enter your name for the Hall of Fame")}</p>
             <div className="flex gap-2">
               <input 
                type="text" 
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder={t("Your name")}
                maxLength={15}
                required
                disabled={isSubmitting}
                className="flex-grow bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-50"
               />
               <button 
                type="submit"
                disabled={!playerName.trim() || isSubmitting}
                className="px-6 py-2 bg-amber-500 text-amber-950 font-bold rounded-lg hover:bg-amber-400 disabled:opacity-50 transition-all flex items-center justify-center min-w-[100px]"
               >
                 {isSubmitting ? (
                   <span className="w-5 h-5 border-2 border-amber-950 border-t-transparent rounded-full animate-spin"></span>
                 ) : t('Submit')}
               </button>
             </div>
             {errorMsg && <p className="text-red-400 text-xs mt-2 text-left">{errorMsg}</p>}
          </form>
        ) : isSubmitted ? (
          <div className="mb-8 flex flex-col items-center gap-4 animate-fade-in">
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30 text-green-400 font-bold w-full">
               👑 {t("Score officially chronicled!")}
            </div>
            <button
                onClick={onShowHallOfFame}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-2 underline underline-offset-4 decoration-amber-500/30 hover:decoration-amber-300 transition-all"
            >
                {t("View Hall of Fame Leaderboard")}
            </button>
          </div>
        ) : null}
      
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
                onClick={onRestart}
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 animate-fade-in-up animation-delay-1000"
            >
                {t("Play Again")}
            </button>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;