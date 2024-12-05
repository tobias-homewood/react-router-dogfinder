import "./App.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import DogNavbar from "./DogNavbar";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

function App({ dogs }) {
    return (
        <Router>
            <Routes>
                <Route path="/dogs" element={<DogNavbar dogs={dogs} />}>
                    <Route index element={<DogList dogs={dogs} />} />
                    <Route path=":name" element={<DogDetails dogs={dogs} />} />
                    <Route path="*" element={<Navigate to="/dogs" />} />
                </Route>
                <Route path="/colors" /*element={<ColorNavbar colors={colors} />}*/>
                    <Route index element={<h1>A List of Colors</h1>} />
                    <Route path=":color" element={<h1>Specific Color</h1>} />
                    <Route path="*" element={<Navigate to="/colors" />} />
                </Route>
                <Route path="*" element={<Navigate to="/dogs" />} />
            </Routes>
        </Router>
    );
}

export default App;

App.defaultProps = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: "whiskey.jpg",
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!",
            ],
        },
        {
            name: "Duke",
            age: 3,
            src: "duke.jpg",
            facts: [
                "Duke believes that ball is life.",
                "Duke likes snow.",
                "Duke enjoys pawing other dogs.",
            ],
        },
        {
            name: "Perry",
            age: 4,
            src: "perry.jpg",
            facts: [
                "Perry loves all humans.",
                "Perry demolishes all snacks.",
                "Perry hates the rain.",
            ],
        },
        {
            name: "Tubby",
            age: 4,
            src: "tubby.jpg",
            facts: [
                "Tubby is really stupid.",
                "Tubby does not like walks.",
                "Angelina used to hate Tubby, but claims not to anymore.",
            ],
        },
    ],
};
