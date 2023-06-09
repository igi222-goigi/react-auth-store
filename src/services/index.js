import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER,
});

export const login = async (formdata) => {
  try {
    const { data } = await api.post("/api/auth/userlogin", formdata);
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

// export const signup = async ({ name, email, password }) => {
//   try {
//     const { data } = await api.post("/user/signup", { name, email, password });
//     return data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };
