import React, { useState } from "react";
import { Alert, Button, Col, Container, Row, Table } from "reactstrap";
import SearchFiles from "./SearchFiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import DeleteFileModal from "./DeleteFileModal";
import CreateFileModal from "./CreateFileModal";
import EditFileModal from "./EditFileModal";

const TableScreen = ({ userListAux, setUserListAux }) => {
  const [message, setMessage] = useState("");

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} lg={9}>
          <SearchFiles
            setMessage={setMessage}
            userListAux={userListAux}
            setUserListAux={setUserListAux}
          />
        </Col>
        <Col xs={12} lg={3}>
          <div className="d-flex justify-content-end mt-sm-0 mt-3">
            <CreateFileModal
              add={true}
              userListAux={userListAux}
              setUserListAux={setUserListAux}
            />
          </div>
        </Col>
      </Row>

      <Table responsive striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de creación</th>
            <th>Tipo de documento</th>
            <th>Owner</th>
            <th>Descripción</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userListAux?.length > 0 &&
            userListAux?.map((file, index) => (
              <tr key={index}>
                <td>{file.name}</td>
                <td>{file.creationDate}</td>
                <td>{file.type}</td>
                <td style={{ maxWidth: "200px" }}>
                  {" "}
                  <div
                    style={{
                      overflow: "auto",
                      height: "auto",

                      maxHeight: "80px",
                    }}
                  >
                    {file.owner.join(", ")}
                  </div>{" "}
                </td>
                <td style={{ maxWidth: "180px" }}>
                  <div
                    style={{
                      overflow: "auto",
                      height: "auto",

                      maxHeight: "80px",
                    }}
                  >
                    {file.description}
                  </div>
                </td>
                <td>
                  {
                    <div className="d-flex justify-content-around align-items-center">
                      <Button outline size="sm" color="secondary">
                        <a
                          style={{ color: "inherit" }}
                          target="blank"
                          href={file.linkDownload}
                          download
                        >
                          <FontAwesomeIcon icon={faDownload} />
                        </a>
                      </Button>
                      <DeleteFileModal
                        userListAux={userListAux}
                        fileSelected={file}
                        setUserListAux={setUserListAux}
                      />
                      <EditFileModal
                        setUserListAux={setUserListAux}
                        file={file}
                        userListAux={userListAux}
                      />
                    </div>
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {(userListAux.length === 0 || message) && (
        <Alert color="secondary">
          {message || "Sin archivos cargados. ¡Carga uno nuevo !"}
        </Alert>
      )}
    </Container>
  );
};

export default TableScreen;
