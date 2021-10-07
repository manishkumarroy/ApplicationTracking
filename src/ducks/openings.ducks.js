import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";
const namespace = "openings";
const createAction = setNamespace(namespace);
const nw = new Network();

const initialState = {
  allOpenings: null,
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
const getAllOpenings = () => (dispatch) => {
  return nw
    .api("openings")
    .get()
    .then((response) => {
      dispatch(assignToStore("allOpenings", response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const addOpening = (request) => (dispatch) => {
  return nw
    .api("openings")
    .post(request)
    .then((response) => {
      console.log("success", response.data);
      getAllOpenings()(dispatch);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Routing

// Reducers
const openingsReducer = (state = initialState, action) => {
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
  reducer: openingsReducer,
  creators: {
    assignToStore,
    resetStore,
    getAllOpenings,
    addOpening,
  },
};
