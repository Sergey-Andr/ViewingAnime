import Api from "../api.ts";

export default {
    getAnime: () => Api.get("/anime/ranking?ranking_type=all&limit=20",
        { headers: { "X-MAL-CLIENT-ID": import.meta.env.VITE_API_TOKEN } },
    ),
};
