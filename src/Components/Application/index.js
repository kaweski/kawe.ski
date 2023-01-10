import React from 'react';
import './App.scss';
import { SidebarLeft, SidebarRight } from "../Sidebar";
import { Main } from '../Main';
import { Post } from '../Post';

class Application extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className="flex flex-row">
                    <div className='flex flex-col'>
                        <SidebarLeft/>
                    </div>
                    <div className='flex flex-col grow'>
                        <Main/>
                    </div>
                    <div className='flex flex-col'>
                        <SidebarRight/>
                    </div>
                </div>
                <div className="flex flex-row pt-10">
                    <div className='flex flex-col grow pr-10'>
                        <div className='box'>
                            <Post />
                        </div>
                    </div>
                    <div className='flex flex-col pr-10'>
                        <Post button={true} />
                    </div>
                    <div className='flex flex-col pr-10'>
                        <Post button={true} />
                    </div>
                    <div className='flex flex-col w-96'>
                        <div className='box p-4'>
                            <Post button={true} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;