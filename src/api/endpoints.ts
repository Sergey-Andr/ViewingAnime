import getAnime from "./endpoints/getAnime.ts";
import getCurrentAnime from "./endpoints/getCurrentAnime.ts";

const Endpoints = {
    ...getAnime,
    ...getCurrentAnime,
};

export default Endpoints;