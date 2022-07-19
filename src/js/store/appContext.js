import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			const keysLocalStorage = Object.keys(localStorage);
			if (keysLocalStorage.includes('people') && keysLocalStorage.includes('planets') && keysLocalStorage.includes('vehicles') && keysLocalStorage.includes('films')){
				keysLocalStorage.forEach(item => {
					state.actions.loadLocalData(item);
				})	
			} else {
				state.actions.loadDataUrl("https://swapi.dev/api/people");
				state.actions.loadDataUrl("https://swapi.dev/api/planets");
				state.actions.loadDataUrl("https://swapi.dev/api/vehicles");
				state.actions.loadDataUrl("https://swapi.dev/api/films");
			}
			if (keysLocalStorage.includes('favs')){
				JSON.parse(localStorage.getItem('favs')).forEach(item=>{
					state.actions.setFav(item, true);
				});
			}
			state.actions.getAllDataNames();
		}, []);
		
		useEffect(()=>{
			localStorage.setItem('favs', JSON.stringify(state.store.favs));
		},[state.store.favs])

		useEffect(()=>{
			state.actions.getAllDataNames();
		},[state.store.people, state.store.planets, state.store.vehicles])

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
