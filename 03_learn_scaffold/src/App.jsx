import React from "react";
import HelloWord from "./Components/HelloWorld";
// 编写一个组件
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      message: 'Hello React'
    }
  }
  render () {
    const { message } = this.state
    return (
      <div>
        <h2>
          {/*this.state.message*/}
          {message}
        </h2>
        <HelloWord/>
      </div>
    )
  }
}

export default App