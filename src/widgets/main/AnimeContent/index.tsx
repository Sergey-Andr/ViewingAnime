import { genres, sortBy, years } from "./config";
import { AnimeListContainer, FiltersContainer, Wrapper } from "./styled.ts";
import AnimeFilter from "../../../shared/main/animeContent/AnimeFillters";
import { SelectedOptionsStore } from "../../../store/Main/SelectedOptionsStore.ts";
import AnimeItem from "../../../shared/main/animeContent/AnimeItem";
import { useAnimeQuery } from "../../../hooks/queries/useAnime.ts";

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

    const { data, isLoading } = useAnimeQuery();

    if (isLoading) {
        return <div>Loading</div>;
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
            <AnimeListContainer>
                {data?.map((el: IElement, i: number) => {
                    return (
                        <AnimeItem key={i} el={el} />
                    );
                })}
            </AnimeListContainer>
        </Wrapper>
    );
};


export default AnimeContent;