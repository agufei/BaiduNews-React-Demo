import React, { Component } from "react";
import { render } from "react-dom";
import ReactSwipe from "react-swipe";

export default class NewsSwiper extends Component {
    state = {
        swipeOptions: {
            startSlide: 0,
            auto: 3000,
            speed: 300,
            disableScroll: true,
            continuous: true
        },
        swipeChild: [],
        style: {}
    };
    componentDidMount() {
        this.setState({
            style: {
                container: {
                    overflow: "hidden",
                    visibility: "visible",
                    position: "relative"
                },
                wrapper: {
                    overflow: "hidden",
                    width: this.state.winWidth * 3,
                    position: "relative"
                }
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        let swipeChild = nextProps.news.map((item, index) => {
            return (
                <a href={item.url} key={index}>
                    <img
                        className="swipe-child-img"
                        src={item.imageurls[0].url}
                    />
                    <p className="swipe-child-title">{item.title}</p>
                </a>
            );
        });
        this.setState({
            swipeChild: swipeChild
        });
    }

    render() {
        /*const swipeOptions = {
            startSlide: 0,
            auto: 3000,
            speed: 300,
            disableScroll: true,
            continuous: true,
            callback() {
                // console.log("slide changed");
            },
            transitionEnd() {
                // console.log("ended transition");
            }
        };*/

        // console.log(this.props.news);

        return this.state.swipeChild.length == 0
            ? <div />
            : <ReactSwipe
                  className="swiper"
                  // style={this.state.style}
                  swipeOptions={this.state.swipeOptions}
              >
                  {this.state.swipeChild}
              </ReactSwipe>;
    }
}
