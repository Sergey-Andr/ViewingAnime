import { create } from "zustand";

export interface IOptions {
    label: string;
    value: number;
}

interface ISelectedOptionsStore {
    genres: IOptions[];
    year: IOptions[];
    sortBy: IOptions[];
    onChangeGenre: (newOptions: IOptions[]) => void;
    onChangeYear: (newOptions: IOptions[]) => void;
    onChangeSortBy: (newOptions: IOptions[]) => void;
}

export const SelectedOptionsStore = create<ISelectedOptionsStore>((set) => ({
    genres: [],
    year: [],
    sortBy: [],

    onChangeGenre: (newOptions: IOptions[]) => {
        set({
                genres: newOptions,
            },
        );
    },
    onChangeYear: (newOptions: IOptions[]) => {
        set({
                year: newOptions,
            },
        );
    },
    onChangeSortBy: (newOptions: IOptions[]) => {
        set({
                sortBy: newOptions,
            },
        );
    },
}));