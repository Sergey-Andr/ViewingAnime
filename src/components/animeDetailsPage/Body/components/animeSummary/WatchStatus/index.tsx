import { Box, Tooltip } from "@mui/material";
import { memo } from "react";
import { watchStatus } from "../../../../../../constants/watchStatus.ts";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../../hooks/queries/useGetCurrentAnime.ts";
import { animeGlobalStore } from "../../../../../../store/Main/AnimeGlobalStore.ts";
import { StatusBtn } from "../../../ui/styled.ts";
import { shallow } from "zustand/shallow";

const WatchStatus = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);

    const { animeStatus, setAnimeStatus } = animeGlobalStore(
        ({ animeStatus, setAnimeStatus }) => ({
            animeStatus,
            setAnimeStatus,
        }),
        shallow,
    );

    return (
        <Box sx={{ marginBottom: "15px" }}>
            {watchStatus.map((status, index) => (
                <Tooltip
                    key={index}
                    title={
                        status.value === "completed" && !data?.end_date
                            ? "This anime has not finished yet, so this option is not available."
                            : ""
                    }
                    placement="top"
                    arrow={true}
                    PopperProps={{
                        sx: {
                            ".MuiTooltip-tooltip": {
                                fontSize: "14px",
                                padding: "5px 10px",
                                background: "#11212e",
                                textAlign: "center",
                            },
                            ".MuiTooltip-arrow": {
                                color: "#11212e",
                            },
                        },
                    }}
                >
                    <span>
                        <StatusBtn
                            onClick={() => {
                                if (data?.id) {
                                    setAnimeStatus(data.id, status.value);
                                }
                            }}
                            key={index}
                            disabled={
                                status.value === "completed" && !data?.end_date
                            }
                            sx={
                                data?.id &&
                                animeStatus[data.id] === status.value
                                    ? {
                                          backgroundImage:
                                              "linear-gradient(-70deg, #C96DD8 0%, #ff6e24 100%)",
                                          WebkitBackgroundClip: "text",
                                          backgroundClip: "text",
                                          color: "transparent",
                                          fontWeight: "700",
                                      }
                                    : {}
                            }
                        >
                            {status.label || "..."}
                        </StatusBtn>
                    </span>
                </Tooltip>
            ))}
        </Box>
    );
};

export default memo(WatchStatus);
