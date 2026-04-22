/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Screen } from './types';
import Layout from './components/Layout';
import Login from './components/screens/Login';
import Dashboard from './components/screens/Dashboard';
import Timetable from './components/screens/Timetable';
import Map from './components/screens/Map';
import SocialHub from './components/screens/SocialHub';
import Deals from './components/screens/Deals';
import Profile from './components/screens/Profile';
import { EventDetail, DealDetail } from './components/screens/Details';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('LOGIN');

  const setScreen = (screen: Screen) => {
    setCurrentScreen(screen);
    // Scroll to top on screen change
    const main = document.querySelector('main');
    if (main) main.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setScreen('HOME');
  };

  const handleLogout = () => {
    setScreen('LOGIN');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN':
        return <Login onLogin={handleLogin} setScreen={setScreen} />;
      case 'HOME':
        return <Dashboard setScreen={setScreen} />;
      case 'TIMETABLE':
        return <Timetable setScreen={setScreen} />;
      case 'MAP':
        return <Map setScreen={setScreen} />;
      case 'SOCIAL':
        return <SocialHub setScreen={setScreen} />;
      case 'EVENT_DETAIL':
        return <EventDetail setScreen={setScreen} />;
      case 'DEALS':
        return <Deals setScreen={setScreen} />;
      case 'DEAL_DETAIL':
        return <DealDetail setScreen={setScreen} />;
      case 'PROFILE':
        return <Profile onLogout={handleLogout} setScreen={setScreen} />;
      default:
        return <Dashboard setScreen={setScreen} />;
    }
  };

  return (
    <Layout 
      currentScreen={currentScreen} 
      setScreen={setScreen}
      showNav={currentScreen !== 'LOGIN'}
    >
      {renderScreen()}
    </Layout>
  );
}
