import { createWithEqualityFn } from "zustand/traditional";
import { immer } from "zustand/middleware/immer";
import { produce } from "immer";
import { IListItem } from "../../types/listOfAnime.ts";

interface IAnimeGlobalStore {
    totalAnime: IListItem[];
    setNewAnime: (newAnime: IListItem[]) => void;
    searchAnime: string;
    setSearchAnime: (newSearch: string) => void;
    offset: number;
    setOffset: () => void;
}

export const animeGlobalStore = createWithEqualityFn<IAnimeGlobalStore>()(immer((set) => ({
    totalAnime: [],
    setNewAnime: (newAnime) => set(produce((state) => {
        if (newAnime) {
            state.totalAnime.push(...newAnime);
        }
    })),
    searchAnime: "",
    setSearchAnime: (newSearch) => set({ searchAnime: newSearch }),
    offset: 0,
    setOffset: () => set((state) => ({
        offset: state.offset + 20,
    })),
})));