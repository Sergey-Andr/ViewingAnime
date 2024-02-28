import { IDefaultIListItem } from "./listOfAnime.ts";

export type TSpecifyAnime = ISpecifyAnime;

export interface ISpecifyAnime {
    alternative_titles: {
        synonyms: string[];
        [key: string]: string | string[];
    };
    genres: {
        id: number;
        name: string;
    }[];
    main_picture: {
        medium: string;
        large: string;
    };
    pictures: {
        medium: string;
        large: string;
    }[];
    related_anime: {
        node: IDefaultIListItem;
        relation_type: string;
        relation_type_formatted: string;
    }[];
    statistics: {
        num_list_users: number;
        status: {
            watching: number;
            completed: number;
            on_hold: number;
            dropped: number;
            plan_to_watch: number;
        };
    };
    studios: {
        id: number;
        name: string;
    }[];
    average_episode_duration: number;
    created_at: string;
    end_date: string;
    filmMaker: string;
    id: number;
    mean: number;
    num_episodes: number;
    popularity: number;
    status: string;
    start_date: string;
    synopsis: string;
    title: string;
}
