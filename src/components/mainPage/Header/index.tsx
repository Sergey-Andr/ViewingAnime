import { Box, Typography } from "@mui/material";
import { Wrapper } from "./styled.ts";
import { Link } from "react-router-dom";
import { logo } from "../../../../public/logo.tsx";
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
                <Typography
                    variant="h1"
                    sx={{
                        color: "#fff",
                        fontFamily: "cursive",
                        fontSize: "2.5em",
                        margin: "13px 0",
                    }}
                >
                    AnimeGG
                </Typography>
            </Link>
            <Box>
                <SearchAnimeTab />
            </Box>
        </Wrapper>
    );
};

export default Header;
