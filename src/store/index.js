import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import {
    carFormReducer,
    changeCarName,
    changeCarCost,
} from "./slices/CarFormSlice";
import {
    carControlReducer,
    addCar,
    removeCar,
    changeSearchTerm,
} from "./slices/CarControlSlice";
import { usersReducer } from "./slices/usersSlice";
import { reset } from "./actions";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
        carForm: carFormReducer,
        carControl: carControlReducer,
        users: usersReducer
    },
});

export {
    store,
    reset,
    addSong,
    removeSong,
    addMovie,
    removeMovie,
    changeCarName,
    changeCarCost,
    addCar,
    removeCar,
    changeSearchTerm,
};

export * from './thunks/fetchUsers'
export * from './thunks/postUser'