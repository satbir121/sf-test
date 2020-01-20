import React, { useState, useRef } from "react";
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

export default function TableComponent(props) {
  // let [columns, setColumns] = useState([]);
  // let [dataSource, setData] = useState([]);
  const grid = useRef();

  const rowSelected = () => {
    if (grid.current) props.setSelectedRow();

    const selectedrowindex = grid.current.getSelectedRowIndexes();
    /** Get the selected records. */
    const selectedrecords = grid.current.getSelectedRecords();
    if (selectedrecords.length !== 0) {
      props.setSelectedRow(selectedrecords[0], selectedrowindex[0]);
    }
  };
  const dataBound = () => {
    if (grid.current) {
      grid.current.autoFitColumns();
    }
  };

  function gridTemplate(props) {
    return <div>Commands</div>;
  }
  return (
    <GridComponent
      selectionSettings={settings}
      dataSource={props.data}
      rowSelected={rowSelected}
      ref={grid}
      width={"100%"}
      height={"100%"}
      dataBound={dataBound}
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
        {props.columns.map(col => (
          <ColumnDirective field={col.field} />
        ))}
        {/* <ColumnDirective headerText="Commands" template={gridTemplate} /> */}
        <ColumnDirective headerText="Commands" commands={props.commands} />
      </ColumnsDirective>
    </GridComponent>
  );
}
