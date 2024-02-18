import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: '@@filter',
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            // если в стейт не содержит такое значение то добавляем его
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        removeFilter: (state, action) => {
            return state.filter(item => item !== action.payload);
        },
        clearFilter: () => {
            return [];
        }
    }
});

export const {
    addFilter,
    removeFilter,
    clearFilter
} = filterSlice.actions;

export const selectFilters = (state) => state.filters;

export const filterReducer = filterSlice.reducer;
