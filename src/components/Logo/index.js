import React, { Component } from 'react';
import "./Logo.scss";
import Button from '../Button';
import Icon from '../../images/k.png';

class Logo extends React.Component {
    render() {
        return (
            <div className='logo flex flex-wrap-reverse'>
                <Button url='#' icon={true} classes='button-pink button-dark' content={Icon} />
            </div>
        )
    }
}


export { Logo };