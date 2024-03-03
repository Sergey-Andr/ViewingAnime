import { Box } from "@mui/material";
import Header from "../../layouts/Header";
import Slider from "./components/Slider";
import { Container } from "./ui/styled.ts";

const MainPage = () => {
    return (
        <Box sx={{ height: "100vh", boxSizing: "border-box" }}>
            <Container>
                <Header />
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Slider />
                </Box>
            </Container>
        </Box>
    );
};

export default MainPage;
