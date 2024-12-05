import React from "react";
import { Navigate, useParams } from "react-router-dom";
import "./DogDetails.scss";

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find((dog) => dog.name === name);
    if (!dog) return <Navigate to="/dogs" />;
    return (
        <div className="dogdetails">
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} />
            <h2>{dog.age} years old</h2>
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default DogDetails;