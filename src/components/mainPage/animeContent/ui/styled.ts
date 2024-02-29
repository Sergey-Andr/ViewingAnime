import { Box, styled, Typography } from "@mui/material";
import { FaRegCirclePlay } from "react-icons/fa6";

export const WrapperContent = styled(Box)(() => ({
    background:
        "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #0e6655",
    width: "100%",
}));

export const WrapperItem = styled(Box)(() => ({
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
        content: "''",
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

export const NoneImgContainer = styled(Box)(() => ({
    border: "5px solid transparent",
    background:
        "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #6bb16e",
    width: "185px",
    height: "275px",
}));

export const NoneImgText = styled(Typography)(() => ({
    textAlign: "center",
    lineHeight: "275px",
    color: "white",
    textDecoration: "none",
    border: "none",
}));

export const WrapperArrow = styled(Box)(() => ({
    position: "fixed",
    background: "#000000CC",
    borderRadius: "50%",
    left: "93%",
    top: "88%",
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
}));
