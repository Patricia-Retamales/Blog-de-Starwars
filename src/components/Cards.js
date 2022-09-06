import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import React, { useContext } from 'react';
import { ImHeart} from "react-icons/im";


function Cards(props) {
    const { store, actions } = useContext(Context);

    console.log("cards props", props);

    function addLink(index) {
        const favorite = props.personajes.filter(fav => {
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
            {props.personajes.map((personaje, index) => {
                return (
                    <div key={index} className="col-sm-5 col-md-6 col-lg-4 my-3">

                        <Card className='cards' style={{ width: '18rem' , borderRadius:'15px', backgroundColor:'azure', height:'130px'}}>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>{personaje.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to={`/detalle/personaje/${personaje.uid}`}>Ver más</Link>
                                 <button  className='icons' onClick={() => addLink(index + 1)}><ImHeart/></button> 

                                
                            </Card.Body>
                        </Card>
                     </div>
                )    
           })}
     </div>

    );
}

export default Cards;