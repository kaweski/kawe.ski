import React from 'react';
import './App.scss';
import { SidebarLeft, SidebarRight } from "../Sidebar";
import { Main } from '../Main';
import { Posts } from '../Posts';
import { Footer } from '../Footer';
import Tab from '../Tab';

class Application extends React.Component {
    render() {
        return (
            <div className='xlg:grid xlg:grid-cols-10 lg:mt-40 flex flex-col mt-8 md:p-0 p-4'>
                <div></div>
                <div className='application content lg:mx-10 xlg:mt-10 lg:p-10 xlg:col-span-8 md:mx-4 md:mt-40 md:p-8 p-4 mt-20'>
                    <ul className='tabs flex flex-row justify-start align-start'>
                        <li><Tab text='Homepage'/></li>
                        <li><Tab text='What comes next?' classes='disabled'/></li>
                    </ul>
                    <div className="lg:grid lg:grid-cols-4 lg:gap-10 md:grid md:grid-cols-2 flex flex-col gap-4">
                        <div className='lg:order-1 flex flex-col order-2'>
                            <SidebarLeft/>
                        </div>
                        <div className='lg:order-2 flex flex-col md:col-span-2 order-1'>
                            <Main/>
                        </div>
                        <div className='flex flex-col order-3'>
                            <SidebarRight/>
                        </div>
                    </div>
                    {/* <Posts /> */}
                    <Footer/>
                </div>
                <div></div>
            </div>
        );
    }
}

export default Application;