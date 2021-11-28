import React, { Component } from "react"

export default class index extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props
    console.log(this.props)
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用，输入关键字，随后点击搜索</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2>{err}</h2>
        ) : (
          users.map((item) => {
            return (
              <div key={item.id} className="card">
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img alt="headPhoto" src={item.avatar_url} style={{ width: "100px" }} />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
