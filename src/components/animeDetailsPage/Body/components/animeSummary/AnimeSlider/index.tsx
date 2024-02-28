import { Tooltip } from "@mui/material";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import { ISpecifyAnime } from "../../../../../../types/specifyAnime.ts";
import { FC, memo } from "react";
import { AnimeListTitle } from "../../../ui/styled.ts";

interface IAnimeSlider {
    data?: ISpecifyAnime;
}

const AnimeSlider: FC<IAnimeSlider> = ({ data }) => {
    return (
        <Slide
            slidesToScroll={2}
            slidesToShow={3}
            autoplay={true}
            indicators={true}
            duration={5000}
            transitionDuration={250}
        >
            {data?.related_anime.map((anime: any) => (
                <Tooltip
                    followCursor
                    key={anime.node.id}
                    title={anime.node.title}
                    PopperProps={{
                        sx: {
                            ".MuiTooltip-tooltip": {
                                textAlign: "center",
                                background: "#11212e",
                                padding: "10px 5px",
                                fontSize: "14px",
                            },
                        },
                    }}
                >
                    <Link
                        to={`/anime/${anime.node.id}`}
                        className="each-slide-effect"
                        style={{
                            cursor: "pointer",
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={anime.node.main_picture.large}
                            alt="anime icon"
                            style={{
                                width: "125px",
                                height: "176px",
                            }}
                        />
                        <AnimeListTitle>{anime.node.title}</AnimeListTitle>
                    </Link>
                </Tooltip>
            )) || "..."}
        </Slide>
    );
};

export default memo(AnimeSlider);
