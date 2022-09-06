import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import React, { useContext } from 'react';
import { ImHeart} from "react-icons/im";

function ComponetVehicles(props) {
    const { store, actions } = useContext(Context);

    console.log("ComponetVehicles props", props);

    function addLink(index) {
        const favorite = props.vehicles.filter(fav => {
            console.log("uid", fav.uid);
            if (fav.uid == index) {
                return fav;
            }
        });
        const name = favorite[0].name;
        actions.addFavorite(name);
    }

    return (
        <div className='row'>
            {props.vehicles.map((vehicle, index) => {
                return (
                    <div key={index} className="col-sm-9 col-md-9 col-lg-4 my-3">
                        <Card style={{ width: '18rem' , borderRadius:'15px', backgroundColor:'azure', height:'130px'}}>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>{vehicle.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to={`/detalle/vehicle/${vehicle.uid}`}>Ver más</Link>
                                <button onClick={() => addLink(index + 1)}><ImHeart/></button>
                            </Card.Body>
                        </Card>
                     </div>
                )    
           })}
     </div>

    );
}

export default ComponetVehicles;