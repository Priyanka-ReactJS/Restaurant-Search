import React, { useState, useEffect, useRef } from 'react'
import { getEntityDetails, getRestaurant, resetRestaurnatList } from "../store/actions/city";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux"
import Input from '../component/input'
import './home.css'

const Home = (prop) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState()
    const [params, setParams] = useState()
    const [flag, setFlag] = useState(false)
    
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setCity(event.target.value);
    }
    const restaurantList = useSelector((state) => state.entityState.restaurantList)
    const loading = useSelector(state => state.entityState.loading)
    const dispatchChaining = () => async (dispatch) => {
        await Promise.resolve(
            dispatch(getEntityDetails(city)),
        );
    };
    const entity_id = useSelector((state) => state.entityState.entity_id);
    useEffect(() => {
        if (entity_id) {
            dispatch(getRestaurant(params, entity_id))
        } else {
            dispatch(resetRestaurnatList())
        }
        setTimeout(() => {
            // Set focus on result container after submit search (accessibilty use) 
            if (inputRef && inputRef.current) {
                inputRef.current.focus();
            }
        }, 5000);


    }, [entity_id, flag, params, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault();
        setFlag(!flag);
        const actions = bindActionCreators({ dispatchChaining }, dispatch);
        actions.dispatchChaining()
    }

    const handleChangeParams = (event) => {
        setParams(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className="jumbotron jumbotron-billboard text-center">
                    <div className="img"></div>
                    <div className="container pt">
                        <div className="container-heading">
                            <h1>Find the best Restaurants</h1>
                        </div>
                        <div className="row mx-auto well col-lg-12 mt-5">
                            <div className="col-xs-12 pr-0">
                                <Input id="getCity" value={city} onChange={handleChange} type="text" placeholder="City" aria-label="Type City" autoFocus />
                            </div>
                            <div className="col-xs-12 pl-0 pr-0">
                                <Input id="searchParams" value={params} onChange={handleChangeParams} type="text" placeholder="Restaurant" aria-label="Search for Restaurant" />
                            </div>
                            <div className="col-xs-12 pl-0 pr-0">
                                <button aria-label="Search" type="submit" className="btn btn-success col-xs-2 searchButton">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    (loading) ? <div class="loader"></div> :
                        (restaurantList.length === 0)
                            ? <div>
                                <span className="no-data">No Restaurant found</span>
                            </div>
                            : <div class="result-container" ref={inputRef}  >
                                {(restaurantList || []).map(restaurant => {
                                    return (
                                        <div className="data img-rounded" tabIndex="0" >
                                            <img className="resimg" src={restaurant.restaurant.featured_image} alt="Restaurant Image" height="185" width="185" />
                                            <p className="result-details-container">
                                                <span className="restaurantName">
                                                    <strong> {restaurant.restaurant.name}</strong>
                                                </span>
                                                <br />
                                                <span className="rating"> <strong >{restaurant.restaurant.user_rating.aggregate_rating}</strong></span>
                                                <br />
                                                <span><strong className="text-primary">{restaurant.restaurant.location.locality}</strong></span>
                                                <br />
                                                <span><strong>{restaurant.restaurant.location.address}</strong></span>
                                                <br />
                                                <span> <strong className="text-primary cuisines">CUISINES: </strong>:{restaurant.restaurant.cuisines}</span>
                                            </p>
                                            <br />
                                            <hr />
                                        </div>
                                    )
                                })}
                                <br />
                            </div>
                }
            </div>
        </form>
    )
}
export default Home;
