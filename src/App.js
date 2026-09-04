import Dropdown from "./components/DropDown";
import { useState } from "react";

function App() {
    const [selection, setSelection] = useState(null)

    const handleSelect = (option) => {
        setSelection(option)
    }

    const options = [
        { id: "1", label: "Red", value: "red" },
        { id: "2", label: "Green", value: "green" },
        { id: "3", label: "Blue", value: "blue" },
    ];

    return <Dropdown options={options} value={selection} onChange={handleSelect}/>;
}

export default App;
