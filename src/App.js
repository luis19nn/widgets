import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

// const options = [
//     {
//         label: "The Color Red",
//         value: "red",
//     },
//     {
//         label: "The Color Green",
//         value: "green",
//     },
//     {
//         label: "A Shade of Blue",
//         value: "blue",
//     },
// ];

const App = () => {
    return (
        <div className="ui container">
            <Accordion items={items} />
        </div>
    );
};

export default App;
