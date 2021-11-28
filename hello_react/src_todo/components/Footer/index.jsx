import React, { Component } from "react"
import "./index.css"
export default class Footer extends Component {
  // 全选 - 全不选
  handleCheckAll = (e) => {
    this.props.checkAllTodos(e.target.checked)
  }
  // 清除所有已经完成的todo
  handleClearAllDone = () => {
    this.props.clearDoneAll()
  }
  render() {
    const { todos } = this.props
    // 已完成
    const doneCount = todos.reduce((prev, cur) => {
      if (cur.done) {
        ++prev
      }
      return prev
    }, 0)
    // 总数
    const total = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    )
  }
}
