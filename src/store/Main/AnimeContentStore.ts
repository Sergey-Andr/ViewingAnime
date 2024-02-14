import { create } from "zustand";

interface IAnime {
    node: { id: number, title: string; main_picture: { medium: string, large: string } };
    ranking: { rank: number };
}

interface IAnimeContentStore {
    totalAnime: IAnime[];
    setNewAnime: (newAnime: IAnime[]) => void;
    searchAnime: string;
    setSearchAnime: (newSearch: string) => void;
}

export const animeContentStore = create<IAnimeContentStore>((set) => ({
    totalAnime: [],
    setNewAnime: (newAnime) => set({ totalAnime: newAnime }),
    searchAnime: "",
    setSearchAnime: (newSearch) => set({ searchAnime: newSearch }),
}));