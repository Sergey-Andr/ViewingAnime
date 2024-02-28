import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";
import { TSpecifyAnime } from "../../types/specifyAnime.ts";

export const useGetCurrentAnimeQuery = (id: number | null | undefined) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_CURRENT_ANIME, id],
        queryFn: () => Endpoints.getCurrentAnime(id ? id : 0),
        select: (data: any): TSpecifyAnime => data,
        enabled: !!id,
    });
};
