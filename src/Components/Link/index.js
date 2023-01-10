import React, { Component } from 'react';
import './Link.scss';

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.url} className="title">{this.props.url}</a>
        );
    }
}

export default Link;