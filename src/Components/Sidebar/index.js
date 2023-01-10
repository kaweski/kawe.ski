import React, { Component } from 'react';
import "./Sidebar.scss";
import Button from '../Button';
import { Post } from "../Post";
import Placeholder from '../../images/photo.png';

class SidebarLeft extends React.Component {
    render() {
        return (
            <div className='sidebar sidebar-left pr-10'>
                <div className='pb-4'>
                    <Post
                        button={false}
                        title='Etiam tempus lacus in urna maximus tincidunt.'
                        image={Placeholder}
                        color='white'
                        content='Etiam tempus lacus in urna maximus tincidunt.'
                    />
                </div>
                <Button url='https://twitter.com/naweskil' content='Spotify' icon={false} classes='button-blue button-dark' />
                <hr/>
                <div className='box p-4'>
                    <Post
                        button={false}
                        title='Etiam tempus lacus in urna maximus tincidunt.'
                        image={Placeholder}
                        color='white'
                        content='Etiam tempus lacus in urna maximus tincidunt.'
                    />
                    <Button url='https://twitter.com/naweskil' content='Spotify' icon={false} classes='button-green button-dark mt-4' />
                </div>
            </div>
        )
    }
}

class SidebarRight extends React.Component {
    render() {
        return (
            <div className='sidebar sidebar-right pl-10'>
                <div className='pb-4'>
                    <Post
                        button={false}
                        title='Etiam tempus lacus in urna maximus tincidunt.'
                        image={Placeholder}
                        color='gray'
                    />
                </div>
                <Button url='https://twitter.com/naweskil' content='Medium 1' icon={false} classes='button-green button-dark' />
                <p className='text gray my-6'>Etiam tempus lacus in urna maximus tincidunt.</p>
                <Button url='https://twitter.com/naweskil' content='Medium 2' icon={false} classes='button-pink button-dark' />
                <hr/>
                    <Post
                        button={false}
                        image={Placeholder}
                        color='gray'
                    />
                <div className='abuble abuble-big white text-right py-4'>Etiam tempus lacus in urna maximus</div>
            </div>
        )
    }
}

export {
    SidebarLeft,
    SidebarRight
};