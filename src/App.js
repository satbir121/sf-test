import React, { useState } from "react";
import TableComponent from "./TableComponent";
import { data } from "./datasource";

import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import { useDrag } from "react-dnd";
export const ItemTypes = {
  CARD: "CARD"
};

export function log(text) {
  const logDiv = document.getElementById("log");
  let div = document.createElement("div");
  div.innerHTML = text;
  logDiv.appendChild(div);
  logDiv.scrollTop = logDiv.scrollHeight;
}

export function Card({ data, columns, rowSelected }) {
  const [disableDrag, setDisableDrag] = useState(false);
  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.CARD },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    }),
    canDrag: () => {
      console.log("canDrag");
      log("canDrag");
      return !disableDrag;
    }
  });

  return (
    <div ref={dragRef} style={{ opacity }}>
      <TableComponent
        data={data}
        columns={columns}
        height={500}
        setSelectedRow={rowSelected}
        setDisableDrag={setDisableDrag}
      ></TableComponent>
    </div>
  );
}

function constructColumns(data) {
  const cols = [];
  const listItemWithAllProperties = {};
  data.forEach(dataItem => {
    Object.assign(listItemWithAllProperties, dataItem);
  });
  for (const key in listItemWithAllProperties) {
    if (listItemWithAllProperties.hasOwnProperty(key)) {
      cols.push({
        field: key,
        width: 200
      });
    }
  }
  return cols;
}
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullWidth: true,
      height: 1000,
      data: data,
      commands: commands,
      columns: constructColumns(data)
    };
  }
  rowSelected = (rowData, rowIndex) => {
    this.setState({
      selectedRowIndex: rowIndex,
      selectedRow: rowData
    });
  };
  render() {
    return (
      <div className="App">
        <DndProvider backend={Backend}>
          <Card
            text={"adasds"}
            data={this.state.data}
            columns={this.state.columns}
            rowSelected={this.rowSelected}
          ></Card>
        </DndProvider>
        <div id="log">
          <h1>Logs</h1>
        </div>
      </div>
    );
  }
}

export default App;
