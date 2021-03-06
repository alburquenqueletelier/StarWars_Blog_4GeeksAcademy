const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiroutes: null,
			people: null,
			planets: null,
			vehicles: null,
			detail: null,
			films: null,
			favs: [],
			allNames: [],
		},
		actions: {
			loadApiRoutes: (url) => {
				fetch(url)
				.then(response => response.json())
				.then(data => setStore({apiroutes: data}))
			},
			loadDataUrl: (url) => {
				fetch(url)
				.then(response => {
					if (response.ok) return response.json();
					else throw new Error('no se ejecuto bien el fetch'+ url.slice(-5));
				})
					
				.then(data => {
					if (url.includes('people')) {
						localStorage.setItem('people', JSON.stringify(data));
						return setStore({people: data});
					}
					if (url.includes('planets')) {
						localStorage.setItem('planets', JSON.stringify(data));
						return setStore({planets: data});
					}
					if (url.includes('vehicles')){
						localStorage.setItem('vehicles', JSON.stringify(data));					
						return setStore({vehicles: data});
					}
					if (url.includes('films')){
						localStorage.setItem('films', JSON.stringify(data));					
						return setStore({films: data});
					}
				})
				.catch(error=>console.log('error'))
			},
			loadLocalData: (data) => {
				// console.log('pase por loadlocaldata');
				let dataLoad = JSON.parse(localStorage.getItem(data));
				if (data == 'people') return setStore({people:dataLoad});
				if (data == 'planets') return setStore({planets:dataLoad});
				if (data == 'vehicles') return setStore({vehicles:dataLoad});
				if (data == 'films') return setStore({films:dataLoad});
			},
			loadDetail: (id, type) => {
				let urlToLoad = null;
				if (type === 'people'){
					urlToLoad = "https://swapi.dev/api/people/"+id;
				}
				if (type === 'planet'){
					urlToLoad = "https://swapi.dev/api/planets/"+id;
				}
				if (type === 'vehicle'){
					urlToLoad = "https://swapi.dev/api/vehicles/"+id;
				}
				fetch(urlToLoad)
				.then(resp=>resp.json())
				.then(data=>{
					localStorage.setItem('detail', JSON.stringify(data));
					return setStore({detail: data});
				})
				.catch(error=>console.log(error))
			},
			numberPage: (count) => {
				let array = [];
				let pages = Math.ceil(count/10);
				for(let i=1; i<=pages; i++){
					array.push(i);
				}
				return array;
			},
			setFav: (item, favorito) => {
				const {favs} = getStore();
				// console.log(item);
				if (favorito) {
					console.log('pase por favorito = True');
					favs.push(item);
					// setStore([...favs, item])
					setStore({favs});
				} else {
					console.log('pase por favorito = False');
					let copiaFavs = favs.filter(fav => fav.url !== item);
					console.log(copiaFavs);
					setStore({favs:copiaFavs});					
				}
				localStorage.setItem('favs', JSON.stringify(favs));
			},
			displayFav: (type) => {
				const {favs} = getStore();
				let display = favs.filter(card => card.url.includes(type));
				return display;
			},
			getAllDataNames: () => {
				const {people, planets, vehicles, allNames} = getStore();
				let allNames_ = [
					...people.results.map((personaje) => personaje.name),
					...planets.results.map((planet) => planet.name),
					...vehicles.results.map((vehicle)=> vehicle.name)
				]
				setStore({allNames: allNames_});
			},
		}
	};
};

export default getState;
