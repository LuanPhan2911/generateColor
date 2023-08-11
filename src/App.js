import "./App.css";
import GenerateColor from "./components/GenerateColor";
import React from "react";
class App extends React.Component {
  state = {
    show: true,
  };
  componentDidMount() {
    console.log("mount");
  }
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    let { show } = this.state;
    return (
      <div className="App">
        <button onClick={() => this.setState({ ...this.state, show: !show })}>
          Toggle
        </button>
        {show && <GenerateColor />}
      </div>
    );
  }
}

export default App;
