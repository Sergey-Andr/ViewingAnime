import { Box } from "@mui/material";
import {
    GlobalContainerMain,
    GlobalTitleMain,
    Hr,
} from "../../../ui/styled.ts";
import { useGetCurrentAnimeQuery } from "../../../../../../hooks/queries/useGetCurrentAnime.ts";
import Seasons from "../Seasons";
import { memo } from "react";
import { useParams } from "react-router-dom";

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
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "30px",
                        }}
                    >
                        <Hr
                            sx={{
                                background: "none",
                                borderTop: "2px dashed #d1d5da",
                            }}
                        />
                        <GlobalTitleMain>Seasons</GlobalTitleMain>
                        <Hr
                            sx={{
                                background: "none",
                                borderTop: "2px dashed #d1d5da",
                            }}
                        />
                    </Box>
                    <GlobalContainerMain>
                        {sequelData ? <Seasons data={sequelData} /> : <></>}
                        {sequelData && prequelData ? <Hr /> : <></>}
                        {prequelData ? <Seasons data={prequelData} /> : <></>}
                    </GlobalContainerMain>
                </Box>
            ) : (
                <></>
            )}
        </>
    );
};

export default memo(RelatedSeasons);
