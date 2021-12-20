import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

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

const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Green",
        value: "green",
    },
    {
        label: "A Shade of Blue",
        value: "blue",
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="ui container">
            <Route path="/" children={<Accordion items={items} />} />

            <Route path="/list" children={<Search />} />

            <Route
                path="/dropdown"
                children={
                    <Dropdown
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                }
            />

            <Route path="/translate" children={<Translate />} />
        </div>
    );
};

export default App;
