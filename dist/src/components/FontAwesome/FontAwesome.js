"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
require('./FontAwesome.less');
var FontAwesome = (function (_super) {
    __extends(FontAwesome, _super);
    function FontAwesome() {
        _super.apply(this, arguments);
    }
    FontAwesome.prototype.render = function () {
        var className = "fa fa-" + this.props.name;
        if (this.props.size) {
            className += " fa-" + this.props.size;
        }
        if (this.props.spin) {
            className += " fa-spin";
        }
        if (this.props.pulse) {
            className += " fa-pulse";
        }
        if (this.props.border) {
            className += " fa-border";
        }
        if (this.props.fixedWidth) {
            className += " fa-fw";
        }
        if (this.props.inverse) {
            className += " fa-inverse";
        }
        if (this.props.flip) {
            className += " fa-flip-" + this.props.flip;
        }
        if (this.props.rotate) {
            className += " fa-rotate-" + this.props.rotate;
        }
        if (this.props.stack) {
            className += " fa-stack-" + this.props.stack;
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return (React.createElement("span", {className: className}));
    };
    return FontAwesome;
}(React.Component));
exports.FontAwesome = FontAwesome;
//# sourceMappingURL=FontAwesome.js.map