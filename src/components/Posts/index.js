import React, { Component, PureComponent } from 'react';
import './Posts.scss';
import { Post } from '../Post';
import Placeholder from '../../images/photo.png';
import Photo7 from '../../images/photo7.png';
import Photo6 from '../../images/photo6.png';
import Photo5 from '../../images/photo5.png';
import Photo4 from '../../images/photo4.png';
import Tag from '../Tag';

class Posts extends React.Component {
    render() {
        return (
            <div className='box p-10 mt-10 posts'>
                <div className='grid lg:grid-cols-5 gap-10'>
                    <div className='flex flex-row lg:col-span-2 relative'>
                        <a href='https://www.instagram.com/stories/highlights/17853385142837903/'>
                        <img className="photo object-cover" src={Photo7}/></a>
                        <div className='right-0 bottom-0 p-4 space-x-2 flex flex-row items-start absolute'>
                            <Tag text='#tag'/>
                            <Tag text='#tag'/>
                            <Tag text='#tag'/>
                        </div>
                    </div>
                    <div className='flex flex-col lg:col-span-1'>
                        <Post
                            title='Etiam tempus lacus in urna maximus tincidunt.'
                            image={Photo4}
                            color='white'
                            content='Etiam tempus lacus in urna maximus tincidunt.'
                        />
                        <Post
                            title='Etiam tempus lacus in urna maximus tincidunt.'
                            image={Photo5}
                            color='white'
                            content='Etiam tempus lacus in urna maximus tincidunt.'
                        />
                    </div>
                    <div className='flex flex-col lg:col-span-1'>
                        <Post
                            title='Etiam tempus lacus in urna maximus tincidunt.'
                            image={Photo6}
                            color='white'
                            content='Etiam tempus lacus in urna maximus tincidunt.'
                        />
                        <Post
                            title='Etiam tempus lacus in urna maximus tincidunt.'
                            image={Photo5}
                            color='white'
                            content='Etiam tempus lacus in urna maximus tincidunt.'
                        />
                    </div>
                    <div className='flex flex-col lg:col-span-1'>
                        <Post
                            title='Etiam tempus lacus in urna maximus tincidunt.'
                            image={Photo5}
                            color='white'
                            content='Etiam tempus lacus in urna maximus tincidunt.'
                        />
                        <Post
                            title='Etiam tempus lacus in urna maximus tincidunt.'
                            image={Photo6}
                            color='white'
                            content='Etiam tempus lacus in urna maximus tincidunt.'
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export { Posts }