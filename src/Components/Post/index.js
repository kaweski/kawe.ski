import React, { Component } from 'react';
import './Post.scss';
import Button from "../Button";

class Post extends React.Component {
    render() {
        return (
            <article>
                <h2 className='title pink'>Article</h2>
                {this.props.button
                    ? <Button url='https://twitter.com/naweskil' icon={true} classes='button-pink button-dark go-link' />
                    : ''
                }
                
            </article>
        )
    }
}


export { Post }