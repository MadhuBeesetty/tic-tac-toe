const Names = (state = {
    text: '',
    Player1 : {
         Name :'',
         Symbol :'X'
        },
    Player2 : {
         Name :'',
         Symbol :'O'
        }
}, action) => {
  let newState;
  switch (action.type){
    case 'ADD_NAMES':
    newState = Object.assign({}, state);
    newState.Player1.Name = action.payload;
    return newState;
    default:
    return state;
    }
}

export default Names;