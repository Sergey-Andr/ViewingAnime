import { CountPages, genres, sortBy, years } from "./config";
import { AnimeListContainer, FiltersContainer, Loader, LoaderPulse, PagesButton, Wrapper } from "./styled.ts";
import AnimeFilter from "../../../shared/main/animeContent/AnimeFillters";
import { SelectedOptionsStore } from "../../../store/Main/SelectedOptionsStore.ts";
import AnimeItem from "../../../shared/main/animeContent/AnimeItem";
import { useAnimeQuery } from "../../../hooks/queries/useAnime.ts";
import { Box } from "@mui/material";
import { logo } from "../../../../public/logo.tsx";
import { memo, useState } from "react";
import { animeContentStore } from "../../../store/Main/AnimeContentStore.ts";
import { shallow } from "zustand/shallow";

export interface IElement {
    node: {
        id: number,
        title: string;
        main_picture: {
            medium: string;
            large: string;
        }
    };
    ranking: { rank: number };
}


const AnimeContent = () => {

    const [offset, setOffset] = useState(0);

    const { totalAnime, setNewAnime } = animeContentStore(({ totalAnime, setNewAnime }) => ({
        totalAnime,
        setNewAnime,
    }), shallow);
    const {
        genres: selectedGenres,
        onChangeGenre,
        year: selectedYear,
        onChangeYear,
        sortBy: selectedSortBy,
        onChangeSortBy,
    } = SelectedOptionsStore(
        ({ genres, onChangeGenre, year, onChangeYear, sortBy, onChangeSortBy }) => ({
            genres,
            onChangeGenre,
            year,
            onChangeYear,
            sortBy,
            onChangeSortBy,
        }));

    const { data, isLoading } = useAnimeQuery(offset);

    if (!isLoading) {
        setNewAnime(data);
    }
    return (
        <Wrapper>
            <FiltersContainer>
                <AnimeFilter label={"Жанры"} type={"genres"} list={genres} selectedOptions={selectedGenres}
                             onChangeSelectedOptions={onChangeGenre} />
                <AnimeFilter label={"Год"} type={"years"} list={years} selectedOptions={selectedYear}
                             onChangeSelectedOptions={onChangeYear} />
                <AnimeFilter label={"Сортировать по"} type={"sortBy"} list={sortBy} selectedOptions={selectedSortBy}
                             onChangeSelectedOptions={onChangeSortBy} />
            </FiltersContainer>
            {!isLoading ?
                <Box>
                    <AnimeListContainer>
                        {totalAnime?.map((el: IElement, i: number) => {
                            return (
                                <AnimeItem key={i} el={el} />
                            );
                        })}
                    </AnimeListContainer>
                    <Box sx={{ width: "100%" }}>
                        {CountPages.map((page) => (
                            <PagesButton key={page.value} onClick={() => {
                                setOffset(page.value * 20);
                            }}>{page.label}</PagesButton>
                        ))}
                    </Box>
                </Box>
                :
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50%" }}>
                    <Loader>
                        <LoaderPulse />
                        {logo}
                    </Loader>
                </Box>
            }

        </Wrapper>
    );
};


export default memo(AnimeContent);