import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Test extends Component {
    state = {  }
    render() {
        return (
            <div>{this.props.match.params.type}</div>
        );
    }
}