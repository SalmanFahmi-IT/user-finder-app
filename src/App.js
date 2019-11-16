import React from 'react';
import Home from './containers/Home';
import './App.css';
import { 
  Navbar, 
  NavbarBrand, 
  Container, 
} from'reactstrap';

function App() {
  return (
    <React.Fragment>
      <Navbar className="navbar-dark" color='primary' expand="md">
          <Container>
              <NavbarBrand href="/">Github users</NavbarBrand>
          </Container>
      </Navbar>
      <Container>
        <Home />
      </Container>
    </React.Fragment>
  );
}

export default App;
