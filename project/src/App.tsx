import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { BirthdayAnimation } from './components/BirthdayAnimation';
import { ConstellationView } from './components/ConstellationView';
import { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentView: 'login',
    isAuthenticated: false
  });

  const handlePasswordCorrect = () => {
    setAppState({
      currentView: 'animation',
      isAuthenticated: true
    });
  };

  const handleAnimationComplete = () => {
    setAppState({
      currentView: 'constellation',
      isAuthenticated: true
    });
  };

  return (
    <div className="App">
      {appState.currentView === 'login' && (
        <LoginScreen onPasswordCorrect={handlePasswordCorrect} />
      )}
      
      {appState.currentView === 'animation' && (
        <BirthdayAnimation onComplete={handleAnimationComplete} />
      )}
      
      {appState.currentView === 'constellation' && (
        <ConstellationView />
      )}
    </div>
  );
}

export default App;