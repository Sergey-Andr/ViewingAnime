import { Box } from "@mui/material";
import Header from "../../widgets/main/Header";
import NavigationBar from "../../widgets/main/NavigationBar";
import AnimeContent from "../../widgets/main/AnimeContent";

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
