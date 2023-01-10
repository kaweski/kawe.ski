import React, { Component } from 'react';
import './About.scss';
import { Signature } from "../Signature";
import Tag from "../Tag";
import Category from "../Category";

class About extends React.Component {
    render() {
        return (
            <div className='box'>
                <div className='flex flex-row content-between'>
                    <div className='flex flex-row items-start'>
                        <Tag text='#tag'/><Tag text='#tag'/><Tag text='#tag'/>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <Category text='About me'/>
                        </div>
                        <div className='pt-6 pb-6'>
                            <h1 className='white title pb-4'>Ex front-end developer, actual Design System Ops Senior, The Sims 4 and Minecraft player</h1>
                            <p className='gray text'>Today I am working on Cosmos Design System</p>
                        </div>
                        <Signature/>
                    </div>
                </div>
            </div>
        )
    }
}


export { About }