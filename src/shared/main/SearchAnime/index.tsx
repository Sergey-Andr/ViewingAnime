import { Box } from "@mui/material";
import { SearchAnime } from "./styled.ts";
import { animeContentStore } from "../../../store/Main/AnimeContentStore.ts";
import { shallow } from "zustand/shallow";

const SearchAnimeTab = () => {
    const {
        searchAnime,
        setSearchAnime,
    } = animeContentStore(({
                               searchAnime,
                               setSearchAnime,
                           }) => ({
        searchAnime,
        setSearchAnime,
    }), shallow);
    return (
        <Box>
            <SearchAnime size="small" sx={{ width: "380px" }}
                         placeholder={"Найти аниме..."}
                         onChange={(e) => {
                             console.log(e);
                         }}
            />
        </Box>
    );
};

export default SearchAnimeTab;