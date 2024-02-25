import getAnime from "./endpoints/getAnime.ts";
import getCurrentAnime from "./endpoints/getCurrentAnime.ts";
import getAnimeSearch from "./endpoints/getAnimeSearch.ts";

const Endpoints = {
    ...getAnime,
    ...getCurrentAnime,
    ...getAnimeSearch,
};

export default Endpoints;