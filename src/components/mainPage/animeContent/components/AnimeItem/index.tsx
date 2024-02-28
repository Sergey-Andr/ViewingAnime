import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { IListItem } from "../../../../../types/listOfAnime.ts";
import {
    AnimeNames,
    ContainerImg,
    NoneImgContainer,
    NoneImgText,
    WrapperItem,
} from "../../ui/styled.ts";

interface IAnimeItem {
    item?: IListItem;
}

const AnimeItem: FC<IAnimeItem> = ({ item }) => {
    return (
        <WrapperItem>
            <Link
                to={`/anime/${item?.node?.id}`}
                style={{ textDecoration: "none" }}
            >
                {item?.node?.main_picture?.large ? (
                    <ContainerImg>
                        <img
                            style={{
                                border: "5px solid transparent",
                                background:
                                    "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #6bb16e",
                                width: "185px",
                                height: "275px",
                            }}
                            src={item.node?.main_picture?.large}
                            alt={"Anime image"}
                        />
                    </ContainerImg>
                ) : (
                    <NoneImgContainer>
                        <NoneImgText>NONE IMAGE</NoneImgText>
                    </NoneImgContainer>
                )}
                <AnimeNames>{item?.node?.title || "..."}</AnimeNames>
            </Link>
        </WrapperItem>
    );
};

export default memo(AnimeItem);
