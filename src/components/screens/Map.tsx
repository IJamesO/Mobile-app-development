import { Search, MapPin, Coffee, Library, Navigation2, Plus, Minus, Target, Menu, Users } from 'lucide-react';
import { Screen } from '../../types';

interface MapProps {
  setScreen: (screen: Screen) => void;
}

export default function Map({ setScreen }: MapProps) {
  const categories = [
    { label: 'Libraries', icon: Library },
    { label: 'Food & Coffee', icon: Coffee },
    { label: 'Student Hubs', icon: MapPin },
  ];

  return (
    <div className="flex flex-col h-full bg-transparent relative overflow-hidden text-white">
      {/* Search & Header */}
      <div className="absolute top-0 left-0 right-0 z-20 px-6 pt-12 pb-6 space-y-4 pointer-events-none">
        <div className="flex items-center justify-between mb-2">
          <button className="w-10 h-10 glass rounded-xl shadow-2xl flex items-center justify-center p-2 pointer-events-auto active:scale-95 transition-transform text-white/60">
            <Menu size={20} />
          </button>
          <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl pointer-events-auto">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        <div className="relative pointer-events-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
          <input 
            type="text" 
            placeholder="Search halls, labs, library..."
            className="w-full glass py-4 pl-12 pr-6 rounded-[24px] shadow-2xl focus:outline-none placeholder:text-white/30 font-medium text-sm text-white"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide pointer-events-auto pb-2">
          {categories.map((cat, i) => (
            <button 
              key={i}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-lg whitespace-nowrap text-[10px] font-bold uppercase tracking-widest transition-all ${i === 2 ? 'bg-brand text-white shadow-brand/20' : 'glass text-white/60'}`}
            >
              <cat.icon size={14} />
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map Content (Simulated) */}
      <div className="flex-1 relative bg-transparent">
        {/* Sub-mesh blobs for map depth */}
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-blue-500 blur-[100px] opacity-[0.05] rounded-full pointer-events-none" />
        
        {/* Markers */}
        <div className="absolute top-[35%] left-[45%] flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(225,29,72,0.4)] relative animate-bounce">
            <Library size={24} />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand rotate-45" />
          </div>
          <span className="glass px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold uppercase tracking-widest text-white italic">Main Library</span>
        </div>

        <div className="absolute top-[55%] right-[15%] flex flex-col items-center gap-2">
          <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white shadow-xl relative border-white/10">
            <Users size={24} />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 glass border-none rotate-45" />
          </div>
          <span className="glass px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold uppercase tracking-widest text-white/60 italic">Student Hub</span>
        </div>

        {/* Map Controls */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <button className="w-12 h-12 glass rounded-2xl shadow-2xl flex items-center justify-center text-white/40 active:scale-90 transition-transform">
            <Plus size={20} />
          </button>
          <button className="w-12 h-12 glass rounded-2xl shadow-2xl flex items-center justify-center text-white/40 active:scale-90 transition-transform">
            <Minus size={20} />
          </button>
        </div>

        <button className="absolute right-6 bottom-64 w-12 h-12 bg-brand text-white rounded-full shadow-2xl shadow-brand/40 flex items-center justify-center active:scale-90 transition-transform z-20">
          <Target size={24} />
        </button>
      </div>

      {/* Nearby Locations Panel */}
      <div className="glass-dark rounded-t-[40px] shadow-2xl p-6 space-y-6 relative z-30 pb-28">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Nearby Locations</h3>
          <button className="w-8 h-8 flex items-center justify-center text-white/20 hover:text-white/60 transition-colors">
            <Minus size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="glass p-4 rounded-[28px] flex items-center gap-4 hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand shadow-lg">
              <Coffee size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-white leading-tight">Central Coffee Co.</h4>
              <p className="text-[10px] text-white/30 uppercase font-bold tracking-wider mt-0.5">2 min walk • <span className="text-emerald-400">Open</span></p>
            </div>
            <button className="w-10 h-10 glass rounded-xl shadow-lg flex items-center justify-center text-white/20 group-hover:text-white group-hover:bg-brand/20 transition-all">
              <Navigation2 size={18} className="rotate-45" />
            </button>
          </div>

          <div className="glass p-4 rounded-[28px] flex items-center gap-4 hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand shadow-lg">
              <Library size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-white leading-tight">Quiet Study Hall 4</h4>
              <p className="text-[10px] text-white/30 uppercase font-bold tracking-wider mt-0.5">4 min walk • <span className="text-amber-400">Busy</span></p>
            </div>
            <button className="w-10 h-10 glass rounded-xl shadow-lg flex items-center justify-center text-white/20 group-hover:text-white group-hover:bg-brand/20 transition-all">
              <Navigation2 size={18} className="rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
