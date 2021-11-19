import React from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"

class App extends React.Component {
  state = {
    todos: [
      { id: "001", name: "eat", done: true },
      { id: "002", name: "sleep", done: true },
      { id: "003", name: "code", done: false },
    ],
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
export default App
