import { GridColDef } from "../components/Types/types";
import DataTable from "../components/dataTable/DataTable";

const gridCol = [
  {
    field: "code",
    columnName: "Code",
    type: "string",
    flex: 1,
  },
  {
    field: "company",
    columnName: "Company",
    type: "string",
    flex: 4,
  },
  {
    field: "price",
    columnName: "Price",
    type: "number",
    flex: 1,
  },
  {
    field: "change",
    columnName: "Change",
    type: "number",
    flex: 3,
  },
  {
    field: "change_percent",
    columnName: "Reserves sent plus 60s",
    type: "number",
    flex: 1,
  },
] as GridColDef[];

const rowData = [
  {
    code: "AAC",
    company: "AUSTRALIAN AGRICULTURAL COMPANY",
    price: 1.38,
    change: -0.01,
    change_percent: -0.36,
  },
  {
    code: "AAD",
    company: "ARDENT LEISURE GROUP",
    price: 1.15,
    change: 0.02,
    change_percent: 1.32,
  },
  {
    code: "AAX",
    company: "AUSENCO LIMITED",
    price: 4.0,
    change: -0.04,
    change_percent: -0.99,
  },
  {
    code: "ABC",
    company: "ADELAIDE BRIGHTON LIMITED",
    price: 3.0,
    change: 0.06,
    change_percent: 2.04,
  },
  {
    code: "ABP",
    company: "ABACUS PROPERTY GROUP",
    price: 1.91,
    change: 0.0,
    change_percent: 0.0,
  },
  {
    code: "ABY",
    company: "ADITYA BIRLA MINERALS LIMITED",
    price: 0.77,
    change: 0.02,
    change_percent: 2.0,
  },
];

const Contact = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <div style={{ margin: "10px" }}>
        <DataTable rowData={rowData} columns={gridCol}></DataTable>
      </div>
    </>
  );
};

export default Contact;
