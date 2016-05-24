import * as React from 'react';
import * as bem from 'bem-cn';
import {
    Jumbotron,
    Nav,
    Navbar,
    NavItem,
    OverlayTrigger,
    Tooltip
 } from 'react-bootstrap';

 import { FontAwesome } from '../FontAwesome/FontAwesome';

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
                    <Nav pullRight>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id='vk_tooltip'>
                                My VK
                            </Tooltip>
                        }>
                            <NavItem eventKey={1} href='https://vk.com/oizze' >
                                <FontAwesome name='vk' />
                            </NavItem>
                        </OverlayTrigger>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id='github_tooltip'>
                                My GitHub
                            </Tooltip>
                        }>
                            <NavItem eventKey={2} href='https://github.com/Oize' >
                                <FontAwesome name='github' />
                            </NavItem>
                        </OverlayTrigger>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id='email_tooltip'>
                                Email me
                            </Tooltip>
                        }>
                            <NavItem eventKey={3} href='mailto:khapaloff@gmail.com?subject=GitHubPage' >
                                <FontAwesome name='envelope' />
                            </NavItem>
                        </OverlayTrigger>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </header>
                <Jumbotron className={b('jumbo')()}>
                    <h1 className={b('title')()}>Hello there!</h1>
                    <p className={b('description')()}>My name is Vladimir Khapalov and here is my personal GitHub page,
                        where my petprojects will be hosted.
                    </p>
                </Jumbotron>
            </div>
            );
    }
}
