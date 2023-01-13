import React, { Component } from 'react';
import "./Logo.scss";
import Button from '../Button';
import Icon from '../../images/k.png';

class Logo extends React.Component {
    render() {
        return (
            <h1 className='logo flex'>
                <Button url='#' icon={true} classes='button-orange button-dark' content={Icon} />
            </h1>
        )
    }
}


export { Logo };