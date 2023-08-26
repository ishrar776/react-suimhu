import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enterName } from './CounterSlice';
const DemoCounter = () => {
  const count = useSelector((item) => item.counter1.candidateName);
  const dispatch = useDispatch();
  return (
    <>
      <div>Hellow {count}</div>
      <div>
        <button onClick={() => dispatch(enterName())}>+</button>
      </div>
    </>
  );
};
export default DemoCounter;
