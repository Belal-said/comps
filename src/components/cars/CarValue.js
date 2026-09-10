import { useSelector } from "react-redux";

function CarValue() {
    const totalCost = useSelector(({ carControl: { data, searchTerm } }) => {
        const filteredCars = data
            .filter((item) => {
                return item.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            })
            .reduce((acc, car) => acc + car.cost, 0);

        // let cost = 0;
        // for (let car of filteredCars) {
        //     cost += car.cost
        // }
        // return cost
    });
    return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
