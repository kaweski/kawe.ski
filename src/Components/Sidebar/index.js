import React, { Component } from 'react';
import "./Sidebar.scss";
import Button from '../Button';
import { Post } from "../Post";
import Photo1 from '../../images/zhwixbdkxhe.png';
import Photo2 from '../../images/photo2.png';
import Photo3 from '../../images/photo3.png';
import Photo4 from '../../images/to-concentrate.png';
import IconTwitter from '../../images/twitter.png';

class SidebarLeft extends React.Component {
    render() {
        return (
            <div className='sidebar sidebar-left pr-10'>
                <div className='p-4 box mb-10'>
                    <Post
                        url='https://medium.com/@kaweski/migra%C3%A7%C3%A3o-de-carreira-como-migrei-de-front-end-para-design-system-acd9292dc3bd'
                        title="Career migration: how I migrated from front-end to design system. That have change all my life."
                        image={Photo2}
                        color='white'
                        content="That's exactly what happened to me, as I transitioned from a career as a developer and found myself in design."
                    />
                </div>
                <div className='p-4 box'>
                    <Post
                        url='https://medium.com/inter-product-design/orange-ds-como-surgiu-meu-primeiro-design-system-aa88a481927'
                        title='Orange DS, how my first Design System came about'
                        image={Photo3}
                        color='white'
                        content='In this post I will bring my trajectory within the Design System of a company I worked for, and what my vision of learning was like at the time.'
                    />
                </div>
            </div>
        )
    }
}

class SidebarRight extends React.Component {
    render() {
        return (
            <div className='sidebar sidebar-right pl-10'>
                {/* <div className='box p-4 mb-10'>
                    <Post
                        title='to cocentrate'
                        image={Photo4}
                        color='white'
                        content='Little songs to think, study, focus on work, concentrate, read and sleep.'
                        url='https://open.spotify.com/playlist/3IhEuFUth2uCuNXOlAtuhk?si=5922c786a51244a5'
                    />
                </div> */}
                <div className='box p-4 mb-10'>
                    <Post
                        title='zhwixbdkxhe'
                        image={Photo4}
                        color='white'
                        content='Someday I was walking on the street and created a playlist just to add some music I was listening, then I just type any key and created this one. Enjoy!'
                        url='https://open.spotify.com/playlist/5b4yFoxOGef19UhUwMd3zP?si=c6709298106e4256'
                    />
                </div>
                <Button url='https://open.spotify.com/user/hipihipiurra?si=88aaed5c1a2447db' content='Spotify' icon={false} classes='button-black button-dark' />
                <Button url='https://br.pinterest.com/naweskil' content='Pinterest' icon={false} classes='button-black button-dark' />
                <Button url='https://twitter.com/naweskil' content='Twitter' icon={false} classes='button-black button-dark' />
                <Button url='/' content='Coming soon' icon={false} classes='button-black button-dark disabled' />
                <Button url='/' content='???' icon={false} classes='button-black button-dark disabled' />
                {/* <div className='box mt-10 p-4 flex flex-row items-end'>
                    <p className='abuble abuble-small lightgray text-right mr-4'>
                        But if you still want to stalk a little more, you can go check my secret Twitter account.
                        BUT WATCH OUT! I reclaim a lot in page, so don't bother me. :)
                    </p>
                    <div className='grow'>
                        <Button url='https://twitter.com/naweskil' icon={true} classes='button-black button-dark' content={IconTwitter} />
                    </div>
                </div> */}
            </div>
        )
    }
}

export {
    SidebarLeft,
    SidebarRight
};