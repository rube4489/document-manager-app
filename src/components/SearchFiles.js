import {
  faArrowRightRotate,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import { getItems } from "../api/api";

const SearchFiles = ({ setDataList, setMessage }) => {
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

  const clearState = (message) => {
    setNameFile("");
    setOwnerName("");
    setDate("");
    setMessage(message || "");
  };

  const searchFile = async () => {
    if (nameFile) {
      const newData = dataAux?.filter(function (item) {
        const itemData = item.name.toUpperCase();
        const textData = nameFile.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setDataList(newData);
      clearState();
    } else if (ownerName) {
      const newData = dataAux?.filter(function (item) {
        const itemData = item.owner[0].toUpperCase();
        const textData = ownerName.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setDataList(newData);
      clearState();
    } else if (date) {
      const newData = dataAux?.filter(function (item) {
        const itemData = item.creationDate;
        const textData = date;

        return itemData.indexOf(textData) > -1;
      });
      setDataList(newData);
      clearState();
    } else {
      setDataList([]);
      clearState("No se encontraron archivos");
    }
  };

  const reload = async () => {
    const data = await getItems();
    clearState();
    setDataList(data);
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
