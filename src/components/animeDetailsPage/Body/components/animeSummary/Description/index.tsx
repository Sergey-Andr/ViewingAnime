import {
    GlobalContainerMain,
    GlobalLabelMain,
    GlobalTitleMain,
    Hr,
} from "../../../ui/styled.ts";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../../hooks/queries/useGetCurrentAnime.ts";

const Description = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);

    return (
        <GlobalContainerMain>
            <GlobalLabelMain>Description</GlobalLabelMain>
            <Hr />
            <GlobalTitleMain sx={{ padding: "10px" }}>
                {data?.synopsis || "..."}
            </GlobalTitleMain>
        </GlobalContainerMain>
    );
};

export default memo(Description);
