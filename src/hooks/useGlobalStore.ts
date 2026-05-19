import { create } from "zustand";

interface GlobalStoreType {
  imgStatus: boolean;
  setImgStatus: (newStatus: boolean) => void;
}

export const useGlobalStore = create<GlobalStoreType>()((set) => ({
  imgStatus: false,
  setImgStatus: (newStatus) => set((state) => ({ imgStatus: newStatus })),
}));
