import React from "react";
import { createStore, combineReducers } from "redux"; 
import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";

//we can combine multiple reducers with combineReducers ook
const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    postList: postReducer
});

//create store with a redux hook
const store = createStore(rootReducer);

export default store;