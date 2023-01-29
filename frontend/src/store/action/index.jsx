const userStatus = (data) => {
  return {
    type: "STATUS",
    payload: data,
  };
};

export const getAllStudents = (data) => {
  return {
    type: "GET_STUDENTS",
    payload: data,
  };
};


export default userStatus;
