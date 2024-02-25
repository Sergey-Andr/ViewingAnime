import { Box, Button, Typography } from "@mui/material";
import { SignInContainer, Wrapper } from "./styled.ts";
import { Link } from "react-router-dom";
import { logo } from "../../../../public/logo.tsx";
import SearchAnimeTab from "./components/SearchAnime";

const Header = () => {
    return (
        <Wrapper id="header">
            <Link style={{ color: "#000000FF", textDecoration: "none", display: "flex", alignItems: "center" }}
                  to={"/"}>
                <Typography sx={{ marginRight: "14px" }}> {logo}</Typography>
                <Typography variant="h1"
                            style={{ fontFamily: "cursive", fontSize: "2.5em", margin: "13px 0" }}>AnimeGG</Typography>
            </Link>
            <Box>
                <SearchAnimeTab />
            </Box>
            <SignInContainer>
                <img style={{ width: "15px", height: "15px" }}
                     src={"../../../public/lock.svg"}
                     alt="Logo" />
                <Button size="small" sx={{ padding: "0", color: "#ffffff" }}>Войти</Button>
            </SignInContainer>
        </Wrapper>
    );
};
//2em
export default Header;