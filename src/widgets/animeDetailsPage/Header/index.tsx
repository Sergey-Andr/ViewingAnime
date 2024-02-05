import { Box, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { renderRatingStars } from "../../../feature/renderRatingStars";
import {
    AboutAnime,
    AnimeNumEpisodes,
    AnimeRating,
    AnimeTitle,
    ContainerInfo,
    ContainerRating,
    ContainerSubTitle,
    DefaultContainer,
    DefaultInfo,
    ExtandSubTitle,
    SubTitle,
    Wrapper,
} from "./styled.ts";

export interface IAnimeDetails {
    data: {
        main_picture: { medium: string, large: string };
        average_episode_duration: number
        title: string;
        popularity: number;
        mean: number;
        start_date: string;
        filmMaker: string
        genres: { id: number, name: string }[];
        studios: { id: number, name: string }[];
        pictures: { medium: string, large: string }[];
        synopsis: string;
        num_episodes: number;
    };
}

const AnimeDetailsHeader: FC<IAnimeDetails> = ({
                                                   data,
                                               }) => {

    const defaultData = {
        watchTime:Math.floor(data.average_episode_duration / 60),
        year: data.start_date.slice(0, 4),
        genres: data.genres.map((el, i) =>(
                    <span key={el.name}>
                        {el.name}
                        {data.genres.length - 1 !== i && ", "}
                    </span>
                )
            ),
        studios: data.studios.map((el, i) =>(
                    <span key={el.name}>
                        {el.name}
                        {data.studios.length - 1 !== i && ", "}
                    </span>
                )
            )
    }

    const [isOpened, setIsOpened]
        : [isOpened: boolean, setIsOpened: Dispatch<SetStateAction<boolean>>,]
        = useState<boolean>(false);

    return (
        <Wrapper sx={{
            background: `url(${data.pictures[2].large})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <DefaultContainer>
                <img src={data.main_picture.large} alt={"Anime picture"} style={{
                    width: "205px",
                    height: "300px",
                    padding: "5px",
                    background: "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #6bb16e",
                    margin: "0px 30px",
                }} />
                <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <AnimeTitle>{data.title}</AnimeTitle>
                    <ContainerRating>
                        <Box sx={{ display: "flex", alignItems: "center", margin: "0 0 10px 0" }}>
                            {renderRatingStars(data.mean)}
                            <AnimeRating>
                                {data.mean}
                            </AnimeRating>
                        </Box>
                        <AnimeNumEpisodes>
                            Серий: {data.num_episodes}
                        </AnimeNumEpisodes>
                        <Typography sx={{
                            color: "#c8c8c8",
                            fontWeight: "700",
                        }}>
                            {data.popularity}
                        </Typography>
                    </ContainerRating>
                </Box>
                <ContainerInfo>
                    <DefaultInfo>Просмотр: <span>{defaultData.watchTime} мин.</span></DefaultInfo>
                    <DefaultInfo>Год выпуска: <span>{defaultData.year}</span></DefaultInfo>
                    <DefaultInfo>Жанры: <span>{defaultData.genres}</span></DefaultInfo>
                    <DefaultInfo>Студия: <span>{defaultData.studios}</span></DefaultInfo>
                </ContainerInfo>

            </DefaultContainer>
            <ContainerSubTitle>
                <AboutAnime>Про что аниме</AboutAnime>
                <SubTitle in={isOpened} timeout={1000} collapsedSize={70} sx={{
                    height: `${isOpened ? "fit-content" : "70px"}`,
                    ":before": {
                        background: `${isOpened ? "none" : "-webkit-linear-gradient(top,rgba(255,255,255,0) 0%,#131C25FF 100%)"}`,
                    },
                }}>{data.synopsis}</SubTitle>
                <ExtandSubTitle onClick={() => {
                    setIsOpened(!isOpened);
                }}
                >
                    {isOpened ? "Свернуть описание" : "Подробней..."}
                </ExtandSubTitle>
            </ContainerSubTitle>
        </Wrapper>
    );
};

export default AnimeDetailsHeader;