import { ColumnsType } from "antd/es/table";

export interface DataType {
    key: string;
    name: string;
    status: string;
    species: string;
    gender: string;
  }

export const columns: ColumnsType<DataType> = [
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