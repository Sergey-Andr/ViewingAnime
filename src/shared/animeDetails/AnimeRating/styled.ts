import { Box, styled, Typography } from "@mui/material";

export const AnimeTitle = styled(Typography)(() => ({
    // whiteSpace: "nowrap",
    // overflow: "hidden",
    // textOverflow: "ellipsis",
    margin: "0 0 15px 0",
    width: "380px",
    top: "0",
    fontSize: "22px",
    fontWeight: "700",
    fontFamily: "sans-serif",
}));

export const ContainerRating = styled(Box)(() => ({
    background: "gray",
    width: "350px",
    height: "160px",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}));

export const AnimeRating = styled(Typography)(() => ({
    textAlign: "center",
    margin: "0 0 0 10px",
    border: "1px solid #ffcc00",
    width: "24px",
    height: "24px",
    padding: "8px",
    borderRadius: "50%",
    color: "#ffcc00",
    letterSpacing: "0.1px",
}));

export const AnimeNumEpisodes = styled(Typography)(() => ({
    color: "#ffcc00",
    fontSize: "22px",
    fontWeight: "700",
    fontFamily: "sans-serif",
    margin: "0 0 20px 0",
}));
