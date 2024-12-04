import React from "react";
import './DogList.scss';

const DogList = ({dogs}) => {
    return (
        <div className="doglist">
            {dogs.map(dog => (
                <div key={dog.name}>
                    <h1>{dog.name}</h1>
                    <img src={`/images/${dog.src}`} alt={dog.name} />
                </div>
            ))}
        </div>
    );
};

export default DogList;
