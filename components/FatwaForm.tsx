
import React, { useState } from 'react';

interface FatwaFormProps {
  onSubmit: (question: string) => void;
}

const FatwaForm: React.FC<FatwaFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      onSubmit(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-8 animate-fade-in">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl">
          <label className="block text-xl font-amiri gold-text mb-4 text-right">
            اكتب مسألتك بوضوح وتفصيل:
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 focus:border-yellow-600 rounded-xl p-6 text-lg md:text-xl text-slate-200 font-amiri leading-relaxed focus:ring-1 focus:ring-yellow-600 outline-none transition-all resize-none min-h-[200px]"
            placeholder="مثال: ما حكم الصلاة في السفر إذا كانت المسافة..."
            dir="rtl"
          />
          <div className="mt-6 flex justify-between items-center text-sm text-slate-500 font-tajawal">
            <span>اطلب العلم من أهله</span>
            <span>{text.length} حرف</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={text.length < 10}
        className={`w-full py-5 rounded-xl font-amiri text-2xl transition-all duration-500 shadow-lg flex items-center justify-center gap-3
          ${text.length >= 10 
            ? 'gold-bg text-slate-900 hover:bg-yellow-500 hover:scale-[1.02] cursor-pointer' 
            : 'bg-slate-800 text-slate-600 cursor-not-allowed'}`}
      >
        <span>استخلاص الفتوى الشرعية</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </form>
  );
};

export default FatwaForm;
