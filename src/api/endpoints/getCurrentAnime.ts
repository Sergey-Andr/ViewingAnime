import Api from "../api.ts";

export default {
    getCurrentAnime: (id: number) =>
        Api.get(
            `/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,num_list_users,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
            { headers: { "X-MAL-CLIENT-ID": import.meta.env.VITE_API_TOKEN } },
        ),
};
