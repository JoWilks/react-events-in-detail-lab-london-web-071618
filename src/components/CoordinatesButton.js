import React from 'react';

export default class CoordinatesButton extends React.Component {

    getCoordinates = (event) => {
        let mouseCoordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(mouseCoordinates)
    }

    render () {
        return (<button onClick={this.getCoordinates}>
            coordinates
        </button>)
    }
}