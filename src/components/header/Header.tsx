import * as React from 'react';
import * as bem from 'bem-cn';
import {
    Jumbotron,
    MenuItem,
    Nav,
    Navbar,
    NavDropdown,
    NavItem
 } from 'react-bootstrap';

import './Header.less'

const b = bem('heading')

export class OizeHeader extends React.Component<any, any> {
    render() {
        return (
            <div className={b()}>
                <header className={b('navbar')()}>
                    <Navbar staticTop >
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href='#'>Oize</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href='#'>Link</NavItem>
                        <NavItem eventKey={2} href='#'>Link</NavItem>
                        <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='#'>Link Right</NavItem>
                        <NavItem eventKey={2} href='#'>Link Right</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </header>
                <Jumbotron className={b('jumbo')()}>
                    <h1 className={b('title')()}>Hello there!</h1>
                    <p className={b('description')()}>My name is Vladimir Khapalov and here is my personal GitHub page,
                    where my petprojects will be hosted.</p>
                </Jumbotron>
            </div>
            );
    }
}