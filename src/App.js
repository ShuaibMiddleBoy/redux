import { useDispatch, useSelector } from "react-redux";
import { incNum, decNum } from "./actions";
function App() {
  const myState = useSelector((state)=>{
    return state.changeTheNum
  })
  const dispatch = useDispatch();
  return (
    <>
      <h2>Hello redux</h2>
      <button onClick={()=>{dispatch(decNum())}}>-</button>
      <input type="text" value={myState}/>
      <button onClick={()=>{dispatch(incNum())}}>+</button>
      
    </>
  );
}

export default App;
