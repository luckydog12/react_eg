import React, { Component } from "react"
import Item from "../Item/index"
import PropTypes from "prop-types"
import "./index.css"

export default class index extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }
  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        })}
      </ul>
    )
  }
}
