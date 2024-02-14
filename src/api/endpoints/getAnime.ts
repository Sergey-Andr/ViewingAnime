import Api from "../api.ts";

export default {
    getAnime: (offset = 0) => Api.get(`/anime/ranking?ranking_type=upcoming&limit=20&offset=${offset}`,
        { headers: { "X-MAL-CLIENT-ID": import.meta.env.VITE_API_TOKEN } },
    ),
};
