import React, { Component } from "react";
import { render } from "react-dom";
import NewsItem from "./newsItem.jsx";
import NewsSwiper from "./swiper.jsx";
import HotWord from "../common/hotword.jsx";
import LoadMore from "../common/loadmore.jsx";
import ToTop from "../common/totop.jsx";

export default class NewsList extends Component {
    state = { type: "0" };
    componentWillMount() {
        console.log("will mount");
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ type: this.props.type });
    }

    // componentDidMount() {
    //     this.setState({type:this.props.type})
    // }
    render() {
        let topCpt = [];
        if (this.props.top.length != 0) {
            topCpt = this.props.top.map(function(item, index) {
                return <NewsItem {...item} key={index} />;
            });
        }
        let newsCpt = this.props.news.map(function(item, index) {
            return <NewsItem {...item} key={index} />;
        });
        return (
            <div style={{ paddingTop: 89 }}>
                {this.props.toppic.length
                    ? <NewsSwiper news={this.props.toppic} />
                    : ""}
                {this.state.type == "0" ? <HotWord /> : ""}
                {topCpt}
                {newsCpt}
                <LoadMore onScroll={this.props.onScroll.bind(this)} />
                <ToTop />
            </div>
        );
    }
}
