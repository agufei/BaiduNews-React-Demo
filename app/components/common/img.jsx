import React, { Component } from "react";
import { render } from "react-dom";

export default class Img extends Component {
    state = { srcUrl: "", disTop: 0 };
    componentDidMount() {
        window.addEventListener("scroll", this.imgScrollHandler);
        this.displayImg();
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.imgScrollHandler);
    }
    imgScrollHandler = () => {
        // 判断图片距离视口的位置，决定是否需要更改图片链接
        // this.state.disTop = this.refs.img.getBoundingClientRect().top;
        // if (
        //     Math.round(this.state.disTop / 400) ==
        //         -Math.round((this.refs.img.offsetHeight+50) / 400) ||
        //     Math.round(this.state.disTop / 400) ==
        //         Math.round((window.innerHeight+50) / 400)
        // ) {
        // console.log(this.state.disTop);
        this.displayImg();
        // }
    };
    displayImg = () => {
        this.state.disTop = this.refs.img.getBoundingClientRect().top;
        // console.log(this.refs.img.getAttribute("data-src"));
        if (
            this.state.disTop > -this.refs.img.offsetHeight &&
            this.state.disTop < window.innerHeight
        ) {
            this.setState({ srcUrl: this.props.src.url });
        } else {
            this.setState({ srcUrl: "" });
        }
    };
    style = {
        width: window.innerWidth * 0.85,
        height:
            window.innerWidth *
                0.85 *
                this.props.src.height /
                this.props.src.width,
        border: "none",
        background: "url('/image/default.png') no-repeat center/85%"
    };
    styleSmall = {
        display: "inline-block",
        width: window.innerWidth * 0.28,
        height:
            window.innerWidth *
                0.85 *
                this.props.src.height /
                this.props.src.width,
        background: "url('/image/default.png') no-repeat center/100%"
    };
    render() {
        return (
            <img
                ref="img"
                style={this.props.small ? this.styleSmall : this.style}
                className={this.props.className}
                src={this.state.srcUrl}
            />
        );
    }
}
