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
          <Container style={{background: '#0069d8'}}>
              <NavbarBrand href="/"> <i className="fa fa-github" /> Github Finder</NavbarBrand>
          </Container>
      </Navbar>
      <Container>
        <Home />
      </Container>
    </React.Fragment>
  );
}

export default App;
