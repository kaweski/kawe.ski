import React, { Component } from 'react';
import "./Main.scss";
import Link from '../Link';
import { About } from "../About";
import { Social } from '../Social';
import { Logo } from '../Logo';

class Main extends React.Component {
    render() {
        return (
            <main>
                <header>
                    <Logo/>
                </header>
                <About/>
                <Social/>
            </main>
        )
    }
}


export {Main};