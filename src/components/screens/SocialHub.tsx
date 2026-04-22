import { Search, Heart, MessageSquare, Share2, Menu, Calendar, MapPin, Users } from 'lucide-react';
import { Screen } from '../../types';

interface SocialHubProps {
  setScreen: (screen: Screen) => void;
}

export default function SocialHub({ setScreen }: SocialHubProps) {
  const societies = [
    { name: 'Dev Club', icon: <div className="text-white">{"{ }"}</div> },
    { name: 'Arts Soc', icon: <div className="text-white">🎨</div> },
    { name: 'Debate', icon: <MessageSquare size={20} className="text-white" /> },
    { name: 'Football', icon: <div className="text-white">⚽</div> },
  ];

  return (
    <div className="flex flex-col h-full bg-transparent pb-20 text-white">
      {/* Header */}
      <div className="glass-dark px-6 pt-12 pb-6 space-y-6 sticky top-0 z-20 shadow-2xl">
        <div className="flex items-center justify-between">
          <button className="w-10 h-10 flex items-center justify-center p-2 hover:bg-white/5 rounded-xl text-white/50 transition-colors">
            <Menu size={24} />
          </button>
          <span className="font-bold text-xl tracking-tight italic">Campus Connect</span>
          <button onClick={() => setScreen('PROFILE')} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
          <input 
            type="text" 
            placeholder="Search groups or events..."
            className="w-full glass py-3.5 pl-11 pr-6 rounded-[18px] focus:outline-none placeholder:text-white/30 font-medium text-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <button className="px-5 py-2 bg-brand text-white rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap shadow-lg shadow-brand/20">All Feed</button>
          <button className="px-5 py-2 glass text-white/60 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap hover:bg-white/5 transition-colors">Societies</button>
          <button className="px-5 py-2 glass text-white/60 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap hover:bg-white/5 transition-colors">Seminars</button>
          <button className="px-5 py-2 glass text-white/60 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap hover:bg-white/5 transition-colors">Workshops</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 pb-32 scrollbar-hide">
        {/* My Societies */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">My Societies</h3>
            <button className="text-[10px] font-bold text-white/20 uppercase tracking-widest hover:text-white transition-colors">See All</button>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
            {societies.map((soc, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <button className="w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-lg transition-all hover:bg-white/10 active:scale-95 group-hover:border-brand/50">
                  {soc.icon}
                </button>
                <span className="text-[10px] font-bold text-white/50 group-hover:text-white transition-colors tracking-tight">{soc.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="space-y-6">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Upcoming Events</h3>
          
          <button 
            onClick={() => setScreen('EVENT_DETAIL')}
            className="w-full glass rounded-[36px] overflow-hidden text-left group active:scale-[0.99] transition-transform hover:bg-white/5 shadow-2xl"
          >
            <div className="relative h-52">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="AI Event" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-80" />
              <div className="absolute top-6 right-6 glass px-3 py-1.5 rounded-xl flex flex-col items-center">
                <span className="text-[10px] font-bold text-brand uppercase italic tracking-tighter">Oct</span>
                <span className="text-lg font-black text-white leading-none">24</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-brand transition-colors">AI in Ethics Seminar</h4>
                <div className="flex items-center gap-2 text-white/40 font-bold text-[10px] uppercase tracking-widest">
                  <MapPin size={12} className="text-brand" />
                  Main Hall, Building C
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed line-clamp-2 font-medium">
                Join us for a deep dive into the ethical implications of artificial intelligence in...
              </p>
              <div className="pt-2 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f172a] glass flex items-center justify-center overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=EventUser${i}`} alt="user" className="opacity-80" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#0f172a] glass flex items-center justify-center text-[10px] font-bold text-white/40 italic">
                    +12
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Heart size={20} className="text-white/20 hover:text-brand transition-colors" />
                  <button className="bg-brand text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-brand/20">Join</button>
                </div>
              </div>
            </div>
          </button>

          <div className="glass p-5 rounded-[32px] flex gap-5 items-center relative active:scale-[0.99] transition-transform hover:bg-white/5 group">
            <div className="w-28 h-28 glass rounded-2xl overflow-hidden shrink-0 border-white/5 relative">
               <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Workshop" />
               <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex-1 space-y-1">
              <span className="inline-block px-2 py-0.5 bg-brand text-white text-[10px] font-bold uppercase rounded tracking-widest italic">Workshop</span>
              <h4 className="font-bold text-lg text-white leading-tight group-hover:text-brand transition-colors">Product Design Hub</h4>
              <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em]">Tomorrow, 2:00 PM</p>
              <div className="flex gap-4 pt-2">
                <button className="text-white/20 hover:text-brand transition-colors"><Heart size={18} /></button>
                <button className="text-white/20 hover:text-white transition-colors"><Share2 size={18} /></button>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-[36px] space-y-4 group hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-brand shadow-lg">
                <Users size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Student Council</h4>
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">2 hours ago</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight italic group-hover:text-brand transition-colors">Campus Redevelopment: Vote!</h4>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              Your voice matters in the upcoming renovation of the Student Union. Check the proposed floor plans.
            </p>
            <div className="aspect-video glass rounded-32 border border-white/5 flex items-center justify-center text-white/10 group-hover:text-brand/10 transition-colors">
               <Share2 size={48} />
            </div>
            <div className="flex gap-6 pt-2">
               <button className="flex items-center gap-2 text-white/30 font-bold text-[10px] uppercase tracking-widest hover:text-brand transition-all">
                 <Heart size={18} className="text-brand/50" /> 24
               </button>
               <button className="flex items-center gap-2 text-white/30 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-all">
                 <MessageSquare size={18} /> 8 Comments
               </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
