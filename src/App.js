import React from "react";
import "./App.css";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent
} from "@syncfusion/ej2-react-grids";
import { data } from "./datasource";

function App() {
  return (
    <div className="App">
      <GridComponent dataSource={data}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
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
  );
}

export default App;
