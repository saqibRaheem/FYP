const data = {
  loginStatus: false,
  role: null,
  user: null,
};

const Status = (state = data, action) => {
  switch (action.type) {
    case "STATUS":
      return { ...action.payload };
    default:
      return state;
  }
};

export default Status;
