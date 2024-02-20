import { CountPages, genres, sortBy, years } from "./config";
import { AnimeListContainer, FiltersContainer, Loader, LoaderPulse, PagesButton, Wrapper } from "./styled.ts";
import AnimeFilter from "../../../shared/main/animeContent/AnimeFillters";
import { SelectedOptionsStore } from "../../../store/Main/SelectedOptionsStore.ts";
import AnimeItem from "../../../shared/main/animeContent/AnimeItem";
import { useAnimeQuery } from "../../../hooks/queries/useAnime.ts";
import { Box } from "@mui/material";
import { logo } from "../../../../public/logo.tsx";
import { memo, useEffect, useRef, useState } from "react";
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

    const { totalAnime, setNewAnime, offset, setOffset } = animeContentStore(({
                                                                                  totalAnime,
                                                                                  setNewAnime,
                                                                                  offset,
                                                                                  setOffset,
                                                                              }) => ({
        totalAnime,
        setNewAnime,
        offset,
        setOffset,
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
        }), shallow);
    const { data, isLoading } = useAnimeQuery(offset);

    console.log(data);

    const options = {
        root: document.querySelector("#observe"),
        rootMargin: "0px 0px -1% 0px",
        threshold: 0.5,
    };
    const observer = useRef();

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            console.log("data " + data);
            console.log(offset); //offset всегда 0 при вызове калбека, разобратся почему

            if (entries[0].isIntersecting) {
                setNewAnime(data);
                setOffset();
            }
        };
        observer.current = new IntersectionObserver(callback, options);
    }, [offset]);


    useEffect(() => {
        const target = document.getElementById("observe");

        if (target) {
            observer.observe(target);
        }
    }, [offset]);
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
            <Box>
                <AnimeListContainer>
                    {([...totalAnime, ...(data ?? [])])?.map((el: IElement, i: number) => {
                        return (
                            <AnimeItem key={i} el={el} />
                        );
                    })}
                </AnimeListContainer>
                <Box id="observe" sx={{ width: "100%", height: "5px", background: "black" }}>
                </Box>
            </Box>

        </Wrapper>
    );
};


export default memo(AnimeContent);