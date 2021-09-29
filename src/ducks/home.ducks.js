import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";
const namespace = "home";
const createAction = setNamespace(namespace);
const nw = new Network();

const initialState = {
  panelUsers: null,
};

// ACTIONS

const ASSIGN_TO_STORE = createAction("ASSIGN_TO_STORE");
const RESET_STORE = createAction("RESET_STORE");

const assignToStore = (type, payload) => ({
  type: ASSIGN_TO_STORE,
  meta: {
    type,
    payload,
  },
});

const resetStore = () => (dispatch) => {
  dispatch({
    type: RESET_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS
const getUsers = () => (dispatch) => {
  return nw
    .api("users")
    .get()
    .then((response) => {
      dispatch(assignToStore("panelUsers", response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// Routing

// Reducers
const homeReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: homeReducer,
  creators: {
    assignToStore,
    resetStore,
    getUsers,
  },
};
