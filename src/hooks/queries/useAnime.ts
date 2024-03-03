import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";
import { IListItem } from "../../types/listOfAnime.ts";

export const useAnimeQuery = (offset: number) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_ANIME, offset],
        queryFn: () => Endpoints.getAnime(offset),
        select: (data: any): IListItem[] => data.data,
    });
};
