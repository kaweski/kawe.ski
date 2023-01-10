import React from 'react';
import './Button.scss';

class Button extends React.Component {
    render(){
        return <a href={this.props.url} target='_blank' className='button button-icon'></a>
    }
}

export { Button }