import React from 'react';
import './App.scss';
import { SidebarLeft, SidebarRight } from "../Sidebar";
import { Main } from '../Main';
import { Posts } from '../Posts';

class Application extends React.Component {
    render() {
        return (
            <div className='content p-10'>
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
                <Posts />
            </div>
        );
    }
}

export default Application;