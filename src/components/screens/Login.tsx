import { LogIn, HelpCircle, Info, Lock } from 'lucide-react';
import { Screen } from '../../types';

interface LoginProps {
  onLogin: () => void;
  setScreen: (screen: Screen) => void;
}

export default function Login({ onLogin, setScreen }: LoginProps) {
  return (
    <div className="flex flex-col h-full bg-transparent px-8 pt-12 pb-8 overflow-y-auto text-white">
      {/* Mock Image Placeholder */}
      <div className="relative w-full aspect-square rounded-[40px] glass flex items-center justify-center mb-10 overflow-hidden">
        {/* Simple geometric shapes to mimic the wireframe's icon */}
        <div className="absolute inset-0 opacity-10 flex">
          <div className="flex-1 border-r border-white transform rotate-45 scale-150 origin-center" />
          <div className="flex-1 border-l border-white transform -rotate-45 scale-150 origin-center" />
        </div>
        <div className="relative z-10 text-white/40">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        
        {/* Small floating logo seen in visual */}
        <div className="absolute bottom-6 right-6 w-20 h-20 bg-brand rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-brand">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-start gap-4">
        <div className="space-y-1">
          <p className="text-brand font-bold text-[10px] uppercase tracking-[0.2em]">University of Salford</p>
          <h1 className="text-4xl font-bold tracking-tight text-white leading-tight">
            Welcome to<br />Campus Connect
          </h1>
        </div>
        
        <p className="text-slate-400 text-lg leading-relaxed font-medium">
          Access your courses, social hubs, and exclusive university deals all in one place.
        </p>

        <button 
          onClick={onLogin}
          className="w-full mt-6 bg-brand text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform shadow-xl shadow-brand/30"
        >
          <LogIn size={20} />
          Log in with University Account
        </button>

        <div className="flex w-full gap-3 mt-4">
          <button className="flex-1 glass py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-white/80 hover:bg-white/10 transition-colors">
            <HelpCircle size={18} />
            Help
          </button>
          <button className="flex-1 glass py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-white/80 hover:bg-white/10 transition-colors">
            <Info size={18} />
            About
          </button>
        </div>
      </div>

      <div className="mt-auto pt-8 flex flex-col items-center gap-4 border-t border-white/5">
        <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
          <Lock size={12} />
          Secure Single Sign-On
        </div>
        
        <p className="text-[10px] text-slate-600 font-bold text-center uppercase tracking-widest leading-relaxed px-4">
          By continuing, you agree to our terms of service and privacy policy. Your data is protected by campus encryption standards.
        </p>
      </div>
    </div>
  );
}
