import React from "react";
import './DogList.scss';

const DogList = ({dogs}) => {
    return (
        <div className="doglist">
            {dogs.map(dog => (
                <div className="card" key={dog.name}>
                    <h1>{dog.name}</h1>
                    <img src={dog.src} alt={dog.name} />
                </div>
            ))}
        </div>
    );
};

export default DogList;
