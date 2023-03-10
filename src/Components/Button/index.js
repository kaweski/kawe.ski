import React, { Component } from 'react';
import './Button.scss';
import './ButtonColors.scss';

class Button extends React.Component {
    render() {
        var classes = 'button ' + (this.props.icon ? 'button-icon ' : '') + this.props.classes;

        return (
            <a href={this.props.url} target='_blank' className={classes}>
                <span className='content align-middle justify-center flex'>
                    {this.props.icon
                        ? <img src={this.props.content} />
                        : this.props.content}
                </span>
            </a>
        );
    }
}

export default Button;