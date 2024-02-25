import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";
import { ICustomAxiosResponse } from "../../types/axios.ts";
import { IListOfAnime } from "../../types/listOfAnime.ts";

export const useGetAnimeSearch = (title: string) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_SEARCH_ANIME, title],
        queryFn: () => Endpoints.getAnimeSearch(title),
        select: (data: ICustomAxiosResponse<IListOfAnime>) => data.data,
        enabled: title?.length >= 3,
    });
};