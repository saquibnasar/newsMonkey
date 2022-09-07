import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Switch>
            <Route path="/newsMonkey">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                key="general"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                key="business"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                key="entertainment"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                key="general"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                key="health"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                key="science"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                key="sports"
                category="sports"
              />
            </Route>
            <Route exact path="/Technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                key="Technology"
                category="Technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
