import * as actionType from "./types";
import axios from "axios";

export const fetchEntityDetailsState = () => {
  return {
    type: actionType.ENTITY_DETAILS_START
  };
};

export const fetchEntityDetailsSuccess = (entity_id) => {
  return {
    type: actionType.ENTITY_DETAILS_SUCCESS,
    value: entity_id
  };
};

export const fetchEntityDetailsFailure = (error) => {
  return {
    type: actionType.ENTITY_DETAILS_FAILURE,
    value: error
  };
};
export const fetchRestaurantState = () => {
  return {
    type: actionType.RESTAURANT_LIST_START
  };
};

export const fetchRestaurantSuccess = (entity_id) => {
  return {
    type: actionType.RESTAURANT_LIST_SUCCESS,
    value: entity_id
  };
};

export const fetchRestaurantFailure = (error) => {
  return {
    type: actionType.RESTAURANT_LIST_FAILURE,
    value: error
  };
};
export const resetRestaurnatList = () => {
  return {
    type: actionType.RESET_RESTAURANT_LIST,
  };
};
const ApiUrl = "https://developers.zomato.com/api/v2.1/";


export const getEntityDetails = (city) => {
  return (dispatch) => {
    dispatch(fetchEntityDetailsState());
    try {
      const headers = {
        'Content-Type': 'application/json',
        'user-key': 'b0d57d01c0235b39faec3776fe14ac38'
      }
      console.log('city',city)
      if(city !== '') {
        console.log('inn')
        axios.get(ApiUrl+'locations?lat=56.130367&lon=-106.346771&query='+city, {
          headers: headers })
          .then((response) => {
              if (response.data.location_suggestions.length>0) {
                dispatch(fetchEntityDetailsSuccess(response.data.location_suggestions[0].entity_id));
              }
              else {
                dispatch(resetRestaurnatList())
              }
              
              console.log(response)
            })
            .catch((error) => {
              console.log("error..", error);
              dispatch(fetchEntityDetailsFailure(error));
            });
      } else {
        dispatch(resetRestaurnatList())
      }
     
    } catch (error) {
      dispatch(fetchEntityDetailsFailure(error));
    }
  };
};

export const getRestaurant = (searchParams ,entity_id) => {
  return (dispatch) => {
    dispatch(fetchRestaurantState());
    try {
      const headers = {
        'Content-Type': 'application/json',
        'user-key': 'b0d57d01c0235b39faec3776fe14ac38'
      }
      let ApiUrlForSearch = '';
      if (searchParams) {
        ApiUrlForSearch = ApiUrl+'search?entity_type=city&entity_id='+entity_id + '&q=' + searchParams;
      } else {
        ApiUrlForSearch = ApiUrl+'search?entity_type=city&entity_id='+entity_id;
      }
      axios.get(ApiUrlForSearch, {
      headers: headers  
})
      .then((response) => {
          if (response.data.restaurants) {
            dispatch(fetchRestaurantSuccess(response.data.restaurants));
          }
          console.log("rest list",response)
        })
        .catch((error) => {
          console.log("error..", error);
          dispatch(fetchRestaurantFailure(error));
        });
    } catch (error) {
      dispatch(fetchRestaurantFailure(error));
    }
  };
};

