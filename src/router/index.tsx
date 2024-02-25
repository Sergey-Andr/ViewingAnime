import MainPage from "../pages/Main";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import AnimeDetailsPage from "../pages/AnimeDetails";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainPage />} />
            <Route path="/anime/:animeId" element={<AnimeDetailsPage />} />
        </>,
    ),
);

export default router;
