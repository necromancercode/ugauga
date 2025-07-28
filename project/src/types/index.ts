export interface Friend {
  id: string;
  name: string;
  position: { x: number; y: number };
  message?: string;
}

export interface AppState {
  currentView: 'login' | 'animation' | 'constellation';
  isAuthenticated: boolean;
}