import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            // STATE IS NOT THE BIG STATE OBJECT
            // IN THE STORE
            // IT IS THE PIECE OF STATE MANAGED
            // BY THIS RED
            state.push(action.payload);
        },
        removeSong(state, action) {
            // action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        reset(state, action) {
            return [];
        },
    },
    extraReducers(builder) {
        const resetSongs = movieSlice.actions.reset
        builder.addCase(resetSongs, (state, action) => {
            return [];
        });
    },
});

const movieSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        reset(state, action) {
            return [];
        },
    },
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: movieSlice.reducer,
    },
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = movieSlice.actions;