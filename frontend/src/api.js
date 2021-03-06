import axios from "axios";

export const login = (credentials) =>
  axios.post("/api/users/login", credentials);

export const getUser = () => axios.get("/api/users/me");

export const getUsers = () => axios.get("/api/users").then((res) => res.data);

export const shareJob = (payload) => axios.post("/api/jobs/shared", payload);

export const sessionLogout = () => axios.post("/api/users/logout");

export const getMessages = () =>
  axios.get("/api/messages").then((res) => res.data);

export const uploadResume = (payload) => axios.post("/api/resume", payload);

export const getResume = () =>
  axios.get("/api/resume/view").then((res) => res.data);
export const register = (payload) => axios.post("/api/users/register", payload);

export const getSavedJobs = () =>
  axios.get("/api/jobs/saved").then((res) => res.data);

export const removeSavedJobs = (data) =>
  axios.post("/api/jobs/saved/delete/" + data).then((res) => res.data);

export const registerUser = (payload) =>
  axios.post("/api/users/register", payload);

export const addSavedJob = (payload) => axios.post("/api/jobs/saved", payload);

export const removeSavedJob = (data) =>
  axios.post("/api/jobs/delete/" + data).then((res) => res.data);

export const jobSearch = ({
  employmentTypes,
  numPages = 2,
  page = 1,
  query,
  radius,
  remoteJobsOnly = false,
  date_posted = "month",
}) => {
  const baseUrl = "https://google-jobs-search.p.rapidapi.com/search";
  const currentEmploymentTypes = ["", "ALL"].includes(employmentTypes)
    ? false
    : employmentTypes;
  const currentRadius =
    parseInt(radius, 10) <= 0 ? false : parseInt(radius, 10);
  const options = {
    params: {
      ...(currentEmploymentTypes && {
        employment_types: currentEmploymentTypes,
      }),
      num_pages: numPages,
      page,
      query,
      ...(currentRadius && { radius: currentRadius }),
      remote_jobs_only: remoteJobsOnly,
      date_posted,
    },
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "9b4878deadmshab8f24e28e4474cp1d3286jsn25bd1555dd6d",
      "X-RapidAPI-Host": "google-jobs-search.p.rapidapi.com",
    },
  };

  return axios
    .get(baseUrl, options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const salarySearch = ({ job_title, location }) => {
  const baseUrl = "https://google-jobs-search.p.rapidapi.com/typical-salary";
  const options = {
    params: {
      job_title,
      location,
    },
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "9b4878deadmshab8f24e28e4474cp1d3286jsn25bd1555dd6d",
      "X-RapidAPI-Host": "google-jobs-search.p.rapidapi.com",
    },
  };

  return axios
    .get(baseUrl, options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
