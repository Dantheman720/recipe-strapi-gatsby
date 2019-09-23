import React from "react"
import { Table } from "antd"

const columns = [
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Measurement",
    dataIndex: "measurement",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
]

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    )
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
}

const IngredientTable = props => {
  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={props.ingredients}
        pagination={false}
      />
    </div>
  )
}
export default IngredientTable
