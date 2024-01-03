
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label, Container, Row, Col} from "reactstrap";
import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
export default function ReactStrap() {
        const [collapsed, setCollapsed] = useState(true);
        const toggleNavbar = () => setCollapsed(!collapsed);

        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);

  return (
    <div>
        <Navbar color="faded" light expand="sm">
        <NavbarBrand href="/" className="me-auto"> 
          reactstrap
        </NavbarBrand>
        {/* logo */}
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
    <FormGroup floating>
      <Input
        id="exampleFullname"
        name="Fullname"
        placeholder="Fullname"
        type="text"
      />
      <Label for="exampleFullname">
        Full name
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePhonenumber"
        name="Phonenumber"
        placeholder="Phonenumber"
        type="text"
      />
      <Label for="examplePhonenumber">
        Phone number
      </Label>
    </FormGroup>
    {' '}
  </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Buy Now
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Container>
        <Row>
            <Col sm="6" md="4" lg="2">
            Col
            </Col>
            <Col sm="6" md="4" lg="2">
            Col
            </Col>
            <Col sm="6" md="4" lg="2">
            Col
            </Col>
            <Col sm="6" md="4" lg="2">
            Col
            </Col>
            <Col sm="6" md="4" lg="2">
            Col
            </Col>
            <Col sm="6" md="4" lg="2">
            Col
            </Col>
        </Row>
      </Container>
    </div>
  )
}

