import React from "react";
import TableComponent from "./TableComponent";
import { data } from "./datasource";

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

let counter = 0;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullWidth: true,
      height: 1000,
      data: [],
      commands: [],
      columns: []
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
  rowSelected = (rowData, rowIndex) => {
    this.setState({
      selectedRowIndex: rowIndex,
      selectedRow: rowData
    });
  };
  render() {
    setTimeout(() => {
      if (counter < 1) {
        const columns = constructColumns(data);
        this.setState({
          commands: commands,
          data: data,
          columns: columns
        });
        counter++;
      }
    }, 1000);

    return (
      <div className="App">
        <button onClick={this.toggleWidth}>Resize</button>
        <div className={this.state.fullWidth ? "full-width" : "half-width"}>
          <TableComponent
            data={this.state.data}
            width={this.state.fullWidth}
            columns={this.state.columns}
            height={500}
            setSelectedRow={this.rowSelected}
          ></TableComponent>
        </div>
      </div>
    );
  }
}

export default App;
