import { Bell, Calendar, Map as MapIcon, Megaphone, Users, Tag, Plus, Menu } from 'lucide-react';
import { Screen } from '../../types';

interface DashboardProps {
  setScreen: (screen: Screen) => void;
}

export default function Dashboard({ setScreen }: DashboardProps) {
  return (
    <div className="flex flex-col h-full bg-transparent pb-20 text-white">
      {/* Header */}
      <div className="glass-dark px-6 pt-12 pb-6 flex items-center justify-between sticky top-0 z-20">
        <button className="w-10 h-10 flex items-center justify-center p-2 hover:bg-white/5 rounded-xl text-white/60 transition-colors">
          <Menu size={24} />
        </button>
        <span className="font-bold text-xl tracking-tight text-white italic">Campus Connect</span>
        <button 
          onClick={() => setScreen('PROFILE')}
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-lg"
        >
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      <div className="px-6 py-6 space-y-8">
        {/* Welcome */}
        <div className="space-y-1">
          <p className="text-brand font-bold text-[10px] uppercase tracking-[0.2em]">Monday, October 21</p>
          <div className="flex flex-col">
            <span className="text-white/60 text-lg font-medium">Good morning,</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Alex J.</h2>
          </div>
        </div>

        {/* Notifications Section */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-bold text-white/40 px-1 uppercase tracking-widest">Urgent Notifications</h3>
          <div className="space-y-3">
            <div className="glass p-5 rounded-[28px] flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-block px-2 py-0.5 bg-brand/10 text-brand text-[10px] font-bold uppercase rounded tracking-widest">Timetable Change</span>
                <h4 className="font-bold text-lg text-white">Physics 101 moved</h4>
                <p className="text-sm text-white/50 leading-snug font-medium">Moved from Hall A to Science Block 4, Room 202.</p>
              </div>
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40">
                <Calendar size={20} />
              </div>
            </div>

            <div className="glass p-5 rounded-[28px] flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-block px-2 py-0.5 bg-slate-500/10 text-slate-400 text-[10px] font-bold uppercase rounded tracking-widest">Deadline</span>
                <h4 className="font-bold text-lg text-white">History Essay</h4>
                <p className="text-sm text-white/50 leading-snug font-medium">Due in 4 hours. Final submission portal is open.</p>
              </div>
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40">
                <Bell size={20} />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-bold text-white/40 px-1 uppercase tracking-widest">Quick Access</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setScreen('TIMETABLE')}
              className="glass p-5 rounded-[28px] flex flex-col items-start gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="text-brand">
                <Calendar size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg text-white">Timetable</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">3 classes today</p>
              </div>
            </button>
            <button 
              onClick={() => setScreen('MAP')}
              className="glass p-5 rounded-[28px] flex flex-col items-start gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="text-brand">
                <MapIcon size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg text-white">Campus Map</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Find your way</p>
              </div>
            </button>
          </div>

          <button className="w-full relative overflow-hidden glass p-5 rounded-[28px] flex items-center gap-4 group hover:bg-white/5 transition-colors">
            {/* Background Mesh for Announcements */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-brand blur-2xl group-hover:opacity-10 transition-opacity" />
            <div className="relative z-10 w-10 h-10 flex items-center justify-center text-brand">
              <Megaphone size={24} />
            </div>
            <div className="relative z-10 text-left">
              <p className="font-bold text-lg text-white">Announcements</p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">New library hours & signups</p>
            </div>
          </button>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setScreen('SOCIAL')}
              className="glass p-5 rounded-[28px] flex flex-col items-start gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="text-brand">
                <Users size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg text-white">Social Hub</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Hackathon starts</p>
              </div>
            </button>
            <button 
              onClick={() => setScreen('DEALS')}
              className="glass p-5 rounded-[28px] flex flex-col items-start gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="text-brand">
                <Tag size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg text-white">Deals</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Student Discounts</p>
              </div>
            </button>
          </div>
        </section>

        {/* Student Life Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Student Life</h3>
            <button className="text-[10px] font-bold text-white/20 uppercase tracking-widest hover:text-white transition-colors">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <div className="min-w-[240px] glass rounded-[32px] overflow-hidden border border-white/5 hover:bg-white/5 transition-colors">
              <div className="h-32 relative">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Club" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60" />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-bold text-white tracking-tight">Photography Club</h4>
                <p className="text-xs text-brand font-bold uppercase tracking-widest italic">Workshop - 4PM</p>
              </div>
            </div>
            <div className="min-w-[240px] glass rounded-[32px] overflow-hidden border border-white/5 hover:bg-white/5 transition-colors">
              <div className="h-32 relative">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Event" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60" />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-bold text-white tracking-tight">App Dev Meetup</h4>
                <p className="text-xs text-brand font-bold uppercase tracking-widest italic">Tech Hall - Bldg 2</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand/40 z-30 active:scale-95 transition-transform">
        <Plus size={28} />
      </button>
    </div>
  );
}
