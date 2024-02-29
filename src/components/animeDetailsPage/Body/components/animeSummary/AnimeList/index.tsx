import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { ISpecifyAnime } from "../../../../../../types/specifyAnime.ts";
import { FC, memo } from "react";
import { AnimeListTitle, AnimeListWrapper } from "../../../ui/styled.ts";

interface IAnimeList {
    data: ISpecifyAnime;
}

const AnimeList: FC<IAnimeList> = ({ data }) => {
    return (
        <AnimeListWrapper>
            {data?.related_anime.map((anime) => (
                <Tooltip
                    followCursor
                    key={anime.node.id}
                    title={anime.node.title}
                    PopperProps={{
                        sx: {
                            ".MuiTooltip-tooltip": {
                                textAlign: "center",
                                padding: "10px 5px",
                                fontSize: "14px",
                                background: "#11212e",
                            },
                        },
                    }}
                >
                    <Link
                        to={`/anime/${anime.node.id}`}
                        style={{
                            cursor: "pointer",
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={anime.node.main_picture.large}
                            alt="anime icon"
                            style={{
                                width: "125px",
                                height: "176px",
                                marginBottom: "15px",
                            }}
                        />
                        <AnimeListTitle>{anime.node.title}</AnimeListTitle>
                    </Link>
                </Tooltip>
            )) || "..."}
        </AnimeListWrapper>
    );
};

export default memo(AnimeList);
