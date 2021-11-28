import React, { Component } from "react"
import axios from "axios"
import PubSub from "pubsub-js"

export default class index extends Component {
  search = () => {
    // const {
    //   keyword: { value }, // 连续结构赋值
    // } = this
    // axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
    //   (res) => {},
    //   (error) => {}
    // )

    PubSub.publish("luckydog", { name: "tom", age: 18 })
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
