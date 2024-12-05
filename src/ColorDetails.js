import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./ColorDetails.scss";

const ColorDetails = ({ colors }) => {
    const { color } = useParams();
    const navigate = useNavigate();

    try {
        // if the color does not exist, this will throw an error
        const { name, hex } = colors.find((c) => c.name === color);
        return (
            <div className="colordetails" style={{backgroundColor: hex}}>
                <h1>Name: {name}</h1>
                <h2>Hexadecimal value: {hex}</h2>
                <button onClick={() => navigate("/colors")}>Back</button>
            </div>
        );

    // the error will be caught here
    } catch (e) {
        console.error(e);
        // if the color does not exist, redirect to the colors page
        return <Navigate to="/colors" />;
    } 
};

export default ColorDetails;
