import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enterName, enterByUser } from './CounterSlice';
const DemoCounter = () => {
  const [firstName, SetFirstName] = useState('');
  const count = useSelector((item) => item.counter1.candidateName);
  const dispatch = useDispatch();
  return (
    <>
      <div>Hellow {count}</div>
      <div>
        <button onClick={() => dispatch(enterName())}>+</button>
      </div>
      <div>
        <input
          type="text"
          value={firstName}
          onChange={(e) => SetFirstName(e.target.value)}
        />
        <button onClick={() => dispatch(enterByUser(firstName))}>Send</button>
      </div>
    </>
  );
};
export default DemoCounter;
