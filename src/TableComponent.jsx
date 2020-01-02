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

export default class TableComponent extends React.Component {
  rowSelected = () => {
    if (this.grid) this.props.setSelectedRow();
  };
  render() {
    console.log("RENDER");
    try {
      if (this.grid) {
        console.log(this.grid.getSelectedRowIndexes());
      }
    } catch (ex) {
      console.log(ex);
    }
    return (
      <GridComponent
        ref={g => (this.grid = g)}
        dataSource={data}
        allowPaging={true}
        rowSelected={this.rowSelected}
      >
        <Inject services={[Page]} />
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" />
          <ColumnDirective field="Freight" width="100" format="C2" />
          <ColumnDirective field="ShipCountry" width="100" />
        </ColumnsDirective>
      </GridComponent>
    );
  }
}
