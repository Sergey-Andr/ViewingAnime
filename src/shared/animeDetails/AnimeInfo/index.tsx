import { ContainerInfo, ItemInfo } from "./styled.ts";
import { IAnimeDetails } from "../../../widgets/animeDetailsPage/Header";
import { FC, ReactElement } from "react";

const AnimeInfo: FC<IAnimeDetails> = ({ data }): ReactElement => {
    return (
        <ContainerInfo>
            <ItemInfo>
                Watching:{" "}
                <span>
                    {Math.floor(data.average_episode_duration === 0 ? 1440 / 60 : data.average_episode_duration / 60)} мин.
                </span>
            </ItemInfo>
            <ItemInfo>
                Year of publication:{" "}<span>{data?.start_date?.slice(0, 4) || data?.created_at?.slice(0, 4)}</span>
            </ItemInfo>
            <ItemInfo>
                Genres:{" "}
                <span>
                    {data.genres.map((el, i) => (
                        <span key={el.name}>
                            {el.name}
                            {data.genres.length - 1 !== i && ", "}
                        </span>
                    ))}
                </span>
            </ItemInfo>
            <ItemInfo>
                Studio:{" "}
                <span>
                    {data.studios.map((el, i) => (
                        <span key={el.name}>
                            {el.name}
                            {data.studios.length - 1 !== i && ", "}
                        </span>
                    ))}
                </span>
            </ItemInfo>
        </ContainerInfo>
    );
};

export default AnimeInfo;