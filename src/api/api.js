import {
  collection,
  getDocs,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import db, { storage } from "../firebase/firebaseConfig";
// CREATE
export const createItem = async (obj) => {
  const colRef = collection(db, "documents");
  const data = await addDoc(colRef, obj);
  return data.id;
};

// UPDATE
export const updateItem = async (id, obj) => {
  const colRef = collection(db, "documents");
  await updateDoc(doc(colRef, id), obj);
};

// READ
export const getItems = async () => {
  const colRef = collection(db, "documents");
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};
// DELETE
export const deleteItem = async (id) => {
  const colRef = collection(db, "documents");
  await deleteDoc(doc(colRef, id));
};
const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};
// UPLOAD_FILE TO STORAGE
export const uploadFile = async (file, name) => {
  const storageRef = ref(storage, name);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};
