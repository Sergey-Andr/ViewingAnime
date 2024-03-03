import { Box, Typography } from "@mui/material";
import { SiteName, Wrapper } from "./ui/styled.ts";
import { Link } from "react-router-dom";
import { logo } from "../../../public/logo.tsx";
import SearchAnimeTab from "./components/SearchAnime";

const Header = () => {
    return (
        <Wrapper id="header">
            <Link
                style={{
                    color: "#000000FF",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "30px",
                }}
                to={"/"}
            >
                <Typography sx={{ marginRight: "14px" }}> {logo}</Typography>
                <SiteName variant="h1">AnimeGG</SiteName>
            </Link>
            <Box>
                <SearchAnimeTab />
            </Box>
        </Wrapper>
    );
};

export default Header;
