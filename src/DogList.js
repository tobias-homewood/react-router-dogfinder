import React from "react";
import { Link } from "react-router-dom";
import './DogList.scss';

const DogList = ({dogs}) => {
    return (
        <div className="doglist">
            {dogs.map(dog => (
                <div className="card" key={dog.name}>
                    <Link to={dog.name}>
                        <h1>{dog.name}</h1>
                        <img src={dog.src} alt={dog.name} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default DogList;
