function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>;
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td className="p-3" key={column.label}>{column.render(rowData)}</td>
        })
        return (
            <tr className="border-b border-gray-200" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;
