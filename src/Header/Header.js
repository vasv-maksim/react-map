import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='header'>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Интерактивная карта</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Карта" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Новая карта</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Загрузить</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Сохранить</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ссылка</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
            <Button variant="outline-success">Поиск</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Header;