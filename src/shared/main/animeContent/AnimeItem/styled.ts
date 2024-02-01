import { Box, styled, Typography } from "@mui/material";
import playCircle from "../../../../../public/play-circle.svg";

export const Wrapper = styled(Box)(() => ({
    width: "205px",
    height: "338px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "5px",

}));

export const ContainerImg = styled(Box)(() => ({
    position: "relative",
    width: "195px",
    height: "285px",
    overflow: "hidden",
    transition: "opacity 0.3s ease",
    cursor: "pointer",

    "&:before": {
        content: "''",
        position: "absolute",
        width: "185px",
        height: "275px",
        margin: "5px",
        background: "#00000099",
        opacity: "0",
        transition: "opacity 0.3s ease",
    },

    "&:after": {
        content: `url(${playCircle})`,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: "0",
        transition: "opacity 0.3s ease",
        zIndex: "20",
    },

    "&:hover::before, &:hover::after": {
        opacity: "1",
    },
}));


export const AnimeNames = styled(Typography)(() => ({
    fontSize: "18px",
    marginTop: "8px",
    color: "white",
    width: "205px",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}));