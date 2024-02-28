import { Box, Tooltip } from "@mui/material";
import { GlobalContentMain, GlobalTitleMain } from "../../../ui/styled.ts";
import { FC, memo, ReactNode } from "react";

interface IAnimeStatus {
    imgPath: ReactNode;
    label: string;
    status?: number;
}

const AnimeStatus: FC<IAnimeStatus> = ({ imgPath, label, status = 0 }) => {
    const stat = +status;
    return (
        <Tooltip
            arrow={true}
            title={label}
            PopperProps={{
                sx: {
                    ".MuiTooltip-tooltip": {
                        fontSize: "14px",
                        padding: "5px 10px",
                        background: "#11212e",
                    },
                    ".MuiTooltip-arrow": {
                        color: "#11212e",
                    },
                },
            }}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box>
                <GlobalTitleMain>{imgPath}</GlobalTitleMain>
                <GlobalContentMain>
                    {stat.toLocaleString("en")}
                </GlobalContentMain>
            </Box>
        </Tooltip>
    );
};

export default memo(AnimeStatus);
