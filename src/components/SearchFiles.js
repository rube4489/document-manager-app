import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import CreateFileModal from "./CreateFileModal";

const SearchFiles = ({ userListAux, setUserListAux }) => {
  return (
    <Form>
      <Row>
        <Col xs={12} lg={3}>
          <FormGroup>
            <Input placeholder="Nombre del archivo" id="name" name="name" />
          </FormGroup>
        </Col>
        <Col xs={12} lg={3}>
          <FormGroup>
            <Input
              placeholder="Nombre del creador del archivo"
              id="ownerName"
              name="ownerName"
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg>
          <FormGroup>
            <Input type="date" id="exampleZip" name="zip" />
          </FormGroup>
        </Col>
        <Col xs={12} lg>
          <Button>
            <FontAwesomeIcon icon={faSearch} className="me-2" />
            Buscar
          </Button>
        </Col>
        <Col xs={12} lg>
          <div className="d-flex justify-content-end mt-sm-0 mt-3">
            <CreateFileModal
              userListAux={userListAux}
              setUserListAux={setUserListAux}
            />
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchFiles;
