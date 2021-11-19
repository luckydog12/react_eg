import React, { Component } from "react"
import Item from "../Item/index"
import "./index.css"

export default class index extends Component {
  render() {
    const { todos } = this.props
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return <Item key={item.id} {...item} />
        })}
      </ul>
    )
  }
}
