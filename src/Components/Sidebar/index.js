import React, { Component } from 'react';
import "./Sidebar.scss";
import Button from '../Button';
import { Post } from "../Post";

class SidebarLeft extends React.Component {
    render() {
        return (
            <div className='w-96 pr-10 sidebar sidebar-left'>
                <div className='pb-4'>
                    <Post />
                </div>
                <Button url='https://twitter.com/naweskil' content='Spotify' classes='button-blue button-dark' />
                <hr/>
                <div className='box p-4'>
                    <Post />
                </div>
            </div>
        )
    }
}

class SidebarRight extends React.Component {
    render() {
        return (
            <div className='w-96 pl-10 sidebar sidebar-right'>
                <div className='pb-4'>
                    <Post />
                </div>
                <Button url='https://twitter.com/naweskil' content='Medium 1' classes='button-green button-dark' />
                <hr/>
                <Post />
                <div className='abuble abuble-big white text-right py-4'>nome do artigo em duas linhas</div>
                <Button url='https://twitter.com/naweskil' content='Medium 2' classes='button-pink button-dark' />
            </div>
        )
    }
}

export {
    SidebarLeft,
    SidebarRight
};