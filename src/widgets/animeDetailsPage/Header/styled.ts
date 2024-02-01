import { Box, Button, Collapse, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    width: "960px",
    height: "fit-content",
    padding: "0 0 50px 0",
    position: "relative",
    ":before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#00000099",
        boxShadow: "inset 0px 0px 200px #11212EFF",
    },
}));

export const DefaultContainer = styled(Box)(() => ({
    position: "relative",
    zIndex: "100",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    margin: "50px 0",
}));

export const AnimeTitle = styled(Typography)(() => ({
    position: "absolute",
    top: "0",
    width: "100%",
    fontSize: "22px",
    fontWeight: "700",
    fontFamily: "sans-serif",
}));

export const ContainerRating = styled(Box)(() => ({
    background: "gray",
    width: "350px",
    height: "160px",
    margin: "0 50px 0 0",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}));

export const AnimeRating = styled(Typography)(() => ({
    margin: "0 0 0 10px",
    border: "1px solid #ffcc00",
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

export const ContainerInfo = styled(Box)(() => ({
    background: "#09161c",
    padding: "25px 0 0 15px",
    width: "100%",
    height: "270px",
    borderRadius: "15px 0px 0px 15px",
}));

export const DefaultInfo = styled(Box)(() => ({
    fontWeight: "700",
    letterSpacing: "0.5px",
    fontFamily: "sans-serif",
    margin: "0 0 10px 0",
    lineHeight: "26px",
    "span": {
        fontWeight: "300",
        color: "#df565a",
        fontSize: "16px",
    },
}));

export const ContainerSubTitle = styled(Box)(() => ({
    margin: "0 auto",
    width: "890px",
    position: "relative",
    zIndex: "100",
}));

export const AboutAnime = styled(Typography)(() => ({
    color: "#fff",
    fontSize: "20px",
    letterSpacing: "0.5px",
    margin: "0 0 20px 10px",
}));

export const SubTitle = styled(Collapse)(() => ({
    position: "relative",
    zIndex: "100",
    color: "#FFFFFFCC",
    background: "#1b2935",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #1a685b",
    fontFamily: "sans-serif",
    fontWeight: "500",
    fontSize: "18px",
    letterSpacing: "0.5px",
    lineHeight: "26px",
    margin: "0 0 12px 0",
    height: "100px",
    overflow: "hidden",
    "&:before": {
        content: "''",
        position: "absolute",
        zIndex: "1",
        bottom: "0",
        left: "0",
        right: "0",
        height: "100px",
    },
}));

export const ExtandSubTitle = styled(Button)(() => ({
    color: "#FFFFFF99",
    fontSize: "16px",
    textDecoration: "underline",
    cursor: "pointer",
    padding: "5px",
    textTransform: "none",
}));






