import { Box, Typography } from "@mui/material";
import { AnimeNumEpisodes, AnimeRating, AnimeTitle, ContainerRating } from "./styled.ts";
import { renderRatingStars } from "../../../feature/renderRatingStars";
import { FC, ReactElement } from "react";
import { IAnimeDetails } from "../../../widgets/animeDetailsPage/Header";

const AnimeInfoRating: FC<IAnimeDetails> = ({ data }): ReactElement => {
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
