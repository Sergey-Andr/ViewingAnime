import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";

export const useGetCurrentAnimeQuery = (id: number | null) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_CURRENT_ANIME],
        queryFn: () => Endpoints.getCurrentAnime(id ? id : 0),
        select: (data) => data,
        enabled: !!id,
    });
};