import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";

export const useAnimeQuery = (offset: number) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_ANIME, offset],
        queryFn: () => Endpoints.getAnime(offset),
        select: (data) => data.data,
    });
};