import React, { Component } from 'react';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className='white flex flex-col items-center'>
                <p className='abuble abuble-small gray'>Made with <span className='pink'>&lt;3</span> by <span className='arroba'>KAWE.SKI</span></p>
            </footer>
        )
    }
}


export { Footer }