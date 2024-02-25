import { animeContentStore } from "../../../store/Main/AnimeContentStore.ts";
import { shallow } from "zustand/shallow";
import { useGetAnimeSearch } from "../../../hooks/queries/useGetAnimeSearch.ts";
import { Autocomplete } from "@mui/material";
import { SearchAnime } from "./ui/styled.ts";
import AnimeItem from "./components/AnimeItem";
import { IListItem } from "../../../hooks/queries/useAnime.ts";


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

    const { data } = useGetAnimeSearch(searchAnime);

    return (
        <Autocomplete
            freeSolo={true}
            clearIcon={<img src="../../../../public/cross.svg" alt="clear input icon" style={{ fill: "black" }}
                            onClick={() => {
                                setSearchAnime("");
                            }} />}
            size="small"
            options={data ?? []}
            getOptionLabel={(option: any) => option.node.title}
            renderInput={(params) => <SearchAnime onChange={(e) => {
                setSearchAnime(e.target.value);
            }} {...params} label="hent..." />}
            renderOption={(_, option) => (
                <AnimeItem key={option.node.id} option={option as IListItem} />
            )}
            ListboxProps={{ sx: { background: "linear-gradient(to bottom, rgba(17, 33, 46, 0.8) 0%, #11212e 400px),#0e6655" } }}
        />
    );
};

export default SearchAnimeTab;