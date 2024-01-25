import { Box } from "@mui/material";
import { AnimeNames, AnimeSeries, Wrapper } from "./styled.ts";
import { FC } from "react";

interface IAnimeItem {
    i: number;
    el: { image: string, name: string; series: string };
}

const AnimeItem: FC<IAnimeItem> = ({ i, el }) => {
    return (
        <Wrapper
            key={i}
        >
            <Box sx={{ position: "relative", height: "300px" }}>
                <img style={{
                    background: "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #6bb16e",
                    width: "195px",
                    height: "282px",
                    padding: "5px",
                }}
                     src={el.image} alt={"Anime image"} />
                <AnimeSeries
                >{el.series} серия</AnimeSeries>
            </Box>
            <AnimeNames>{el.name}</AnimeNames>
        </Wrapper>
    );
};

export default AnimeItem;