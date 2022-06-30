import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicle = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <div className="col-3 my-2">
            <div className="card">
                <img src={props.image ? props.image : "http://via.placeholder.com/240x240"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong className="text-warning">Model</strong>: {props.model}</li>
                        <li className="list-group-item"><strong className="text-warning">Passengers</strong>: {props.passengers}</li>
                        <li className="list-group-item"><strong className="text-warning">Credits Cost</strong>: {props.cost_in_credits !== "unknown" ? "$" + props.cost_in_credits : "Unknow"}</li>
                    </ul>
                    <Link to={`detail/vehicle/${props.url.match(/(\d+)/)[0]}`} className="btn btn-primary">Details</Link>
                    {store?.favs.filter(fav=> fav.url === props.url).length > 0
                    ? <button type="button" className="btn btn-danger ms-1" onClick={()=>actions.setFav(props.url, false)}>Remove from Fav</button>
                    : <button type="button" className="btn btn-dark ms-1" onClick={()=>actions.setFav(props, true)}>Add To Fav</button>
                    }            
                     </div>
            </div>
        </div>
    );
}

Vehicle.defaultProps = {
    model: "Unknow",
    passengers: "Unknow",
    cost_in_credits: "Unknow"
};

