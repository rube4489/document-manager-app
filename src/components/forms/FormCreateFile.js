import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { userList } from "../../data";

const FormCreateFile = ({ userListAux, setUserListAux, setModal }) => {
  const [documentType, setDocumentType] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const onSubmit = () => {
    const newData = {
      name: "archivo",
      createDate: new Date(),
      documentType: documentType,
      owner: owner,
      link: file,
    };

    setUserListAux([...userListAux, newData]);
    setModal(false);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="typeFile">Tipo</Label>
        <Input
          id="typeFile"
          name="typeFile"
          required
          defaultValue=""
          type="select"
          onChange={(e) => setDocumentType(e.target.value)}
        >
          <option value="" disabled>
            Seleccionar ...
          </option>
          <option value="Público">Público</option>
          <option value="Privado">Privado</option>
          <option value="draft">Draft</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="userList">Propietario</Label>
        <Input
          id="userList"
          name="userList"
          required
          defaultValue=""
          type="select"
          onChange={(e) => setOwner(e.target.value)}
        >
          <option value="" disabled>
            Seleccionar ...
          </option>
          {userList.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Descripción</Label>
        <Input
          onChange={(e) => setDescription(e.target.value)}
          id="exampleText"
          name="text"
          type="textarea"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input
          onChange={(e) => setFile(e.target.value)}
          id="exampleFile"
          name="file"
          type="file"
          required
        />
      </FormGroup>
      <Button
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        type="submit"
      >
        Agregar
      </Button>
    </Form>
  );
};

export default FormCreateFile;
