import { create } from 'zustand';

interface NavigationState {
  currentSection: string;
  previousSection: string;
  isNavigating: boolean;
  setCurrentSection: (section: string) => void;
  navigateTo: (section: string) => void;
  breadcrumbs: string[];
  addBreadcrumb: (section: string) => void;
  clearBreadcrumbs: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentSection: 'home',
  previousSection: '',
  isNavigating: false,
  breadcrumbs: ['Home'],
  
  setCurrentSection: (section) => set((state) => ({
    previousSection: state.currentSection,
    currentSection: section
  })),
  
  navigateTo: (section) => {
    set({ isNavigating: true });
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setTimeout(() => {
      set({ 
        isNavigating: false,
        currentSection: section,
      });
    }, 1000);
  },
  
  addBreadcrumb: (section) => set((state) => ({
    breadcrumbs: [...state.breadcrumbs, section]
  })),
  
  clearBreadcrumbs: () => set({
    breadcrumbs: ['Home']
  })
}));