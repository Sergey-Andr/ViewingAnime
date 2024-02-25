import { useQuery } from "react-query";
import { QUERY_KEY } from "./constants.ts";
import Endpoints from "../../api/endpoints.ts";
import { ISpecifyAnime } from "../../types/specifyAnime.ts";
import { ICustomAxiosResponse } from "../../types/axios.ts";


export const useGetCurrentAnimeQuery = (id: number | null) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_CURRENT_ANIME, id],
        queryFn: () => Endpoints.getCurrentAnime(id ? id : 0),
        select: (data: ICustomAxiosResponse<ISpecifyAnime>) => data,
        enabled: !!id,
    });
};
