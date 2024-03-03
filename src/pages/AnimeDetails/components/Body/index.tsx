import { memo } from "react";
import { Box } from "@mui/material";
import Sidebar from "../../../../components/animeDetailsPage/sidebar";
import Summary from "../../../../components/animeDetailsPage/summary";

const AnimeDetailsBody = () => {
    return (
        <Box sx={{ maxWidth: "1200px", display: "flex" }}>
            <Summary />
            <Sidebar />
        </Box>
    );
};

export default memo(AnimeDetailsBody);
