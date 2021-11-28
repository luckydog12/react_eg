import React, { Component } from "react"
import "./App.css"
import Search from "./components/Search"
import List from "./components/List"
class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  }
  updateInfo = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Search updateInfo={this.updateInfo} />
        <List {...this.state} />
      </div>
    )
  }
}
export default App
