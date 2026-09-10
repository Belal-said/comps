import { useDispatch, useSelector } from "react-redux";
import { changeCarCost, changeCarName, addCar } from "../../store";

function CarForm() {
    const dispatch = useDispatch();

    const name = useSelector((state) => state.carForm.name);
    const cost = useSelector((state) => state.carForm.cost);

    const handleNameChange = (event) => {
        dispatch(changeCarName(event.target.value));
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCarCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }))
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded border"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expanded border"
                            value={cost || ""}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                    <div className="field">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CarForm;
