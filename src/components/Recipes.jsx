import { useState } from "react";

const airRecipe ={
    a: 2,
    b: 1,
};
const fireRecipe={
    c:4,
    d:3,
};
console.log(airRecipe);
console.log(fireRecipe);

const Recipes = () => {
    const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={() => setRecipe(fireRecipe)}>Fire recipe</button>
            <button onClick={() => setRecipe(airRecipe)}>Air recipe</button>
        
        <ul>
            {Object.keys(recipe).map((material) => (
            <li key={material}> 
            {material}: {recipe[material]}
            </li>
            ))}
        </ul>
        </div>
    )
};

export default Recipes;