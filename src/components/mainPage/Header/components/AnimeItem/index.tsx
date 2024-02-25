import { Box } from "@mui/material";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { ContainerItem, ItemText } from "../../ui/styled.ts";
import { IListItem } from "../../../../../types/listOfAnime.ts";

interface IAnimeItem {
    option: IListItem;
}

export const AnimeItem: FC<IAnimeItem> = ({ option }) => {
    return (
        <Link to={`/anime/${option.node.id}`}
              style={{
                  textDecoration: "none",
              }}
        >
            <ContainerItem>
                <Box>
                    <img src={option.node.main_picture.large}
                         style={{ width: "50px", height: "50px", marginRight: "14px", borderRadius: "50%" }}
                         alt="Anime icon" />
                </Box>
                <ItemText>
                    {option.node.title}
                </ItemText>
            </ContainerItem>
        </Link>
    );
};

export default memo(AnimeItem);