import "../styles/index.scss";
import Recipes from "./Recipes.jsx"
import sword from "../images/swc-sword.png"
import swordSVG from "../images/sword.svg"

import React from 'react';

const App = () => {
    return (
        <>
            <section className="hero"></section>
        <main>
            <section>
                <h1>Oh Hai redact</h1>
            </section>
            <img src={sword} alt="sword" width="250px"/>
            <img src={swordSVG} alt="sword" width="250px"/>
            <Recipes />
        </main>
        </>
    );
};

export default App;