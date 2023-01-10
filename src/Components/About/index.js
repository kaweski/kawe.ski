import React, { Component } from 'react';
import './About.scss';
import { Signature } from "../Signature";
import Tag from "../Tag";
import Category from "../Category";
import Photo from '../../images/photo.png'

class About extends React.Component {
    render() {
        return (
            <div className='box'>
                <div className='grid grid-cols-2 gap-0'>
                    <div className='flex flex-row relative'>
                        <img className="photo object-cover" src={Photo}/>
                        <div className='tags p-4 space-x-2 flex flex-row items-start absolute'>
                            <Tag text='#tag'/>
                            <Tag text='#tag'/>
                            <Tag text='#tag'/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex about-me'><Category text='About me'/></div>
                        <div className='flex flex-col p-6'>
                            <h1 className='white title pb-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero ac ipsum bibendum, ac rutrum neque suscipit. Nunc et rhoncus neque.
                            </h1>
                            <p className='gray text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero ac ipsum bibendum, ac rutrum neque suscipit. Nunc et rhoncus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eleifend nisi id sem tempor volutpat. Phasellus aliquet vestibulum sapien eget ullamcorper. Nam fermentum eros sed eros iaculis ultricies. In tincidunt porttitor ullamcorper.
                            </p>
                        </div>
                        <Signature/>
                    </div>
                </div>
            </div>
        )
    }
}


export { About }