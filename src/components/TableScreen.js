import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import SearchFiles from "./SearchFiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { fileList, userList } from "../data";

const TableScreen = () => {
  const [userListAux, setUserListAux] = useState(fileList);
  console.log(userListAux);
  return (
    <Container className="mt-5">
      <SearchFiles userListAux={userListAux} setUserListAux={setUserListAux} />
      <Table responsive striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de creación</th>
            <th>Tipo de documento</th>
            <th>Owner del documento</th>
            <th>Archivo</th>
          </tr>
        </thead>
        <tbody>
          {userListAux?.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.createDate.toLocaleDateString()}</td>
              <td>{file.documentType}</td>
              <td>{file.owner}</td>
              <td>
                {
                  <div className="d-flex justify-content-between align-items-center">
                    <a href={file.link} download>
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                    <FontAwesomeIcon icon={faTrash} />
                    <FontAwesomeIcon icon={faEdit} />{" "}
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableScreen;
