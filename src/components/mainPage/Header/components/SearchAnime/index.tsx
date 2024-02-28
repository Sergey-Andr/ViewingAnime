import { animeGlobalStore } from "../../../../../store/Main/AnimeGlobalStore.ts";
import { shallow } from "zustand/shallow";
import { useGetAnimeSearch } from "../../../../../hooks/queries/useGetAnimeSearch.ts";
import { Autocomplete } from "@mui/material";
import { SearchAnime } from "../../ui/styled.ts";
import AnimeItem from "../AnimeItem";
import { useState } from "react";

const SearchAnimeTab = () => {
    const { searchAnime, setSearchAnime } = animeGlobalStore(
        ({ searchAnime, setSearchAnime }) => ({
            searchAnime,
            setSearchAnime,
        }),
        shallow,
    );

    const [isOpen, setIsOpen] = useState(false);
    const { data } = useGetAnimeSearch(searchAnime);

    return (
        <Autocomplete
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            open={isOpen}
            freeSolo={true}
            disableCloseOnSelect={false}
            clearIcon={
                <img
                    src="../../../../../../public/cross.svg"
                    alt="clear input icon"
                    style={{ fill: "black" }}
                    onClick={() => {
                        setIsOpen(false);
                        setSearchAnime("");
                    }}
                />
            }
            size="small"
            options={(data ?? []) as any[]}
            getOptionLabel={(option: any) => option.node.title}
            renderInput={(params) => (
                <SearchAnime
                    onChange={(e) => {
                        setIsOpen(true);
                        setSearchAnime(e.target.value);
                    }}
                    {...params}
                    label="hent..."
                />
            )}
            renderOption={(_, option) => (
                <AnimeItem
                    key={option.node.id}
                    option={option}
                    setIsOpen={setIsOpen}
                />
            )}
            ListboxProps={{
                sx: {
                    background:
                        "linear-gradient(to bottom, rgba(17, 33, 46, 0.8) 0%, #11212e 400px),#0e6655",
                },
            }}
        />
    );
};

export default SearchAnimeTab;
