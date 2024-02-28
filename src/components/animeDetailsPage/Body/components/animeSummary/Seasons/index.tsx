import { Box } from "@mui/material";
import { GlobalTitleMain } from "../../../ui/styled.ts";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { ISpecifyAnime } from "../../../../../../types/specifyAnime.ts";

interface ISeasons {
    data: ISpecifyAnime;
}

const Seasons: FC<ISeasons> = ({ data }) => {
    return (
        <Link to={`/anime/${data?.id}`} style={{ textDecoration: "none" }}>
            <Box sx={{ padding: "15px", display: "flex" }}>
                <img
                    src={data?.main_picture?.large}
                    style={{
                        width: "90px",
                        height: "127px",
                        marginRight: "15px",
                    }}
                    alt={"anime icon"}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                    }}
                >
                    <GlobalTitleMain>{data?.title}</GlobalTitleMain>

                    <GlobalTitleMain>Ep - {data?.num_episodes}</GlobalTitleMain>

                    <GlobalTitleMain>
                        Year - {data?.start_date.slice(0, 4)}
                    </GlobalTitleMain>

                    <GlobalTitleMain>
                        status -{" "}
                        {data?.status === "not_yet_aired"
                            ? "not yet realised"
                            : "realised"}
                    </GlobalTitleMain>
                </Box>
            </Box>
        </Link>
    );
};

export default memo(Seasons);
