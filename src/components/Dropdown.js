import { useState } from 'react'

function Dropdown({ options, onChange, value }) {
    const [isOpen, SetIsOpen] = useState(false)

    const handleClick = () => {
        SetIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        // close dropdown
        SetIsOpen(false)
        // what option did the user clicked on
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
    });

    return (
        <div>
            <div onClick={handleClick}>{value?.label || 'Select...'}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;
