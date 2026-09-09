import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            state.pop(action.payload)
        },
    },
});

console.log(songsSlice)
console.log(songsSlice.actions.addSong())

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
    },
});

console.log(store)

const startingState = store.getState();
console.log(startingState)

store.dispatch({
    type: 'song/addSong',
    payload: 'New Song!!'
})

const finalState = store.getState();
console.log(finalState)

store.dispatch({
    type: 'song/removeSong',
    payload: 'New Song!!'
})

const finalState2 = store.getState();
console.log(finalState2)