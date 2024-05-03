import axios from "../utils/axiosCustomize";

const postCreateUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};
const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};
const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};
const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (userEmail, userPassword) => {
  return axios.post("api/v1/login", {
    email: userEmail,
    password: userPassword,
  });
};

const postRegister = (email, username, password) => {
  return axios.post("api/v1/register", { email, username, password });
};

const getQuizByUser = () => {
  return axios.get("api/v1/quiz-by-participant");
};

const getDataQuiz = (id) => {
  return axios.get(`api/v1/questions-by-quiz?quizId=${id}`);
};
const postSubmitQuiz = (data) => {
  console.log("check data >><", { ...data });
  return axios.post(`api/v1/quiz-submit`, { ...data });
};
const postCreatNewQuiz = (description, name, difficulty, quizImage) => {
  const data = new FormData();
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", quizImage);
  return axios.post(`api/v1/quiz`, data);
};
const getAllQuizForAdmin = () => {
  return axios.get(`api/v1/quiz/all`);
};

const deleteQuiz = (id) => {
  return axios.delete(`api/v1/quiz/${id}`);
};
const putUpdateQuiz = (name, description, difficulty) => {
  const data = new FormData();
  data.append("name", name);
  data.append("descript", description);
  data.append("difficulty", difficulty);
  return axios.put("api/v1/participant", data);
};

export { postCreateUser };
export { getAllUsers };
export { putUpdateUser };
export { deleteUser };
export { getUserWithPaginate };
export { postLogin };
export { postRegister };
export { getQuizByUser };
export { getDataQuiz };
export { postSubmitQuiz };
export { postCreatNewQuiz };
export { getAllQuizForAdmin };
export { deleteQuiz };
export { putUpdateQuiz };
