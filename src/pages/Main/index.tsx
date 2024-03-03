import { Box } from "@mui/material";
import Header from "../../components/mainPage/Header";
import Slider from "./components/Slider";

const MainPage = () => {
    return (
        <Box sx={{ height: "100vh", boxSizing: "border-box" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    position: "relative",
                }}
            >
                <Header />
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Slider />
                </Box>
            </Box>
        </Box>
    );
};

export default MainPage;
