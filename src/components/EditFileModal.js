import React, { useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormCreateFile from "./forms/FormCreateAndEditFile";
import { getItems, updateItem } from "../api/api";

const EditFileModal = ({ file, setUserListAux }) => {
  const [modal, setModal] = useState(false);
  const [fileType, setFileType] = useState(file?.type || "");
  const [owner, setOwner] = useState(file?.owner || []);
  const [description, setDescription] = useState(file?.description || "");
  const [urlFile, setUrlFile] = useState(file?.name || "");
  const [loading, setLoading] = useState(false);
  const [showFile, setShowFile] = useState(false);
  const toggle = () => {
    setModal(!modal);
    setShowFile(false);
  };

  const updateList = async (e) => {
    if (fileType && owner && urlFile) {
      setLoading(true);
      e.preventDefault();

      try {
        await updateItem(file.id, {
          documentType: fileType,
          owner: owner,
          description: description,
          name: urlFile?.name || file.name,
        });

        const data = await getItems();
        setUserListAux(data);
        setLoading(false);
        toggle();
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <>
      <Button outline size="sm" color="secondary" onClick={toggle}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar archivo</ModalHeader>
        <ModalBody>
          <FormCreateFile
            fileType={fileType}
            owner={owner}
            description={description}
            urlFile={file.name}
            setFileType={setFileType}
            setOwner={setOwner}
            setUrlFile={setUrlFile}
            setDescription={setDescription}
            setUserListAux={setUserListAux}
            updateList={updateList}
            toggle={toggle}
            loading={loading}
            setShowFile={setShowFile}
            showFile={showFile}
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
};

export default EditFileModal;
