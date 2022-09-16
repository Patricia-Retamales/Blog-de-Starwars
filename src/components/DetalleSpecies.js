import Card from 'react-bootstrap/Card';
import { Context } from '../store/appContext';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetalleSpecies() {
    console.log("DetalleSpecies entro");
    let { store, actions } = useContext(Context);
    const params = useParams();
    console.log("DetalleSpecies - params", params);
    useEffect(() => {
        actions.getSpecie(params.id);
    }, [])
    console.log("DetalleSpecies", store);
    return (
        
        <div className='containerdetalle' style={{height:'50rem'}}>
            <Card style={{  width: '20rem', marginLeft: '40%', backgroundColor: 'azure', padding: '10px', }}>
            <Card.Img variant="top" src="https://wallpaperaccess.com/full/368503.jpg" />
                <Card.Body>
                     <Card.Title>
                          <h1>{store.detalleSpecie.properties.name}</h1>  
                    </Card.Title> 
                    <Card.Text>                       
                      <h5>{store.detallespecies.description}</h5> 
                     <p> average height:{store.detallespecies.properties.average_height}</p>
                    <p> average lifespan:{store.detallespecies.properties.average_lifespan}</p> 
                     <p> classification:{store.detallespecies.properties.classification}</p>
                    <p> designation:{store.detallespecies.properties.designation}</p> 
                     <p>eye colors: {store.detallespecies.properties.eye_colors}</p> 
                     <p>hair colors: {store.detallespecies.properties.hair_colors}</p>
                    <p>language:{store.detallespecies.properties.language}</p>
                    <p>skin colors: {store.detallespecies.properties.skin_colors}</p> 
                     
                    </Card.Text>
                </Card.Body>
               
            </Card>
            </div>
        
    )
}
export default DetalleSpecies;