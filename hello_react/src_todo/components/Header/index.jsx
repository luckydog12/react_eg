import React, { Component } from "react"
import { nanoid } from "nanoid"
import PropTypes from "prop-types"
import "./index.css"

export default class index extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  handleKeyUp = (e) => {
    const { keyCode, target } = e
    if (keyCode !== 13) return
    // 添加不能为空
    if (!target.value.trim()) {
      alert("输入不能为空")
      return
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj)
    // 成功添加后清空input框
    target.value = " "
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
