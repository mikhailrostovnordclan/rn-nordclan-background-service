import { createStore, combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

const appInitialState = {
  needRotate: false,
};

const SET_NEED_ROTATE = 'SET_NEED_ROTATE';
export const setNeedRotate = createAction(SET_NEED_ROTATE);

const App = handleActions(
  {
    [SET_NEED_ROTATE]: (state, { payload }) => ({
      ...state,
      needRotate: payload,
    }),
  },
  appInitialState,
);

const rootReducer = combineReducers({
  App,
});

const configureStore = () => createStore(rootReducer);
export const store = configureStore();
