import { Box, Button } from "@mui/material";
import { SearchAnime, SignInContainer, Wrapper } from "./styled.ts";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Wrapper>
            <Link style={{ color: "#000000FF", textDecoration: "none", display: "flex", alignItems: "center" }}
                  to={"/"}>
                <img src={"../../../public/logo.svg"} style={{ marginRight: "14px" }} alt="Logo" />
                <h1 style={{ fontFamily: "cursive" }}>AnimeGG</h1>
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

export default Header;