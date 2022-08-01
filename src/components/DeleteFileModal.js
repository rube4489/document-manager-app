import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";
import { deleteItem, getItems } from "../api/api";

const DeleteFileModal = ({ fileSelected, setDataList }) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle = () => setModal(!modal);

  const deleteFile = async () => {
    setLoading(true);
    try {
      await deleteItem(fileSelected.id);
      const newData = await getItems();
      setDataList(newData);
      toggle();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Button outline size="sm" color="secondary" onClick={toggle}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader></ModalHeader>
        <ModalBody>{`¿ Desea elimimar ${fileSelected.name} ?`}</ModalBody>
        <ModalFooter>
          {loading && (
            <Button disabled color="danger">
              <Spinner size="sm"></Spinner>
            </Button>
          )}
          {!loading && (
            <Button color="danger" onClick={deleteFile}>
              Eliminar
            </Button>
          )}
          <Button color="primary" onClick={toggle}>
            Cancelar
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteFileModal;
