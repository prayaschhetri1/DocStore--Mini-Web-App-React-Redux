import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  import thunk from "redux-thunk";
import { appReducer } from "./app/appReducer";
import { authreducer } from "./auth/authreducer";

  
  const rootReducer = combineReducers({
    app: appReducer,
    auth: authreducer,
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );