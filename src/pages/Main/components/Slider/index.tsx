import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useAnimeQuery } from "../../../../hooks/queries/useAnime.ts";
import { memo, useRef } from "react";
import { Box } from "@mui/material";
import {
    Arrows,
    ContainerArrows,
    ContainerImage,
    DetailsBtn,
    Overview,
    Ratio,
    Title,
} from "./styled.ts";
import { animeGlobalStore } from "../../../../store/Main/AnimeGlobalStore.ts";
import { shallow } from "zustand/shallow";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { IListItem } from "../../../../types/listOfAnime.ts";

const Slider = () => {
    const {
        setNewActiveId,
        activeAnimeId,
        offset,
        setOffset,
        totalAnime,
        setTotalAnime,
    } = animeGlobalStore(
        ({
            setNewActiveId,
            activeAnimeId,
            offset,
            setOffset,
            totalAnime,
            setTotalAnime,
        }) => ({
            setNewActiveId,
            activeAnimeId,
            offset,
            setOffset,
            totalAnime,
            setTotalAnime,
        }),
        shallow,
    );
    const { data } = useAnimeQuery(offset);

    const navigationPrevRef = useRef<any>(null);
    const navigationNextRef = useRef<any>(null);

    const loadNextPage = () => {
        setTotalAnime(data as unknown as IListItem[]);
        setOffset();
    };

    return (
        <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <InfiniteScroll
                next={loadNextPage}
                hasMore={true}
                loader={<></>}
                dataLength={[...totalAnime, ...(data ?? [])].length}
            >
                <Swiper
                    spaceBetween={"-20%"}
                    modules={[Navigation]}
                    onSlideChange={(swiper) => {
                        if (swiper.isEnd) {
                            loadNextPage();
                        }
                    }}
                    slidesPerView={4}
                    slidesPerGroup={2}
                    onBeforeInit={(swiper) => {
                        navigationPrevRef.current = swiper;
                        navigationNextRef.current = swiper;
                    }}
                    style={{ height: "100%" }}
                >
                    {[...totalAnime, ...(data || [])].map((item) => (
                        <SwiperSlide
                            key={item?.node?.id}
                            style={{
                                position: "relative",
                            }}
                        >
                            <Ratio ratio={1 / 2.5}>
                                <ContainerImage>
                                    <img
                                        src={item?.node?.main_picture?.large}
                                        alt="main picture"
                                        style={{
                                            height: "100%",
                                            position: "relative",
                                            zIndex: "-100",
                                        }}
                                    />
                                </ContainerImage>
                            </Ratio>
                            <Title>{item?.node?.title}</Title>
                            <Overview
                                data-id={item?.node?.id}
                                onMouseEnter={(e) => {
                                    const target = e.target as HTMLElement;
                                    if (target.dataset.id) {
                                        setNewActiveId(+target.dataset.id);
                                    }
                                }}
                                onMouseLeave={() => {
                                    setNewActiveId(null);
                                }}
                            >
                                {activeAnimeId === item.node.id ? (
                                    <Link to={`anime/${activeAnimeId}`}>
                                        <DetailsBtn>
                                            {
                                                <FaPlay
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        padding: "10px",
                                                        border: "4px solid #fff",
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            }
                                        </DetailsBtn>
                                    </Link>
                                ) : (
                                    <></>
                                )}
                            </Overview>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ContainerArrows>
                    <Arrows
                        onClick={() => {
                            navigationPrevRef.current.slideNext();
                        }}
                        className={"swiper-button-next"}
                    />
                    <Arrows
                        onClick={() => {
                            navigationNextRef.current.slidePrev();
                        }}
                        className={"swiper-button-prev"}
                    />
                </ContainerArrows>
            </InfiniteScroll>
        </Box>
    );
};

export default memo(Slider);
