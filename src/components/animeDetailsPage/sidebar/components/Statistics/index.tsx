import { StatisticWrapper } from "../../../../../pages/AnimeDetails/components/Body/ui/styled.ts";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../hooks/queries/useGetCurrentAnime.ts";
import { FaCheckDouble, FaEye, FaPause, FaPlay } from "react-icons/fa6";
import { MdOutlineWaterDrop } from "react-icons/md";
import Status from "../Status";
import { GlobalContainer } from "../../../../../sharedStyles/GlobalContainer.ts";
import { GlobalStatisticsLabel } from "../../../../../sharedStyles/GlobalLabel.ts";

const Statistics = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    return (
        <GlobalContainer>
            <GlobalStatisticsLabel>
                In users list:{" "}
                {data?.statistics.num_list_users.toLocaleString("en") || 0}
            </GlobalStatisticsLabel>
            <StatisticWrapper>
                <Status
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
                    label={"Watching"}
                />

                <Status
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
                    label={"Plan to watch"}
                />

                <Status
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
                    label={"Pause"}
                />

                <Status
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
                    label={"Dropped"}
                />

                <Status
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
                    label={"Completed"}
                />
            </StatisticWrapper>
        </GlobalContainer>
    );
};

export default memo(Statistics);
