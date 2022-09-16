import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import Cards from '../components/Cards';
import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/Navbar';
import ComponentPlanets from "../components/componetplanets";
import ComponetSpecies from '../components/ComponentSpecies';
import ComponetVehicles from '../components/ComponentVehicles';
import CarouselComponet from '../components/CaruselComponet';
const Home = () => {
  //using flux
  const { store, actions } = useContext(Context);
  //States
  useEffect(() => {
    actions.getPersonajes();
    actions.getPlanets();
    actions.getSpecies();
    actions.getVehicles();
  }, [])

  console.info("Home store", store);
  return (
    <>
      <NavbarComponent />
      <CarouselComponet/>
      <Container fluid>
        <h2>Character</h2>
        <Cards personajes={store.personajes} />
      </Container>

      <Container fluid>
        <h2>Planets</h2>
        <ComponentPlanets planets={store.planets} />
      </Container>

      <Container fluid>
        <h2>Species</h2>
        <ComponetSpecies species={store.species} />
      </Container>

       <Container fluid>
        <h2>Vehicles</h2>
        <ComponetVehicles vehicles={store.vehicles} />
      </Container>  
    </>
  );
}

export default Home;