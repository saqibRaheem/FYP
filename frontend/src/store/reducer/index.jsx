import Status from "./loginStatus";
import Student from "./students";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
  status: Status,
  Student: Student,
});

export default rootreducer;
