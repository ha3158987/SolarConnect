const sortReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_INPUT_VALUE":
      return payload;
    default:
      throw new Error("Unhandled action type");
  }
};

export default sortReducer;
