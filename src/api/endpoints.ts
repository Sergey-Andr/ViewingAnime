import getAnime from "./endpoints/getAnime.ts";
import getCurrentAnime from "./endpoints/getCurrentAnime.ts";
import getAnimeSearch from "./endpoints/getAnimeSearch.ts";
import getAnimeOverview from "./endpoints/getAnimeOverview.ts";

const Endpoints = {
    ...getAnime,
    ...getCurrentAnime,
    ...getAnimeSearch,
    ...getAnimeOverview,
};

export default Endpoints;
