import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./ColorDetails.scss";

const ColorDetails = ({ colors }) => {
    const { color } = useParams();
    const navigate = useNavigate();
    const getContrastingTextColor = (hex) => {
        // Convert the hex color to RGB

        // The hex color is in the format #RRGGBB

        // For each color we get two characters at the indexes 1,3,5
        // then convert them to decimal
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);

        // The YIQ formula is used to determine what the best contrasting color is
        // We calculate the luminance of the color by using the formula
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;

        return yiq >= 128 ? "black" : "white";
    };

    try {
        // if the color does not exist, this will throw an error
        const { name, hex } = colors.find((c) => c.name === color);
        return (
            <div className="colordetails" style={{backgroundColor: hex, color: getContrastingTextColor(hex)}}>
                <h1>Name: {name}</h1>
                <h2>Hexadecimal value: {hex}</h2>
                <button className={`btn btn-outline-${ getContrastingTextColor(hex) == "white" ? "light" : "dark"}`} onClick={() => navigate("/colors")}>Back</button>
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
