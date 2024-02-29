import { memo } from "react";
import AnimeInfoSidebar from "./components/animeInfoSidebar";
import AnimeSummary from "./components/animeSummary";
import { Box } from "@mui/material";

const AnimeDetailsBody = () => {
    return (
        <Box sx={{ maxWidth: "1200px", display: "flex" }}>
            <AnimeSummary />
            <AnimeInfoSidebar />
        </Box>
    );
};

export default memo(AnimeDetailsBody);
