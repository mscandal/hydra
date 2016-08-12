import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class JobsView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '300px'
    };
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onRowSelection={this._onRowSelection}
        >
          <TableHeader enableSelectAll={this.state.enableSelectAll}>
            <TableRow>
                {this.props.columnData.map( (row, index) => (
                    <TableHeaderColumn key={index}>{row.label}</TableHeaderColumn>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                {this.props.columnData.map( (column, columnIndex) => (
                    <TableRowColumn key={columnIndex}>
                        {row[column.name]}
                    </TableRowColumn>
                ))}
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

JobsView.defaultProps = {
    columnData: [{
        label: 'ID',
        name: 'id'
    }, {
        label: 'Creator',
        name: 'creator'
    }, {
        label: 'Status',
        name: 'status'
    }],

    tableData: [{
        id: '1',
        creator: 'user1',
        status: 'enabled'
    }, {
        id: '2',
        creator: 'user2',
        status: 'disabled'
    }, {
        id: '3',
        creator: 'user3',
        status: 'enabled'
    }, {
        id: '4',
        creator: 'user4',
        status: 'enabled'
    }, {
        id: '5',
        creator: 'user5',
        status: 'enabled'
    }, {
        id: '6',
        creator: 'user6',
        status: 'enabled'
    }, {
        id: '7',
        creator: 'user7',
        status: 'enabled'
    }]
};
