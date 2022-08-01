import React from "react";
import {
  Badge,
  Button,
  CloseButton,
  Form,
  FormGroup,
  Input,
  Label,
  ModalFooter,
  Spinner,
} from "reactstrap";
import { userList } from "../../data";

const FormCreateFile = (props) => {
  const {
    fileType,
    owner,
    description,
    toggle,
    onSubmit,
    updateList,
    urlFile,
    setOwner,
    setFileType,
    setDescription,
    setUrlFile,
    add,
    loading,
    showFile,
    setShowFile,
  } = props;

  const deleteUser = (user) => {
    const newList = owner?.filter((ow) => ow !== user);
    setOwner(newList);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="typeFile">Tipo</Label>
        <Input
          id="typeFile"
          name="typeFile"
          required
          value={fileType}
          type="select"
          onChange={(e) => setFileType(e.target.value)}
        >
          <option value="" disabled>
            Seleccionar ...
          </option>
          <option value="Publico">Público</option>
          <option value="Privado">Privado</option>
          <option value="Draft">Draft</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="userList">Propietario</Label>
        <Input
          id="userList"
          name="userList"
          type="select"
          onChange={(e) => {
            if (owner?.length > 0) {
              if (!owner?.includes(e.target.value)) {
                setOwner((ow) => [...ow, e.target.value]);
              }
            } else {
              setOwner([e.target.value]);
            }
          }}
          value=""
          required
        >
          <option value="" disabled>
            Seleccionar ...
          </option>
          {userList?.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      {owner?.length > 0 &&
        owner?.map((ow, i) => (
          <Badge key={i} className="m-2 ps-3 p-2" pill>
            {ow}{" "}
            <CloseButton
              onClick={() => {
                deleteUser(ow);
              }}
              className="ms-2"
              variant="white"
            />
          </Badge>
        ))}
      <FormGroup>
        <Label for="exampleText">Descripción</Label>
        <Input
          onChange={(e) => setDescription(e.target.value)}
          id="exampleText"
          name="text"
          type="textarea"
          value={description}
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleFile">Archivo</Label>
        {showFile && (
          <Input
            onChange={(e) => {
              setUrlFile(e.target.files[0]);
            }}
            id="exampleFile"
            name="file"
            type="file"
            defaultValue={urlFile.name}
            required
          />
        )}
        {!showFile && (
          <div>
            <Badge className="  mb-3 ps-3 pe-3 pt-2 pb-2">
              {urlFile}
              <CloseButton
                onClick={() => {
                  console.log("click");
                  setShowFile(true);
                }}
                className="ms-4"
                variant="white"
              />
            </Badge>
          </div>
        )}
      </FormGroup>

      <ModalFooter>
        {add ? (
          <>
            {" "}
            <Button color="secondary" onClick={toggle}>
              Cancelar
            </Button>
            {!loading && (
              <Button
                type="submit"
                color="primary"
                onClick={(e) => onSubmit(e)}
              >
                Agregar
              </Button>
            )}
            {loading && (
              <Button color="primary" disabled>
                <Spinner size="sm"></Spinner>
              </Button>
            )}
          </>
        ) : (
          <>
            {" "}
            <Button color="secondary" onClick={toggle}>
              Cancelar
            </Button>
            {!loading && (
              <Button
                type="submit"
                color="primary"
                onClick={(e) => updateList(e)}
              >
                Guardar
              </Button>
            )}
            {loading && (
              <Button color="primary" disabled>
                <Spinner size="sm"></Spinner>
              </Button>
            )}
          </>
        )}
      </ModalFooter>
    </Form>
  );
};

export default FormCreateFile;
