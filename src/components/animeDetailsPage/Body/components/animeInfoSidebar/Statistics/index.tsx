import {
    GlobalContainerMain,
    GlobalLabelMain,
    StatisticWrapper,
} from "../../../ui/styled.ts";
import { memo } from "react";
import AnimeStatus from "../AnimeStatus";
import triangleIcon from "../../../../../../../public/triangle.svg?react";
import EyeIcon from "../../../../../../../public/eye.svg?react";
import PauseIcon from "../../../../../../../public/pause.svg?react";
import BloodIcon from "../../../../../../../public/blood.svg?react";
import DoubleCheckMarksIcon from "../../../../../../../public/doubleCheckMarks.svg?react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../../hooks/queries/useGetCurrentAnime.ts";
import styled from "styled-components";

export const TriangleIcon = styled(triangleIcon)``;
import { SvgIcon } from "@mui/material";
import { FaCheckDouble, FaEye, FaPause, FaPlay } from "react-icons/fa6";
import { MdOutlineWaterDrop } from "react-icons/md";

const Statistics = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    return (
        <GlobalContainerMain>
            <GlobalLabelMain sx={{ textAlign: "center", marginBottom: "10px" }}>
                In users list:{" "}
                {data?.statistics.num_list_users.toLocaleString("en") || 0}
            </GlobalLabelMain>
            <StatisticWrapper>
                <AnimeStatus
                    icon={
                        <FaPlay
                            style={{
                                width: "30px",
                                height: "30px",
                                fill: "#7838bf",
                            }}
                        />
                    }
                    status={data?.statistics.status.watching}
                    label={"watching"}
                />

                <AnimeStatus
                    icon={
                        <FaEye
                            style={{
                                width: "30px",
                                height: "30px",
                                fill: "#267dcf",
                            }}
                        />
                    }
                    status={data?.statistics.status.plan_to_watch}
                    label={"plan to watch"}
                />

                <AnimeStatus
                    icon={
                        <FaPause
                            style={{
                                strokeWidth: "3",
                                width: "30px",
                                height: "30px",
                                fill: "#cfa54d",
                            }}
                        />
                    }
                    status={data?.statistics.status.on_hold}
                    label={"pause"}
                />

                <AnimeStatus
                    icon={
                        <MdOutlineWaterDrop
                            style={{
                                fill: "#e5334a",
                                height: "30px",
                                width: "30px",
                            }}
                        />
                    }
                    status={data?.statistics.status.dropped}
                    label={"dropped"}
                ></AnimeStatus>

                <AnimeStatus
                    icon={
                        <FaCheckDouble
                            style={{
                                fill: "#00b021",
                                height: "30px",
                                width: "30px",
                            }}
                        />
                    }
                    status={data?.statistics.status.completed}
                    label={"completed"}
                ></AnimeStatus>
            </StatisticWrapper>
        </GlobalContainerMain>
    );
};

export default memo(Statistics);
