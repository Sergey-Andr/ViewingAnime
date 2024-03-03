import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";

export const useAnimeOverview = (animeId: number | null) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_ANIME_OVERVIEW, animeId],
        queryFn: () => Endpoints.getAnimeOverview(animeId),
        select: (data: any): any => data,
        enabled: !!animeId,
    });
};
