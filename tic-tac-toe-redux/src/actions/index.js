const addName=(name1) => {
  return {
    type: "ADD_NAMES",
    payload: name1
  };
};

export default {addName};