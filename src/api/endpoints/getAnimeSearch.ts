import Api from "../api.ts";

export default {
    getAnimeSearch: (title: string) => Api.get(`/anime?q=${title}`,
        { headers: { "X-MAL-CLIENT-ID": import.meta.env.VITE_API_TOKEN } },
    ),
};