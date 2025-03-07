import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      routeLogin: false,
      isLogged: false,
      user: null,
      setRouteLogin: (routeLogin: boolean) => set({ routeLogin }),
      setIsLogged: (isLogged: boolean) => set({ isLogged }),
      setUser: (user: any) => set({ user }),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
