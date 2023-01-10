import React, { Component } from 'react';
import "./Main.scss";
import Button from '../Button';
import Link from '../Link';

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className='top'>
                    <Link url='https://kawe.ski'/>
                    <hr/>
                </div>
                <div className='box flex items-stretch'>
                    <div className='max-w-0 photo'></div>
                    <div>
                        <span className='tag'>about me</span>
                        <h1 className='title white'>Ex front-end developer, actual Design System Ops Senior, The Sims 4 and Minecraft player</h1>
                        <span className='text gray'>Today I am working on Cosmos Design System</span>
                        <div className='box-footer flex flex-row items-center'>
                            <div className='mr-5'><span className='avatar'></span></div>
                            <div className='text'>
                                <span className='title black'>Instagram</span>
                                <span className='text black'>@naweskil</span>
                            </div>
                            <div className='text'>
                                <Button url='#' classes='go-link' icon={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


export {Main};