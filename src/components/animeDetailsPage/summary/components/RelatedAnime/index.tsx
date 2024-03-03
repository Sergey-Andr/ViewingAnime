import { Box } from "@mui/material";
import { memo } from "react";
import "react-slideshow-image/dist/styles.css";
import AnimeSlider from "../AnimeSlider";
import AnimeList from "../AnimeList";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../hooks/queries/useGetCurrentAnime.ts";
import { GlobalRelatedContainer } from "../../../../../sharedStyles/GlobalContainer.ts";
import { GlobalRelatedTitle } from "../../../../../sharedStyles/GlobalTItle.ts";
import { HrDashed } from "../../../../../sharedStyles/GlobalHr.ts";
import { RelatedTitleContainer } from "./ui/styled.ts";

const RelatedAnime = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    return (
        <Box>
            <RelatedTitleContainer>
                <HrDashed />
                <GlobalRelatedTitle>Related anime</GlobalRelatedTitle>
                <HrDashed />
            </RelatedTitleContainer>
            <GlobalRelatedContainer>
                {!data ? (
                    "..."
                ) : data.related_anime?.length > 3 ? (
                    <AnimeSlider data={data} />
                ) : (
                    <AnimeList data={data} />
                )}
            </GlobalRelatedContainer>
        </Box>
    );
};

export default memo(RelatedAnime);
