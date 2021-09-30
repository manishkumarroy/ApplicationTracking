import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";
import cookie from "react-cookies";
const namespace = "auth";
const createAction = setNamespace(namespace);
const nw = new Network();

const initialState = {
  currentUser: null,
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
const login = (request, history) => (dispatch) => {
  return nw
    .api("users")
    .get()
    .then((response) => {
      response.data.forEach((element) => {
        if (
          element.username == request.username &&
          element.password == request.password
        ) {
          dispatch(assignToStore("currentUser", element));
          cookie.save("userLoggedIn", true);
          history.push("/");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// Routing

// Reducers
const authReducer = (state = initialState, action) => {
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
  reducer: authReducer,
  creators: {
    assignToStore,
    resetStore,
    login,
  },
};
