export interface IListOfAnime {
    data: IListItem[];
}

export interface IListItem {
    node: IDefaultIListItem;
    ranking: { rank: number };
}

export interface IDefaultIListItem {
    id: number;
    title: string;
    main_picture: {
        medium: string;
        large: string;
    };
}
