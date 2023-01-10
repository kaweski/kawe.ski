import React, { Component } from 'react';
import './Signature.scss';
import Button from "../Button";
import PhotoAvatar from '../../images/pixel.png'

class Signature extends React.Component {
    render() {
        return (
            <div className='flex flex-row grow items-center justify-start signature'>
                <div className='flex flex-col'>
                    <img className="inline-block h-16 w-16 rounded-full" src={PhotoAvatar}/>
                </div>
                <div className='flex flex-col pr-4 pl-4'>
                    <p className='title black'>Nat Kaweski</p>
                    <div className='text black'>@naweskil</div>
                </div>
                <div className='flex flex-col'>
                    <Button url='https://twitter.com/naweskil' icon={true} classes='button-white go-link' />
                </div>
            </div>
        )
    }
}


export { Signature }