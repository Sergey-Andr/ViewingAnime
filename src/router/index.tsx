import MainPage from "../pages/Main";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactElement } from "react";
import AnimeDetailsPage from "../pages/AnimeDetails";

const Router = (): ReactElement => {
    const routes = [
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: `/anime/:animeId`,
            element: <AnimeDetailsPage />,
        },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ];

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, element, errorElement }: any) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                        errorElement={errorElement}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
