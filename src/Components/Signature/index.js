import React, { Component } from 'react';
import './Signature.scss';
import Button from "../Button";
import PhotoAvatar from '../../images/photo.png';
import IconLinkedin from '../../images/linkedin.svg';
import IconDribbble from '../../images/dribbble.svg';
import IconGitHub from '../../images/github.svg';

class Signature extends React.Component {
    render() {
        return (
            <div className='sm:flex sm:flex-row sm:items-center justify-start signature p-6 sm:gap-0 grid gap-4'>
                <div className='ld:flex lg:flex-none'>
                    <img className="inline-block h-16 w-16 rounded-lg" src={PhotoAvatar}/>
                </div>
                <div className='flex flex-col sm:pr-4 sm:pl-5 grow'>
                    <h1 className='white title'>@kaweski</h1>
                    <p className='lightgray text'>Some of my <strong>professional</strong> social media</p>
                </div>
                <div className='flex flex-row space-x-2 sm:col-span-0 col-span-3 sm:justify-start justify-center sm:mt-0 mt-4'>
                    <Button url='https://www.linkedin.com/in/kaweski' icon={true} classes='button-white button-dark' content={IconLinkedin} />
                    <Button url='https://dribbble.com/kaweski' icon={true} classes='button-white button-dark' content={IconDribbble} />
                    <Button url='https://github.com/kaweski' icon={true} classes='button-white button-dark' content={IconGitHub} />
                </div>
            </div>
        )
    }
}


export { Signature }

