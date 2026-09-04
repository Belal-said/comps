import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

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
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                {value?.label || "Select..."}
                <GoChevronDown />
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
            )}
        </div>
    );
}

export default Dropdown;
