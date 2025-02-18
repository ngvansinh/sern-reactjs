import axios from "../axios";

const handleLoginApi = async (userEmail, userPassword) => {
  return await axios.post("/api/login", {
    email: userEmail,
    password: userPassword,
  });
};
const getAllUsers = (inputId) => {
  //template string
  return axios.get(`/api/get-all-users?id=${inputId}`, {
    id: inputId,
  });
};
export { handleLoginApi ,getAllUsers};
 