import { AppState } from './types';
import defaultSettings from '@/config/settings.json';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useAppStore = defineStore('app', () => {
  const appState = reactive<AppState>({ ...defaultSettings });

  // const updateSettings = (settings: Partial<AppState>) => {
  //   Object.assign(appState, { ...appState, ...settings });
  // };

  // const toggleTheme = (dark: boolean) => {
  //   if (dark) {
  //     updateSettings({ theme: 'light' });
  //   }
  // };

  const toggleMenu = (value: boolean) => {
    appState.menuCollapse = value;
  };

  return {
    appState,
    toggleMenu,
  };
});
