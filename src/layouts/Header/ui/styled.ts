import { Box, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    padding: "0 30px",
    boxShadow: "0 0 60px rgb(0 0 0)",
    background: "#000000B3",
    marginBottom: "30px",
}));

export const SiteName = styled(Typography)(() => ({
    fontFamily: "cursive",
    fontSize: "2.5em",
    margin: "13px 0",
    backgroundImage: "linear-gradient(-70deg, #C96DD8 0%, #ff6e24 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
}));
