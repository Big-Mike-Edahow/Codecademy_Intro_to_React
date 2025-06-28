// app.js
// Variable Attributes

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const goose =
    "https://content.codecademy.com/courses/React/react_photo-goose.jpg";

const gooseImg = <img src={goose} alt="Goose Image" width="480px" />;
root.render(gooseImg);
