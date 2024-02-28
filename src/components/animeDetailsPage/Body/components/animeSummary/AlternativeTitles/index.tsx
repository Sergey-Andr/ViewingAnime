import { memo } from "react";
import {
    GlobalContainerMain,
    GlobalLabelMain,
    GlobalTitleMain,
    Hr,
} from "../../../ui/styled.ts";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../../hooks/queries/useGetCurrentAnime.ts";

const AlternativeTitles = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    const titles = Object.values(data?.alternative_titles || []).flat();
    return (
        <GlobalContainerMain>
            <GlobalLabelMain>Alternative titles</GlobalLabelMain>
            <Hr />
            <GlobalTitleMain
                sx={{
                    lineHeight: "32px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {titles?.map((title) => <span key={title}>{title}</span>)}
            </GlobalTitleMain>
        </GlobalContainerMain>
    );
};

export default memo(AlternativeTitles);
