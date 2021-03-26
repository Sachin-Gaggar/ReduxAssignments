import { createStore } from "redux";
import counterReducer from "../modules/counter";

const store = createStore(counterReducer);

export default store;
