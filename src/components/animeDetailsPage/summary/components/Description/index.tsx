import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../hooks/queries/useGetCurrentAnime.ts";
import { GlobalContainer } from "../../../../../sharedStyles/GlobalContainer.ts";
import { GlobalTitle } from "../../../../../sharedStyles/GlobalTItle.ts";
import { GlobalLabel } from "../../../../../sharedStyles/GlobalLabel.ts";
import { Hr } from "../../../../../sharedStyles/GlobalHr.ts";

const Description = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);

    return (
        <GlobalContainer>
            <GlobalLabel>Description</GlobalLabel>
            <Hr />
            <GlobalTitle sx={{ padding: "10px" }}>
                {data?.synopsis || "..."}
            </GlobalTitle>
        </GlobalContainer>
    );
};

export default memo(Description);
