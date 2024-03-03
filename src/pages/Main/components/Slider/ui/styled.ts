import { Box, Button, styled, Typography } from "@mui/material";
import { AspectRatio } from "@mui/joy";

export const Ratio = styled(AspectRatio)(() => ({
    width: "50%",
    height: "100%",
    position: "relative",
    ".MuiAspectRatio-content": {
        backgroundColor: "transparent",
        position: "static",
    },
}));

export const ContainerImage = styled(Box)(() => ({
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "1",
    width: "100%",
    height: "100%",
    "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        background:
            "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.9))",
    },
}));

export const Title = styled(Typography)(() => ({
    padding: "15px",
    boxSizing: "border-box",
    color: "#fff",
    fontSize: "30px",
    fontWeight: "600",
    letterSpacing: "0.4px",
    fontFamily: "sans-serif",
    position: "absolute",
    zIndex: "5",
    bottom: "15%",
    width: "50%",
    textAlign: "center",
}));

export const Overview = styled(Box)(() => ({
    position: "absolute",
    zIndex: "3",
    left: 0,
    top: 0,
    width: "50%",
    height: "100%",
    "&:hover": {
        background: "#00000099",
    },
}));

export const DetailsBtn = styled(Button)(() => ({
    color: "#fff",
    display: "flex",
    position: "absolute",
    top: "30%",
    left: "calc(50% - 60px)",
}));

export const ContainerArrows = styled(Box)(() => ({
    position: "absolute",
    top: "10%",
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
}));

export const Arrows = styled(Box)(() => ({
    color: "#fff",
    width: "80px",
    height: "80px",
    border: "4px solid #000",
    borderRadius: "50%",
}));
