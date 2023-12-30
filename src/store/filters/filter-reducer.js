import {ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER} from './filter-actions';

export const  filterReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER: {
            // если в стейт не содержит такое значение то добавляем его
            if (!state.includes(action.payload)) {
                return [...state, action.payload];
            }

            // если такое значение уже есть то просто вернем стейт как он был
            return state;
        }
        case REMOVE_FILTER: {
            return state.filter(item => item !== action.payload);
        }
        case CLEAR_FILTER: {
            return [];
        }
        default: {
            return state;
        }
    }
}