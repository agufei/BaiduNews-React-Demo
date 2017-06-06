import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter as Router,Link,Route } from "react-router-dom";
import Comment from '../comment/comment.jsx';

export default class CmtIpt extends Component {
    state = {};
    focusHandler(){
        console.log(this.props.nid);
        window.location.href="/#/comment/"+this.props.nid;
    }
    render() {
        return (
            <footer className="comment-wrap">
                <div style={{width:114.5,float:'right'}}>
                    {this.props.nid!=''?<Link to={"/comment/"+this.props.nid} className="icon comment" />:<div className="icon comment" />}
                    <span className="icon star" />
                </div>
                <div className="ipt-wrap">
                    <input type="text" onFocus={this.focusHandler.bind(this)} placeholder="点击这里评论..." />
                </div>
            </footer>
        );
    }
}
