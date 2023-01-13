import React, { Component } from 'react';
import './Post.scss';
import Button from "../Button";
import Icon from '../../images/go-link.svg';

class Post extends React.Component {

    render() {
        var props = this.props || {
            image : '',
            title: '',
            button: false,
            content: '',
            url: ''
        }

        function renderButton() {
            return props.button ? <div className='flex flex-col'><Button url={props.url} icon={true} classes='button-white button-dark' content={Icon} /></div> : ''
        }

        function hasContent(props) {
            return props.content
                ? (<div className='text lightgray'>{props.content}</div>)
                : false
        }

        return (
            <article className='flex flex-col'>
                <img src={props.image} className='photo object-cover rounded-lg mb-4'/>
                <div className='lg:flex lg:flex-col'>
                    <h2 className={`text ${props.color} mb-4`}>{props.title}</h2>
                    <div className='flex flex-row justify-between gap-4'>
                        {renderButton()}
                        <div className='flex flex-col'>{hasContent(props)}</div>
                    </div>
                </div>
            </article>
        )
    }
}


export { Post }