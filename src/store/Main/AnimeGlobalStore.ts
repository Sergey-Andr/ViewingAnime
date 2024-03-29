import { createWithEqualityFn } from "zustand/traditional";
import { immer } from "zustand/middleware/immer";
import { produce } from "immer";
import { IListItem } from "../../types/listOfAnime.ts";
import { ReactElement } from "react";
import { renderAmontOfStars } from "../../feature/renderAmontOfStars";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAnimeGlobalStore {
    totalAnime: IListItem[];
    setTotalAnime: (newAnime: IListItem[]) => void;
    activeAnimeId: number | null;
    setNewActiveId: (newId: number | null) => void;
    searchAnime: string;
    setSearchAnime: (newSearch: string) => void;
    offset: number;
    setOffset: () => void;
    ratingAnime: { [key: number]: number };
    setRatingAnime: (newKey: number, newValue: number) => void;
    numberOfStars: ReactElement[];
    setNumberOfStars: (newNumber: ReactElement[]) => void;
    animeStatus: { [key: number]: string };
    setAnimeStatus: (newKey: number, newValue: string) => void;
}

export const animeGlobalStore = createWithEqualityFn<IAnimeGlobalStore>()(
    immer(
        persist(
            (set) => ({
                totalAnime: [],
                setTotalAnime: (newAnime) =>
                    set(
                        produce((state) => {
                            if (newAnime) {
                                state.totalAnime.push(...newAnime);
                            }
                        }),
                    ),

                activeAnimeId: null,
                setNewActiveId: (newId) => set({ activeAnimeId: newId }),

                searchAnime: "",
                setSearchAnime: (newSearch) => set({ searchAnime: newSearch }),

                offset: 0,
                setOffset: () =>
                    set((state) => ({
                        offset: state.offset + 20,
                    })),

                ratingAnime: [],
                setRatingAnime: (newKey, newValue) =>
                    set((state) => ({
                        ratingAnime: {
                            ...state.ratingAnime,
                            [newKey]: newValue,
                        },
                    })),

                numberOfStars: renderAmontOfStars(0),
                setNumberOfStars: (newNumber) =>
                    set({ numberOfStars: newNumber }),

                animeStatus: [],
                setAnimeStatus: (newKey, newValue) =>
                    set((state) => ({
                        animeStatus: {
                            ...state.animeStatus,
                            [newKey]: newValue,
                        },
                    })),
            }),
            {
                partialize: (state) =>
                    Object.fromEntries(
                        Object.entries(state).filter(([key]) =>
                            ["ratingAnime", "animeStatus"].includes(key),
                        ),
                    ),
                name: "animeConfiguration",
                storage: createJSONStorage(() => localStorage),
            },
        ),
    ),
);
