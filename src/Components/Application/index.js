import React from 'react';
import './App.scss';
import Link from '../Link';
import Button from '../Button';

class Application extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className="auto-cols-max flex flex-row content-start">
                    <div>
                        <div className='bg-white'>
                            <Button url='https://twitter.com/naweskil' icon={true} classes='button-white' />
                            <Button url='https://twitter.com/naweskil' icon={true} classes='button-pink' />
                            <Button url='https://twitter.com/naweskil' icon={true} classes='button-blue' />
                            <Button url='https://twitter.com/naweskil' icon={true} classes='button-green' />
                            <Button url='https://twitter.com/naweskil' icon={true} classes='button-gray' />
                            <Button url='https://twitter.com/naweskil' icon={true} classes='button-yellow' />
                        </div>
                        <Button url='https://twitter.com/naweskil' icon={true} classes='button-white button-dark' />
                        <Button url='https://twitter.com/naweskil' icon={true} classes='button-pink button-dark' />
                        <Button url='https://twitter.com/naweskil' icon={true} classes='button-blue button-dark' />
                        <Button url='https://twitter.com/naweskil' icon={true} classes='button-green button-dark' />
                        <Button url='https://twitter.com/naweskil' icon={true} classes='button-gray button-dark' />
                        <Button url='https://twitter.com/naweskil' icon={true} classes='button-yellow button-dark' />
                    </div>
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
                                        <Button url='#' classes='go-link' icon={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-white pad2'>
                            <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-white' />
                            <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-pink' />
                            <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-blue' />
                            <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-green' />
                            <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-gray' />
                            <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-yellow' />
                        </div>
                        <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-white button-dark' />
                        <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-pink button-dark' />
                        <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-blue button-dark' />
                        <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-green button-dark' />
                        <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-gray button-dark' />
                        <Button url='https://twitter.com/naweskil' content='Twitter' classes='button-yellow button-dark' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;