import './App.scss';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Dog from './Dog';

function App({dogs}) {
  return (
    <Router>
      <nav>
      {dogs.map(dog => (
        <div key={dog.name}>
          <NavLink to={"/dogs/"+dog.name}>{dog.name}</NavLink>
        </div>
      ))}
      </nav>
      <Routes>
        <Route path="/dogs" element={<h1>Choose a dog!</h1>} />
        <Route path="/dogs/:name" element={<Dog />} />
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
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}