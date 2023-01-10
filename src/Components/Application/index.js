import React from 'react';
import './App.scss';
import { SidebarLeft, SidebarRight } from "../Sidebar";
import { Main } from '../Main';
import { Posts } from '../Posts';
import { Footer } from '../Footer';

class Application extends React.Component {
    render() {
        return (
            <div className='content p-10'>
                <div className="grid lg:grid-cols-4 gap-10">
                    <div className='flex flex-col'>
                        <SidebarLeft/>
                    </div>
                    <div className='flex flex-col lg:col-span-2'>
                        <Main/>
                    </div>
                    <div className='flex flex-col'>
                        <SidebarRight/>
                    </div>
                </div>
                <Posts />
                <Footer/>
            </div>
        );
    }
}

export default Application;