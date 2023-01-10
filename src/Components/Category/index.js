import React, { Component } from 'react';
import './Category.scss';

class Category extends React.Component {
    render() {
        return (
            <div className='category text black'>
                <span className='text'>{this.props.text}</span>
            </div>
        );
    }
}

export default Category;