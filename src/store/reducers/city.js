import * as actionType from "../actions/types";

const initialState = {
  restaurantList:[],
  loading: false,
  error: null
};

function restaurants(state = initialState, action) {
  switch (action.type) {
    case actionType.ENTITY_DETAILS_START:
      return { ...state, loading: true, error: null };

    case actionType.ENTITY_DETAILS_SUCCESS:
      return { ...state, loading: false, error: null, entity_id: action.value };

    case actionType.ENTITY_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.value };

    case actionType.RESTAURANT_LIST_START:
      return { ...state, loading: true, error: null };

    case actionType.RESTAURANT_LIST_SUCCESS:
      return { ...state, loading: false, error: null, restaurantList: action.value };

    case actionType.RESTAURANT_LIST_FAILURE:
      return { ...state, loading: false, error: action.value };
     
      case actionType.RESET_RESTAURANT_LIST:
        return {...state, loading: false, error: null, restaurantList:[],entity_id:null };

    default:
      return state;
  }
}

export default restaurants;
