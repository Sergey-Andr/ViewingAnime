import { Box } from "@mui/material";
import AnimeDetailsHeader from "./components/Header";
import { memo } from "react";
import AnimeDetailsBody from "./components/Body";
import Header from "../../layouts/Header";
import { DetailsContainer, DetailsWrapper } from "./ui/styled.ts";

const AnimeDetailsPage = () => {
    return (
        <DetailsWrapper>
            <Header />
            <Box sx={{ display: "flex" }}>
                <DetailsContainer>
                    <AnimeDetailsHeader />
                    <AnimeDetailsBody />
                </DetailsContainer>
            </Box>
        </DetailsWrapper>
    );
};

export default memo(AnimeDetailsPage);
