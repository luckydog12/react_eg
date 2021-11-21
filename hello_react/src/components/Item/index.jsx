import React, { Component } from "react"
import "./index.css"

export default class index extends Component {
  // 标识鼠标移入移出
  state = { mouse: false }

  // 鼠标移入移出
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  // 勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }
  // 删除一个todo的回调
  handleDelete = (id) => {
    if (window.confirm("are u sure to delete")) this.props.deleteTodo(id)
  }
  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? "#ddd" : "#fff" }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>
          删除
        </button>
      </li>
    )
  }
}
