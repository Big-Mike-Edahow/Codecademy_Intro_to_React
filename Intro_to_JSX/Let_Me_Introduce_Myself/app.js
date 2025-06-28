// app.js
// Let me introduce myself

import React from "react";
import { createRoot } from "react-dom/client";

const myList = (
    <ul>
        <li>Hey folks</li>
        <li>This is Big Mike</li>
    </ul>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(myList);
