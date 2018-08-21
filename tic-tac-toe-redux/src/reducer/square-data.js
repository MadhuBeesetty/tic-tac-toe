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
},
{
  id:2,
  symbol:''
},
{
  id:3,
  symbol:''
},
{
  id:4,
  symbol:''
},
{
  id:5,
  symbol:''
},
{
  id:6,
  symbol:''
},
{
  id:7,
  symbol:''
},
{
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
    newState.squares[action.payload].symbol = newState.currentSymbol;
    
    var arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      for(var i = 0; i< arr.length; i++){
        console.log(newState.squares[arr[i][0]].symbol,i,newState.squares[arr[i][1]].symbol,i,newState.squares[arr[i][2]].symbol,i);
        if(newState.squares[arr[i][0]].symbol === newState.squares[arr[i][1]].symbol && newState.squares[arr[i][1]].symbol === newState.squares[arr[i][2]].symbol){
          newState.Winner = newState.squares[arr[i][0]].symbol;
        }
      }
    return newState;

    default:
    return state;
  }
}

export default SquareData;
