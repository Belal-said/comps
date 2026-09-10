import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../../store";

const memoizedData = createSelector(
    [(state) => state.carControl.data, (state) => state.carControl.searchTerm],
    (data, searchTerm) =>
        data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
);

function CarList() {
    const dispatch = useDispatch();

    const cars = useSelector(memoizedData);
    const name = useSelector((state) => state.carForm.name);

    const handleCarDelete = (item) => {
        dispatch(removeCar(item.id));
    };
    const renderedCars = cars.map((item) => {
        return (
            <div key={item.id} className="panel">
                <p>
                    {item.name} - ${item.cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(item)}
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList;
