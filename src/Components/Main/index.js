import React, { Component } from 'react';
import "./Main.scss";
import Link from '../Link';
import { About } from "../About";
import { Social } from '../Social';

class Main extends React.Component {
    render() {
        return (
            <main>
                <header>
                    <Link url='https://kawe.ski'/>
                    <hr/>
                </header>
                <About/>
                <Social/>
            </main>
        )
    }
}


export {Main};