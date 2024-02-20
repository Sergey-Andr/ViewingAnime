import { Box, Button, Collapse, styled, Typography } from "@mui/material";

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
