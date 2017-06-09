import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import navList from "../../constants/nav-list.js";

export default class Nav extends Component {
    state = { curMouseX: 0, curLeft: 0, left: 0 };
    clickHandler(e) {
        let aLi = this.refs.navitems.children;
        for (let i = 0; i < aLi.length; i++) {
            aLi[i].classList.remove("active");
        }
        e.target.parentNode.classList.add("active");
        this.moveToMiddle(e.target.parentNode);
    }
    moveToMiddle(li) {
        let middle = (window.innerWidth - li.offsetWidth) / 2;
        let disX = 0;
        if (li.offsetLeft > middle && li.offsetLeft < 433 + middle) {
            disX = middle - li.offsetLeft;
        } else if (li.offsetLeft >= 433 + middle) {
            disX = -433;
        }
        li.parentNode.style.left = disX + "px";
    }
    touchStartHandler = e => {
        this.state.curMouseX = e.nativeEvent.touches[0].clientX;
        this.state.curLeft = this.refs.navitems.offsetLeft;
    };
    touchHandler = e => {
        let move =
            this.state.curLeft +
            e.nativeEvent.touches[0].clientX -
            this.state.curMouseX;
        let len = 0;
        let aLi = this.refs.navitems.children;
        for (let i = 0; i < aLi.length; i++) {
            len += aLi[i].offsetWidth;
        }
        if (move > 0) {
            move = 0;
        }
        if (move < window.innerWidth - 808) {
            move = window.innerWidth - 808;
        }
        this.setState({ left: move });
    };
    componentWillReceiveProps(nextProps) {
        // 如果页面跳转，自动将对应页面的导航项点亮
        let aLi = this.refs.navitems.children;
        for (let i = 0; i < aLi.length; i++) {
            if (nextProps.type == undefined) {
                //如果是首页，没有传入type参数，则默认选择第0项
                aLi[0].classList.add("active");
            } else if (i == Number(nextProps.type)) {
                this.moveToMiddle(aLi[i]);
                aLi[i].classList.add("active");
            } else {
                aLi[i].classList.remove("active");
            }
        }
    }
    render() {
        let navItem = [
            <li className="active" key="0"><Link to="/">推荐</Link></li>
        ];
        let name = navList.name;
        for (let i = 1; i < name.length; i++) {
            navItem.push(
                <li key={i}><Link to={"/list/" + i}>{name[i]}</Link></li>
            );
        }
        return (
            <header className="home-header">
                <div className="header-menu">
                    <Link to="/" className="header-menu-icon baidu" />
                    <Link to="/" className="header-menu-icon user" />
                    <Link to="/" className="header-menu-icon subscribe" />
                    <Link to="/" className="header-menu-icon search" />
                </div>
                <nav className="header-nav">
                    <ul
                        ref="navitems"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: this.state.left
                        }}
                        onTouchStart={this.touchStartHandler}
                        onTouchMove={this.touchHandler}
                        onClick={this.clickHandler.bind(this)}
                    >
                        {navItem}
                    </ul>
                </nav>
            </header>
        );
    }
}
