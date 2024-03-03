import { Typography } from "@mui/material";
import {
    RatingContainer,
    RatingWrapper,
} from "../../../../../pages/AnimeDetails/components/Body/ui/styled.ts";
import { renderRatingStars } from "../../../../../feature/renderRatingStars";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../hooks/queries/useGetCurrentAnime.ts";
import { GlobalContainer } from "../../../../../sharedStyles/GlobalContainer.ts";
import { GlobalRatingTitle } from "../../../../../sharedStyles/GlobalTItle.ts";
import { GlobalLabel } from "../../../../../sharedStyles/GlobalLabel.ts";
import { Hr } from "../../../../../sharedStyles/GlobalHr.ts";

const Rating = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);

    return (
        <GlobalContainer>
            <GlobalLabel>Anime rating</GlobalLabel>
            <Hr />
            <RatingWrapper>
                <RatingContainer>
                    <GlobalRatingTitle>rating</GlobalRatingTitle>
                    <Typography
                        sx={{
                            color: data?.mean ? "#ffcc00" : "#D7D7D7CC",
                            fontSize: "20px",
                        }}
                    >
                        {data?.mean ?? "none"}
                    </Typography>
                </RatingContainer>
                <Typography>{renderRatingStars(data?.mean ?? 0)}</Typography>
            </RatingWrapper>
        </GlobalContainer>
    );
};

export default memo(Rating);
