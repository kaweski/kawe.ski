import React, { Component } from 'react';
import "./Main.scss";
import Button from '../Button';
import Link from '../Link';

class Main extends React.Component {
    render() {
        return (
            <main className='px-10'>
                <header>
                    <Link url='https://kawe.ski'/>
                    <hr/>
                </header>
            </main>
        )
    }
}


export {Main};