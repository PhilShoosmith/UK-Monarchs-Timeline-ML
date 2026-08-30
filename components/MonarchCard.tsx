
import React, { useRef } from 'react';
import { Monarch } from '../types';
import HouseIcon from './HouseIcon';
import CoatOfArms from './CoatOfArms';
import { useTranslation } from 'react-i18next';

interface MonarchCardProps {
  monarch: Monarch;
  showReign: boolean;
  isAdmin?: boolean;
  onPortraitUpload?: (monarchId: number, newImageUrl: string) => void;
  stagedPortraitUrl?: string;
  onCoatOfArmsUpload?: (monarchId: number, newImageUrl: string) => void;
  stagedCoatOfArmsUrl?: string;
}

const getHouseStyles = (house: string): { badge: string; cardHover: string; } => {
  const housePeriodMap: { [key: string]: string } = {
    'Normandy': 'Norman & Plantagenet',
    'Blois': 'Norman & Plantagenet',
    'Plantagenet': 'Norman & Plantagenet',
    'Lancaster': 'Norman & Plantagenet',
    'York': 'Norman & Plantagenet',
    'Tudor': 'Tudor',
    'Stuart': 'Stuart',
    'Hanover': 'Hanover & Windsor',
    'Saxe-Coburg and Gotha': 'Hanover & Windsor',
    'Windsor': 'Hanover & Windsor',
  };

  const period = housePeriodMap[house];

  switch (period) {
    case 'Norman & Plantagenet': return { badge: 'bg-red-500/10 text-red-300', cardHover: 'hover:border-red-500/50' };
    case 'Tudor':      return { badge: 'bg-green-500/10 text-green-300', cardHover: 'hover:border-green-500/50' };
    case 'Stuart':     return { badge: 'bg-sky-500/10 text-sky-300', cardHover: 'hover:border-sky-500/50' };
    case 'Hanover & Windsor': return { badge: 'bg-purple-500/10 text-purple-300', cardHover: 'hover:border-purple-500/50' };
    default:            return { badge: 'bg-slate-700 text-slate-300', cardHover: 'hover:border-slate-600' };
  }
};

const MonarchCard: React.FC<MonarchCardProps> = ({ monarch, showReign, isAdmin, onPortraitUpload, stagedPortraitUrl, onCoatOfArmsUpload, stagedCoatOfArmsUrl }) => {
  const { t } = useTranslation();
  // Guard against missing monarch data
  if (!monarch) {
    return null;
  }

  const portraitFileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    portraitFileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onPortraitUpload && monarch) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          onPortraitUpload(monarch.id, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoatOfArmsUpload = (imageUrl: string) => {
    if (onCoatOfArmsUpload) {
      onCoatOfArmsUpload(monarch.id, imageUrl);
    }
  };

  const { name, title, house, reignStart, reignEnd } = monarch;
  const styles = getHouseStyles(house);
  const displayImageUrl = stagedPortraitUrl || monarch.imageUrl;
  
  const reignEndDisplay = reignEnd ?? t('Present');
  let durationDisplay: string;

  if (reignEnd) {
    if (reignEnd === reignStart) {
      durationDisplay = t('(less than a year)');
    } else {
      const duration = reignEnd - reignStart;
      durationDisplay = duration === 1 ? t("({{duration}} year)", { duration }) : t("({{duration}} years)", { duration });
    }
  } else {
    const currentYear = new Date().getFullYear();
    const duration = currentYear - reignStart;
    durationDisplay = duration === 1 ? t("({{duration}} year and counting)", { duration }) : t("({{duration}} years and counting)", { duration });
  }
  
  return (
    <div className={`bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700 flex flex-col items-center w-full max-w-sm transform transition-all duration-500 hover:scale-105 ${styles.cardHover}`}>
      {/* Ornate Frame for the Portrait */}
      <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black p-2 rounded-lg shadow-lg mb-4 w-full">
        <div 
          className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-slate-700 flex items-center justify-center group shadow-inner"
        >
          {displayImageUrl ? (
            <img 
              src={displayImageUrl} 
              alt={`Portrait of ${name}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              key={displayImageUrl}
            />
          ) : (
            <span className="text-slate-400">{t("Portrait not available")}</span>
          )}
          {stagedPortraitUrl && (
            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-lg pointer-events-none">
              {t("PENDING")}
            </div>
          )}
          {isAdmin && (
            <>
              <div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                onClick={(e) => { e.stopPropagation(); handleUploadClick(); }}
                role="button"
                aria-label={t("Change Portrait")}
              >
                <div className="text-center text-white p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  <p className="mt-2 font-semibold">{t("Change Portrait")}</p>
                </div>
              </div>
              <input
                type="file"
                ref={portraitFileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </>
          )}
        </div>
      </div>
      <div 
        className="text-center w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white pointer-events-none">{t(name)}</h2>
        <p className="text-lg sm:text-xl text-slate-400 mt-2 pointer-events-none">{t(title)}</p>
        <div className={`text-md mt-2 font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 ${styles.badge} pointer-events-none`}>
          <HouseIcon house={house} className="h-5 w-5" />
          <span>{t(`House of {{house}}`, { house: t(house) })}</span>
        </div>
      </div>
      
      {showReign && (
        <p className="text-md text-amber-300/80 mt-2 font-mono">
          {reignStart} – {reignEndDisplay} {durationDisplay}
        </p>
      )}

      <div className="mt-6 pt-6 w-full border-t border-slate-700/50 flex justify-center">
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-8 text-slate-400 animate-rise-up" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
          </div>
          <CoatOfArms
              className="w-28 h-28"
              isAdmin={isAdmin}
              imageUrl={stagedCoatOfArmsUrl || monarch.coatOfArmsUrl}
              onImageUpload={handleCoatOfArmsUpload}
          />
          <div className="w-8 h-8 text-slate-400 animate-rise-up" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonarchCard;
