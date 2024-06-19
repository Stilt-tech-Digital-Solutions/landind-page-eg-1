import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Root from "./root";
import Preloader from "../components/toolkit/preloader";
import About from "./about";
import ErrorPage from "./error/error.component";

const Home = lazy(() => import("./home"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Preloader />}>
                <Root />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            }, {
                path: '/about',
                element: <About />,
            }
        ],
    },
]);

export default router;
