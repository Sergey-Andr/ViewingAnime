import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";

export const useAnimeQuery = () => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_ANIME],
        queryFn: () => Endpoints.getAnime(),
        select: (data) => data.data,
    });
};