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

  // 用于添加一个todo，接受一个todo对象
  addTodo = (todoObj) => {
    console.log("app", todoObj)
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({ todos: newTodos })
  }

  // 勾选框input
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((item) => {
      if (item.id === id) return { ...item, done }
      else return item
    })
    this.setState({ todos: newTodos })
  }

  // 删除todo
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((item) => {
      return item.id !== id
    })
    this.setState({ todos: newTodos })
  }

  // 全选-全不选
  checkAllTodos = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((item) => {
      return { ...item, done }
    })
    this.setState({ todos: newTodos })
  }
  // 清除全部已经完成的todo
  clearDoneAll = () => {
    const { todos } = this.state
    const newTodos = todos.filter((i) => !i.done)
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearDoneAll={this.clearDoneAll} />
        </div>
      </div>
    )
  }
}
export default App
