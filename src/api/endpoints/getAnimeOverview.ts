import Api from "../api.ts";

export default {
    getAnimeOverview: (animeId: number) =>
        Api.get(
            `/anime/${animeId}?fields=id,title,synopsis,mean,main_picture,pictures`,
            { headers: { "X-MAL-CLIENT-ID": import.meta.env.VITE_API_TOKEN } },
        ),
};
