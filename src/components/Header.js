import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import '../colorPalette.css';

export default function Header() {
    return (
        <Navbar className="bg-secondary-1-2" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="../favicon.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            Brol Research
            </Navbar.Brand>
        </Navbar>
    )
}
