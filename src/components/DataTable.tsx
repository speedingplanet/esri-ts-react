import { ZippayRecord } from '@speedingplanet/rest-server';
import React, { ReactElement, useState } from 'react';
import { get as lodashGet, orderBy } from 'lodash';

export interface ColumnConfig {
  field: string;
  label: string;
}

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  sortField: string;
  lastSortField: string;
  lastSortDirection: SortDirection;
}

// <T>
// <T extends Element>
// <T = HTMLElement>
// <T extends Element = HTMLElement>

interface DataTableProps<T extends ZippayRecord = ZippayRecord> {
  data: T[];
  columns: ColumnConfig[];
  sortData?: ( field: string ) => void;
  selectRow?: ( record: T ) => void;
}

export default function DataTable( {
  data,
  columns,
  sortData,
}: DataTableProps ): ReactElement {
  const [ sortConfig, setSortConfig ] = useState<SortConfig>( {
    sortField: '',
    lastSortField: '',
    lastSortDirection: 'asc',
  } );

  function handleSortData( sortField: string ) {
    if ( sortData ) {
      return sortData( sortField );
    } else {
      let lastSortDirection: SortDirection = 'asc';
      if (
        sortField === sortConfig.sortField &&
        sortConfig.lastSortDirection === 'asc'
      ) {
        lastSortDirection = 'desc';
      }

      setSortConfig( {
        sortField,
        lastSortField: sortConfig.sortField,
        lastSortDirection,
      } );
    }
  }

  let displayData = [ ...data ];
  if ( !sortData ) {
    displayData = orderBy(
      displayData,
      sortConfig.sortField,
      sortConfig.lastSortDirection,
    );
  }

  return (
    <table className="table table-striped table-hover">
      <thead>
        <DataTableHeader
          columns={columns}
          sortData={handleSortData}
          sortConfig={sortConfig}
        />
      </thead>
      <tbody>
        {displayData.map( ( record ) => (
          <DataTableRow columns={columns} record={record} key={record.id} />
        ) )}
      </tbody>
    </table>
  );
}

// Pick<SomeType, 'props' | 'from' | 'type'>
type DataTableRowProps<T extends ZippayRecord = ZippayRecord> = Pick<
  DataTableProps,
  'columns' | 'selectRow'
> & { record: T };

function DataTableRow( {
  columns,
  record,
  selectRow = () => null,
}: DataTableRowProps ): ReactElement {
  return (
    <tr onClick={() => selectRow( record )}>
      {columns.map( ( column ) => (
        <td key={column.field}>
          {/* 2nd argument could be 'address.state', ['address', 'state'] */}
          {lodashGet( record, column.field )}
          {/* {record[column.field as keyof ZippayRecord]} */}
        </td>
      ) )}
    </tr>
  );
}

type DataTableHeaderProps = Pick<DataTableProps, 'columns' | 'sortData'> & {
  sortConfig: SortConfig;
};

function DataTableHeader( {
  columns,
  sortData = () => null,
  sortConfig,
}: DataTableHeaderProps ): ReactElement {
  return (
    <tr>
      {columns.map( ( column ) => (
        <th key={column.field} onClick={() => sortData( column.field )}>
          {column.label}
          <SortIndicator column={column} sortConfig={sortConfig} />
        </th>
      ) )}
    </tr>
  );
}

interface SortIndicatorProps {
  sortConfig: SortConfig;
  column: ColumnConfig;
}
function SortIndicator( { sortConfig, column }: SortIndicatorProps ) {
  let indicator = '';
  if ( sortConfig.sortField === column.field ) {
    // indicator = sortConfig.lastSortDirection === 'asc' ? '🔼' : '🔽';
    if ( sortConfig.lastSortDirection === 'asc' ) {
      indicator = '🔼';
    } else {
      indicator = '🔽';
    }
  }
  return <span>&nbsp;{indicator}</span>;
}
