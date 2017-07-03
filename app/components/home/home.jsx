import React, { Component } from "react";
import { render } from "react-dom";
import NewsList from "./newsList.jsx";
import Nav from "./nav.jsx";
import fetchNewsList from "../../fetch/fetchNewsList.js";
import { ts2date } from "../../util/timeCovert.js";

export default class Home extends Component {
    state = {
        type: "0",
        newsList: [],
        topList: [],
        toppic: [],
        refreshFlag: false,
        lastTS: new Date()
    };
    loadMore() {
        if (!this.state.refreshFlag) {
            this.state.refreshFlag = true;
            fetchNewsList(
                data => {
                    const newNews = this.processNewsData(data);
                    this.setState(
                        {
                            newsList: this.state.newsList.concat(newNews)
                        },
                        () => (this.state.refreshFlag = false)
                    );
                },
                this.state.lastTS,
                this.state.type || "0"
            );
        }
    }
    processNewsData(data) {
        let news = [];
        if (this.props.match.params.type == "1") {
            news = data.list;
        } else {
            news = data.news;
        }
        if (news[0].pulltime) {
            this.state.lastTS = news[news.length - 1].pulltime;
        }
        let newsList = [];
        for (let i = 0; i < news.length; i++) {
            let { nid, title, imageurls, url, ts } = news[i];
            if (!news[i].ts) continue;
            newsList.push({
                nid,
                title,
                imageurls,
                url,
                time: ts2date(ts || new Date()),
                type: (() => {
                    if (imageurls.length == 0) {
                        return 1;
                    } else if (imageurls.length == 1) {
                        return 2;
                    } else {
                        return 3;
                    }
                })()
            });
        }
        return newsList;
    }
    updateList(typeNum) {
        fetchNewsList(
            data => {
                this.setState({ newsList: this.processNewsData(data) });
                if (data.news[0].pulltime) {
                    this.state.lastTS = data.news.reverse()[0].pulltime;
                }
                // 置顶新闻内容
                let topList = [];
                if (data.top) {
                    const top = data.top;
                    for (let i = 0; i < top.length; i++) {
                        const { title, nid, imageurls, url, ts } = top[i];
                        topList.push({
                            title,
                            nid,
                            imageurls,
                            url,
                            time: ts2date(ts),
                            type: 2
                        });
                    }
                }
                if (data.toppic) {
                    this.setState({ toppic: data.toppic });
                } else {
                    this.setState({ toppic: [] });
                }
                this.setState({
                    topList: topList
                });
                // 新闻列表内容
            },
            0,
            typeNum || "0"
        );
    }
    /**
     * 分类页面跳转收到属性值改变以后更新新闻列表
     * 
     * @param {any} nextProps 新的props值
     * @param {any} nextState 新的state值
     * 
     * @memberof Home
     */
    componentWillReceiveProps(nextProps, nextState) {
        this.updateList(nextProps.match.params.type);
        if (this.props.match.params.type != nextProps.match.params.type) {
            this.setState({ newsList: [] });
        }
    }
    // componentDidUpdate(prevProps, prevState) {
    //     this.setState({type:this.props.match.params.type})
    // }
    componentDidMount() {
        this.updateList(this.props.match.params.type);
    }

    render() {
        return (
            <div>
                <Nav type={this.props.match.params.type} />
                <NewsList
                    type={this.props.match.params.type}
                    news={this.state.newsList}
                    top={this.state.topList}
                    toppic={this.state.toppic}
                    onScroll={this.loadMore.bind(this)}
                />
            </div>
        );
    }
}
