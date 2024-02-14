import { Box, Button, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    background: "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #0e6655",
    width: "100%",
}));

export const FiltersContainer = styled(Box)(() => ({
    height: "60px",
    background: "#FFFFFF26",
    display: "flex",
    alignItems: "center",
    width: "80%",
    margin: "15px 0px 15px 17px",
}));

export const AnimeListContainer = styled(Box)(() => ({
    width: "100%",
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px 0px",
}));

export const PagesButton = styled(Button)(() => ({
    background: "aqua",
    padding: "0px",
    margin: "3px",
    width: "15px",
    height: "25px",
    border: "1px solid red",
}));

export const Loader = styled(Typography)(() => ({
    position: "relative",
    margin: "100px 0 0 0",
    "svg": {
        width: "350px",
        height: "350px",
        scale: "0.7",
        animation: "scale 3s 2s forwards infinite",

    },
    "svg path": {
        strokeDashoffset: "2600",
        strokeDasharray: "2600",
        animation: "draw 2s forwards infinite",
    },
    "svg g": {
        fillOpacity: "0",
        animation: "fillIn 2s 2s forwards infinite",
    },

    "@keyframes draw": {
        "to": {
            strokeDashoffset: "0",
            strokeDasharray: "0",
        },
    },
    "@keyframes fillIn": {
        "to": {
            fillOpacity: "1",
        },
    },
    "@keyframes scale": {
        "0": {
            scale: "0.7",
        },
        "25%": {
            scale: "1",
        },
        "50%": {
            scale: "0.8",
        },
        "100%": {
            scale: "1",
        },
    },
}));

export const LoaderPulse = styled(Typography)(() => ({
    position: "absolute",
    top: "calc(100% - 290px)",
    left: "calc(100% - 280px)",
    width: "200px",
    height: "200px",
    background: "#0e6655",
    borderRadius: "50%",
    opacity: "0",
    animation: "pulse 2s 2s forwards infinite",

    "@keyframes pulse": {
        "0%": {
            scale: "0",
            opacity: "0.5",
        },
        "50%": {
            scale: "1",
            opacity: "0.2",
        },
        "100%": {
            scale: "2",
            opacity: "0",
        },
    },
}));

