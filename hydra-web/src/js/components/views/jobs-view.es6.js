import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import JobStore from 'stores/JobStore';
import JobActionCreator from 'actions/JobActionCreator';

export default React.createClass({

  mixins: [
      JobStore.mixin
  ],

  getInitialState() {
    return {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '300px',
      columnData: [{
          label: 'ID',
          name: 'id'
      }, {
          label: 'Creator',
          name: 'creator'
      }, {
          label: 'Description',
          name: 'description'
      }]
    };
  },


  getStateFromStores() {
    return {
        jobs: JobStore.getJobs().valueSeq().toArray()
    }
},

  componentDidMount() {
      JobActionCreator.getList();
  },

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
                {this.state.columnData.map( (row, index) => (
                    <TableHeaderColumn key={index}>{row.label}</TableHeaderColumn>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.jobs.map((job, index) => (
              <TableRow key={index} selected={job.selected}>
                {this.state.columnData.map( (column, columnIndex) => (
                    <TableRowColumn key={columnIndex}>
                        {job.get(column.name)}
                    </TableRowColumn>
                ))}
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
});
