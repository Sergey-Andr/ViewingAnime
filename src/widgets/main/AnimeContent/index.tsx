import { genres, sortBy, years } from "./config";
import { AnimeListContainer, FiltersContainer, Wrapper } from "./styled.ts";
import AnimeFilter from "../../../shared/main/animeContent/AnimeFillters";
import { SelectedOptionsStore } from "../../../store/Main/SelectedOptionsStore.ts";
import AnimeItem from "../../../shared/main/animeContent/AnimeItem";
import { useAnimeQuery } from "../../../hooks/queries/useAnime.ts";
import { Box } from "@mui/material";
import { memo } from "react";
import { animeContentStore } from "../../../store/Main/AnimeContentStore.ts";
import { shallow } from "zustand/shallow";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTopButton from "../../../shared/main/ScrollToTopButton";

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

    const { data } = useAnimeQuery(offset);

    const scrollToTop = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const loadNextPage = () => {
        setNewAnime(data);
        setOffset();
    };
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
                    <InfiniteScroll
                        next={loadNextPage}
                        hasMore={true}
                        loader={<div></div>}
                        scrollThreshold={0.9}
                        dataLength={([...totalAnime, ...data ?? []]).length}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4,1fr)",
                            gap: "30px",
                            marginLeft: "30px",
                        }}
                    >
                        {([...totalAnime, ...data ?? []])?.map((el: IElement, i: number) => (
                            <AnimeItem key={i} el={el} />
                        ))}
                    </InfiniteScroll>
                    {scrollToTop > windowHeight ?
                        <ScrollToTopButton />
                        :
                        <></>
                    }
                </AnimeListContainer>
            </Box>
        </Wrapper>
    );
};


export default memo(AnimeContent);