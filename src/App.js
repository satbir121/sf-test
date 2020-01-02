import React from "react";
import { data } from "./datasource";
import TableComponent from "./TableComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullWidth: true,
      height: 1000
    };
  }
  toggleWidth = () => {
    this.setState({
      fullWidth: !this.state.fullWidth
    });
  };
  toggleHeight = () => {
    this.setState({
      height: this.state.height === 1000 ? 300 : 1000
    });
  };
  rowSelected = () => {
    this.setState({
      abc: Math.random()
    });

    setInterval(() => {
      this.setState({
        abc: Math.random()
      });
    }, 100);
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleHeight}>Resize</button>
        <div className={this.state.fullWidth ? "full-width" : "half-width"}>
          <TableComponent
            data={data}
            setSelectedRow={this.rowSelected}
          ></TableComponent>
        </div>
      </div>
    );
  }
}

export default App;
