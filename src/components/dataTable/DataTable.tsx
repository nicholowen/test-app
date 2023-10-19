import styled from "styled-components";
import { GridColDef } from "../Types/types";

const StyledDataTable = styled.div`
  width: 100%;

  tr {
    width: 100%;
  }

  table {
    // background: blue;
    border-collapse: collapse;
    border-radius: 4px;
    border-style: hidden; /* hide standard table (collapsed) border */
    box-shadow: 0 0 0 1px green; /* this draws the table border  */
    width: 100%;
  }

  .numeric {
    text-align: right;
  }
  .string {
    text-align: left;
  }

  th {
    border: 1px solid green;
    padding: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  td {
    border: 1px solid green;
    padding: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 300px;
  }

  @media only screen and (max-width: 700px) {
    /* Force table to not be like tables anymore */
    #no-more-tables table,
    #no-more-tables thead,
    #no-more-tables tbody,
    #no-more-tables th,
    #no-more-tables td,
    #no-more-tables tr {
      display: block;
    }

    /* Hide table headers (but not display: none for accessibility) */
    #no-more-tables thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    #no-more-tables tr {
      border-bottom: 1px solid #ccc;
    }

    #no-more-tables td {
      /* Behave  like a "row" */
      width: 55% !important;
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 40%;
      white-space: wrap;
      text-overflow: unset;
      overflow: show;
      text-align: left;
    }

    #no-more-tables td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 8px;
      left: 8px;
      // width: 35%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: left;
      font-weight: bold;
    }

    /*
  	Label the data
  	*/
    #no-more-tables td:before {
      content: attr(data-title);
    }
  }
`;

interface Props {
  rowData: any;
  columns: GridColDef[];
}

const getClassName = (className: string) => {
  switch (className) {
    case "number":
      return "numeric";
    case "string":
      return "string";
    default:
      return "string";
  }
};

const DataTable = ({ rowData, columns }: Props) => {
  const HeaderRow = () => {
    return (
      <tr>
        {columns.map((key) => {
          console.log(getClassName(key.type));
          return (
            <th className={getClassName(key.type)} headers={key.field}>
              {key.columnName}
            </th>
          );
        })}
      </tr>
    );
  };

  const DataRows = () => {
    const totalWidth = columns.reduce((sum, obj) => sum + obj.flex, 0);

    return (
      <>
        {rowData.map((row: any, index: number) => {
          return (
            <tr key={index}>
              {columns.map((col: GridColDef) => {
                return (
                  <td
                    className={`${getClassName(col.type)}`}
                    key={col.field}
                    data-title={col.columnName}
                    style={{ width: `${(col.flex / totalWidth) * 100}%` }}
                  >
                    {row[col.field]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <StyledDataTable>
      <div className="row">
        <div id="no-more-tables">
          <table className="col-md-12 table-bordered table-striped table-condensed cf">
            <thead className="cf">
              <HeaderRow />
            </thead>
            <tbody>
              <DataRows />
            </tbody>
          </table>
        </div>
      </div>
    </StyledDataTable>
  );
};

export default DataTable;
