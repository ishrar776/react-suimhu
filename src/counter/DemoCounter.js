import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, enterByUser } from './CounterSlice';
const DemoCounter = () => {
  const [firstName, SetFirstName] = useState('');
  const displayMessage = useSelector((item) => item.counter1.candidateName);
  const dispatch = useDispatch();
  const clearAll = (e) => {
    dispatch(reset());
    SetFirstName('');
  };
  return (
    <>
      <div>Hellow {displayMessage}</div>
      <div>
        <input
          type="text"
          value={firstName}
          onChange={(e) => SetFirstName(e.target.value)}
        />
        <button onClick={() => dispatch(enterByUser(firstName))}>Send</button>
        <button onClick={clearAll}>Reset</button>
      </div>
    </>
  );
};
export default DemoCounter;
