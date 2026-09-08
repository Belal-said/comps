import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change-value-to-add";
const SUBMIT_VALUE_TO_ADD = "submit-value-to-add";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            };
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            };
        case SUBMIT_VALUE_TO_ADD:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            };
        default:
            throw new Error('Unexpected action type: ' + action.type)
    }

    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1,
    //     };
    // }

    // if (action.type === DECREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count - 1,
    //     };
    // }

    // if (action.type === SET_VALUE_TO_ADD) {
    //     console.log(action.payload);

    //     return {
    //         ...state,
    //         valueToAdd: action.payload,
    //     };
    // }

    // if (action.type === SUBMIT_VALUE_TO_ADD) {
    //     return {
    //         ...state,
    //         count: state.count + action.payload,
    //         valueToAdd: 0,
    //     };
    // }
};

function CounterPage() {
    const [state, dispatch] = useReducer(reducer, {
        count: 10,
        valueToAdd: 0,
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT,
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: SUBMIT_VALUE_TO_ADD,
        });
    };

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={state.valueToAdd || ""}
                    type="number"
                    className="border p-1 m-3 bg-gray-50 border-gray-300"
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit}>Add it</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
