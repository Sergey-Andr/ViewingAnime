import { Box, styled } from "@mui/material";

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
    zIndex: "20",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "50px 0",
}));