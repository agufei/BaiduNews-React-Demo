import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import Img from "../common/img.jsx";

export default class NewsItem extends Component {
    render() {
        return (
            <div>
                {this.props.type == 1 && <NewsItemNonePic {...this.props} />}
                {this.props.type == 2 && <NewsItemHybrid {...this.props} />}
                {this.props.type == 3 && <NewsItemAllPic {...this.props} />}
            </div>
        );
    }
}

class NewsItemHybrid extends Component {
    render() {
        return (
            <Link to={`/content/${this.props.nid}`} className="news-card">
                <img
                    className="image"
                    src={
                        this.props.imageurls[0].url_webp ||
                        this.props.imageurls[0].url
                    }
                />
                <div className="content">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="time">
                        {this.props.time}
                    </div>
                </div>
            </Link>
        );
    }
}

class NewsItemNonePic extends Component {
    render() {
        return (
            <Link
                to={`/content/${this.props.nid}`}
                className="news-card vertical"
            >
                <div className="single-content">
                    {this.props.title}
                </div>
                <div className="time">
                    {this.props.time}
                </div>
            </Link>
        );
    }
}
class NewsItemAllPic extends Component {
    render() {
        return (
            <Link
                to={`/content/${this.props.nid}`}
                className="news-card vertical"
            >
                <div className="single-content">
                    {this.props.title}
                </div>
                <div className="img-wrap">
                    <img className="image" src={this.props.imageurls[0].url} />
                    <img className="image" src={this.props.imageurls[1].url} />
                    <img className="image" src={this.props.imageurls[2].url} />
                </div>
                <div className="time">
                    {this.props.time}
                </div>
            </Link>
        );
    }
}
