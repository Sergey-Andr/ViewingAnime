import { animeGlobalStore } from "../../../../store/Main/AnimeGlobalStore.ts";
import { shallow } from "zustand/shallow";
import { useGetAnimeSearch } from "../../../../hooks/queries/useGetAnimeSearch.ts";
import { Autocomplete } from "@mui/material";
import AnimeItem from "../AnimeItem";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { SearchAnime } from "./ui/styled.ts";

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
                <FaXmark
                    style={{ fill: "#000", height: "20px", width: "20px" }}
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
                    placeholder="hent..."
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
                    background: "#221F1F",
                },
            }}
        />
    );
};

export default SearchAnimeTab;
