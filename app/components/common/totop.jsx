import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ToTop extends Component {
    clickHandler(){
        window.scrollTo(0,0);
    }
    componentDidMount() {
        window.addEventListener('scroll',this.showToTop)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.showToTop)
    }
    showToTop=()=>{
        if(document.body.scrollTop>=window.innerHeight){
            this.refs.totop.style.display='block';
        }else{
            this.refs.totop.style.display='none';
        }
    }
    style={
        width: 52,
        height: 52,
        display:'none',
        cursor: "pointer",
        zIndex: 10,
        right: 13,
        bottom: 132,
        position: "fixed",
        background:"url('/image/totop.png') no-repeat",
        WebkitBackgroundSize: "52px auto",
        backgroundPosition: "right center",
    }
    render() {
        return (
            <div ref="totop" style={this.style} onClick={this.clickHandler} className="totop" />
        );
    }
}