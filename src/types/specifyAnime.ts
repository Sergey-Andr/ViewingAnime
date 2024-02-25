export interface ISpecifyAnime {
    main_picture: { medium: string; large: string };
    average_episode_duration: number;
    title: string;
    popularity: number;
    mean: number;
    start_date: string;
    created_at: string;
    filmMaker: string;
    genres: { id: number; name: string }[];
    studios: { id: number; name: string }[];
    pictures: { medium: string; large: string }[];
    synopsis: string;
    num_episodes: number;
}

