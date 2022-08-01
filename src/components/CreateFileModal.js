import React, { useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import FormCreateFile from "./forms/FormCreateAndEditFile";
import { createItem, getItems, updateItem, uploadFile } from "../api/api";

const CreateFile = ({ setDataList }) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileType, setFileType] = useState("");
  const [owner, setOwner] = useState([]);
  const [description, setDescription] = useState("");
  const [urlFile, setUrlFile] = useState("");

  const toggle = () => setModal(!modal);

  const onSubmit = async (e) => {
    if (fileType && owner && urlFile) {
      setLoading(true);
      e.preventDefault();

      try {
        const newFile = await createItem({
          _id: Math.random().toString(16).slice(2),
          name: urlFile.name,
          creationDate: new Date().toLocaleDateString(),
          type: fileType,
          owner: owner,
          description: description,
          linkDownload: "",
        });

        const url = await uploadFile(urlFile, urlFile.name);

        await updateItem(newFile, { linkDownload: url });

        const data = await getItems();
        setDataList(data);
        setDescription("");
        setFileType("");
        setOwner("");
        setUrlFile("");
        setModal(false);
        setLoading(false);
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    }
  };
  return (
    <>
      <Button color={"primary"} onClick={toggle}>
        <FontAwesomeIcon icon={faAdd} className="me-2" />
        Agregar archivo
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Archivo</ModalHeader>
        <ModalBody>
          <FormCreateFile
            fileType={fileType}
            owner={owner}
            description={description}
            urlFile={urlFile}
            setFileType={setFileType}
            setOwner={setOwner}
            setUrlFile={setUrlFile}
            setDescription={setDescription}
            toggle={toggle}
            onSubmit={onSubmit}
            add={true}
            loading={loading}
            showFile={true}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreateFile;
