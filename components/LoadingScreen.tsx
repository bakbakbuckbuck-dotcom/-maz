
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 bg-opacity-90 backdrop-blur-md">
      <div className="relative w-32 h-32 mb-8">
        {/* Decorative outer rings */}
        <div className="absolute inset-0 border-4 border-dashed border-yellow-600 rounded-full animate-spin [animation-duration:10s]"></div>
        <div className="absolute inset-2 border-2 border-solid border-yellow-500 rounded-full animate-spin [animation-duration:5s] direction-reverse"></div>
        
        {/* Pulsing center icon (Crescent/Star motif) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 gold-bg rounded-full animate-pulse flex items-center justify-center">
             <svg className="w-10 h-10 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
             </svg>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-amiri gold-text animate-pulse tracking-widest text-center px-4">
        جاري استحضار الفتوى من بطون الكتب...
        <br />
        <span className="text-sm mt-2 block text-slate-400 font-sans tracking-normal">يرجى الانتظار، فالعلم يُؤتى ولا يأتي</span>
      </h2>
    </div>
  );
};

export default LoadingScreen;
