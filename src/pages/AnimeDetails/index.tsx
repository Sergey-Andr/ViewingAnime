import { Box } from "@mui/material";
import Header from "../../components/mainPage/Header";
import NavigationBar from "../../components/mainPage/NavigationBar";
import AnimeDetailsHeader from "../../components/animeDetailsPage/Header";
import { memo } from "react";
import AnimeDetailsBody from "../../components/animeDetailsPage/Body";

const AnimeDetailsPage = () => {
    return (
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", height: "100%" }}>
            <Header />

            <Box sx={{ display: "flex" }}>
                <NavigationBar />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        paddingLeft: "15px",
                    }}
                >
                    <AnimeDetailsHeader />
                    <Box
                        sx={{
                            display: "flex",
                            maxWidth: "960px",
                            justifyContent: "space-between",
                        }}
                    >
                        <AnimeDetailsBody />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default memo(AnimeDetailsPage);
