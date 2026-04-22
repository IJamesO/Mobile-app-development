import { Menu, Tag, ChevronRight, Search, Clock, Zap, Star } from 'lucide-react';
import { Screen } from '../../types';

interface DealsProps {
  setScreen: (screen: Screen) => void;
}

export default function Deals({ setScreen }: DealsProps) {
  const categories = ['All', 'Food', 'Tech', 'Fashion'];
  
  const mainDeals = [
    {
      title: 'PixelTech Electronics',
      discount: '20% OFF',
      desc: 'Get an exclusive student discount on the latest laptops, tablets, and peripherals for your degree.',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800&auto=format&fit=crop',
      featured: true
    },
    {
      title: 'The Daily Grind',
      discount: 'BOGO',
      desc: 'Buy one espresso, get one free every Monday with ID.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop',
      badge: 'BOGO'
    },
    {
      title: 'Campus Fitness',
      discount: 'MEMBERSHIP',
      desc: 'Student-only annual plan with no sign-up fees and 24/7 access.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
      badge: 'MEMBERSHIP'
    },
    {
      title: 'University Press',
      discount: '15% OFF',
      desc: 'Discount on all required reading materials and university merch.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&auto=format&fit=crop',
      badge: '15% OFF'
    }
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

        {/* Verification Card */}
        <div className="glass p-5 rounded-[28px] flex items-center gap-6 relative group overflow-hidden">
           <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
           <div className="relative z-10 w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand/20">
             <Star size={32} />
           </div>
           <div className="relative z-10 flex-1">
             <h3 className="text-xl font-bold text-white leading-tight tracking-tight">Student Verified</h3>
             <p className="text-[10px] font-bold text-brand tracking-widest uppercase italic">ID: #4482-CC</p>
           </div>
        </div>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${i === 0 ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'glass text-white/50 hover:bg-white/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-6 space-y-6 overflow-y-auto pb-32 scrollbar-hide">
        {mainDeals.map((deal, i) => (
          <button 
            key={i}
            onClick={() => setScreen('DEAL_DETAIL')}
            className={`w-full glass rounded-[36px] overflow-hidden text-left active:scale-[0.99] transition-transform hover:bg-white/5 shadow-2xl ${deal.featured ? 'col-span-2' : ''}`}
          >
            {deal.featured ? (
              <div className="relative h-64 flex flex-col justify-end overflow-hidden">
                <img src={deal.image} className="absolute inset-0 w-full h-full object-cover opacity-60" alt={deal.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
                <div className="relative z-10 p-8 space-y-4">
                   <div className="flex items-center justify-between">
                     <span className="px-3 py-1.5 glass rounded-lg text-[10px] font-bold tracking-widest uppercase text-brand italic">Featured</span>
                     <Tag size={24} className="text-white/40" />
                   </div>
                   <div className="space-y-1">
                      <h4 className="text-4xl font-bold tracking-tight italic leading-none">PIXELTECH</h4>
                      <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/40">Premium Student Gear</p>
                   </div>
                </div>
              </div>
            ) : null}
            
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                 {deal.featured ? null : (
                   <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0 border border-gray-50">
                      <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" />
                   </div>
                 )}
                 <div className="flex-1 space-y-1">
                   <div className="flex justify-between items-start">
                     <h4 className="text-2xl font-bold text-gray-900 leading-tight">{deal.title}</h4>
                     {deal.badge && <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-tighter">{deal.badge}</span>}
                   </div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-3xl font-black text-black tracking-tighter">{deal.discount.split(' ')[0]}</span>
                     <span className="text-sm font-black text-black">{deal.discount.split(' ')[1]}</span>
                   </div>
                 </div>
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {deal.desc}
              </p>
              <button className="w-full mt-4 bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
                Claim Discount <ChevronRight size={20} />
              </button>
            </div>
          </button>
        ))}

        <div className="grid grid-cols-2 gap-4 h-56">
            <div className="glass p-6 rounded-[32px] flex flex-col justify-between hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand">
                   <Clock size={24} />
                </div>
                <div>
                   <h5 className="text-lg font-bold text-white">Swift Cab</h5>
                   <p className="text-[10px] text-white/30 tracking-wide font-bold uppercase mt-1 leading-normal">Night safety - 30% Off</p>
                </div>
            </div>
            <div className="glass p-6 rounded-[32px] flex flex-col justify-between hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand">
                   <Zap size={24} />
                </div>
                <div>
                   <h5 className="text-lg font-bold text-white">Cinema Hub</h5>
                   <p className="text-[10px] text-white/30 tracking-wide font-bold uppercase mt-1 leading-normal">Half price Tuesdays</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
