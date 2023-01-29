const data = {
  allStudents: [],
};

const Students = (state = data, action) => {
  switch (action.type) {
    case "GET_STUDENTS":
      return { ...action.payload };
    default:
      return state;
  }
};

export default Students;
