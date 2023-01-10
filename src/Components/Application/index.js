import React from 'react';
import './App.scss';
import Link from '../Link';
import Button from '../Button';

class Application extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className="auto-cols-max flex flex-row content-start">
                <div>01</div>
                <div className='grow'>
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
                                    <Button url='#' content={false} classes='go-link' icon={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button url='https://twitter.com/naweskil' content='Twitter' />
                    <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-pink' />
                    <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-blue' />
                    <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-green' />
                    <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-gray' />
                    <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-yellow' />
                </div>
                </div>
            </div>
        );
    }
}

export default Application;