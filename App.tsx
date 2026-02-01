
import React, { useState } from 'react';
import FatwaForm from './components/FatwaForm';
import LoadingScreen from './components/LoadingScreen';
import ResponseDisplay from './components/ResponseDisplay';
import { askFatwa } from './services/geminiService';
import { AppState } from './types';
import { IslamicPattern, SCHOLARS } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.IDLE);
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleAsk = async (question: string) => {
    setState(AppState.LOADING);
    setError('');
    try {
      const result = await askFatwa(question);
      setResponse(result || 'لم نتمكن من العثور على رد كافٍ.');
      setState(AppState.RESULT);
    } catch (err) {
      setError('حدث خطأ أثناء التواصل مع خوادم العلم. يرجى المحاولة لاحقاً.');
      setState(AppState.ERROR);
    }
  };

  const handleReset = () => {
    setState(AppState.IDLE);
    setResponse('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-yellow-900 selection:text-white overflow-x-hidden relative">
      <IslamicPattern />

      {/* Header Section */}
      <header className="relative py-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block p-4 border-2 border-yellow-600 rounded-full animate-gold-pulse mb-4">
             <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
             </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-amiri gold-text drop-shadow-lg tracking-tight">
            نور الفتاوى
          </h1>
          <p className="text-xl md:text-2xl font-tajawal text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            بوابة العلم الشرعي المستنبطة من الكتاب والسنة وفق منهج كبار العلماء والمحققين
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {SCHOLARS.map((scholar, idx) => (
              <span key={idx} className="px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-slate-500 text-sm font-tajawal">
                {scholar}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-24 relative z-10">
        {state === AppState.IDLE && (
          <FatwaForm onSubmit={handleAsk} />
        )}

        {state === AppState.LOADING && (
          <LoadingScreen />
        )}

        {state === AppState.RESULT && (
          <ResponseDisplay response={response} onReset={handleReset} />
        )}

        {state === AppState.ERROR && (
          <div className="max-w-2xl mx-auto p-10 bg-red-950/20 border border-red-900/50 rounded-2xl text-center space-y-6">
            <svg className="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xl font-amiri text-red-200">{error}</p>
            <button 
              onClick={handleReset}
              className="px-8 py-3 bg-red-900 text-white rounded-xl hover:bg-red-800 transition-colors font-tajawal"
            >
              المحاولة مرة أخرى
            </button>
          </div>
        )}
      </main>

      {/* Footer Decoration */}
      <footer className="py-10 text-center text-slate-600 border-t border-slate-900/50">
        <p className="font-tajawal text-sm tracking-widest uppercase">
          تم تطويره لخدمة العلم وأهله - {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
