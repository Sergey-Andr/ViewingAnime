import { Box } from "@mui/material";
import Header from "../../components/mainPage/Header";
import AnimeContent from "../../components/mainPage/animeContent";

const MainPage = () => {
    return (
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", height: "100%" }}>
            <Header />
            <Box sx={{ display: "flex" }}>
                <AnimeContent />
            </Box>
        </Box>
    );
};

export default MainPage;
