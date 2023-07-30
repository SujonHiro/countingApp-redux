import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slices/CounterSlice";

const Counter = () => {
    const counterValue=useSelector((state)=>state.counter.countingValue)
        const dispatch=useDispatch()
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2 className='text-center'>Counter App</h2>
                </div>
                <div className="card-body mx-auto">
                    <h3 className='text-center mb-5'>{counterValue}</h3>
                    <button onClick={()=>dispatch(increment())} className='btn btn-success mx-2'>Plus</button>
                    <button onClick={()=>dispatch(decrement())} className='btn btn-danger'>Minus</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;