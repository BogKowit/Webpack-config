import "../styles/index.scss";
import Recipes from "./Recipes.jsx"

import React from 'react';

const App = () => {
    return (
        <>
            <section className="hero"></section>
        <main>
            <section>
                <h1>Hoii, react</h1>
            </section>
            <Recipes />
        </main>
        </>
    );
};

export default App;