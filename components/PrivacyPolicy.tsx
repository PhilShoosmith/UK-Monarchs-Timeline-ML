import React from 'react';
import { useTranslation } from 'react-i18next';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col items-center p-8 overflow-y-auto">
      <div className="max-w-3xl w-full bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl animate-fade-in-up">
        <header className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4 gap-4">
          <button
            onClick={onBack}
            className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-medium flex items-center gap-1 sm:gap-2 flex-shrink-0 text-sm sm:text-base"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            {t("Back")}
          </button>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 whitespace-nowrap text-right">
            {t("Privacy Policy")}
          </h1>
        </header>

        <div className="text-slate-300 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("1. Information Collection")}</h2>
            <p>
              {t("Privacy Policy Text 1")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("2. Use of External Services")}</h2>
            <p>
              {t("Privacy Policy Text 2")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("3. Cookies")}</h2>
            <p>
              {t("Privacy Policy Text 3")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("4. Third-Party Links")}</h2>
            <p>
              {t("Privacy Policy Text 4")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("5. Changes to This Policy")}</h2>
            <p>
              {t("Privacy Policy Text 5")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;