import { create } from "zustand";

interface valueState {
  battery: string;

  userVal: string;

  updateBattery: (newVal: string) => void;
  updateUserVal: (newVal: string) => void;
}

export const useStore = create<valueState>()((set) => ({
  battery: "0",
  userVal: "",
  updateBattery: (newval) => set({ battery: newval }),
  updateUserVal: (newval) => set({ userVal: newval }),
}));
