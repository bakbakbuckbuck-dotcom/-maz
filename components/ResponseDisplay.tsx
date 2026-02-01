
import React from 'react';

interface ResponseDisplayProps {
  response: string;
  onReset: () => void;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response, onReset }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="relative">
        <div className="absolute -inset-2 bg-yellow-600/10 blur-xl rounded-3xl"></div>
        <div className="relative luxury-gradient border-2 gold-border rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-40 h-10 gold-bg rotate-45 translate-x-12 -translate-y-4 shadow-sm"></div>
          </div>

          <div className="prose prose-invert prose-slate max-w-none font-amiri">
            <div className="text-xl md:text-2xl leading-loose text-slate-200 space-y-6 whitespace-pre-wrap text-right" dir="rtl">
              {response}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm font-tajawal text-center md:text-right">
              تم استنباط هذه الإجابة بناءً على فتاوى العلماء المعتمدين في البوابة.
              <br />
              <span className="italic text-xs">ملاحظة: هذا النظام يعتمد على الذكاء الاصطناعي، يرجى مراجعة المصادر الأصلية للتوثق.</span>
            </p>
            <button
              onClick={onReset}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-yellow-500 border border-yellow-900/30 rounded-full transition-all flex items-center gap-2 group"
            >
              <span>مسألة جديدة</span>
              <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseDisplay;
