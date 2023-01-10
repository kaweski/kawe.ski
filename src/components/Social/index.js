import React, { Component } from 'react';
import './Social.scss';
import { Post } from '../Post';
import Placeholder from '../../images/photo.png';
import Button from '../Button';

class Social extends React.Component {
    render() {
        return (
            <div className='white mt-10'>
                <p className='text gray'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero ac ipsum bibendum, ac rutrum neque suscipit. Nunc et rhoncus neque.
                </p>

                <div className='flex flex-row mt-10'>
                    <div className='flex flex-row relative box'>
                        <div className='social flex flex-col'>
                            <div className='flex flex-row grow space-x-8 p-8'>
                                <div>
                                    <img src={Placeholder} className='photo' />
                                </div>
                                <div>
                                    <div className='white title'>@naweskil</div>
                                    <hr/>
                                    <p className='text gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero ac ipsum bibendum, ac rutrum neque suscipit. Nunc et rhoncus neque.
                                    </p>
                                </div>
                            </div>
                            <div className='social-buttons flex flex-row items-center justify-start space-x-8 p-10'>
                                <Button url='https://twitter.com/naweskil' icon={false} classes='button-blue' content='Twitch' />
                                <Button url='https://twitter.com/naweskil' icon={false} classes='button-pink' content='YouTube' />
                                <Button url='https://twitter.com/naweskil' icon={false} classes='button-yellow' content='EA Games' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col pl-10 w-96'>
                        <p className='abuble abuble-small white text-right mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero ac ipsum bibendum, ac rutrum neque suscipit. Nunc et rhoncus neque.
                        </p>
                        <hr/>
                        <Post
                            button={true}
                            image={Placeholder}
                            color='white'
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export { Social }