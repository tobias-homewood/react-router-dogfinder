import "./App.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Link,
    Navigate,
} from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

function App({ dogs }) {
    return (
        <Router>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>
                {dogs.map((dog) => (
                    <div key={dog.name}>
                        <NavLink to={"/dogs/" + dog.name}>{dog.name}</NavLink>
                    </div>
                ))}
            </nav>
            <Routes>
                <Route path="/dogs">
                    <Route index element={<DogList dogs={dogs} />} />
                    <Route path=":name" element={<DogDetails dogs={dogs} />} />
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
