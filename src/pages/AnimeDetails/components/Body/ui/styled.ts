import { Box, Button, styled } from "@mui/material";

export const RatingWrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 10px 10px 10px",
}));

export const RatingContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

export const AboutWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px 10px 10px",
}));

export const AboutItemContainer = styled(Box)(() => ({
    marginBottom: "15px",
}));

export const StatisticWrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
}));

export const AnimeListWrapper = styled(Box)(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    marginBottom: "15px",
}));

export const AnimeListTitle = styled(Box)(() => ({
    color: "#fff",
    overflow: "hidden",
    width: "125px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "center",
}));

export const StatusBtn = styled(Button)(() => ({
    fontSize: "16px",
    borderLeft: "2px solid #564d4d",
    textTransform: "none",
    color: "#fff",
}));
