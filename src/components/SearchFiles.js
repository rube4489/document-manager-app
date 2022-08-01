import {
  faArrowRightRotate,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import { getItems } from "../api/api";

const SearchFiles = ({ setUserListAux, setMessage }) => {
  const [nameFile, setNameFile] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [date, setDate] = useState("");
  const [dataAux, setDataAux] = useState();

  useEffect(() => {
    const getData = async () => {
      const dataAux = await getItems();
      setDataAux(dataAux);
    };
    getData();
  }, []);

  const searchFile = async () => {
    const foundFile = dataAux.filter(
      (file) =>
        file?.name?.toLowerCase() === nameFile?.toLowerCase() ||
        file?.owner[0]?.toLowerCase() === ownerName?.toLowerCase() ||
        file?.creationDate === date
    );
    if (foundFile?.length > 0) {
      setUserListAux(foundFile);
      setNameFile("");
      setOwnerName("");
      setDate("");
    } else {
      setUserListAux([]);
      setNameFile("");
      setOwnerName("");
      setDate("");
      setMessage("No se encontraron archivos");
    }
  };

  const reload = async () => {
    const data = await getItems();
    setMessage("");
    setUserListAux(data);
  };
  return (
    <Form>
      <Row>
        <Col xs={12} lg={3}>
          <FormGroup>
            <Input
              onChange={(e) => setNameFile(e.target.value)}
              placeholder="Nombre del archivo"
              id="name"
              name="name"
              value={nameFile}
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={3}>
          <FormGroup>
            <Input
              placeholder="Nombre del owner"
              id="ownerName"
              name="ownerName"
              onChange={(e) => setOwnerName(e.target.value)}
              value={ownerName}
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg>
          <FormGroup>
            <Input
              onChange={(e) => {
                const dateAux = new Date(e.target.value);
                dateAux.setDate(dateAux.getDate() + 1);
                setDate(dateAux.toLocaleDateString());
              }}
              type="date"
              id="exampleZip"
              name="zip"
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg>
          <Button
            onClick={(e) => {
              e.preventDefault();
              searchFile();
            }}
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch} className="me-2" />
            Buscar
          </Button>
          <Button onClick={() => reload()} className="ms-2">
            <FontAwesomeIcon icon={faArrowRightRotate} />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchFiles;
