import { Box, Typography } from "@mui/material";
import { renderRatingStars } from "../../../../../feature/renderRatingStars";
import { FC, ReactElement } from "react";
import { ISpecifyAnime } from "../../../../../hooks/queries/useGetCurrentAnime.ts";
import { AnimeNumEpisodes, AnimeRating, AnimeTitle, ContainerRating } from "../../ui/styled.ts";

interface IAnimeInfoRating {
    data: ISpecifyAnime;
}

const AnimeInfoRating: FC<IAnimeInfoRating> = ({ data }): ReactElement => {
    console.log(data);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "310px",
            }}
        >
            <AnimeTitle>{data.title}</AnimeTitle>
            <ContainerRating>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "0 0 10px 0",
                    }}
                >
                    {renderRatingStars(data.mean)}
                    <AnimeRating>{data.mean || 0}</AnimeRating>
                </Box>
                <AnimeNumEpisodes>Series: {data.num_episodes}</AnimeNumEpisodes>
                <Typography
                    sx={{
                        color: "#c8c8c8",
                        fontWeight: "700",
                    }}
                >
                    Popularity by MAL: {data.popularity}
                </Typography>
            </ContainerRating>
        </Box>
    );
};

export default AnimeInfoRating;
