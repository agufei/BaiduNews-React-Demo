import React, { Component } from "react";
import { render } from "react-dom";

class LoadMore extends Component {
    state = {};
    scrollHandler = e => {
        if (
            this.refs.loadmore.getBoundingClientRect().top <= window.innerHeight
        ) {
            this.props.onScroll.call(this);
        }
    };
    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler);
    }
    render() {
        return (
            <div ref="loadmore" className="load-more">
                加载更多...
            </div>
        );
    }
}

export default LoadMore;
