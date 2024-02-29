import { Box, Tooltip } from "@mui/material";
import { GlobalContentMain, GlobalTitleMain } from "../../../ui/styled.ts";
import { FC, memo, ReactElement, ReactNode } from "react";

interface IAnimeStatus {
    icon: ReactNode;
    label: string;
    status?: number;
}

const AnimeStatus: FC<IAnimeStatus> = ({ icon, label, status = 0 }) => {
    const stat = +status;
    return (
        <Tooltip
            arrow={true}
            title={label ? label : "..."}
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
                {icon}
                <GlobalContentMain>
                    {stat.toLocaleString("en")}
                </GlobalContentMain>
            </Box>
        </Tooltip>
    );
};

export default memo(AnimeStatus);
