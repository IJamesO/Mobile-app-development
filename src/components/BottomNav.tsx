import { Home, Map, Users, Tag, User } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export default function BottomNav({ currentScreen, setScreen }: BottomNavProps) {
  const navItems = [
    { label: 'Home', icon: Home, screen: 'HOME' as Screen },
    { label: 'Map', icon: Map, screen: 'MAP' as Screen },
    { label: 'Social', icon: Users, screen: 'SOCIAL' as Screen },
    { label: 'Deals', icon: Tag, screen: 'DEALS' as Screen },
    { label: 'Profile', icon: User, screen: 'PROFILE' as Screen },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass-dark px-6 py-3 flex justify-between items-center z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.screen;
        return (
          <button
            key={item.label}
            onClick={() => setScreen(item.screen)}
            className={`flex flex-col items-center gap-1 transition-all ${
              isActive ? 'text-white' : 'text-gray-400 font-medium opacity-60'
            }`}
          >
            <div className={`p-1.5 rounded-xl transition-colors ${isActive ? 'bg-brand text-white shadow-lg shadow-brand/20' : ''}`}>
              <Icon size={20} />
            </div>
            <span className="text-[10px] font-bold tracking-wider uppercase">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
