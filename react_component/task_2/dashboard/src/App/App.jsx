import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";
import CourseList from "../CourseList/CourseList";

class App extends Component {
  constructor(props) {
    super(props);
    this.lastKey = "";
  }

  componentDidMount() {
    document.body.addEventListener("keyup", (_) => {
      this.lastKey = "";
    });
    document.body.addEventListener("keydown", (ev) => {
      if (this.lastKey == 'Control' && ev.key == "h") {
        this.props.logOut();
      }
      this.lastKey = ev.key;
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="App-head">
            <Header />
            <Notifications displayDrawer={this.props.displayDrawer} />
          </div>

          <div className="App-body border">
            {this.props.isLoggedIn === false ? <Login /> : <CourseList />}
          </div>
          <div className="App-footer border">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
