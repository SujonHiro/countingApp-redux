import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setCustom } from "../../redux/slices/CounterSlice";
import { useRef } from "react";

const Counter = () => {
    const myNumber=useRef()
    const counterValue=useSelector((state)=>state.counter.countingValue)
        const dispatch=useDispatch()
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2 className='text-center'>Counter App</h2>
                </div>
                <div className="card-body">
                    <h3 className='text-center mb-5'>{counterValue}</h3>
                    <div className="my-4 mx-auto">
                    <button onClick={()=>dispatch(increment())} className='btn btn-success mx-2'>Plus</button>
                    <button onClick={()=>dispatch(decrement())} className='btn btn-danger'>Minus</button>
                    </div>
                    <div className="my-4">
                        <input ref={myNumber} type="text" className="form-control" />
                        <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className='btn btn-primary mt-2'>Add Number</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Counter;