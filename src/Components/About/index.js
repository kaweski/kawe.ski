import React, { Component } from 'react';
import './About.scss';
import { Signature } from "../Signature";
import Tag from "../Tag";

class About extends React.Component {
    render() {
        return (
            <div className='box mt-10'>
                <div className='flex-col xlg:p-10 p-4'>
                    <div className='space-x-2 flex items-start'>
                        <Tag text='#frontend'/>
                        <Tag text='#designsystem'/>
                        <Tag text='#virgo'/>
                    </div>
                    <h2 className='white title pt-5 pb-4'>
                        Well well well... welcome to my Little Space literally in World Wide Web. So, make youself at home and enjoy a bit.
                    </h2>
                    <p className='lightgray text'>
                        Here you can found relevant things about me and it's just a little bit of those things I want to show everyone.<br/><br/>
                        I bring somethings I like to do, some pictures I made, playlists and paintins. This weblog is actually a distraction to practice some design and code.<br/><br/>
                        If you are looking for something else, you can just try to press <strike>CMD + W</strike> and voila!
                    </p>
                </div>
                <Signature/>
            </div>
        )
    }
}


export { About }


{/* <div className='box'>
<div className='grid lg:grid-cols-3 gap-0'>
    <div className='flex flex-row relative'>
        <img className="photo object-cover" src={Photo}/>
        <div className='top-0 left-0 p-4 space-x-2 flex flex-row items-start absolute'>
            <Tag text='#frontend'/>
            <Tag text='#designsystem'/>
            <Tag text='#virgo'/>
        </div>
    </div>
    <div className='flex flex-col col-span-2'>
        <ul className='tabs flex'>
            <li className='flex flex-auto justify-center'><Tab text='What comes next?' classes='disabled'/></li>
            <li className='flex flex-auto justify-center'><Tab text='Han?' classes='disabled last'/></li>
            <li className='flex flex-auto justify-center'><Tab text='About me' classes='first'/></li>
        </ul>
        <div className='flex flex-col grow p-8'>
            <h1 className='white title pb-4'>
                Well well well... welcome to my 'lispace', my Little Space literally in World Wide Web. So, make youself at home and play a bit.
            </h1>
            <p className='lightgray text'>
                Here you can found relevant things about me and it's just a little bit of those things I want to show everyone.<br/><br/>
                I bring somethings I like to do, some pictures I made, playlists and paintins. This weblog is actually a distraction to practice some design and code.<br/><br/>
                If you are looking for something else, you can just try to press <strong>CMD + W</strong> and voila!
            </p>
        </div>
        <Signature/>
    </div>
</div>
</div> */}