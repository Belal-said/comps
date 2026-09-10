import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./CarControlSlice";

const carFormSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        cost: 0,
    },
    reducers: {
        changeCarName(state, action) {
            state.name = action.payload;
        },
        changeCarCost(state, action) {
            state.cost = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = ''
            state.cost = 0
        })
    }
});

export const { changeCarName, changeCarCost } = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;
