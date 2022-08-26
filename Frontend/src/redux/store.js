import { legacy_createStore } from "redux";
import Reducer from "./Authcontext/Reducer";

const store = legacy_createStore(Reducer)

export default store;

