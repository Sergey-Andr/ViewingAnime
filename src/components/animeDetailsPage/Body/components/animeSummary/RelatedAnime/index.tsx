import { Box } from "@mui/material";
import { memo } from "react";
import "react-slideshow-image/dist/styles.css";
import {
    GlobalContainerMain,
    GlobalTitleMain,
    Hr,
} from "../../../ui/styled.ts";
import AnimeSlider from "../AnimeSlider";
import AnimeList from "../AnimeList";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../../hooks/queries/useGetCurrentAnime.ts";

const RelatedAnime = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "30px",
                }}
            >
                <Hr
                    sx={{
                        background: "none",
                        borderTop: "2px dashed #d1d5da",
                    }}
                />
                <GlobalTitleMain sx={{ whiteSpace: "nowrap" }}>
                    Related anime
                </GlobalTitleMain>
                <Hr
                    sx={{
                        background: "none",
                        borderTop: "2px dashed #d1d5da",
                    }}
                />
            </Box>
            <GlobalContainerMain
                sx={{
                    boxSizing: "border-box",
                    textAlign: "center",
                    padding: "15px 15px 0 15px",
                }}
            >
                {!data ? (
                    "..."
                ) : data.related_anime?.length > 3 ? (
                    <AnimeSlider data={data} />
                ) : (
                    <AnimeList data={data} />
                )}
            </GlobalContainerMain>
        </Box>
    );
};

export default memo(RelatedAnime);
