import React, { Component } from "react";
import { render } from "react-dom";

export default class Loading extends Component {
    render() {
        return (
            <div className="loading-wrap">
                <p>LOADING...</p>
            </div>
        );
    }
}
