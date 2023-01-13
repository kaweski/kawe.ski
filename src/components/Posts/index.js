import React, { Component, PureComponent } from 'react';
import './Posts.scss';
import { Post } from '../Post';
import Photo7 from '../../images/photo7.png';
import Photo6 from '../../images/photo6.png';
import Photo5 from '../../images/photo5.png';
import Photo4 from '../../images/photo4.png';
import Tag from '../Tag';
// import Video1Mp4 from '../../images/video1.mp4';
// import Video2Mp4 from '../../images/video2.mp4';

class Posts extends React.Component {
    render() {
        return (
            <div className='box p-10 mt-10 posts'>
                <div className='flex flex-row align-top gap-10'>
                    <div className='flex flex-row relative'>
                        <article className='flex flex-col align-top'>
                            <Post
                                image={Photo4}
                                color='white'
                            />
                            <a href='https://www.instagram.com/stories/highlights/17853385142837903/'>
                                <img className="photo object-cover" src={Photo7}/>
                            </a>
                            <div className='right-0 bottom-0 p-4 space-x-2 flex flex-row items-start absolute'>
                                <Tag text='#tag'/>
                                <Tag text='#tag'/>
                                <Tag text='#tag'/>
                            </div>
                        </article>
                    </div>
                    <div className='flex flex-col'>
                        {/* <Post
                            title='Etiam tempus lacus in urna maximus tincidunt.'
                            image={Photo4}
                            color='white'
                            content='Etiam tempus lacus in urna maximus tincidunt.'
                        /> */}
                        {/* <article className='flex flex-col'>
                            <video width="100%" autoPlay muted loop preload='true' className='photo object-cover rounded-lg mb-4'>
                                <source src={Video1Mp4} type="video/mp4"/>
                                <div className='flex flex-col text lightgray'>Sorry, your browser doesn't support videos.</div>
                            </video>
                        </article> */}
                        <Post
                            image={Photo5}
                            color='white'
                        />
                    </div>
                    <div className='flex flex-col lg:col-span-1'>
                        <Post
                            image={Photo6}
                            color='white'
                        />
                        {/* <article className='flex flex-col'>
                            <video width="100%" autoPlay muted loop preload='true' className='photo object-cover rounded-lg mb-4'>
                                <source src={Video2Mp4} type="video/mp4"/>
                                <div className='flex flex-col text lightgray'>Sorry, your browser doesn't support videos.</div>
                            </video>
                        </article> */}
                    </div>
                    <div className='flex flex-col lg:col-span-1'>
                        <Post
                            image={Photo5}
                            color='white'
                        />
                        <Post
                            image={Photo6}
                            color='white'
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export { Posts }