import AnimatedCursor from "react-animated-cursor";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./routes/homePage";

import RouteTransition from "./utils/routeTransition";
import hideLoader from "./utils/hideLoader";

export default function App() {
    useEffect(hideLoader, []);

    return (
        <>
            <AnimatedCursor innerSize={10} outerSize={50} outerScale={2} color='255, 255, 255' />
            <Routes>
                <Route element={<RouteTransition />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </>
    );
}