import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ add }) => {
    const navigate = useNavigate();
    const [color, setColor] = useState({ name: "", hex: "#000" });
    const handleSubmit = (e) => {
        e.preventDefault();
        add(color);
        navigate("/colors");
    };
    return (
        <div className="d-flex flex-column align-items-center">
            <h1>Add a color</h1>
            <form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <label htmlFor="name">Color Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={color.name}
                        onChange={(e) =>
                            setColor((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="hex">Color Value:</label>
                    <input
                        className="form-control"
                        type="color"
                        id="hex"
                        name="hex"
                        value={color.hex}
                        onChange={(e) =>
                            setColor((prev) => ({
                                ...prev,
                                hex: e.target.value,
                            }))
                        }
                    />
                </div>
                <button className="mt-3 btn btn-primary" type="submit">Add this color</button>
            </form>
        </div>
    );
};

export default NewColorForm;
