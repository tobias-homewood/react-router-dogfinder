import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DogNavbar = ({ dogs }) => {
    return (
        <>
            <nav>
                <div>
                    <NavLink to="/dogs" end>
                        Home
                    </NavLink>
                </div>
                {dogs.map((dog) => (
                    <div key={dog.name}>
                        <NavLink to={"/dogs/" + dog.name}>{dog.name}</NavLink>
                    </div>
                ))}
            </nav>
            <Outlet />
        </>
    );
};

export default DogNavbar;
