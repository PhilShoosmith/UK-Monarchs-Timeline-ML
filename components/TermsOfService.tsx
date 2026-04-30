import React from 'react';
import { useTranslation } from 'react-i18next';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col items-center p-8 overflow-y-auto">
      <div className="max-w-3xl w-full bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl animate-fade-in-up">
        <header className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {t("Terms of Service")}
          </h1>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-medium flex items-center gap-2"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            {t("Back")}
          </button>
        </header>

        <div className="text-slate-300 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("1. Acceptance of Terms")}</h2>
            <p>
              {t("Terms of Service Text 1")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("2. Use for Educational Purposes")}</h2>
            <p>
              {t("Terms of Service Text 2")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("3. Accuracy of Information")}</h2>
            <p>
              {t("Terms of Service Text 3")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("4. Limitation of Liability")}</h2>
            <p>
              {t("Terms of Service Text 4")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">{t("5. Intellectual Property")}</h2>
            <p>
              {t("Terms of Service Text 5")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;