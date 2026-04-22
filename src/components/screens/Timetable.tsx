import { Menu, MoreVertical, Bell, Upload, ChevronRight, Megaphone, User, Plus, Calendar } from 'lucide-react';
import { Screen } from '../../types';

interface TimetableProps {
  setScreen: (screen: Screen) => void;
}

export default function Timetable({ setScreen }: TimetableProps) {
  const days = [
    { day: 'MON', date: '12', active: true },
    { day: 'TUE', date: '13', active: false },
    { day: 'WED', date: '14', active: false },
    { day: 'THU', date: '15', active: false },
    { day: 'FRI', date: '16', active: false },
    { day: 'SAT', date: '17', active: false },
    { day: 'SUN', date: '18', active: false },
  ];

  return (
    <div className="flex flex-col h-full bg-transparent pb-20 text-white">
      {/* Header */}
      <div className="glass-dark px-6 pt-12 pb-6 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => setScreen('HOME')} className="w-10 h-10 flex items-center justify-center p-2 hover:bg-white/5 rounded-xl text-white/50 transition-colors">
          <Menu size={24} />
        </button>
        <span className="font-bold text-lg tracking-tight italic">Campus Connect</span>
        <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      <div className="px-6 py-4 space-y-8">
        {/* Welcome Back */}
        <div className="space-y-1">
          <p className="text-brand font-bold text-[10px] uppercase tracking-[0.2em]">Academic Hub</p>
          <div className="flex flex-col">
            <span className="text-white/60 text-lg font-medium">Welcome back,</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Alex J.</h2>
          </div>
          <p className="text-sm text-slate-400 font-medium">You have 3 lectures and 1 deadline today.</p>
        </div>

        {/* Weekly Schedule */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Weekly Schedule</h3>
            <button className="text-[10px] font-bold text-white/20 flex items-center gap-1 uppercase tracking-[0.2em] hover:text-white transition-colors">
              Full Calendar <ChevronRight size={14} />
            </button>
          </div>
          <div className="flex justify-between">
            {days.map((d) => (
              <div 
                key={d.date}
                className={`flex flex-col items-center gap-2 p-1 px-3 rounded-2xl transition-all ${
                  d.active 
                    ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                    : 'glass text-white/40'
                }`}
              >
                <span className="text-[10px] font-bold tracking-tighter">{d.day}</span>
                <span className="text-lg font-black tracking-tight">{d.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule List */}
        <div className="space-y-4">
          <div className="glass p-5 rounded-[28px] flex gap-6 relative group hover:bg-white/5 transition-colors">
            <div className="flex flex-col items-center glass px-3 py-4 rounded-2xl gap-1">
               <span className="text-[10px] font-bold text-white/40">09:00</span>
               <div className="w-4 h-[1px] bg-white/10" />
               <span className="text-[10px] font-bold text-white/40">10:30</span>
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-bold text-brand uppercase tracking-widest italic">Lecture</span>
              <h4 className="font-bold text-lg text-white">CS50: Computer Science</h4>
              <p className="text-sm text-white/40 font-medium leading-tight">Hall 4B • Prof. David Malan</p>
            </div>
            <button className="text-white/20 self-center">
              <MoreVertical size={20} />
            </button>
          </div>

          <div className="glass p-5 rounded-[28px] flex gap-6 relative group hover:bg-white/5 transition-colors">
            <div className="flex flex-col items-center glass px-3 py-4 rounded-2xl gap-1">
               <span className="text-[10px] font-bold text-white/40">11:15</span>
               <div className="w-4 h-[1px] bg-white/10" />
               <span className="text-[10px] font-bold text-white/40">12:45</span>
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-bold text-brand uppercase tracking-widest italic">Seminar</span>
              <h4 className="font-bold text-lg text-white">Advanced Algorithms</h4>
              <p className="text-sm text-white/40 font-medium leading-tight">Room 202 • Dr. Elena Rossi</p>
            </div>
            <button className="text-white/20 self-center">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Critical Deadlines */}
        <section className="space-y-4 pt-4">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">Critical Deadlines</h3>
          <div className="glass p-6 rounded-[32px] relative overflow-hidden group">
             {/* Abstract background shape */}
             <div className="absolute right-0 bottom-0 opacity-[0.05] pointer-events-none group-hover:opacity-10 transition-opacity">
               <svg width="120" height="120" viewBox="0 0 100 100">
                 <path d="M50 0 L100 100 L0 100 Z" fill="#e11d48" />
               </svg>
             </div>
             
             <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 bg-brand text-white text-[10px] font-bold uppercase rounded-md shadow-lg shadow-brand/20">Due in 4h</span>
                <Bell size={20} className="text-brand" />
             </div>
             <h4 className="font-bold text-xl text-white mb-1">Project Phase 1</h4>
             <p className="text-sm text-white/40 font-medium mb-6">Interactive Web Design</p>
             
             <div className="relative">
                <div className="h-1.5 w-full glass rounded-full overflow-hidden">
                  <div className="h-full bg-brand w-[80%] shadow-[0_0_20px_rgba(225,29,72,0.5)]" />
                </div>
                <span className="absolute -top-6 right-0 text-[10px] font-bold text-brand">80%</span>
             </div>
          </div>

          <div className="glass p-6 rounded-[32px] space-y-4 group hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-start">
               <span className="px-2 py-1 glass text-white/40 text-[10px] font-bold uppercase rounded-md tracking-wider">Friday</span>
               <Calendar size={20} className="text-white/20" />
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-1">AI Ethics Essay</h4>
              <p className="text-sm text-white/40 font-medium">Philosophy Department</p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-4 glass border-white/5 rounded-2xl font-bold text-sm active:scale-[0.98] transition-transform text-white/80">
              <Upload size={18} />
              Upload Files
            </button>
          </div>
        </section>

        {/* Staff Announcements */}
        <section className="space-y-4 pt-4">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">Staff Announcements</h3>
          <div className="glass p-6 rounded-[32px] space-y-4 group hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-brand">
                <Megaphone size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white">Admin Office</h4>
                  <span className="text-[10px] font-bold text-white/20 transition-colors group-hover:text-white/40 uppercase">2h ago</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              The library will be extending its hours during the exam week. Starting next Monday, we will be open 24/7.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1.5 glass text-white/40 text-[10px] font-bold rounded-lg uppercase tracking-wider">#Library</span>
              <span className="px-3 py-1.5 glass text-white/40 text-[10px] font-bold rounded-lg uppercase tracking-wider">#Exams</span>
            </div>
          </div>

          <div className="glass p-6 rounded-[32px] space-y-4 group hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-brand">
                <User size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white">Prof. Sarah Jenkins</h4>
                  <span className="text-[10px] font-bold text-white/20 transition-colors group-hover:text-white/40 uppercase tracking-tighter">Yesterday</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              Lecture materials for 'Data Structures' have been uploaded to the portal.
            </p>
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
