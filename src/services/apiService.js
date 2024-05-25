import Questions from "../components/Admin/Content/Question/Questions";
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

const postCreateNewQuestionForQuiz = (quiz_id, description, questionImage) => {
  const data = new FormData();
  data.append("quiz_id", quiz_id);
  data.append("description", description);
  data.append("questionImage", questionImage);
  return axios.post("api/v1/question", data);
};
const postCreateNewQuestionForQuestion = (
  description,
  correct_answer,
  question_id
) => {
  return axios.post("api/v1/answer", {
    description,
    correct_answer,
    question_id,
  });
};

const postAssignQuiz = (quizId, userId) => {
  return axios.post("api/v1/quiz-assign-to-user", { quizId, userId });
};
const getQuizWithQA = (quizId) => {
  return axios.get(`api/v1/quiz-with-qa/${quizId}`);
};
const postUpsetQA = (data) => {
  return axios.post("api/v1/quiz-upsert-qa", { ...data });
};
const logout = (email, refresh_token) => {
  return axios.post("api/v1/logout", {
    email,
    refresh_token,
  });
};
const getDashBoard = () => {
  return axios.get("api/v1/overview");
};

const postProfile = (username, userImage) => {
  return axios.post("api/v1/profile");
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
export { postCreateNewQuestionForQuiz };
export { postCreateNewQuestionForQuestion };
export { postAssignQuiz };
export { getQuizWithQA };
export { postUpsetQA };
export { logout };
export { getDashBoard };
export { postProfile };
