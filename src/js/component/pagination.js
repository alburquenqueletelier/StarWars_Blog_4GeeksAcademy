import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Paginado = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {!!props.previous ?
                    <li className="page-item">
                        <button className="page-link" onClick={() => actions.loadDataUrl(props.previous)} tabIndex="-1">Previous</button>
                    </li>
                    : <li className="page-item disabled">
                        <button className="page-link" tabIndex="-1">Previous</button>
                    </li>
                }
                {!!props.count &&
                    actions.numberPage(props.count).map((item, index) => {
                        return <li 
                            className = {!!store[props.type].next ? 
                                store[props.type].next.match(/(\d+)/)[0]-1 == item 
                                ? "page-item active" 
                                : "page-item"
                            : Math.ceil(props.count/10) == item ? "page-item active" : "page-item"
                            } 
                            key={index}>
                            <button className="page-link" onClick={() => actions.loadDataUrl("https://swapi.dev/api/" + props.type + "/?page=" + item)}>{item}</button>
                        </li>
                    })
                }

                {!!props.next
                    ? <li className="page-item">
                        <button className="page-link" onClick={() => actions.loadDataUrl(props.next)}>Next</button>
                    </li>
                    : <li className="page-item disabled">
                        <button className="page-link" to="#">Next</button>
                    </li>
                }

            </ul>
        </nav>

    );
}