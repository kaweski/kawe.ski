import React, { Component } from 'react';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className='text-center'>
                <div className='abuble abuble-small lightgray'>2023.v1 @ made with <span className='orange'>&lt;3</span> by <span className='arroba'>kawe.ski </span></div>
            </footer>
        )
    }
}


export { Footer }