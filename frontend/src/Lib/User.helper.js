import { toast } from "react-toastify";
import axios from "axios";
import url from "../Baseurl/Baseurl";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export const signup = async (
  stdId,
  uname,
  password,
  email,
  role,
  setLoading,
  resetForm,
  history
) => {
  try {
    setLoading(true);
    const res = await axios({
      method: "POST",
      url: url + "/signup",
      data: {
        uname: uname,
        role: role,
        stdId: stdId,
        password: password,
        email: email,
        allow: true,
      },
    });
    toast.success(res?.data);
    history.push("/login");
    setLoading(false);
    resetForm();
  } catch (e) {
    toast.error(e?.response?.data);
    setLoading(false);
  }
};
export const login = async (
  password,
  email,
  setLoading,
  resetForm,
  history,
  dispatch,
  userStatus
) => {
  try {
    setLoading(true);
    const res = await axios({
      method: "POST",
      url: url + "/login",
      data: {
        email: email,
        password: password,
      },
      withCredentials: true,
    });
    dispatch(
      userStatus({
        loginStatus: true,
        role: res.data.data.role,
        user: res.data.data,
      })
    );
    history.push("/profile");
    setLoading(false);
    resetForm();
  } catch (e) {
    toast.error(e?.response?.data);
    setLoading(false);
  }
};

export const userProfile = async (dispatch, userStatus) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/profile",
      withCredentials: true,
    });
    dispatch(
      userStatus({
        loginStatus: true,
        role: res.data.profile.role,
        user: res.data.profile,
      })
    );
  } catch (e) {
    console.log(e?.response?.data);
  }
};
export const logout = async (dispatch, userStatus, history) => {
  try {
    const res = await axios({
      method: "POST",
      url: url + "/logout",
      withCredentials: true,
    });
    dispatch(
      userStatus({
        loginStatus: false,
        role: null,
        user: null,
      })
    );
    history.push("/login");
  } catch (e) {
    console.log(e?.response?.data);
  }
};

export const changePassword = async (
  oldPassword,
  newPassword,
  setLoader,
  resetForm
) => {
  try {
    setLoader(true);
    const res = await axios({
      method: "POST",
      url: url + "/changePassword",
      data: {
        newPassword,
        oldPassword,
      },
      withCredentials: true,
    });
    setLoader(false);
    toast.success(res.data);
    resetForm();
  } catch (e) {
    setLoader(false);
    console.log(e?.response?.data);
    toast.error(e?.response?.data);
  }
};
export const updateProfilePic = async (profilePic) => {
  try {
    const res = await axios({
      method: "POST",
      url: url + "/updateProfilePic",
      data: {
        profilePic,
      },
      withCredentials: true,
    });
    toast.success(res.data);
  } catch (e) {
    console.log(e?.response?.data);
    toast.error(e?.response?.data);
  }
};
export const editprofile = async (
  values,
  setLoading,
  resetForm,
  user,
  gender,
  education,
  degree_program,
  tworkingexp,
  editorState,
  draftToHtml,
  convertToRaw
) => {
  try {
    setLoading(true);
    const res = await axios({
      method: "POST",
      url: url + "/userupdate",
      data: {
        id: user,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
        facebook: values.facebook,
        linkedin: values.linkedin,
        google: values.google,
        twitter: values.twitter,
        dob: values.date,
        professionaltitle: values.professionaltitle,
        address: values.address,
        school_educ: values.school_educ,
        inter_educ: values.inter_educ,
        gender: gender,
        tworkingexp: tworkingexp,
        cgpa: parseInt(values.cgpa),
        education: education,
        degree_program: degree_program,
        bio: values.bio,
        age: values.age,
        mgrade: values.mgrade,
        igrade: values.igrade,
        stdId: values.stdId,
        skills: values.skills,
        work_exp: JSON.stringify(
          draftToHtml(convertToRaw(editorState.getCurrentContent()))
        ),
      },
      withCredentials: true,
    });
    toast.success("Profile updated successfully");
    resetForm();
    setLoading(false);
  } catch (e) {
    toast.error(e?.response?.data);
    setLoading(false);
  }
};

export const editcomprofile = async (
  values,
  setLoading,
  resetForm,
  user,
  editorState,
  employeesno,
  category,
  workingtime,
  draftToHtml,
  convertToRaw
) => {
  try {
    setLoading(true);
    const res = await axios({
      method: "POST",
      url: url + "/userupdate",
      data: {
        id: user,
        email: values.email,
        phone: values.phone,
        facebook: values.facebook,
        linkedin: values.linkedin,
        google: values.google,
        twitter: values.twitter,
        address: values.address,
        website: values.website,
        companyname: values.companyname,
        ownername: values.ownername,
        tagline: values.tagline,
        dob: values.date,
        employeesno: employeesno,
        category: category,
        workingtime: workingtime,
        aboutcompany: JSON.stringify(
          draftToHtml(convertToRaw(editorState.getCurrentContent()))
        ),
      },
      withCredentials: true,
    });
    toast.success("Profile updated successfully");
    resetForm();
    setLoading(false);
  } catch (e) {
    toast.error(e?.response?.data);
    setLoading(false);
  }
};

