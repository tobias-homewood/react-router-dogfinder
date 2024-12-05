import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import DogNavbar from "./DogNavbar";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails.js";

function App() {
    const [dogs, setDogs] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const fetchDogs = async () => {
            const res = await axios.get("http://localhost:5001/dogs");
            setDogs(res.data);
        };

        const fetchColors = async () => {
            const res = await axios.get("http://localhost:5001/colors");
            setColors(res.data);
        };

        fetchDogs();
        fetchColors();
    }, []);

    const addColor = async (newColor) => {
        const res = await axios.post("http://localhost:5001/colors", newColor);
        console.log(res.data);
    };

    return (
        <Router>
            <Routes>
                <Route path="/dogs" element={<DogNavbar dogs={dogs} />}>
                    <Route index element={<DogList dogs={dogs} />} />
                    <Route path=":name" element={<DogDetails dogs={dogs} />} />
                    <Route path="*" element={<Navigate to="/dogs" />} />
                </Route>
                <Route path="/colors">
                    <Route index element={<ColorList colors={colors} add={addColor} />} />
                    <Route path=":color" element={<ColorDetails colors={colors} />} />
                    <Route path="*" element={<Navigate to="/colors" />} />
                </Route>
                <Route path="*" element={<Navigate to="/dogs" />} />
            </Routes>
        </Router>
    );
}

export default App;