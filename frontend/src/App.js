import AnimatedCursor from "react-animated-cursor";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./routes/homePage";

import hideLoader from "./utils/hideLoader";

export default function App() {
    return (
        <>
            <AnimatedCursor innerSize={10} outerSize={50} outerScale={2} color='255, 255, 255' />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}