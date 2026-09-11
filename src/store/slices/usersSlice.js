import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { postUser } from "../thunks/postUser";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: false,
        data: [],
        error: null,
    },
    extraReducers(builder) {
        // fetchUsers.pending === 'users/fetch/pending', Action types are taken from the Async Thunk Variable ( fetchUsers )
        // Second param here is called the reducer funciton, it takes two params ( state, action)
        builder.addCase(fetchUsers.pending, (state, action) => {
            // Update our state object however appropriate
            // To show the user what we are loading data
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(postUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(postUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(postUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        });
    },
});

export const usersReducer = usersSlice.reducer;
