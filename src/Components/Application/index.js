import React from 'react';
import './App.scss';
import { SidebarLeft, SidebarRight } from "../Sidebar";
import { Main } from '../Main';
import { Posts } from '../Posts';
import { Footer } from '../Footer';

class Application extends React.Component {
    render() {
        return (
            <div className='grid lg:grid-cols-10 mt-40'>
                <div></div>
                <div className='application content lg:mx-10 lg:mt-10 lg:p-10 lg:col-span-8'>
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
                <div></div>
            </div>
        );
    }
}

export default Application;