
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { Context } from '../store/appContext';
import React, { useContext } from 'react';
import { HiOutlineTrash } from "react-icons/hi";


function NavbarComponent() {
  const { store, actions } = useContext(Context);

  function deleteFavorite(index) {
    actions.removeFavorite(index);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
          width="100"
          height="50"
          className="d-inline-block align-top"
          alt=""
        />
        <Navbar.Brand href="#home"><h1>STARWARD</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="nav-dropdown-dark-example"
              title="Dropdown">
                Favoritos <Badge bg="secondary" >{store.favoriteList.length}</Badge>

              </Dropdown.Toggle>

              <Dropdown.Menu>
                {(
                  store.favoriteList.length === 0) ?
                  <Dropdown.Item><h6>Aun no se han agregado Like</h6></Dropdown.Item> :
                  store.favoriteList.map((favorite, index) =>
                    <Dropdown.Item>{favorite}
                      <button className='icons' onClick={() => { deleteFavorite(index) }}><HiOutlineTrash /></button>
                    </Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

