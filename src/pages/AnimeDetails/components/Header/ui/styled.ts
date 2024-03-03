import { Box, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    width: "100%",
    height: "fit-content",
    marginBottom: "30px",
}));

export const ContainerTitle = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
}));

export const Title = styled(Typography)(() => ({
    fontSize: "36px",
    color: "#fff",
    fontFamily: "sans-serif",
}));

export const Date = styled(Typography)(() => ({
    fontSize: "20px",
    fontFamily: "sans-serif",
    color: "#D7D7D7CC",
}));
