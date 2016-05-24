"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var bem = require('bem-cn');
var react_bootstrap_1 = require('react-bootstrap');
var FontAwesome_1 = require('../FontAwesome/FontAwesome');
require('./Header.less');
var b = bem('heading');
var OizeHeader = (function (_super) {
    __extends(OizeHeader, _super);
    function OizeHeader() {
        _super.apply(this, arguments);
    }
    OizeHeader.prototype.render = function () {
        return (React.createElement("div", {className: b()}, 
            React.createElement("header", {className: b('navbar')()}, 
                React.createElement(react_bootstrap_1.Navbar, {staticTop: true}, 
                    React.createElement(react_bootstrap_1.Navbar.Header, null, 
                        React.createElement(react_bootstrap_1.Navbar.Brand, null, 
                            React.createElement("a", {href: '#'}, "Oize")
                        ), 
                        React.createElement(react_bootstrap_1.Navbar.Toggle, null)), 
                    React.createElement(react_bootstrap_1.Navbar.Collapse, null, 
                        React.createElement(react_bootstrap_1.Nav, {pullRight: true}, 
                            React.createElement(react_bootstrap_1.OverlayTrigger, {placement: 'bottom', overlay: React.createElement(react_bootstrap_1.Tooltip, {id: 'vk_tooltip'}, "My VK")}, 
                                React.createElement(react_bootstrap_1.NavItem, {eventKey: 1, href: 'https://vk.com/oizze'}, 
                                    React.createElement(FontAwesome_1.FontAwesome, {name: 'vk'})
                                )
                            ), 
                            React.createElement(react_bootstrap_1.OverlayTrigger, {placement: 'bottom', overlay: React.createElement(react_bootstrap_1.Tooltip, {id: 'github_tooltip'}, "My GitHub")}, 
                                React.createElement(react_bootstrap_1.NavItem, {eventKey: 2, href: 'https://github.com/Oize'}, 
                                    React.createElement(FontAwesome_1.FontAwesome, {name: 'github'})
                                )
                            ), 
                            React.createElement(react_bootstrap_1.OverlayTrigger, {placement: 'bottom', overlay: React.createElement(react_bootstrap_1.Tooltip, {id: 'email_tooltip'}, "Email me")}, 
                                React.createElement(react_bootstrap_1.NavItem, {eventKey: 3, href: 'mailto:khapaloff@gmail.com?subject=GitHubPage'}, 
                                    React.createElement(FontAwesome_1.FontAwesome, {name: 'envelope'})
                                )
                            ))
                    ))
            ), 
            React.createElement(react_bootstrap_1.Jumbotron, {className: b('jumbo')()}, 
                React.createElement("h1", {className: b('title')()}, "Hello there!"), 
                React.createElement("p", {className: b('description')()}, "My name is Vladimir Khapalov and here is my personal GitHub page," + ' ' + "where my petprojects will be hosted."))));
    };
    return OizeHeader;
}(React.Component));
exports.OizeHeader = OizeHeader;
//# sourceMappingURL=Header.js.map