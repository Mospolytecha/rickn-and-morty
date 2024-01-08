import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { CharactersService } from "../../services/characters.service";

export interface DataType {
  key: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

const TestTable: React.FC = () => {
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const [curPage, setCurPage] = useState<number>(1);
  const [tableData, setTableData] = useState<object | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CharactersService.getCharactees(curPage);
        if (response.data.info.next === null) {
          setCurPage(response.data.info.pages);
        } else {
          setTableData(response.data.results);
          setTotalPages(response.data.info.pages);
        }
      } catch (error) {
        console.error("Ошибка в получении данных", error);
      }
    };
    fetchData();
  }, [curPage]);
  const handleChangePage = (page: number) => {
    setCurPage(page);
  };
  const handlePreviousPage = () => {
    if (curPage > 1) {
      handleChangePage(curPage - 1);
    }
  };
  const handleNextPage = () => {
    if (curPage < totalPages) {
      handleChangePage(curPage + 1);
    }
  };

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

  return (
    <>
      <Table columns={columns} dataSource={tableData} pagination={false} />
      <Button onClick={handlePreviousPage} disabled={curPage === 1}>
        &lt;
      </Button>
      <span>
        {curPage} стр. из {totalPages}
      </span>
      <Button onClick={handleNextPage} disabled={curPage === totalPages}>
        &gt;
      </Button>
    </>
  )
};

export default TestTable;
