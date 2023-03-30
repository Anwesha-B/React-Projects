
import { useState } from "react";
import AnimalCard from './AnimalCard';
import './App.css';

function getRandom() {
    const animalList = ['bird', 'cat', 'dog', 'horse', 'gator'];
    return animalList[Math.floor(Math.random() * animalList.length)]
}

function App() {
    const [animals, setAnimals] = useState([]);
    function handleClick() {
        setAnimals([...animals, getRandom()]);
    }

    function showAnimals() {

        return (
        <div>
                {animals.map((animal, index) => {
                    console.log(animals);
                    return <AnimalCard title ={animal} key = {index}/>
                })
            }</div>
        )
        
    }

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{showAnimals()}</div>
        </div>
    );
}

export default App;