export const postJob = async (
  values,
  companyname,
  profilePic,
  email,
  address,
  website,
  phone,
  id,
  tworkingexp,
  education,
  jobType,
  editorState,
  resetForm,
  setLoading,
  category
) => {
  try {
    setLoading(true);
    const res = await axios({
      method: "POST",
      url: url + "/postjob",
      data: {
        email: email,
        title: values.skills,
        img: profilePic,
        compname: companyname,
        description: values.description,
        skills: values.skills,
        website: website,
        experience: tworkingexp,
        contact: phone,
        jobtype: jobType,
        compid: id,
        novacancy: values.noVacancy,
        address: address,
        salaryRange: values.salaryRange,
        education: education,
        responsibilities: JSON.stringify(
          draftToHtml(convertToRaw(editorState.getCurrentContent()))
        ),
        allow: true,
        category: category,
      },
      withCredentials: true,
    });
    toast.success("Job created successfully");
    resetForm();
    setLoading(false);
  } catch (e) {
    console.log(e?.response?.data.err);
    toast.error(e?.response?.data.err);
    setLoading(false);
  }
};

export const getAllJobs = async (setJobs, setLoading) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/getAllJobs",
      withCredentials: true,
    });
    setJobs(res.data);
    setLoading(false);
  } catch (e) {
    console.log(e?.response?.data.err);
    toast.error(e?.response?.data.err);
  }
};

export const getJobById = async (id, setJob, setLoading) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/getJobById/" + id,
      withCredentials: true,
    });
    setJob(res.data);
    setLoading(false);
  } catch (e) {
    toast.error(e?.response?.data.err);
  }
};

export const getJob = async (setJob, id, setLoading) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/getJob/" + id,
      withCredentials: true,
    });
    setJob(res.data.data);
    setLoading(false);
  } catch (e) {
    toast.error(e?.response?.data.err);
  }
};

export const getJobByLimit = async (setJob, setLoading) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/getJobByLimit",
      withCredentials: true,
    });
    setJob(res.data);
    setLoading(false);
  } catch (e) {
    toast.error(e?.response?.data.err);
  }
};

export const getStudentById = async (id, setStudent, setLoading) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/getStudentById/" + id,
      withCredentials: true,
    });
    setStudent(res.data);
    setLoading(false);
  } catch (e) {
    toast.error(e?.response?.data.err);
  }
};

export const applyJob = async (jobId, userId, handleClose) => {
  try {
    const res = await axios({
      method: "POST",
      data: {
        jobId,
        userId,
      },
      url: url + "/applyForJob",
      withCredentials: true,
    });
    handleClose();
  } catch (e) {
    console.log(e?.response?.data.err);
    toast.error(e?.response?.data.err);
  }
};

export const getusers = async (
  role,
  setUser,
  setLoading,
  dispatch,
  getAllStudents
) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/getuserdata/" + role,
      withCredentials: true,
    });
    if (setUser) {
      setUser(res.data);
    } else {
      dispatch(
        getAllStudents({
          allStudents: res.data,
        })
      );
    }

    setLoading(false);
  } catch (e) {
    toast.error(e?.response?.data.err);
  }
};

export const blockJob = async (jobId, isBlock) => {
  try {
    const res = await axios({
      method: "POST",
      data: {
        jobId,
        isBlock,
      },
      url: url + "/blockJob",
      withCredentials: true,
    });
    toast.success(`successfully ${isBlock ? "block" : "unblock"} `);
  } catch (e) {
    console.log(e?.response?.data.err);
    toast.error(e?.response?.data.err);
  }
};
export const blockUser = async (userId, isBlock) => {
  try {
    const res = await axios({
      method: "POST",
      data: {
        userId,
        isBlock,
      },
      url: url + "/blockUser",
      withCredentials: true,
    });
    toast.success(`successfully ${isBlock ? "block" : "unblock"} `);
  } catch (e) {
    console.log(e?.response?.data.err);
    toast.error(e?.response?.data.err);
  }
};

export const contactUs = async (
  email,
  name,
  message,
  setLoading,
  resetForm
) => {
  setLoading(true);
  try {
    const res = await axios({
      method: "POST",
      data: {
        email,
        name,
        message,
      },
      url: url + "/contactUs",
      withCredentials: true,
    });
    setLoading(false);
    toast.success(res.data);
    resetForm();
  } catch (e) {
    console.log(e?.response?.data.err);
    setLoading(false);
  }
};

export const getJobsLenght = async (setJobsCount) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/getJobsLenght",
      withCredentials: true,
    });
    console.log("res", res);
    setJobsCount(res.data.count);
  } catch (e) {
    console.log(e?.response?.data.err);
  }
};

export const getStudentsLenght = async (setStudentsCount) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/getStudentsLenght",
      withCredentials: true,
    });
    console.log("res", res);
    setStudentsCount(res.data.count);
  } catch (e) {
    console.log(e?.response?.data.err);
  }
};

export const getCompaniesLenght = async (setCompaniesCount) => {
  try {
    const res = await axios({
      method: "GET",
      url: url + "/getCompaniesLenght",
      withCredentials: true,
    });
    console.log("res", res);
    setCompaniesCount(res.data.count);
  } catch (e) {
    console.log(e?.response?.data.err);
  }
};
