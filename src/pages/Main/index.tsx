import { Box } from "@mui/material";
import Header from "../../components/mainPage/Header";
import NavigationBar from "../../components/mainPage/NavigationBar";
import AnimeContent from "../../components/mainPage/animeContent";

const MainPage = () => {
    return (
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", height: "100%" }}>
            <Header />
            <Box sx={{ display: "flex" }}>
                <NavigationBar />
                <AnimeContent />
            </Box>
        </Box>
    );
};

export default MainPage;
