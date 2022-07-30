import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormCreateFile from "./forms/FormCreateFile";

const CreateFile = ({ userListAux, setUserListAux }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <Button color="primary" onClick={toggle}>
        <FontAwesomeIcon icon={faAdd} className="me-2" />
        Agregar archivo
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Archivo</ModalHeader>
        <ModalBody>
          <FormCreateFile
            setModal={setModal}
            userListAux={userListAux}
            setUserListAux={setUserListAux}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cerrar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateFile;
