import { Box } from "@mui/material";
import { useGetCurrentAnimeQuery } from "../../../../../hooks/queries/useGetCurrentAnime.ts";
import Seasons from "../Seasons";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { GlobalContainer } from "../../../../../sharedStyles/GlobalContainer.ts";
import { GlobalTitle } from "../../../../../sharedStyles/GlobalTItle.ts";
import { SeasonsContainer } from "./ui/styled.ts";
import { Hr, HrDashed } from "../../../../../sharedStyles/GlobalHr.ts";

const RelatedSeasons = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);

    const sequelId = data?.related_anime?.find(
        (anime: any) => anime.relation_type === "sequel",
    );
    const prequelId = data?.related_anime?.find(
        (anime: any) => anime.relation_type === "prequel",
    );

    const { data: sequelData } = useGetCurrentAnimeQuery(sequelId?.node?.id);
    const { data: prequelData } = useGetCurrentAnimeQuery(prequelId?.node?.id);
    return (
        <>
            {sequelData || prequelData ? (
                <Box sx={{ marginBottom: "15px" }}>
                    <SeasonsContainer>
                        <HrDashed />
                        <GlobalTitle>Seasons</GlobalTitle>
                        <HrDashed />
                    </SeasonsContainer>
                    <GlobalContainer>
                        {sequelData ? (
                            <Seasons data={sequelData} relation={"Sequel"} />
                        ) : (
                            <></>
                        )}
                        {sequelData && prequelData ? <Hr /> : <></>}
                        {prequelData ? (
                            <Seasons data={prequelData} relation={"Prequel"} />
                        ) : (
                            <></>
                        )}
                    </GlobalContainer>
                </Box>
            ) : (
                <></>
            )}
        </>
    );
};

export default memo(RelatedSeasons);
