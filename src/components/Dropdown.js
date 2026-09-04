import { useState } from "react";
import { GoChevronDown } from 'react-icons/go'

function Dropdown({ options, onChange, value }) {
    const [isOpen, SetIsOpen] = useState(false);

    const handleClick = () => {
        SetIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // close dropdown
        SetIsOpen(false);
        // what option did the user clicked on
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)}
                key={option.value}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="w-48 relative">
            <div
                className="flex justify-between items-center cursor-pointer rounded border p-3 shadow bg-white w-full"
                onClick={handleClick}
            >
                {value?.label || "Select..."}
                <GoChevronDown />
            </div>
            {isOpen && (
                <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
                    {renderedOptions}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
