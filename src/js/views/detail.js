import React, { useEffect, useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Detail = () => {

    const history = useHistory();
    const { store, actions } = useContext(Context);
    const params = useParams();
    const id = params.id;
    const type = params.type;

    useEffect(() => {
        actions.loadDetail(id, type);
    }, [])

    return (
        <div className="container-fluid text-center">
            <h1 className="text-danger">Details</h1>
            <h2 className="text-info">{store.name}</h2>
            <div className="row justify-content-evenly border border-1 p-2">
                <div className="col-3">
                    {type === 'people'
                        ? <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} alt="http://via.placeholder.com/240x240" />
                        : type === 'planet' ? <img src={"https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"} alt="http://via.placeholder.com/240x240" />
                            : <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"} alt="http://via.placeholder.com/240x240" />
                    }
                </div>
                <div className="col-4">
                    <ul className="list-group">
                        {!!store.detail &&
                            Object.keys(store.detail).map((item, index) => {
                                return (
                                    Array.isArray(store.detail[item])
                                        ?
                                        store.detail[item].map((arr, indexArr) => {
                                            return <li key={indexArr} className="list-group-item"><strong>{item + indexArr}</strong>: &nbsp; {arr}</li>
                                        })


                                        : <li key={index} className="list-group-item"><strong>{item}</strong>: &nbsp;{store.detail[item].length > 0 ? store.detail[item] : "Unkown"}</li>

                                )
                                // return <li key={index} className="list-group-item"><strong>{item}</strong>: &nbsp;{store.detail[item].length > 0 ? store.detail[item] : "Unkown"}</li>
                            })
                        }
                    </ul>

                </div>
            </div>
            <button type="button" className="btn btn-warning m-2" onClick={history.goBack}>Go Back</button>
        </div>
    )
}