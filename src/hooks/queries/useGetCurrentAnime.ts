import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";

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

export const useGetCurrentAnimeQuery = (id: number | null) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_CURRENT_ANIME, id],
        queryFn: () => Endpoints.getCurrentAnime(id ? id : 0),
        select: (data) => data,
        enabled: !!id,
    });
};