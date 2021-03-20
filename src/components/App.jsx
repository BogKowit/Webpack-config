import "../styles/index.scss";
import Recipes from "./Recipes.jsx"

import React from 'react';

const App = () => {
    return (
        <>
            <section className="hero"></section>
        <main>
            <section>
                <h1>Oh Hai redact</h1>
            </section>
        </main>

        <Recipes />
        </>
    );
};

export default App;