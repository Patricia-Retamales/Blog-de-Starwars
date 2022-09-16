import Card from 'react-bootstrap/Card';
import { Context } from '../store/appContext';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetallePersonaje() {
    console.log("DetallePersonaje entro");
    let { store, actions } = useContext(Context);
    const params = useParams();
    console.log("DetallePersonaje - params", params);
    useEffect(() => {
        actions.getPersonaje(params.id);
    }, [])
    console.log("DetallePersonaje", store);
    return (

        <div className='containerdetalle' style={{ height: '50rem' }}>
            <Card style={{ width: '20rem', marginLeft: '40%', backgroundColor: 'azure', padding: '10px', }}>
            <Card.Img variant="top" src="https://i.pinimg.com/736x/2f/7a/5c/2f7a5c384f358c66d3f883778fdfbc6b--star-wars-iii-star-wars-saga.jpg" />
                <Card.Body>
                    <Card.Title>
                        <h1>{store.detalle.properties.name}</h1> 
                    </Card.Title>
                    <Card.Text>
                         <h5>{store.detalle.description}</h5>
                        <p>eye color : {store.detalle.properties.eye_color}</p>
                        <p>gender : {store.detalle.properties.gender}</p>
                        <p>hair color :{store.detalle.properties.hair_color}</p>
                        <p>height : {store.detalle.properties.height}</p>
                        <p>mass : {store.detalle.properties.mass}</p>
                        <p>skin color : {store.detalle.properties.skin_color}</p>
                        <p>birth year : {store.detalle.properties.birth_year}</p> 


                    </Card.Text>
                </Card.Body>

            </Card>
        </div>

    )
}
export default DetallePersonaje;