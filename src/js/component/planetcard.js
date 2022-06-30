import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planet = (props) => {

    const { store, actions } = useContext(Context);


    return (
        <div className="col-3 my-2">
            <div className="card">
                <img src={props.image ? props.image : "http://via.placeholder.com/240x240"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong className="text-warning">Diameter</strong>: {props.diameter}</li>
                        <li className="list-group-item"><strong className="text-warning">Climate</strong>: {props.climate}</li>
                        <li className="list-group-item"><strong className="text-warning">Population</strong>: {props.population}</li>
                    </ul>
                    <Link to={`detail/planet/${props.url.match(/(\d+)/)[0]}`} className="btn btn-primary">Details</Link>
                    {store?.favs.filter(fav=> fav.url === props.url).length > 0
                    ? <button type="button" className="btn btn-danger ms-1" onClick={()=>actions.setFav(props.url, false)}>Remove from Fav</button>
                    : <button type="button" className="btn btn-dark ms-1" onClick={()=>actions.setFav(props, true)}>Add To Fav</button>
                    }
                </div>
            </div>
        </div>
    );
}
Planet.defaultProps = {
    diameter: "Unknow",
    climate: "Unknow",
    population: "Unknow"
};
