import { Box } from "@mui/material";
import Header from "../../widgets/main/Header";
import NavigationBar from "../../widgets/main/NavigationBar";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../hooks/queries/useGetCurrentAnime.ts";
import AnimeDetailsHeader from "../../widgets/animeDetailsPage/Header";
import { memo } from "react";

const AnimeDetailsPage = () => {
    const { animeId } = useParams();

    const { data, isLoading } = useGetCurrentAnimeQuery(animeId ? +animeId : null);

    return (
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", height: "100%" }}>
            <Header />
            <Box sx={{ display: "flex" }}>
                <NavigationBar />

                {!isLoading ?
                    <AnimeDetailsHeader data={data} />
                    : <>Loading</>}
            </Box>
        </Box>
    );
};

export default memo(AnimeDetailsPage);