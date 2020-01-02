import React from "react";
import "./App.css";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Page,
  Inject
} from "@syncfusion/ej2-react-grids";
const settings = { type: "Multiple" };

export default class TableComponent extends React.Component {
  rowSelected = () => {
    if (this.grid) this.props.setSelectedRow();

    const selectedrowindex = this.grid.getSelectedRowIndexes();
    /** Get the selected records. */
    const selectedrecords = this.grid.getSelectedRecords();
    if (selectedrecords.length !== 0) {
      this.props.setSelectedRow(selectedrecords[0], selectedrowindex[0]);
    }
  };
  dataBound = () => {
    if (this.grid) {
      this.grid.autoFitColumns();
    }
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
        dataSource={this.props.data}
        allowPaging={true}
        rowSelected={this.rowSelected}
        selectionSettings={settings}
        selectedRowIndex={this.props.selectedRowIndex}
        width={this.props.width - 16}
        height={this.props.height - 107}
        dataBound={this.dataBound}
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
