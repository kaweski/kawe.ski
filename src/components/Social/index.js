import React, { Component } from 'react';
import './Social.scss';
import TheSims4Image from '../../images/thesims.png';
import Button from '../Button';
import IconTwitter from '../../images/twitter.png';

class Social extends React.Component {
    render() {
        return (
            // <div className='mt-10 grid lg:grid-cols-3 gap-10'>
            //     <div className='flex flex-col justify-end space-x-4'>
            //         <Button url='https://twitter.com/naweskil' icon={true} classes='button-black button-dark' content={IconTwitter} />
            //         <p className='abuble abuble-small lightgray text-right'>
            //             But if you still want to stalk a little more, you can go check my secret Twitter account.
            //             BUT WATCH OUT! I reclaim a lot in page, so don't bother me. :)
            //         </p>
            //     </div>
            // </div>

            <div className='social box mt-10'>
                <div className='flex flex-row space-x-4 p-10'>
                    <div className='text-right'>
                        <div className='white title'>@naweskil</div> 
                        <hr/>
                        <p className='text lightgray'>
                            If you are looking for some <strong className='text black'>The Sims 4</strong> gameplay, you came to the right place! Look! Feel free to watch me on my channels below.
                        </p>
                    </div>
                    <div className='text-right'>
                        <img src={TheSims4Image} className='photo rounded-lg' />
                    </div>
                </div>
                <div className='social-buttons flex flex-row items-center justify-between space-x-8 p-6'>
                    <Button url='https://www.twitch.tv/naweskil' icon={false} classes='button-blue button-dark' content='Twitch' />
                    <Button url='https://www.youtube.com/@naweskil372' icon={false} classes='button-pink button-dark' content='YouTube' />
                    <Button url='https://www.ea.com/pt-br/games/the-sims/the-sims-4/pc/gallery/browse?category=all&searchtype=ea_origin_id&sortby=downloads&time=all&searchquery=naweskil&max=50&maxis=false' icon={false} classes='button-yellow button-dark' content='EA Games' />
                </div>
            </div>
        )
    }
}


export { Social }