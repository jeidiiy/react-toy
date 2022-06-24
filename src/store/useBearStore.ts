import { MouseEventHandler } from "react"
import create from "zustand"

interface BearState {
  bears: number,
  increasePopulation: MouseEventHandler<HTMLButtonElement>,
  removeAllBears: MouseEventHandler<HTMLButtonElement>,
}

export const useBearStore = create<BearState, []>((set) => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))