import React, { Component } from 'react';
import './Signature.scss';
import Button from "../Button";
import Link from "../Link";

class Signature extends React.Component {
    render() {
        return (
            <div className='flex flex-row grow items-start p-4 signature'>
                <div className=''>avatar</div>
                <div className='pr-4 pl-4'>
                    <p className='title white'>Nat Kaweski</p>
                    <Link url='https://kawe.ski'/>
                </div>
                <div className=''>
                    <Button url='https://twitter.com/naweskil' icon={true} classes='button-white go-link' />
                </div>
            </div>
        )
    }
}


export { Signature }