import { Box, Button, Typography } from "@mui/material";
import { SearchAnime, SignInContainer, Wrapper } from "./styled.ts";
import { Link } from "react-router-dom";
import { logo } from "../../../../public/logo.tsx";

const Header = () => {
    return (
        <Wrapper>
            <Link style={{ color: "#000000FF", textDecoration: "none", display: "flex", alignItems: "center" }}
                  to={"/"}>
                <Typography sx={{ marginRight: "14px" }}> {logo}</Typography>
                <Typography variant="h1"
                            style={{ fontFamily: "cursive", fontSize: "2.5em", margin: "13px 0" }}>AnimeGG</Typography>
            </Link>
            <Box>
                <SearchAnime size="small" sx={{ width: "380px" }}
                             placeholder={"Найти аниме..."} />
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