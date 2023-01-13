import React, { Component } from 'react';
import './Tag.scss';

class Tag extends React.Component {
    render() {
        return (
            <span className='tag text'>{this.props.text}</span>
        );
    }
}

export default Tag;