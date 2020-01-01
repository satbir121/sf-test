import React from "react";
import "./App.css";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Page,
  Inject
} from "@syncfusion/ej2-react-grids";
import { data } from "./datasource";

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
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleHeight}>Resize</button>
        <div className={this.state.fullWidth ? "full-width" : "half-width"}>
          <GridComponent
            dataSource={data}
            height={this.state.height}
            allowPaging={true}
          >
            <Inject services={[Page]} />
            <ColumnsDirective>
              <ColumnDirective field="OrderID" width="100" textAlign="Right" />
              <ColumnDirective field="CustomerID" width="100" />
              <ColumnDirective
                field="EmployeeID"
                width="100"
                textAlign="Right"
              />
              <ColumnDirective
                field="Freight"
                width="100"
                format="C2"
                textAlign="Right"
              />
              <ColumnDirective field="ShipCountry" width="100" />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>
    );
  }
}

export default App;
