import { FC } from "react";
import { DefaultContainer, Wrapper } from "./styled.ts";
import AnimeInfo from "../../../shared/animeDetails/AnimeInfo";
import AnimeInfoRating from "../../../shared/animeDetails/AnimeRating";
import WhatAboutAnime from "../../../shared/animeDetails/WhatAboutAnime";

export interface IAnimeDetails {
    data: {
        main_picture: { medium: string; large: string };
        average_episode_duration: number;
        title: string;
        popularity: number;
        mean: number;
        start_date: string;
        created_at: string;
        filmMaker: string;
        genres: { id: number; name: string }[];
        studios: { id: number; name: string }[];
        pictures: { medium: string; large: string }[];
        synopsis: string;
        num_episodes: number;
    };
}

const AnimeDetailsHeader: FC<IAnimeDetails> = ({ data }) => {
    return (
        <Wrapper
            sx={{
                background: `url(${data.pictures[0].large})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <DefaultContainer>
                <img
                    src={data.main_picture.large}
                    alt={"Anime picture"}
                    style={{
                        width: "205px",
                        height: "300px",
                        padding: "5px",
                        background:
                            "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #6bb16e",
                        margin: "0 0 0 30px",
                    }}
                />
                <AnimeInfoRating data={data} />
                <AnimeInfo data={data} />
            </DefaultContainer>
            <WhatAboutAnime data={data} />

        </Wrapper>
    );
};

export default AnimeDetailsHeader;
