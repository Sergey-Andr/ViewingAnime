import MainPage from "../pages/Main";
import {Route, Routes} from "react-router-dom";
import {ReactElement} from "react";

const Router = (): ReactElement => {
    const routes = [
        {
            path: "/",
            element: < MainPage/>,
        },
    ];

    return (
        <Routes>
            {routes.map(({path, element, errorElement}: any) => (
                <Route
                    key={path}
                    path={path}
                    element={element}
                    errorElement={errorElement}
                />
            ))}
        </Routes>
    );
};

export default Router;
