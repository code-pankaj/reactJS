import React from "react";
import ReactDOM from "react-dom/client"; 
import { useState } from "react";

// const heading = React.createElement(
//     "h1", 
//     {
//         id: "title",
//     },
//     "Namaste Doosto..."
// );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "title2",
//     },
//     "Namaskaar Everyone!"
// );

// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//     },
//     [heading, heading2]
// )

const heading = () => {
    return (
        <h1 id="title">Namaste Doosto...</h1>
    )
}
const container = (
    <div id="container">
        {heading()}
        <h1 id="title">Namaste Doosto...</h1>
        <h2 id="title2">Namaskaar Everyone!</h2>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);