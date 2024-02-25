export interface IListOfAnime {
    data: IListItem[];
}

export interface IListItem {
    node: {
        id: number,
        title: string;
        main_picture: {
            medium: string;
            large: string;
        }
    };
    ranking: { rank: number };
}