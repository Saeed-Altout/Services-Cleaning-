import { create } from "zustand";

interface useOrderModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useOrderModal = create<useOrderModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
