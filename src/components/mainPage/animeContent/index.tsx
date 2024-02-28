import { AnimeListContainer, WrapperContent } from "./ui/styled.ts";
import AnimeItem from "./components/AnimeItem";
import { useAnimeQuery } from "../../../hooks/queries/useAnime.ts";
import { IListItem } from "../../../types/listOfAnime.ts";
import { Box } from "@mui/material";
import { memo } from "react";
import { animeGlobalStore } from "../../../store/Main/AnimeGlobalStore.ts";
import { shallow } from "zustand/shallow";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTopButton from "./components/ScrollToTopButton";

const AnimeContent = () => {
    const { totalAnime, setNewAnime, offset, setOffset } = animeGlobalStore(
        ({ totalAnime, setNewAnime, offset, setOffset }) => ({
            totalAnime,
            setNewAnime,
            offset,
            setOffset,
        }),
        shallow,
    );

    const { data } = useAnimeQuery(offset);

    const loadNextPage = () => {
        setNewAnime(data as unknown as IListItem[]);
        setOffset();
    };

    const scrollToTop = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    return (
        <WrapperContent>
            <Box>
                <AnimeListContainer>
                    <InfiniteScroll
                        next={loadNextPage}
                        hasMore={true}
                        loader={Array.from({ length: 20 }, (_, i) => (
                            <AnimeItem key={i} />
                        ))}
                        scrollThreshold={0.9}
                        dataLength={
                            [
                                ...totalAnime,
                                ...((data as unknown as IListItem[]) ?? []),
                            ].length
                        }
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4,1fr)",
                            gap: "30px",
                            marginLeft: "30px",
                        }}
                    >
                        {[
                            ...totalAnime,
                            ...((data as unknown as IListItem[]) ?? []),
                        ]?.map((item: IListItem, i: number) => (
                            <AnimeItem key={i} item={item} />
                        ))}
                    </InfiniteScroll>
                    {scrollToTop > windowHeight ? <ScrollToTopButton /> : <></>}
                </AnimeListContainer>
            </Box>
        </WrapperContent>
    );
};

export default memo(AnimeContent);
