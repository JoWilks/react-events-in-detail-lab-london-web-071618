import React from 'react';

export default class DelayedButton extends React.Component {

    usePropsInfo = (event) => {
        event.persist();
        setTimeout(()=>this.props.onDelayedClick(event), this.props.delay)
    }    

    render () {
        console.log(this.props)
        return (
        <button 
        onClick={this.usePropsInfo} >
        delay
        </button>)
    }
}