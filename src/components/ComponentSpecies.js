import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import React, { useContext } from 'react';
import { ImHeart} from "react-icons/im";

function ComponetSpecies(props) {
    const { store, actions } = useContext(Context);

    console.log("ComponetSpecies props", props);

    function addLink(index) {
        const favorite = props.species.filter(fav => {
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
            {props.species.map((specie, index) => {
                return (
                    <div key={index} className="col-sm-9 col-md-9 col-lg-4 my-3">
                        <Card style={{ width: '18rem' , borderRadius:'15px', backgroundColor:'azure', height:'300px'}}>
                            <Card.Img variant="top" src="https://i.pinimg.com/736x/04/1e/95/041e958a4d05b46d3c59f034ab517822.jpg" />
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>{specie.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to={`/detalle/specie/${specie.uid}`}>Ver más</Link>
                                <button onClick={() => addLink(index + 1)}><ImHeart/></button>
                            </Card.Body>
                        </Card>
                     </div>
                )    
           })}
     </div>

    );
}

export default ComponetSpecies;
