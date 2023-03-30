import "bulma/css/bulma.css";
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import { useState } from "react";
import './AnimalShow.css';

const svgMap = {
    "bird": bird,
    "cat": cat,
    "dog": dog,
    "cow": cow,
    "gator": gator,
    "heart": heart,
    "horse": horse
};

function AnimalCard({ title }) {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div className="card">
        <div className="animal-show" onClick={handleClick}>
                <img src={svgMap[title]} className="animal" />
                <img src={heart} style={{width:10 + 10*clicks+'px' }} className="heart"/>
        </div>
    </div>);
}

export default AnimalCard;