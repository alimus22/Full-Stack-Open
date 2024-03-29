import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const create = (newObject) => {
  const request = axios.post(baseURL, newObject);

  return request.then((response) => response.data);
};

const getAll = () => {
  const request = axios.get(baseURL);

  return request.then((response) => response.data);
};

const deleteEntry = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return request.then((response) => response.data);
};

const update = (person) => {
  const request = axios.put(`${baseURL}/${person.id}`, person);
  return request.then((response) => response.data);
};

export default { create, getAll, deleteEntry, update };
