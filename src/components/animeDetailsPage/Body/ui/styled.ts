import { Box, Button, styled, Typography } from "@mui/material";

export const WrapperMain = styled(Box)(() => ({
    position: "relative",
    width: "360px",
}));

export const WrapperSummary = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "825px",
    marginRight: "15px",
}));

export const GlobalContainerMain = styled(Box)(() => ({
    border: "2px solid #11212e",
    borderRadius: "5px",
    height: "fit-content",
    width: "100%",
    marginBottom: "20px",
}));

export const GlobalLabelMain = styled(Typography)(() => ({
    fontWeight: "500",
    fontFamily: "sans-serif",
    fontSize: "20px",
    padding: "10px 10px 5px 10px",
    letterSpacing: "0.3px",
    color: "#fff",
}));

export const Hr = styled(Box)(() => ({
    height: "2px",
    background: "#11212e",
    width: "100%",
}));

export const GlobalTitleMain = styled(Typography)(() => ({
    fontWeight: "500",
    fontFamily: "sans-serif",
    fontSize: "16px",
    letterSpacing: "0.3px",
    marginBottom: "5px",
    color: "#fff",
}));

export const GlobalContentMain = styled(Typography)(() => ({
    fontWeight: "500",
    fontFamily: "sans-serif",
    fontSize: "16px",
    letterSpacing: "0.3px",
    color: "#D7D7D7CC",
}));

export const ReviewWrapper = styled(Box)(() => ({
    borderRadius: "5px",
    height: "fit-content",
    width: "100%",
    marginBottom: "20px",
    background: "linear-gradient(0deg, #ebebf1 0%, #eff3f6 100%)",
    border: "2px solid #c9cdd3",
    boxSizing: "border-box",
    padding: "16px",
}));

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

export const SelectRatingWrapper = styled(Box)(() => ({
    display: "flex",
    border: "2px solid #91979e",
    borderLeft: "0",
    width: "fit-content",
    borderRadius: "5px",
    marginBottom: "15px",
}));

export const StatusBtn = styled(Button)(() => ({
    fontSize: "13px",
    borderLeft: "2px solid #c9cdd3",
    textTransform: "none",
    color: "#000000",
}));
