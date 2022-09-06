import Card from 'react-bootstrap/Card';
import { Context } from '../store/appContext';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetalleVehicles() {
    console.log("DetalleVehicles entro");
    let { store, actions } = useContext(Context);
    const params = useParams();
    console.log("DetalleVehicles - params", params);
    useEffect(() => {
        actions.getVehicle(params.id);
    }, [])
    console.log("DetalleVehicles", store);
    return (
        <div className='containerdetalle' style={{height:'38rem'}}>
            <Card style={{ width: '20rem', marginLeft: '40%', backgroundColor: 'azure', padding: '10px',  }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>
                         <h1>{store.detalleVehicle.properties.name}</h1>  
                    </Card.Title>
                    <Card.Text>
                         <h5>{store.detallevehicles.description}</h5>  
                         <p>cargo capacity : {store.detallevehicle.properties.cargo_capacity}</p> 
                         <p>consumables : {store.detallevehicle.properties.consumables}</p> 
                         <p>cost in credits : {store.detallevehicle.properties.cost_in_credits}</p>
                     <p>crew : {store.detallevehicles.propertie.crew}</p> 
                         <p>length : {store.detallevehicles.propertie.length}</p>
                     <p>manufacturer : {store.detallevehicles.propertie.manufacturer}</p> 
                         <p>max atmosphering speed : {store.detallevehicle.properties.max_atmosphering_speed}</p>
                     <p>model : {store.detallevehicles.properties.model}</p> 
                         <p>passengers : {store.detallevehicle.properties.passengers}</p>
                     <p>vehicle_class : {store.detallevehicle.properties.vehicle_class}</p>
                     <p></p> 

                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    )
}
export default DetalleVehicles;