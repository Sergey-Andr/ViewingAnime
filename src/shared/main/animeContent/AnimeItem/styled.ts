import { Box, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    width: "205px",
    height: "338px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "5px",
}));

export const AnimeSeries = styled(Typography)(() => ({
    position: "relative",
    color: "white",
    top: "-35px",
    left: "5px",
    background: "#09161c",
    width: "fit-content",
    padding: "1px 5px 1px 15px",
}));

export const AnimeNames = styled(Typography)(() => ({
    fontSize: "18px",
    color: "white",
    width: "205px",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "block",
}));