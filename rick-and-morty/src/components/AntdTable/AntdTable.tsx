import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

const TestTable: React.FC = () => {
  const tableData: DataType[] = [
    {
      key: "1",
      name: "Morty Smith",
      status: 'Alive',
      species: "Human",
      gender: "Male",
    },
    {
      key: "2",
      name: "Summer Smith",
      status: 'Alive',
      species: "Human",
      gender: "Female",
    },
    
    {
      key: "3",
      name: "Morty Smith",
      status: 'Alive',
      species: "Human",
      gender: "Male",
    },
    {
      key: "4",
      name: "Summer Smith",
      status: 'Alive',
      species: "Human",
      gender: "Female",
    },
    
    {
      key: "5",
      name: "Morty Smith",
      status: 'Alive',
      species: "Human",
      gender: "Male",
    },
    {
      key: "6",
      name: "Summer Smith",
      status: 'Alive',
      species: "Human",
      gender: "Female",
    },
    
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Вид",
      dataIndex: "species",
      key: "species",
    },
    {
      title: "Гендер",
      key: "gender",
      dataIndex: "gender",
    },
  ];

  const paginationConfig = {
    pageSize: 3,
    total: tableData.length,
  };

  return (
    <Table columns={columns} dataSource={tableData} pagination={paginationConfig} />
  );
};

export default TestTable;