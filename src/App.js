import React, { useEffect, useState } from "react";
import TableScreen from "./components/TableScreen";
import { getItems } from "./api/api";

const App = () => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getItems();
    setDataList(data);
  };
  return (
    <TableScreen dataList={dataList} setDataList={setDataList} />
  );
};

export default App;
