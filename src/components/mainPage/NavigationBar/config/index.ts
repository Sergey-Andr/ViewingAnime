import fire from "../../../../../public/fire.svg";
import popcorn from "../../../../../public/popcorn.svg";
import cup from "../../../../../public/cup.svg";
import calendar from "../../../../../public/calendar.svg";
import wallClock from "../../../../../public/wall-clock.svg";
import { FunctionComponent, SVGAttributes } from "react";


interface ITabs {
    label: string;
    component: string;
    icon: FunctionComponent<SVGAttributes<SVGElement>>;
}

export const tabs: ITabs[] = [
    {
        label: "новинки",
        component: "/novelty",
        icon: fire,
    },
    {
        label: "жанры",
        component: "/genres",
        icon: popcorn,
    },
    {
        label: "топ 100 аниме",
        component: "/top",
        icon: cup,
    },
    {
        label: "расписание",
        component: "/schedule",
        icon: calendar,
    },
    {
        label: "по годам",
        component: "*",
        icon: wallClock,
    },
];