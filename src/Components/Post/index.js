import React, { Component } from 'react';
import './Post.scss';
import Button from "../Button";
import Icon from '../../images/go-link.png';

class Post extends React.Component {

    render() {
        var props = this.props || {
            image : '',
            title: '',
            button: false,
            content: ''
        };

        function hasButton(props) {
            return props.button
                ? (<Button url='https://twitter.com/naweskil' icon={true} classes='button-pink button-dark go-link' content={Icon} />)
                : false
        }

        function hasContent(props) {
            return props.content
                ? (<div><hr/><p className='text gray'>{props.content}</p></div>)
                : false
        }

        return (
            <article>
                <img src={props.image} className='photo object-cover'/>
                <h2 className={`text ${props.color} mt-4`}>{props.title}</h2>
                {hasButton(props)}
                {hasContent(props)}
            </article>
        )
    }
}


export { Post }