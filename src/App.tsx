import { Outlet } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state)=> state.counter)

  const handleIncrement = (payload: number)=>{
    dispatch(increment(payload))
  }

  const handleDecrement = (payload: number)=>{
    dispatch(decrement(payload))
  }

  return (
    <>
       {/* <h2>Counter With Redux</h2>
      <Button onClick={()=>handleIncrement(5)}>Increment</Button>
      <div>{count}</div>
      <Button onClick={()=>handleDecrement(5)}>Decrement</Button>

      <ModeToggle></ModeToggle> */}

      <Outlet></Outlet>
    </>
  );
}

export default App;
