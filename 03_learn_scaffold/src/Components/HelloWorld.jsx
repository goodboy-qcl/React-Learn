import React from "react"
class HelloWord extends React.Component {
  constructor () {
    super()
    this.state = {
      message: 'hello world'
    }
  }

  render () {
    const { message } = this.state
    return (
      <div>
        <h3>{message}</h3>
      </div>
    )
  }
}

export default HelloWord