import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";

export const useGetAnimeSearch = (title: string) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_SEARCH_ANIME, title],
        queryFn: () => Endpoints.getAnimeSearch(title),
        select: (data) => data.data,
        enabled: title?.length >= 3,
    });
};