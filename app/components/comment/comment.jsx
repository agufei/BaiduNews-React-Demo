import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Comment extends Component {
    backHandler(){
        history.go(-1)
    }
    render() {
        return (
            <div className="comment-container">
                <header>
                    <a onClick={this.backHandler} className="back"><span></span></a>
                    <span className="text">评论</span>
                </header>
                <div className="comment-input-wrap">
                    <form>
                        <textarea placeholder="我来说两句..."></textarea>
                        <input onClick={this.backHandler} type="button" value="发表"/>
                    </form>
                </div>
            </div>
        );
    }
}