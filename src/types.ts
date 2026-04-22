export type Screen = 
  | 'LOGIN' 
  | 'HOME' 
  | 'TIMETABLE' 
  | 'MAP' 
  | 'SOCIAL' 
  | 'EVENT_DETAIL' 
  | 'DEALS' 
  | 'DEAL_DETAIL' 
  | 'PROFILE';

export interface AppState {
  currentScreen: Screen;
  user?: {
    name: string;
    avatar: string;
  };
}
