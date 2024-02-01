import Api from "../api.ts";

export default {
    getCurrentAnime: (id: number) => Api.get(`/anime/${id}?fields=id,title,main_picture,average_episode_duration,mean,start_date,filmMaker,genres,studios,synopsis,num_episodes,pictures,popularity`,
        { headers: { "X-MAL-CLIENT-ID": import.meta.env.VITE_API_TOKEN } },
    ),
};

