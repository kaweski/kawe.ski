import React, { Component, PureComponent } from 'react';
import './Posts.scss';
import { Post } from '../Post';
import Placeholder from '../../images/photo.png';
import Tag from '../Tag';

class Posts extends React.Component {
    render() {
        return (
            <div className='posts'>
                <div className='grid grid-flow-col gap-10 pt-10'>
                    <div className='flex flex-row relative col-span-2'>
                        <img className="photo object-cover" src={Placeholder}/>
                        <div className='right-0 bottom-0 p-4 space-x-2 flex flex-row items-start absolute'>
                            <Tag text='#tag'/>
                            <Tag text='#tag'/>
                            <Tag text='#tag'/>
                        </div>
                    </div>
                    <div className='flex flex-col pr-10 pl-10'>
                        <Post
                            button={false}
                            title='Etiam tempus lacus in urna maximus tincidunt.'
                            image={Placeholder}
                            color='white'
                            content='Etiam tempus lacus in urna maximus tincidunt.'
                        />
                    </div>
                    <div className='flex flex-col pr-10'>
                        <Post
                            button={false}
                            title='Etiam tempus lacus in urna maximus tincidunt.'
                            image={Placeholder}
                            color='white'
                            content='Etiam tempus lacus in urna maximus tincidunt.'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className='box p-4'>
                            <Post
                                button={false}
                                image={Placeholder}
                                color='white'
                                content='Etiam tempus lacus in urna maximus tincidunt.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export { Posts }