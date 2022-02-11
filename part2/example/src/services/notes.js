import axios from "axios";
const baseURL = "http://localhost:3001/notes";

const getAll = () => {
  const request = axios.get(baseURL);
  const nonExisting = {
    id: 3000,
    content: "This note is not saved to server",
    date: "2022-02-11T12:14:00.098Z",
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
};

const create = (newObject) => {
  const request = axios.put(baseURL, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
