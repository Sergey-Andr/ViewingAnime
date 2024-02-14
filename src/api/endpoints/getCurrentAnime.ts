import Api from "../api.ts";

export default {
    getCurrentAnime: (id: number) => Api.get(`/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
        { headers: { "X-MAL-CLIENT-ID": import.meta.env.VITE_API_TOKEN } },
    ),
};

//fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics
//fields=id,title,main_picture,average_episode_duration,mean,start_date,filmMaker,genres,studios,synopsis,num_episodes,pictures,popularity