const SquareData = (state = {
  currentSymbol:"X",
  Winner:'',
  squares : [
    {id:0,
    symbol:''
  },
  {
    id:1,
  symbol:''
},{
  id:2,
  symbol:''
},{
  id:3,
  symbol:''
},{
  id:4,
  symbol:''
},{
  id:5,
  symbol:''
},{
  id:6,
  symbol:''
},{
  id:7,
  symbol:''
},{
  id:8,
  symbol:''
}
  ]
},action) => {
  let newState;
  switch(action.type){
    case 'SQUARE_CLICK':
    newState = Object.assign({}, state);
    if(newState.currentSymbol === "X"){
      newState.currentSymbol = "O";
    }else{
      newState.currentSymbol = "X";
    };
    newState.squares[action.paylaod].symbol = newState.currentSymbol;
    return newState;
    default:
    return state;
  }
}

export default SquareData;
