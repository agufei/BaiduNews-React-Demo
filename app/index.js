import React from "react";
import { render } from "react-dom";
import Home from "./components/home/home.jsx";
import Test from './components/home/test.jsx';
import Content from "./components/content/content.jsx";
import Comment from './components/comment/comment.jsx';
import { HashRouter as Router, Route } from "react-router-dom";

render(
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/list/:type" component={Home} />
            <Route path="/content/:id" component={Content} />
            <Route path="/comment/:id" component={Comment} />
        </div>
    </Router>,
    document.getElementById("root")
);
