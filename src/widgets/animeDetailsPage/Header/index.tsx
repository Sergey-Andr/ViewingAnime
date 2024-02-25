import { FC, memo } from "react";
import { DefaultContainer, Wrapper } from "./styled.ts";
import AnimeInfo from "../../../shared/animeDetails/AnimeInfo";
import AnimeInfoRating from "../../../shared/animeDetails/AnimeRating";
import WhatAboutAnime from "../../../shared/animeDetails/WhatAboutAnime";
import { ISpecifyAnime } from "../../../hooks/queries/useGetCurrentAnime.ts";

interface IAnimeDetails {
    data: ISpecifyAnime;
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

export default memo(AnimeDetailsHeader);
