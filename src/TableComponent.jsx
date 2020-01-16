import React from "react";
import "./App.css";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Page,
  Inject,
  Resize,
  Reorder,
  CommandColumn,
  ColumnMenu
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
    const commands = [
      {
        type: "Edit",
        buttonOption: { cssClass: "e-flat", iconCss: "e-edit e-icons" }
      },
      {
        type: "Delete",
        buttonOption: { cssClass: "e-flat", iconCss: "e-delete e-icons" }
      },
      {
        type: "Save",
        buttonOption: { cssClass: "e-flat", iconCss: "e-update e-icons" }
      },
      {
        type: "Cancel",
        buttonOption: { cssClass: "e-flat", iconCss: "e-cancel-icon e-icons" }
      }
    ];
    return (
      <GridComponent
        selectionSettings={settings}
        dataSource={this.props.data}
        rowSelected={this.rowSelected}
        ref={g => (this.grid = g)}
        width={"100%"}
        height={"100%"}
        dataBound={this.dataBound}
        allowPaging={true}
        allowReordering={true}
        allowResizing={true}
        showColumnMenu={true}
        commandClick={args => {
          console.log(args);
        }}
      >
        <Inject services={[Page, Resize, Reorder, CommandColumn, ColumnMenu]} />
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" />
          <ColumnDirective field="Freight" width="100" format="C2" />
          <ColumnDirective field="ShipCountry" width="100" />
          <ColumnDirective headerText="Commands" commands={commands} />
        </ColumnsDirective>
      </GridComponent>
    );
  }
}
