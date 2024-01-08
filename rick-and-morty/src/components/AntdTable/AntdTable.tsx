import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { CharactersService } from "../../services/characters.service";
import { columns } from "./columns";



const TestTable: React.FC = () => {
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const [curPage, setCurPage] = useState<number>(1);
  const [tableData, setTableData] = useState<object | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await CharactersService.getCharactees(curPage);
        if (data.info.next === null) {
          setCurPage(data.info.pages);
        } else {
          setTableData(data.results);
          setTotalPages(data.info.pages);
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
  );
};

export default TestTable;
