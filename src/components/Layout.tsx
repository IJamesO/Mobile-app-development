import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Screen } from '../types';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: ReactNode;
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
  showNav?: boolean;
}

export default function Layout({ children, currentScreen, setScreen, showNav = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0f172a] flex justify-center mesh-gradient relative overflow-hidden">
      {/* Mesh blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-brand blur-[120px] opacity-20 rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-600 blur-[120px] opacity-20 rounded-full pointer-events-none" />

      <div className="w-full max-w-md bg-[#0f172a] shadow-2xl relative flex flex-col h-screen overflow-hidden border-x border-white/5 text-white">
        <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        
        {showNav && (
          <BottomNav currentScreen={currentScreen} setScreen={setScreen} />
        )}
      </div>
    </div>
  );
}
