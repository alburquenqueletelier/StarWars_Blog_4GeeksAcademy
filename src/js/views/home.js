import React, { useCallback, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Context } from "../store/appContext";
import { People } from "../component/peoplecard";
import { Planet } from "../component/planetcard";
import { Vehicle } from "../component/vehiclecard";
import { Paginado } from "../component/pagination";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const history = useHistory();

	const match = (e) => {
		let value = e.target.value;
		// let allNames = store.allNames;
		let { people, planets, vehicles } = store;
		people.results.forEach(character => {
			if (character.name.toLowerCase() == value.toLowerCase()) {
				history.push("/detail/people/" + character.url.match(/(\d+)/)[0])
			}
		})
		planets.results.forEach(planet => {
			if (planet.name.toLowerCase() == value.toLowerCase()) {
				history.push("/detail/planet/" + planet.url.match(/(\d+)/)[0])
			}
		})
		vehicles.results.forEach(vehicle => {
			if (vehicle.name.toLowerCase() == value.toLowerCase()) {
				history.push("/detail/vehicle/" + vehicle.url.match(/(\d+)/)[0])
			}
		})
		// allNames.forEach(name=> {
		// 	if(name === value){
		// 		store.people.results.forEach(people=>{
		// 			people.name ==
		// 		})
		// 		history.push("/detail/")

		// 	}
		// })
	}

	return (
		<div className="text-center p-2 bg-dark">

			<h1 className="text-center text-danger">Enciclopedia Star Wars</h1>
			<div className="row justify-content-center">
				<div className="col-3">
					<label className="text-secondary" htmlFor="browser">Choose your browser from the list:</label>
				</div>
				<div className="col-auto">
					<input list="browsers" name="browser" id="browser" placeholder="Escribe lo que deseas buscar" onChange={(e) => match(e)} />
					<datalist id="browsers">
						{!!store.allNames &&
							store.allNames.map((item, index) => {
								return <option key={index} value={item} />
							})

						}
					</datalist>
				</div>
			</div>

			<div className="accordion " id="accordionPanelsStayOpenExample">
				<div className="accordion-item bg-secondary">
					<h2 className="accordion-header" id="panelsStayOpen-headingOne">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
							Personajes
						</button>
					</h2>
					<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
						<div className="accordion-body">
							<div className="row  my-3">
								<Paginado previous={store.people?.previous} next={store.people?.next} type="people" count={store.people?.count} />
							</div>

							<div className="row">
								{!!store.people &&
									store.people.results.map((item, index) => {
										return <People key={index} name={item.name} gender={item.gender} hair_color={item.hair_color} eye_color={item.eye_color} url={item.url} image={"https://starwars-visualguide.com/assets/img/characters/" + item.url.match(/(\d+)/)[0] + ".jpg"} />
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
							<div className="row my-3">
								<Paginado previous={store.planets?.previous} next={store.planets?.next} type="planets" count={store.planets?.count} />
							</div>
							<div className="row">
								{!!store.planets &&
									store.planets.results.map((item, index) => {
										return <Planet key={index} name={item.name} diameter={item.diameter} climate={item.climate} population={item.population} url={item.url} image={"https://starwars-visualguide.com/assets/img/planets/" + item.url.match(/(\d+)/)[0] + ".jpg"} />
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
							<div className="row  my-3">
								<Paginado previous={store.vehicles?.previous} next={store.vehicles?.next} type="vehicles" count={store.vehicles?.count} />
							</div>
							<div className="row">
								{!!store.vehicles &&
									store.vehicles.results.map((item, index) => {
										return <Vehicle key={index} name={item.name} model={item.model} passengers={item.passengers} cost_in_credits={item.cost_in_credits} url={item.url} image={"https://starwars-visualguide.com/assets/img/vehicles/" + item.url.match(/(\d+)/)[0] + ".jpg"} />

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
