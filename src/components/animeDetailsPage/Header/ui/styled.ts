import { Box, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    width: "100%",
    height: "fit-content",
    marginBottom: "15px",
}));

export const ContainerTitle = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
}));

export const AnimeTitle = styled(Typography)(() => ({
    fontSize: "22px",
    color: "#fff",
    fontFamily: "sans-serif",
}));

export const AnimeDate = styled(Typography)(() => ({
    fontSize: "20px",
    fontFamily: "sans-serif",
    color: "#D7D7D7CC",
}));

export const Hr = styled(Box)(() => ({
    width: "100%",
    height: "2px",
    background: "#D7D7D7CC",
}));
