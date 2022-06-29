import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = (props) => {

    const { store, actions } = useContext(Context);

    
    return (
        <div className="col-3 my-2">
            <div className="card">
                <img src={props.image ? props.image : "http://via.placeholder.com/240x240"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong className="text-warning">Gender</strong>: {props.gender}</li>
                        <li className="list-group-item"><strong className="text-warning">Hair Color</strong>: {props.hair_color}</li>
                        <li className="list-group-item"><strong className="text-warning">Eyes Color</strong>: {props.eyes_color}</li>
                    </ul>
                    <Link to={`detail/people/${props.url.match(/(\d+)/)[0]}`} className="btn btn-primary">Details</Link>
                    {store?.favs.filter(fav=> fav.url === props.url).length > 0
                    ? <button type="button" className="btn btn-danger ms-1" onClick={()=>actions.setFav(props.url, false)}>Remove from Fav</button>
                    : <button type="button" className="btn btn-dark ms-1" onClick={()=>actions.setFav(props, true)}>Add To Fav</button>
                    }
                   
                   {/* <button type="button" className="btn btn-dark ms-1" onClick={()=>actions.setFav(props, true)}>Add To Fav</button> */}

                </div>
            </div>
        </div>
    );
}

People.defaultProps  = {
    gender: "Unknow",
    hair_color: "Unknow",
    eyes_color: "Unknow"
  };
