import { Menu, User, Bell, Accessibility, Shield, HelpCircle, LogOut, ChevronRight, Share2, Edit2 } from 'lucide-react';
import { Screen } from '../../types';

interface ProfileProps {
  onLogout: () => void;
  setScreen: (screen: Screen) => void;
}

export default function Profile({ onLogout, setScreen }: ProfileProps) {
  const settings = [
    { label: 'Notifications', icon: Bell, screen: null },
    { label: 'Accessibility', icon: Accessibility, sub: 'Text size, Contrast', screen: null },
    { label: 'Privacy & Safety', icon: Shield, screen: null },
  ];

  return (
    <div className="flex flex-col h-full bg-transparent pb-20 text-white">
      {/* Header */}
      <div className="glass-dark px-6 pt-12 pb-6 flex items-center justify-between sticky top-0 z-10 shadow-2xl">
        <button className="w-10 h-10 flex items-center justify-center p-2 hover:bg-white/5 rounded-xl text-white/50 transition-colors">
          <Menu size={24} />
        </button>
        <span className="font-bold text-xl tracking-tight italic">Campus Connect</span>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
           <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="px-6 py-10 space-y-12 pb-32 scrollbar-hide flex-1 overflow-y-auto">
        {/* Profile Info */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-28 h-28 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden bg-transparent glass p-1">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop" 
                alt="Jordan" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-8 h-8 bg-brand border-4 border-[#0f172a] rounded-full flex items-center justify-center shadow-lg">
               <Edit2 size={12} className="text-white" />
            </div>
          </div>
          <div className="text-center space-y-1">
             <h2 className="text-3xl font-black text-white italic tracking-tight">Jordan Davis</h2>
             <p className="text-white/40 font-bold uppercase text-[10px] tracking-widest leading-loose">Computer Science • <span className="text-brand">3rd Year</span></p>
          </div>
          <div className="flex gap-4 w-full px-4">
             <button className="flex-1 bg-brand text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand/20 active:scale-95 transition-transform text-xs uppercase tracking-widest">
               <Edit2 size={16} />
               Edit
             </button>
             <button className="flex-1 glass text-white/60 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform text-xs uppercase tracking-widest">
               <Share2 size={16} />
               Share
             </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass p-6 rounded-[32px] flex flex-col gap-2 relative group overflow-hidden">
            <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
            <p className="relative z-10 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Reputation</p>
            <p className="relative z-10 text-4xl font-black text-white tracking-tighter italic">4.9</p>
          </div>
          <div className="glass p-6 rounded-[32px] flex flex-col gap-2 relative group overflow-hidden">
            <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
            <p className="relative z-10 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Connections</p>
            <p className="relative z-10 text-4xl font-black text-white tracking-tighter italic">128</p>
          </div>
        </div>

        {/* Account Settings */}
        <section className="space-y-6">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Account settings</h3>
          <div className="glass rounded-[36px] overflow-hidden divide-y divide-white/5 shadow-2xl">
            {settings.map((item, i) => (
              <button key={i} className="w-full p-6 flex items-center gap-5 hover:bg-white/5 transition-colors group">
                 <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/20 group-hover:text-brand transition-all">
                   <item.icon size={24} />
                 </div>
                 <div className="flex-1 text-left">
                   <p className="font-bold text-lg text-white group-hover:text-brand transition-colors">{item.label}</p>
                   {item.sub && <p className="text-[10px] text-white/30 font-bold uppercase tracking-wider">{item.sub}</p>}
                 </div>
                 <ChevronRight size={20} className="text-white/10 group-hover:text-white transition-colors" />
              </button>
            ))}
          </div>
        </section>

        {/* Support */}
        <section className="space-y-6">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Support</h3>
          <div className="glass rounded-[36px] overflow-hidden divide-y divide-white/5 shadow-2xl">
             <button className="w-full p-6 flex items-center gap-5 hover:bg-white/5 transition-colors group text-left">
                 <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/20 group-hover:text-brand transition-all">
                   <HelpCircle size={24} />
                 </div>
                 <p className="flex-1 font-bold text-lg text-white group-hover:text-brand transition-colors">Help Center</p>
                 <ChevronRight size={20} className="text-white/10 group-hover:text-white transition-colors" />
             </button>
             <button 
               onClick={onLogout}
               className="w-full p-6 flex items-center gap-5 hover:bg-brand/10 transition-colors group text-left"
             >
                 <div className="w-12 h-12 glass border-none bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                   <LogOut size={24} />
                 </div>
                 <p className="flex-1 font-bold text-lg text-brand uppercase tracking-widest text-[10px]">Sign out</p>
             </button>
          </div>
        </section>
      </div>
    </div>
  );
}
