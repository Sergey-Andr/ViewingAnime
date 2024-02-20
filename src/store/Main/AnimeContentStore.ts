import { createWithEqualityFn } from "zustand/traditional";
import { immer } from "zustand/middleware/immer";
import { produce } from "immer";

interface IAnime {
    node: { id: number, title: string; main_picture: { medium: string, large: string } };
    ranking: { rank: number };
}

interface IAnimeContentStore {
    totalAnime: IAnime[];
    setNewAnime: (newAnime: IAnime[]) => void;
    searchAnime: string;
    setSearchAnime: (newSearch: string) => void;
    offset: number;
    setOffset: () => void;
}

export const animeContentStore = createWithEqualityFn<IAnimeContentStore>()(immer((set) => ({
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