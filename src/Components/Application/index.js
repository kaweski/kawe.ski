import React from 'react';
import './App.scss';
import { SidebarLeft, SidebarRight } from "../Sidebar";
import { Main } from '../Main';

class Application extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className="space-x-40 auto-cols-max flex flex-row content-start">
                    <div class='flex flex-col'>
                        <SidebarLeft/>
                    </div>
                    <div className='grow'>
                        <Main/>
                    </div>
                    <div class='flex flex-col'>
                        <SidebarRight/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;