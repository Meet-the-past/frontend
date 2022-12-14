import { persistReducer } from "redux-persist";
import { AuthReducer } from "./reducers/AuthReducer";
import { UserInfoReducer } from "./reducers/UserInfoReducer";
import { TaskReducer } from "./reducers/TaskReducer";
import { createStore, combineReducers } from "redux";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  //local storage에 저장
  storage: storage,
};

const allReducers = combineReducers({
  Auth: AuthReducer,
  User: UserInfoReducer,
  Task: TaskReducer,
});

const store = createStore(persistReducer(persistConfig, allReducers));

export default store;
