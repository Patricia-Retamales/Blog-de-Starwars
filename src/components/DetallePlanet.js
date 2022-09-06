
import Card from 'react-bootstrap/Card';
import { Context } from '../store/appContext';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetallePlanet() {
    console.log("DetallePlanet entro");
    let { store, actions } = useContext(Context);
    const params = useParams();
    console.log("DetallePlanet - params", params);
    useEffect(() => {
        actions.getPlanet(params.id);
    }, [])
    console.log("DetallePlanet", store);

    return (

        <di className='containerdetallePlanets' >
            <Card style={{ width: '20rem', marginLeft: '40%', backgroundColor: 'azure', padding: '10px', }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>
                         <h1>{store.detallePlanet.properties.name}</h1>   
                    </Card.Title>
                    <Card.Text>
                          <h5>{store.detalleplanets.description}</h5> 
                     <p>Clima: {store.detalleplanets.properties.climate} </p> 
                     <p>Diametro:{store.detalleplanets.properties.diameter}</p> 
                     <p>Gravedad:{store.detalleplanets.properties.gravity}</p>
                    <p>Orbita:{store.detalleplanets.properties.orbital_period}</p> 
                     <p>population:{store.detalleplanets.properties.population}</p>
                    <p>Rotacion:{store.detalleplanets.properties.rotation_period}</p> 
                     <p>surface water:{store.detalleplanets.properties.surface_water}</p>
                    <p>terrain:{store.detalleplanets.properties.terrain}</p>   


                    </Card.Text>

                </Card.Body>
            </Card>
        </di>
    );
}

export default DetallePlanet;