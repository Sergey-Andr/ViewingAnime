import { Box } from "@mui/material";
import Header from "../../widgets/main/Header";
import NavigationBar from "../../widgets/main/NavigationBar";

const MainPage = () => {
    return (
        <Box style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <Header />
            <NavigationBar />
        </Box>
    );
};

export default MainPage;
