import { Box, styled } from "@mui/material";

export const ContainerInfo = styled(Box)(() => ({
    background: "#09161c",
    padding: "25px 0 0 15px",
    width: "230px",
    height: "270px",
    borderRadius: "15px 0px 0px 15px",
}));

export const ItemInfo = styled(Box)(() => ({
    fontWeight: "700",
    letterSpacing: "0.5px",
    fontFamily: "sans-serif",
    margin: "0 0 10px 0",
    lineHeight: "26px",
    span: {
        fontWeight: "300",
        color: "#df565a",
        fontSize: "16px",
    },
}));
