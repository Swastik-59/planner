import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Screen from "./components/screens/login-register-screen"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Screen />} />
            <Route path="/app" element={<App />} />
        </Routes>
    </BrowserRouter>
    , document.getElementById("root"));