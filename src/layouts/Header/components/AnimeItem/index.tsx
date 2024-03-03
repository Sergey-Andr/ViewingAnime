import { Box } from "@mui/material";
import { Dispatch, FC, memo, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { IListItem } from "../../../../types/listOfAnime.ts";
import { ContainerItem, ItemText } from "./ui/styled.ts";

interface IAnimeItem {
    option: IListItem;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const AnimeItem: FC<IAnimeItem> = ({ option, setIsOpen }) => {
    return (
        <Link
            onClick={() => {
                setIsOpen(false);
            }}
            to={`/anime/${option.node.id}`}
            style={{
                textDecoration: "none",
            }}
        >
            <ContainerItem>
                <Box>
                    <img
                        src={option.node.main_picture.large}
                        style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "14px",
                            borderRadius: "50%",
                        }}
                        alt="Anime icon"
                    />
                </Box>
                <ItemText>{option.node.title}</ItemText>
            </ContainerItem>
        </Link>
    );
};

export default memo(AnimeItem);
