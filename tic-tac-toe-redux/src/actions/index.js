const addName=(name1) => {
  return {
    type: "ADD_NAMES",
    payload: name1
  };
},

addName2=(name2) => {
  return {
    type: "ADD_NAME2",
    payload: name2
  };
},

squareClick = (squareId) => {
  return {
    type: "SQUARE_CLICK",
    payload: squareId
  };
};

export default {addName, addName2, squareClick};