import React, { useState, useEffect, useContext } from "react";
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
            <h1>Details</h1>
            <h2 className="text-info">{store.name}</h2>
            <div className="row justify-content-center">

                <ul className="list-group col-4">
                    {!!store.detail &&
                        Object.keys(store.detail).map((item, index) => {
                            return (
                                Array.isArray(store.detail[item])
                                    ? <ul key={index}>
                                        {store.detail[item].map((arr, indexArr) => {
                                            return <li key={indexArr} className="list-group-item"><strong>{item + indexArr}</strong>: &nbsp; {arr}</li>
                                        })
                                        }

                                    </ul>
                                    : <li key={index} className="list-group-item"><strong>{item}</strong>: &nbsp;{store.detail[item].length > 0 ? store.detail[item] : "Unkown"}</li>

                            )
                            // return <li key={index} className="list-group-item"><strong>{item}</strong>: &nbsp;{store.detail[item].length > 0 ? store.detail[item] : "Unkown"}</li>
                        })
                    }
                </ul>
            </div>
            <button type="button" className="btn btn-warning m-2" onClick={history.goBack}>Go Back</button>
        </div>
    )
}