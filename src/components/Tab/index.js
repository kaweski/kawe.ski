import React, { Component } from 'react';
import './Tab.scss';

class Tab extends React.Component {
    render() {
        return (
            <div className={`tab text lightgray ${this.props.classes || ''}`}>
                {this.props.text}
            </div>
        );
    }
}

export default Tab;