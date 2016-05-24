import * as React from 'react';

import './FontAwesome.less';

interface FontAwesomeProps {
    // Required
    name: string;
    // Optional
    border?: boolean;
    className?: string;
    fixedWidth?: boolean;
    flip?: string;
    inverse?: boolean;
    pulse?: boolean;
    rotate?: number;
    size?: string;
    spin?: boolean;
    stack?: string;
}

export class FontAwesome extends React.Component<FontAwesomeProps, {}> {
    render() {
        var className = `fa fa-${this.props.name}`;

        if (this.props.size) {
            className += ` fa-${this.props.size}`;
        }

        if (this.props.spin) {
            className += ` fa-spin`;
        }

        if (this.props.pulse) {
            className += ` fa-pulse`;
        }

        if (this.props.border) {
            className += ` fa-border`;
        }

        if (this.props.fixedWidth) {
            className += ` fa-fw`;
        }

        if (this.props.inverse) {
            className += ` fa-inverse`
        }

        if (this.props.flip) {
            className += ` fa-flip-${this.props.flip}`;
        }

        if (this.props.rotate) {
            className += ` fa-rotate-${this.props.rotate}`;
        }

        if (this.props.stack) {
            className += ` fa-stack-${this.props.stack}`;
        }

        if (this.props.className) {
            className += ` ${this.props.className}`;
        }

        return (
            <span className={className} />
        )
    }
}
