const addName=(name1) => {
  return {
    type: "ADD_NAMES",
    payload: name1
  };
},
squareClick = (squareId) => {
  return {
    type: "SQUARE_CLICK",
    payload: squareId
  };
};

export default {addName, squareClick};