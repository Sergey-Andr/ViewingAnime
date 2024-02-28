import {
    GlobalContainerMain,
    GlobalLabelMain,
    StatisticWrapper,
} from "../../../ui/styled.ts";
import { memo } from "react";
import AnimeStatus from "../AnimeStatus";
import { triangleIcon } from "../../../../../../../public/triangle.tsx";
import { eyeIcon } from "../../../../../../../public/eye.tsx";
import { pauseIcon } from "../../../../../../../public/pause.tsx";
import { bloodIcon } from "../../../../../../../public/blood.tsx";
import { doubleCheckMarksIcon } from "../../../../../../../public/doubleCheckMarks.tsx";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../../hooks/queries/useGetCurrentAnime.ts";

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
                    imgPath={triangleIcon({ color: "#7838bf" })}
                    status={data?.statistics.status.watching}
                    label={"watching"}
                />
                <AnimeStatus
                    imgPath={eyeIcon({ color: "#267dcf" })}
                    status={data?.statistics.status.plan_to_watch}
                    label={"plan to watch"}
                />
                <AnimeStatus
                    imgPath={pauseIcon({ color: "#c7911f" })}
                    status={data?.statistics.status.on_hold}
                    label={"pause"}
                />
                <AnimeStatus
                    imgPath={bloodIcon({ color: "#e5334a" })}
                    status={data?.statistics.status.dropped}
                    label={"dropped"}
                />
                <AnimeStatus
                    imgPath={doubleCheckMarksIcon({ color: "#00b021" })}
                    status={data?.statistics.status.completed}
                    label={"completed"}
                />
            </StatisticWrapper>
        </GlobalContainerMain>
    );
};

export default memo(Statistics);
