import React, { Component } from 'react';
import "./Main.scss";
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
                {/* <p className='abuble abuble-small lightgray text-center mt-6'>More coming soon...</p> */}
            </main>
        )
    }
}


export {Main};