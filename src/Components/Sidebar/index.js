import React, { Component } from 'react';
import "./Sidebar.scss";
import Button from '../Button';

class SidebarLeft extends React.Component {
    render() {
        return (
            <sidebar className='w-64 sidebar sidebar-left'>
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
            </sidebar>
        )
    }
}

class SidebarRight extends React.Component {
    render() {
        return (
            <sidebar className='w-64 sidebar sidebar-right'>
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
            </sidebar>
        )
    }
}

export {
    SidebarLeft,
    SidebarRight
};