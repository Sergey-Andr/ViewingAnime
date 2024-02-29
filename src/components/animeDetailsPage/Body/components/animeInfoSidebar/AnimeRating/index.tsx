import { Typography } from "@mui/material";
import {
    GlobalContainerMain,
    GlobalLabelMain,
    GlobalTitleMain,
    Hr,
    RatingContainer,
    RatingWrapper,
} from "../../../ui/styled.ts";
import { renderRatingStars } from "../../../../../../feature/renderRatingStars";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../../hooks/queries/useGetCurrentAnime.ts";
import { HalfStar } from "../../../../../../../public/half-star.tsx";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const AnimeRating = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);

    return (
        <GlobalContainerMain>
            <GlobalLabelMain>Anime rating</GlobalLabelMain>
            <Hr />
            <RatingWrapper>
                <RatingContainer>
                    <GlobalTitleMain
                        sx={{
                            fontSize: "22px",
                            lineHeight: "10px",
                        }}
                    >
                        rating
                    </GlobalTitleMain>
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
        </GlobalContainerMain>
    );
};

export default memo(AnimeRating);
