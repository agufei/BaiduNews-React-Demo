import React, { Component } from "react";
import { render } from "react-dom";
import fetchHotWord from "../../fetch/fetchHotWord.js";

export default class HotWord extends Component {
    state = { li: [], scrollTop: 0 };
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    componentDidMount() {
        fetchHotWord(data => {
            let hotWordAry = [];
            data.map((item, index) => {
                hotWordAry.push(
                    <li className="hotword-li" key={index}>{item.title}</li>
                );
            });
            this.setState({ li: hotWordAry });
        });
        let scrollNum = 0;
        let liHeight = 24;
        this.state.timer = setInterval(() => {
            if (this.state.displayState == "none")
                this.setState({ displayState: "all" });
            if (scrollNum >= this.state.li.length) {
                scrollNum = 0;
                this.setState({ displayState: "none" });
            }
            let desTop = -liHeight * scrollNum++;
            this.setState({ scrollTop: desTop });
        }, 2000);
    }
    render() {
        return (
            <div className="hotword">
                <span className="hotword-span">热点</span>
                <div className="hotword-ul-wrap">
                    <ul
                        ref="hotWordUl"
                        className="hotword-ul"
                        style={{
                            top: this.state.scrollTop,
                            transitionProperty: this.state.displayState
                        }}
                    >
                        {this.state.li}
                    </ul>
                </div>
            </div>
        );
    }
}
