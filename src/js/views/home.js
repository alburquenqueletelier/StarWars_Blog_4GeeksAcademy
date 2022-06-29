import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { People } from "../component/peoplecard";
import { Planet } from "../component/planetcard";
import { Vehicle } from "../component/vehiclecard";
import { Paginado } from "../component/pagination";

export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center p-2 bg-dark">

			<h1 className="text-center text-danger">Enciclopedia Star Wars</h1>
			{/* <div className="row">
				<div className="col-auto text-info">Buscar</div>
				<div className="col">
					<input className="" type="text" placeholder="Escribe lo que deseas buscar"/>
				</div>
			</div> */}
			<div className="accordion " id="accordionPanelsStayOpenExample">
				<div className="accordion-item bg-secondary">
					<h2 className="accordion-header" id="panelsStayOpen-headingOne">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
							Personajes
						</button>
					</h2>
					<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
						<div className="accordion-body">

							<div className="row">
								{!!store.people &&
									store.people.results.map((item, index) => {
										return <People key={index} name={item.name} gender={item.gender} hair_color={item.hair_color} eye_color={item.eye_color} url={item.url} image={"https://starwars-visualguide.com/assets/img/characters/"+item.url.match(/(\d+)/)[0]+".jpg"} />
										// gender={item.gender} hair_color={item.hair_color} eye_color={item.eye_color}
									})
								}

							</div>
							<div className="row  my-3">
								<Paginado previous={store.people?.previous} next={store.people?.next} type="people" count={store.people?.count} />
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item bg-secondary">
					<h2 className="accordion-header" id="headingTwo">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
							Planetas
						</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
						<div className="accordion-body">
							<div className="row">
								{!!store.planets &&
									store.planets.results.map((item, index) => {
										return <Planet key={index} name={item.name} diameter={item.diameter} climate={item.climate} population={item.population} url={item.url} image={"https://starwars-visualguide.com/assets/img/planets/"+item.url.match(/(\d+)/)[0]+".jpg"} />
									})}
							</div>
							<div className="row my-3">
								<Paginado previous={store.planets?.previous} next={store.planets?.next} type="planets" count={store.planets?.count} />
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item bg-secondary">
					<h2 className="accordion-header" id="headingTres">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTres" aria-expanded="true" aria-controls="collapseTres">
							Vehiculos
						</button>
					</h2>
					<div id="collapseTres" className="accordion-collapse collapse" aria-labelledby="headingTres">
						<div className="accordion-body">
							<div className="row">
								{!!store.vehicles &&
									store.vehicles.results.map((item, index) => {
										return <Vehicle key={index} name={item.name} model={item.model} passengers={item.passengers} cost_in_credits={item.cost_in_credits} url={item.url} image={"https://starwars-visualguide.com/assets/img/vehicles/"+item.url.match(/(\d+)/)[0]+".jpg"}/>

									})}
							</div>
							<div className="row  my-3">
								<Paginado previous={store.vehicles?.previous} next={store.vehicles?.next} type="vehicles" count={store.vehicles?.count} />
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
