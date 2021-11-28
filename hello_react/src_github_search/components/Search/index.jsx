import React, { Component } from "react"
import axios from "axios"
export default class index extends Component {
  search = () => {
    const {
      keyword: { value }, // 连续结构赋值
    } = this
    this.props.updateInfo({ isFirst: false, isLoading: true })
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
      (res) => {
        console.log(res)
        this.props.updateInfo({ isLoading: false, users: res.data.items })
      },
      (error) => {
        this.props.updateInfo({ isLoading: false, err: error.message })
      }
    )
  }
  inputKeyUp = (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      this.search()
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={(c) => (this.keyword = c)} onKeyUp={this.inputKeyUp} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
