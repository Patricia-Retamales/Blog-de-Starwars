export const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            personajes: [],
            planets:[],
            species:[],
            vehicles:[],
            detalle: {},
            detallePlanet: {},
            detalleSpecie:{},
            detalleVehicle:{},
            favoriteList: []
        },
        actions: {
            getPersonajes: () => {
                fetch("https://www.swapi.tech/api/people", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ personajes: data.results }))
            },
            getPersonaje: (index) => {
                console.log("entro aqui -------------------");
                const actions = getActions();
                console.log("https://www.swapi.tech/api/people/" + index);
                fetch("https://www.swapi.tech/api/people/" + index, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => actions.getData(data.result));
            },
            getPlanets: () => {
                fetch("https://www.swapi.tech/api/planets", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ planets: data.results }))
            },
            getPlanet: (index) => {
                console.log("entro aqui -----------------");
                const actions = getActions();
                console.log("https://www.swapi.tech/api/planets/" + index);
                fetch("https://www.swapi.tech/api/planets/"+ index, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => actions.getDataPlanets(data.result));
            },
            getSpecies: () => {
                fetch("https://www.swapi.tech/api/species", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ species: data.results }))
            },

            getSpecie: (index) => {
                console.log("entro aqui -----------------");
                const actions = getActions();
                console.log("https://www.swapi.tech/api/species/" + index);
                fetch("https://www.swapi.tech/api/species/"+ index, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => actions.getDataSpecies(data.result));

            },
            getVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ vehicles: data.results }))
            },
            getVehicle: (index) => {
                console.log("entro aqui -------------");
                const actions = getActions();
                console.log("https://www.swapi.tech/api/vehicles/" + index);
                fetch("https://www.swapi.tech/api/vehicles/"+ index, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => actions.getDataVehicle(data.result));

            },
            getData: (data) => {
                setStore({detalle: data})
            },
            
            getDataPlanets: (data) => {
                setStore({detallePlanet: data})
            },
            getDataSpecies: (data) => {
                setStore({detalleSpecie: data})
            },
            getDataVehicle: (data) => {
                setStore({DetalleVehicle: data})
            },
            addFavorite: (favorite) => {
                const store = getStore();
                const actions = getActions();
                if(!store.favoriteList.includes(favorite)){
                    setStore({
                        favoriteList: [...store.favoriteList, favorite]
                    });
                }else{
                    const array = store.favoriteList;
                    const exist = currentFavorite => currentFavorite === favorite;
                    let index = array.findIndex(exist);
                    if( index > -1) actions.removeFavorite(index);
                }
            },
            removeFavorite: (index) => {
                const store = getStore();
                store.favoriteList.splice(index, 1);
                setStore({
                    favoriteList: store.favoriteList
                });
            }
        },
    };
};