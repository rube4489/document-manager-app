import React, { useEffect, useState } from "react";
import TableScreen from "./components/TableScreen";
import { getItems } from "./api/api";

const App = () => {
  const [userListAux, setUserListAux] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getItems();
    setUserListAux(data);
  };
  return (
    <TableScreen userListAux={userListAux} setUserListAux={setUserListAux} />
  );
};

export default App;
