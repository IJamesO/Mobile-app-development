import { ChevronLeft, Share2, Heart, Calendar, MapPin, Clock, Users, ChevronRight, Tag, ShieldCheck, ExternalLink } from 'lucide-react';
import { Screen } from '../../types';

interface DetailProps {
  setScreen: (screen: Screen) => void;
}

export function EventDetail({ setScreen }: DetailProps) {
  return (
    <div className="flex flex-col h-full bg-transparent relative text-white">
      <div className="absolute top-12 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
        <button 
          onClick={() => setScreen('SOCIAL')}
          className="w-10 h-10 glass rounded-xl flex items-center justify-center p-2 shadow-2xl pointer-events-auto active:scale-95 transition-transform text-white/60"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2 pointer-events-auto">
          <button className="w-10 h-10 glass rounded-xl flex items-center justify-center p-2 shadow-2xl text-white/60">
            <Share2 size={20} />
          </button>
          <button className="w-10 h-10 glass rounded-xl flex items-center justify-center p-2 shadow-2xl text-brand">
            <Heart size={20} />
          </button>
        </div>
      </div>

      <div className="h-[45%] overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" 
          alt="AI in Ethics" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/40" />
      </div>

      <div className="flex-1 glass-dark rounded-t-[40px] -mt-12 relative z-10 p-8 space-y-8 pb-32 scrollbar-hide overflow-y-auto">
        <div className="space-y-4">
          <span className="px-3 py-1 bg-brand text-white text-[10px] font-bold uppercase tracking-widest rounded-lg italic">Seminar</span>
          <h1 className="text-4xl font-black text-white leading-tight italic tracking-tight">AI in Ethics Seminar</h1>
          
          <div className="flex flex-wrap gap-6 py-2">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Date</p>
                <p className="text-xs font-bold text-white">Oct 24, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Time</p>
                <p className="text-xs font-bold text-white">2:00 PM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
           <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">About this event</h3>
           <p className="text-sm text-white/50 leading-relaxed font-medium">
             This seminar provides a comprehensive look at the ethical challenges posed by the rapid advancement of artificial intelligence. We will discuss privacy, algorithmic bias, and the future of work in an AI-driven society.
           </p>
        </div>

        <div className="glass p-6 rounded-[28px] flex items-center gap-4 shadow-xl relative group overflow-hidden">
           <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
           <div className="relative z-10 w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand">
             <MapPin size={24} />
           </div>
           <div className="relative z-10 flex-1">
              <h4 className="font-bold text-white leading-tight">Main Hall, Building C</h4>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-0.5">Salford Campus • 2nd Floor</p>
           </div>
           <ChevronRight size={20} className="relative z-10 text-white/10" />
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 glass-dark border-t border-white/5 z-50">
           <button className="w-full bg-brand text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-2xl shadow-brand/20 active:scale-95 transition-transform">
             Register for Event
           </button>
        </div>
      </div>
    </div>
  );
}

export function DealDetail({ setScreen }: DetailProps) {
  return (
    <div className="flex flex-col h-full bg-transparent relative text-white">
      <div className="absolute top-12 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
        <button 
          onClick={() => setScreen('DEALS')}
          className="w-10 h-10 glass rounded-xl flex items-center justify-center p-2 shadow-2xl pointer-events-auto active:scale-95 transition-transform text-white/60"
        >
          <ChevronLeft size={24} />
        </button>
        <button className="w-10 h-10 glass rounded-xl flex items-center justify-center p-2 shadow-2xl pointer-events-auto text-white/60">
          <Share2 size={20} />
        </button>
      </div>

      <div className="h-[45%] overflow-hidden bg-[#0f172a] flex items-center justify-center relative">
         <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
         <div className="relative flex flex-col items-center gap-4">
             <Tag size={48} className="text-white/20" />
             <p className="text-5xl font-black italic tracking-widest text-white/90">PIXELTECH</p>
         </div>
      </div>

      <div className="flex-1 glass-dark rounded-t-[40px] -mt-12 relative z-10 p-8 space-y-8 pb-32 scrollbar-hide overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-[0.2em] italic">
            <ShieldCheck size={14} />
            Verified Student Deal
          </div>
          <h1 className="text-4xl font-black text-white leading-tight italic tracking-tight">PixelTech Electronics</h1>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-black text-brand tracking-tighter">20%</span>
            <span className="text-xl font-black text-brand uppercase italic tracking-widest">Off</span>
          </div>
        </div>

        <div className="space-y-4">
           <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">How to use</h3>
           <p className="text-sm text-white/50 leading-relaxed font-medium">
             Present your digital student ID at any PixelTech store or use the unique code below at checkout online. Available for all University of Salford students.
           </p>
        </div>

        <div className="p-8 glass rounded-[36px] border-dashed border-white/10 flex flex-col items-center gap-4 relative group overflow-hidden">
           <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
           <p className="relative z-10 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Your Unique Code</p>
           <div className="relative z-10 glass border-white/10 px-8 py-5 rounded-2xl font-mono font-black text-2xl tracking-[0.3em] text-white shadow-2xl">
             SALFORD-20
           </div>
           <button className="relative z-10 text-[10px] font-black text-brand uppercase tracking-widest hover:text-white transition-colors">Copy Code</button>
        </div>

        <div className="space-y-4 pt-4">
           <div className="flex items-center gap-4 text-white/30 font-bold uppercase text-[10px] tracking-widest italic group">
              <Calendar size={18} className="text-white/20 group-hover:text-brand transition-colors" />
              <p>Valid until Dec 31, 2026</p>
           </div>
           <div className="flex items-center gap-4 text-white/30 font-bold uppercase text-[10px] tracking-widest italic group">
              <MapPin size={18} className="text-white/20 group-hover:text-brand transition-colors" />
              <p>In-store and online</p>
           </div>
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 glass-dark border-t border-white/5 z-50">
           <button className="w-full bg-brand text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-2xl shadow-brand/20 flex items-center justify-center gap-3 active:scale-95 transition-transform">
             <ExternalLink size={20} />
             Visit Website
           </button>
        </div>
      </div>
    </div>
  );
}
