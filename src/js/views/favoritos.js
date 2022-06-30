import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { People } from "../component/peoplecard";
import { Planet } from "../component/planetcard";
import { Vehicle } from "../component/vehiclecard";

import { Context } from "../store/appContext";

export const Favs = () => {

    const history = useHistory();
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        // actions.loadDetail(id, type);
    }, [])

    return (
<div className="text-center p-2 bg-dark">
			
			<h1 className="text-center text-danger">Personajes</h1>
			<div className="row">
                {actions.displayFav('people').map((item, index) => {
                    return <People key={index} name={item.name} gender={item.gender} hair_color={item.hair_color} eye_color={item.eye_color} url={item.url} image={"https://starwars-visualguide.com/assets/img/characters/" + item.url.match(/(\d+)/)[0] + ".jpg"}/>
                })

                }

			</div>
			{/* <div className="row  my-3">
				<Paginado previous={store.people?.previous} next={store.people?.next} type="people" count={store.people?.count}/>
			</div> */}
			<hr></hr>
			<h1 className="text-center text-danger">Planetas</h1>
			<div className="row">
                {actions.displayFav('planets').map((item, index) => {
                    return <Planet key={index} name={item.name} diameter={item.diameter} climate={item.climate} population={item.population} url={item.url} image={"https://starwars-visualguide.com/assets/img/planets/" + item.url.match(/(\d+)/)[0] + ".jpg"}/>
                })

                }

			</div>
			{/* <div className="row  my-3">
				<Paginado previous={store.people?.previous} next={store.people?.next} type="people" count={store.people?.count}/>
			</div> */}
			<hr></hr>
			<h1 className="text-center text-danger">Vehiculos</h1>
			<div className="row">
                {actions.displayFav('vehicles').map((item, index) => {
                    return <Vehicle key={index} name={item.name} model={item.model} passengers={item.passengers} cost_in_credits={item.cost_in_credits} url={item.url} image={"https://starwars-visualguide.com/assets/img/vehicles/" + item.url.match(/(\d+)/)[0] + ".jpg"}/>
                })

                }

			</div>
			{/* <div className="row  my-3">
				<Paginado previous={store.people?.previous} next={store.people?.next} type="people" count={store.people?.count}/>
			</div> */}
			<hr></hr>
			
		</div>
    )
}