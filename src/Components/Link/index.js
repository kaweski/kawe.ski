import React from 'react';
import './Link.scss';

class Link extends React.Component {

    render() {
        url = this.props.url || '';
        return <a href={url} className="title">{url}</a>
    }
}

export { Link }