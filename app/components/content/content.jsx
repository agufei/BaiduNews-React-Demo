import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import HotWord from "../common/hotword.jsx";
import Img from "../common/img.jsx";
import Loading from "../common/loading.jsx";
import ToTop from '../common/totop.jsx';
import CmtIpt from './cmtIpt.jsx';
import fetchNewsContent from "../../fetch/fetchNewsContent.js";
import { ts2date } from "../../util/timeCovert.js";

export default class Content extends Component {
    state = {
        data: { title: "", content: [], ts: new Date(), site: "", related: [] }
    };
    componentDidMount() {
        fetchNewsContent(this.props.match.params.id, data => {
            this.setState({ data: data });
        });
    }
    render() {
        return (
            <div>
                <HotWord />
                <ContentContainer data={this.state.data} />
                <CmtIpt nid={this.props.match.params.id} />
                <ToTop/>
            </div>
            );
    }
}

class ContentContainer extends Component {
    state = { contents: [] };
    componentWillUpdate(nextProps, nextState) {
        let contents = [];
        // console.log(nextProps);
        if (nextProps.data.news) {
            // console.log(nextProps.data.news[0].content);
            nextProps.data.news[0].content.map((e, i) => {
                switch (e.type) {
                    case "text":
                        contents.push(<p key={i}>{e.data}</p>);
                        break;
                    case "image":
                        contents.push(
                            <div key={i}>
                                <Img src={e.data.small} />
                                <span>{e.data.text}</span>
                            </div>
                        );
                        break;
                }
            });
        }
        this.setState({ contents: contents });
    }
    render() {
        return (
            <div>
                <a onClick={()=>history.go(-1)} style={{ marginLeft: "20px" }}>返回</a>
                {this.props.data.news
                    ? <div className="content-container">
                          <h2 className="content-title">
                              {this.props.data.news
                                  ? this.props.data.news[0].title
                                  : ""}
                          </h2>
                          <h3 className="content-subtitle">
                              {this.props.data.news
                                  ? `${this.props.data.news[0].site} ${ts2date(this.props.data.news[0].ts)}`
                                  : ""}
                          </h3>
                          <article className="content-wrap">
                              {this.state.contents ? this.state.contents : []}
                          </article>
                      </div>
                    : <Loading />}
            </div>
        );
    }
}
